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

terraform init
terraform validate
terraform plan -out=plan && read -p "Apply this plan? (y/n) " confirm
if [[ $confirm == [yY] ]]; then
  terraform apply plan
else
  echo "Plan not applied."
fi