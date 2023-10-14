# AUTOMATE COMMERCE

## Getting Started
1. Run `docker-compose up` from the root of the project to create a local postgres database and object storage.
2. Run `npm install && npx prisma generate` to install dependencies
3. Run `npx prisma db push && npx prisma db seed` to create tables and seed the development db
4. Run `npm run dev` to run the development server.