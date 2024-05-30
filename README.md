# AUTOMATE COMMERCE

# Setup

## Requirements
1. You must have docker desktop, or docker and docker-compose
2. Node Js and NPM

## Getting Started
1. create a .env.development file
1. Run `docker-compose up` from the root of the project to create a local postgres database and object storage.
2. Open a new terminal window and Run `npm install && npx prisma generate` to install dependencies and generate the prisma client
3. Run `npx prisma db push && npx prisma db seed` to create tables and seed the development db
4. Run `npm run dev` to run the development server.

.env.development
```
NODE_ENV="development"
DEBUG=true
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/ergonomica"
NEXTAUTH_SECRET=someRandomString
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_IMAGE_HOST=http://localhost:9000/ergonomica-media
NEXT_PUBLIC_WEB_HOST=http://localhost:3000
NEXTAUTH_SECRET=secret24742
GOOGLE_CLIENT_ID=1000000000000-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
MINIO_ENDPOINT=http://localhost:9000
NMI_SECURITY_KEY=6457Thfj624V5r7WUwc5v6a68Zsd6YEm
PROJECT_NAME=ergonomica
AWS_REGION=us-east-1
AWS_DEFAULT_REGION=us-east-1
FB_ACCESS_TOKEN=xxxxxxxxxxxxxxxxxxx
FB_TEST_CODE=TEST75581
SECRET_KEY=someRandomString
```

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

# Testing
End to end tests are held in the `cypress/e2e/` directory.

You can run the test suite without having to install any depencies manually by running `./test.sh`.

If you want to run tests manually you can run `npx cypress open` while having another terminal running the dev server. Beware that performance tests will fail when running the test suite with the dev server; If you want to test performance run `npm run build && npm run start` to build and serve the app.


<<<<<<< HEAD
- Modular architecture
- opensource
- solid and friendly tech stack
- easy to use: deploy in 5 minutes
- Fast: our performance is tested

# Features
- SEO
- Analytics
- i18n
- Lead Management
- Cart Management
- Checkout
- Authentication
- Security

# Analytics
to use analytics you must set the following env variables. The analytics package has modules for the following analytics providers:
- Posthog (opensource analytics)
- Meta (pixel & conversion API)
- Google Analytics
- X analytics

The analytics package is built in a way where the main methods exported will trigger events in all of the selected providers; for example if google analytics, posthog and meta are selected; a pageview event will trigger a pagheview in all of these platfoirms simultaneously. This makes it very easy to add new providers without having to go to different places in the code.

To get everything working make sure you follow the steps bellow and setup the follwoing environment variables:

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

