#!/bin/bash
export $(grep -v '^#' .env.production | xargs)
export TF_VAR_google_client_id=$GOOGLE_CLIENT_ID
export TF_VAR_google_client_secret=$GOOGLE_CLIENT_SECRET
export TF_VAR_email_host=$EMAIL_HOST
export TF_VAR_email_user=$EMAIL_USER
export TF_VAR_email_password=$EMAIL_PASSWORD
export TF_VAR_nmi_security_key=$NMI_SECURITY_KEY
export TF_VAR_project_name=$PROJECT_NAME
export TF_VAR_project_repo=$PROJECT_REPO
export TF_VAR_project_domain=$PROJECT_DOMAIN

export TF_VAR_next_public_use_analytics=$NEXT_PUBLIC_USE_ANALYTICS
export TF_VAR_next_public_project_name=$NEXT_PUBLIC_PROJECT_NAME
export TF_VAR_next_public_lead_cookie=$NEXT_PUBLIC_LEAD_COOKIE
export TF_VAR_next_public_cart_cookie=$NEXT_PUBLIC_CART_COOKIE
export TF_VAR_fb_access_token=$FB_ACCESS_TOKEN
export TF_VAR_fb_test_code=$FB_TEST_CODE
export TF_VAR_next_public_fb_pixel_id=$NEXT_PUBLIC_FB_PIXEL_ID
export TF_VAR_next_public_ga_tracking_id=$NEXT_PUBLIC_GA_TRACKING_ID
export TF_VAR_next_public_posthog_key=$NEXT_PUBLIC_POSTHOG_KEY
export TF_VAR_next_public_posthog_host=$NEXT_PUBLIC_POSTHOG_HOST
export TF_VAR_vercel_team_id=$VERCEL_TEAM_ID

terraform init
terraform validate
terraform plan -out=plan && read -p "Apply this plan? (y/n) " confirm
if [[ $confirm == [yY] ]]; then
  terraform apply plan
else
  echo "Plan not applied."
fi