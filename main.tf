terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.73.0"
    }
    vercel = {
      source  = "vercel/vercel"
      version = "~> 2.1.0"
    }
		random = {
			source = "hashicorp/random"
			version = "~> 3.6.3"
		}
  }
  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "us-east-1"
}

variable "project_name" {
	type = string
}
	
variable "project_domain" {
	type = string
}

variable "project_repo" {
	type = string
}

variable "google_client_id" {
	type = string
}

variable "google_client_secret" {
	type = string
}
	
variable "email_host" {
	type = string
}

variable "email_user" {
	type = string
}

variable "email_password" {
	type = string
}

variable "nmi_security_key" {
	type = string
}

variable "next_public_use_analytics" {
  type = bool
}

variable "next_public_project_name" {
  type = string
}

variable "next_public_lead_cookie" {
  type = string
}

variable "next_public_cart_cookie" {
  type = string
}

variable "fb_access_token" {
  type = string
}

variable "fb_test_code" {
  type = string
}

variable "next_public_fb_pixel_id" {
  type = string 
}

variable "next_public_ga_tracking_id" {
  type = string
}

variable "next_public_posthog_key" {
  type = string
}

variable "next_public_posthog_host" {
  type = string 
}

variable "vercel_team_id" {
  type = string
}

variable "s3_bucket_name" {
  type = string
}

resource "random_password" "main_db_password" {
  length           = 32
  special          = false
}

resource "aws_security_group" "main" {
  name_prefix = "${var.project_name}-main"
  ingress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  tags = {
    Project = var.project_name
  }
}

resource "aws_s3_bucket" "media" {
  bucket = "${var.project_name}-ac-media"
	tags = {
    Project = var.project_name
  }
}

resource "aws_s3_bucket_public_access_block" "media_public_access" {
  bucket = aws_s3_bucket.media.id
  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "media_public_access" {
  bucket = aws_s3_bucket.media.id
  policy = data.aws_iam_policy_document.public_access.json
}

data "aws_iam_policy_document" "public_access" {
  statement {
		sid = "PublicReadGetObject"
		actions = [ "s3:GetObject" ]
    resources = [
      aws_s3_bucket.media.arn,
      "${aws_s3_bucket.media.arn}/*",
    ]
		principals {
      type        = "AWS"
      identifiers = ["*"]
    }
  }
}

resource "aws_iam_user" "s3_admin_user" {
  name = "${var.project_name}-ac-s3-admin-user"
}

resource "aws_iam_access_key" "s3_admin_user_key" {
  user = aws_iam_user.s3_admin_user.name
}

resource "aws_iam_user_policy" "s3_crud_policy" {
  name = "s3-crud-policy"
  user = aws_iam_user.s3_admin_user.name

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "s3:GetObject",
          "s3:PutObject",
          "s3:DeleteObject",
          "s3:ListBucket"
        ]
        Effect = "Allow"
        Resource = [
          "${aws_s3_bucket.media.arn}",
          "${aws_s3_bucket.media.arn}/*"
        ]
      }
    ]
  })
}

locals {
  cloudfront_url = "https://${aws_cloudfront_distribution.media_cdn.domain_name}"
  minio_endpoint = "https://${aws_s3_bucket.media.bucket_regional_domain_name}"
  s3_origin_id = "${aws_s3_bucket.media.bucket}-origin"
	database_url = "postgresql://${aws_db_instance.main.username}:${aws_db_instance.main.password}@${aws_db_instance.main.endpoint}/${aws_db_instance.main.db_name}"
}

resource "aws_db_instance" "main" {
  identifier = "${var.project_name}-main"
  allocated_storage            = 10
  db_name                      = var.project_name
  engine                       = "postgres"
  instance_class               = "db.t3.micro"
  username                     = "postgres"
  password                     = random_password.main_db_password.result
  backup_retention_period      = 30
  publicly_accessible = true
  performance_insights_enabled = true
  skip_final_snapshot = true
  vpc_security_group_ids = [aws_security_group.main.id]

  depends_on = [aws_s3_bucket.media]

  tags = {
    Project = var.project_name
  }
  provisioner "local-exec" {
    command = <<-EOT
      export MINIO_ENDPOINT="${local.minio_endpoint}" 
      export DATABASE_URL="postgresql://${self.username}:${random_password.main_db_password.result}@${self.endpoint}/${self.db_name}"
      npx prisma db push
      npx prisma db seed
    EOT
    when = create
  }
}