To test events in google analytics and meta while in development you must be using some kind of ip tunnel like [ngrok](https://ngrok.com/)


## Setting up posthog
1. create a free account in posthog
2. go to your [project settings](https://us.posthog.com/settings/project)
3. copy your project API Key and set an environment variable `NEXT_PUBLIC_POSTHOG_KEY=<YOUR_PROJECT API_KEY>`
4. set an environment variable `NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com`
5. View [realtime events in posthog](https://us.posthog.com/activity/explore)

## Setting up Googl Analytics (GA4)
1. Follow [these instructions](https://support.google.com/analytics/answer/9304153?hl=en) to setup google analytics 4 (GA4)
2. Create a Property
3. Add a datastream to the property
4. In your property setting click on Data collection and modification > Data Streams
5. click on your datastream and edit the Stream details, add your ngrok URL as the website URL and call your data stream development
6. copy your measurement ID and set the environment vairable `NEXT_PUBLIC_GA_TRACKING_ID=<YOUR_MEASUREMENT_ID>`
7. To view realtime test analytics, go to https://analytics.google.com/analytics/web/?authuser=1#/p<GA_PROJECT_ID>/realtime

## Setting up Meta

### Pixel
1. create a new pixel
2. add the id of the new meta pixel in your env viariable
3. Now you can monitor your pixels activity by accesing this URL: https://business.facebook.com/events_manager2/list/dataset/<FB_PIXEL_ID>
4. All the activities carried out in the website should register in this page in the ovberviw. beware there is a 30 minute lag for events to register

### Conversion API
1. After creating your pixel, follow instructions [here](https://developers.facebook.com/docs/marketing-api/conversions-api/get-started) to setup the converiosn API
3. go to the [Graph API Explorer](https://developers.facebook.com/tools/explorer/)
click on generate Access Token and add some permissions
4. we will add the email and page_events permissions.
5. click on generate token
6. add this token in your environment variable `FB_ACCESS_TOKEN`
6. lets make a GET request to `/me?fields=id,name`
7. should display user info
8. now in the [events manager page](https://www.facebook.com/events_manager2/list/dataset/), go to datasets, select the dataset corresponding to your development pixel, click on the settings tab and scroll down to Sharing, then click on [Business Manager Settings](https://business.facebook.com/settings/events-dataset-news) 
9. On the people tab, click on the user associated to the conversion API, usually Conversion API System User.
10.  When the tab opens up, click on the square icon on the uper right side of the tab to open it in Users view. click on the dataset and click on assign assets.
11. select datasets, check your pixels dataset and tick full control
12. now go back to the [fb events manager](https://business.facebook.com/events_manager2/list/dataset/)
13. click on the Test Events tab
14. click on `Confirm your server’s events are set up correctly`
15. copy the test event code and set up the enviornment vairable `FB_TEST_CODE=<YOUR_TEST_EVENT_CODE>`
16. click on the Graph API Explorer button
17. Submit the request. you sould get a success response like below
```
{
  "events_received": 1,
  "messages": [
  ],
  "fbtrace_id": "A5dI0gET-Do7zoc6hPQ_iHr"
}
```

### Test Events
1. To test meta events in realtime you must be using some kind of ip tunnel like [ngrok](https://ngrok.com/)
2. go to the meta events manager test events page: https://business.facebook.com/events_manager2/list/dataset/<NEXT_PUBLIC_FB_PIXEL_ID>/test_events
3. click on `Confirm your websites events are set up correctly`
4. enter the URL of your ngrok ip tunnel (in your ngrok terminal window the adress next to Forwarding)
5. Click on open URL and make some events on the page i.e. visit a product page and the product to cart
6. initially it will take a few minutes but you should start seeing the events log in the test events page




# Lead management

This ecommerce is inetded to unfiy the customer experience both digitaly and phisically. and the ecommerce features several tools to help generate, track and convert leads. It also features advanced functionality to help you unify in-person and digital leads, being able to track a leads entire customer jurney, from the digital side to the physical side without any gaps

This ecommerce creates a unique leadId for users.

It uses a combination of server side actions through middleware and client side actions in the main layout file with a client side component to track the lead and their ID throughout the app

This works through middleware <-> serverside functions <-> clint side 


This is an experimental 

middleware:
lead ID is received from search params in the referer (previous URL) and its added the search params of the URL of the next request.



## Lead Utils
lead utilities are distributed into 2 main packages, one for the server and one for the client:
- src/utils/leads/server.ts
- src/utils/leads/client.ts
- src/utils/leads/constants.ts

1. middleware
2. app/layout.tsx
  1. LeadGen component -> app/[lang]/components/leadGen.tsx
    1. getOrCreateLead -> utils/leads/client
3. app/[lang]/(main)/layout.tsx or app/[lang]/(auth)/layout.tsx
  1. getCurrentUser -> utils/auth
  2. nav -> app/[lang]/components/nav/nav.tsx
    1. getServerLead -> utils/leads/server.ts: gets a serverside lead cookie
4. specific page


## Middleware
Inside the middleware there is a condition that checks for a previous URL, if the previous URL has an hid (hidden ID) searchParam in the URL, this will set the hid param in the next request as well. This is useful for visitors that have all cookies blocked, attaching their initial session leadID in the URL allows them to still use most of the functionality in the website.

## leadGen component
the leadgen component is a client side react component that uses some of the clientside lead utilities with useEffect, so basically this function will execute everytime a page renders

## getOrCreateLead
1. getServerLead: gets the lead from the server side cookies or http headers
2. isLeadActive: checks weather the given lead exists in the databse and if its in status active
3. fetch and set cart
4. getCookieSettings
5. get hid from url
6. check if (!mounted && !isActiveCookies && !hid)
  1. getClientLead
  2. check if (!localStorageId && !cookieSettings?.isBot || !isActiveCookies)
    1. generateFingerprint
    2. findOrCreateLeadWithCart
    3. setLead and setCart
    4. check if(!await getCookie(LEAD_COOKIE))
      1. set hid searchParam in url
      2. window.history.pushState(null, '', `?${params.toString()}`)
return cookieSettings




## Cart Management
this ecommerce creates shopping carts inside a database. It uses local leads to relate and fetch shopping carts.

1. middleware
2. app/layout.tsx
  1. LeadGen component -> app/[lang]/components/leadGen.tsx
    1. getOrCreateLead -> utils/leads/client
3. app/[lang]/(main)/layout.tsx or app/[lang]/(auth)/layout.tsx
  1. getCurrentUser -> utils/auth
  2. nav -> app/[lang]/components/nav/nav.tsx
    1. getServerLead -> utils/leads/server.ts: gets a serverside lead cookie
4. cart page
  1. compares the cartId passed from parameters with the cartId in the cookies. The cart Id in the cookies has been passed from the previous layout component. Here there is an issue if the user has cookies disabled completely. it should also try to get the cart from the leadId in the searchParams. -> make a getLead function that gets cookies -> searchParams







## leads_fix
uses a condition on mounted to only generate 1 lead

```
let mounted = false
const getOrCreateLead = async(
    visitorId: string | null | undefined
) => {
    if(!visitorId && !mounted) {
        mounted = true
        if (typeof window !== 'undefined') {
            let leadId = localStorage.getItem('ergo_lead_id')
            let cartId = localStorage.getItem('ergo_cart_id')
            if(!leadId) {
                const fingerprint = await generateFingerprint()
                const response = await createLeadAndCart(fingerprint)
                leadId = response.leadId
                cartId = response.cartId
                localStorage.setItem('ergo_lead_id', leadId)
```


## Leadgen
1. adds lead utils and sets custom headers for x-leadid
2. adds lead and cart utils
3. adds condition to get the visitors cookie settings and to manage visitor that have all of their cookies blocked
4. adds logic to identify cookieless leads by fingerprint
5. adds fix for detecting cart correctly in cookieless mode
6. adds utility to check if the incoming visitor is a bot
7. fix the cart icon in safari browser
8. remove unecessary cuid dependency
9. ignore cypress generated files

## userauth
1. adds login flow that sets lead
2. added promise in singup and fixed reroute logic
3. adds stuff to make lead inactive and to fetch and set the current lea… 
4. tries to add notifications on login and logout


## cart sharing




# TEST DATA

## stock match

shop
'chair-vergex-bl': 0,
'light-arm-bl': 0,
'chair-xtc-gr': 1,
'chair-stack-gr': 1,
'stand-arm-alum-single-bl': 3,
'chair-axis-wh': 3

order
'chair-axis-wh': 2,
'stand-arm-alum-single-bl': 1,
'chair-executive-stratus-gr': 2,
'frame-double-bl': 1

## variants
melamine tabletop
desk frame

## Inactive products
chair anion


Power Outlets
Monitor Arms
Frames
Keyboards
Ergonomic Chairs
Anti-fatigue Mats
Mice
USB hubs
Pads
Table Tops
Laptop Stands
Adapters
Executive Chairs
Wireless Chargers
Tablet Stands
Cabinets
Phone Holders
Headphone Stands
Gaming chairs
Lighting
CPU Stands
Cable Management
Wrist rests
Monitor Stands
Balance Boards
Under-desk Drawers
=======

# Admin

the generator function will read your prisma schema and generate:
 1. an index json file with the format
 ```
 {
    [model]: {
        name: string
        view: 'shoppingCart' | 'blog' | 'default'
    }
 }
 ```

2. for each modeel will create the follwoing dirs/files
```
- {model}/
   - fields.json
   - page.tsx
   - [id]/
      - page.tsx
```

the fields.json file created will have the following format:
```
{
    name: string
    type: FieldType
    options?: SelectOption[]
    ...
}
```

the json files are created with the default fieldType corresponding to the prisma type and the fieldName. You can later modify this file as you wish.

>>>>>>> c47a39c (adds general layout for admin and the admin products pages)
