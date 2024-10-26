export $(grep -v '^#' .env.production | xargs)

npx prisma db seed