# AUTOMATE COMMERCE

## Requirements
1. You must have docker desktop, or docker and docker-compose
2. Node Js and NPM

## Getting Started
1. create a .env.development file
1. Run `docker-compose up` from the root of the project to create a local postgres database and object storage.
2. Open a new terminal window and Run `npm install && npx prisma generate` to install dependencies and generate the prisma client
3. Run `npx prisma db push && npx prisma db seed` to create tables and seed the development db
4. Run `npm run dev` to run the development server.

## Seeding the database
- to seed the database you can run `npx prisma db seed`. this command will clear and re-seed the DB
- after running the seed command you must clear http cookies as well as local storage to remove any old leads / carts
- clear http cookies by navigating or making a request to the following url `http://localhost:3000/api/cookies/clear`
- clear the local sotrage by opening up your browser console and running `localStorage.clear()`

## Searching
make sure you have the pg_trgm extension enabled in your postgres database. To do this you can run the following:
1. to enter psql shell `psql -h localhost -p 5432 -U postgres -d ergonomica`
2. search for the pg_trgm extension `SELECT * FROM pg_extension WHERE extname = 'pg_trgm';` this should display atleast 1 row
3. if no extension is found run `CREATE EXTENSION IF NOT EXISTS pg_trgm;`
4. run `exit` to exit psql shell

## Testing
End to end tests are held in the `cypress/e2e/` directory.

You can run the test suite without having to install any depencies manually by running `./test.sh`.

If you want to run tests manually you can run `npx cypress open` while having another terminal running the dev server. Beware that performance tests will fail when running the test suite with the dev server; If you want to test performance run `npm run build && npm run start` to build and serve the app.


# Analytics
to use analytics you must set the following env variables
```
# toggle usage of analytics
NEXT_PUBLIC_USE_ANALYTICS

# post hog
NEXT_PUBLIC_POSTHOG_HOST
NEXT_PUBLIC_POSTHOG_KEY

# google analytics
NEXT_PUBLIC_GA_TRACKING_ID

# metap pixel
NEXT_PUBLIC_FB_PIXEL_ID

# twitter
NEXT_PUBLIC_TWITTER_BEARER_TOKEN
```