resource "aws_cloudfront_origin_access_control" "media_cdn" {
  name                              = "${var.project_name}-media"
  description                       = "Acces control for ${var.project_name} media cdn"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "media_cdn" {
  origin {
    domain_name              = aws_s3_bucket.media.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.media_cdn.id
    origin_id                = local.s3_origin_id
  }
	
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  price_class         = "PriceClass_All"

  default_cache_behavior {
    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = local.s3_origin_id
    viewer_protocol_policy = "allow-all"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

	restrictions {
		geo_restriction {
			restriction_type = "none"
		}
	}

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  tags = {
    Project     = var.project_name
  }
}

resource "random_password" "nextauth_secret" {
  length           = 42
  special          = false
}

resource "vercel_project" "main" {
  name            = var.project_name
  framework       = "nextjs"
  git_repository  = {
    type = "github"
    repo = var.project_repo
  }
  build_command = <<-EOT
    export DATABASE_URL="${local.database_url}"
    npx prisma generate
    npm run build
  EOT

  environment = [
    {
      target = ["preview", "production"]
			key   = "NODE_ENV"
      value = "production"
    },
    {
      target = ["preview", "production"]
			key   = "DATABASE_URL"
      value = local.database_url
    },
    {
      target = ["preview", "production"]
			key   = "NEXT_PUBLIC_IMAGE_HOST"
      value = local.cloudfront_url
    },
    {
      target = ["preview", "production"]
			key   = "NEXT_PUBLIC_WEB_HOST"
      value = "https://${var.project_domain}"
    },
    {
      target = ["preview", "production"]
			key   = "NEXTAUTH_URL"
      value = "https://${var.project_domain}"
    },
    {
      target = ["preview", "production"]
			key   = "NEXTAUTH_SECRET"
      value = random_password.nextauth_secret.result
    },
    {
      target = ["preview", "production"]
			key   = "GOOGLE_CLIENT_ID"
      value = var.google_client_id
    },
    {
      target = ["preview", "production"]
			key   = "GOOGLE_CLIENT_SECRET"
      value = var.google_client_secret
    },
    {
      target = ["preview", "production"]
			key   = "EMAIL_HOST"
      value = var.email_host
    },
    {
      target = ["preview", "production"]
			key   = "EMAIL_USER"
      value = var.email_user
    },
    {
      target = ["preview", "production"]
			key   = "EMAIL_PASSWORD"
      value = var.email_password
    },
    {
      target = ["preview", "production"]
			key   = "NMI_SECURITY_KEY"
      value = var.nmi_security_key
    },
    {
      target = ["preview", "production"]
      key   = "SKIP_ENV_VALIDATION"
      value = "true"
    },
    {
      target = ["preview", "production"]
      key   = "PROJECT_NAME"
      value = var.project_name
    },
    {
      target = ["preview", "production"]
      key   = "AWS_REGION"
      value = "us-east-1"
    },
    {
      target = ["preview", "production"]
      key   = "AWS_DEFAULT_REGION"
      value = "us-east-1"
    },
    {
      target = ["preview", "production"]
      key   = "AWS_ACCESS_KEY_ID"
      value = aws_iam_access_key.s3_admin_user_key.id
    },
    {
      target = ["preview", "production"]
      key   = "AWS_SECRET_ACCESS_KEY"
      value = aws_iam_access_key.s3_admin_user_key.secret
    },
    {
      target = ["preview", "production"]
      key   = "NEXT_PUBLIC_USE_ANALYTICS"
      value = var.next_public_use_analytics
    },
    {
      target = ["preview", "production"]
      key   = "NEXT_PUBLIC_PROJECT_NAME"
      value = var.next_public_project_name
    },
    {
      target = ["preview", "production"]
      key   = "NEXT_PUBLIC_LEAD_COOKIE"
      value = var.next_public_lead_cookie
    },
    {
      target = ["preview", "production"]
      key   = "NEXT_PUBLIC_CART_COOKIE"
      value = var.next_public_cart_cookie
    },
    {
      target = ["preview", "production"]
      key   = "FB_ACCESS_TOKEN"
      value = var.fb_access_token
    },
    {
      target = ["preview", "production"]
      key   = "FB_TEST_CODE"
      value = var.fb_test_code
    },
    {
      target = ["preview", "production"]
      key   = "NEXT_PUBLIC_FB_PIXEL_ID"
      value = var.next_public_fb_pixel_id
    },
    {
      target = ["preview", "production"]
      key   = "NEXT_PUBLIC_GA_TRACKING_ID"
      value = var.next_public_ga_tracking_id
    },
    {
      target = ["preview", "production"]
      key   = "NEXT_PUBLIC_POSTHOG_KEY"
      value = var.next_public_posthog_key
    },
    {
      target = ["preview", "production"]
      key   = "NEXT_PUBLIC_POSTHOG_HOST"
      value = var.next_public_posthog_host
    },
    {
      target = ["preview", "production"]
      key   = "S3_BUCKET_NAME"
      value = var.s3_bucket_name
    }
  ]
}

resource "vercel_deployment" "main" {
  project_id = vercel_project.main.id
  ref        = "master"
  production = false
}

output "database_url" {
  value = local.database_url
  sensitive = true
}
output "cloudfront_url" {
  value = local.cloudfront_url
}
output "s3_origin_id" {
  value = local.s3_origin_id
}
output "minio_endpoint" {
  value = local.minio_endpoint
}