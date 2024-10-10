import { clearLocalStorage } from '../utils'
const LEAD_COOKIE = 'ergo_lead_id'

// cookies enabled
  // request not to track or visitor IP in europe?
    // cookie consent banner
// Third party cookies blocked
   // enable cookies banner
// all cookies blocked
   // enable cookies banner

   
// visitor in europe
// A person with cookies completely disabled should be able to use the site with all its functionalitites (diusable all cookies)

// should maintain the lead id in the URL and the headers
// click on a product
// click on a carousael item
// click on a nav item
// change language
// search for a product
// enter a new URL without a locale
// enter a new URL with a locale
// refresh a page

//add an item to cart
// visit the cart page
// checkout succesfully


before(() => {
  cy.log('CLEARING COOKIES ...')
  Cypress.session.clearAllSavedSessions()
  cy.clearAllCookies()
  // wipe the leads table
})

// these tests might fail in the CI. They seem to fail on the first run after db seed.
describe('New Person Enters the Site', () => {
  it(`should: 
    1. create a new lead
    2. set the local lead id
    3. create a shopping cart w/ the correct lead id`, 
  () => {
    cy.getCookie(LEAD_COOKIE).should('not.exist');
    cy.visit('localhost:3000')
    .wait(1500)
    cy.getCookie(LEAD_COOKIE).should('exist');
    // creates one lead in the database
    /* cy.getLocalStorage('ergonomica_cart_id').then(cartId => {
      expect(cartId).to.not.be.null
      cy.request('http://localhost:3000/api/trpc/cart.getOne?input='+encodeURIComponent(`{"json":"${cartId}"}`))
      .then(response => expect(response.body).to.not.be.empty)
    }) */
  })
})

// cookies are disabled
describe('Simulate Blocked Cookies and Check Session Storage', () => {
  beforeEach(() => {
    // Simulate blocked cookies by overriding the `document.cookie` setter and getter
    cy.visit('http://localhost:3000', {
      onBeforeLoad(win) {
        // Override document.cookie to prevent cookies from being set
        Object.defineProperty(win.document, 'cookie', {
          get: () => '',
          set: () => {}
        });
      }
    });
  });

  it('should interact with session storage and verify behavior', () => {
    // Perform actions that interact with session storage
    cy.visit('http://localhost:3000');

    // Assert that the cookie doesnt exist
    cy.getCookie(LEAD_COOKIE).should('not.exist');
    // Assert that the session storage item exists
    cy.window().its(`sessionStorage.${LEAD_COOKIE}`).then(leadId => {
      expect(leadId).to.not.be.null
      // navigate to other pages still should maintain session
      cy.visit('http://localhost:3000/products').wait(1500)
      cy.window().its(`sessionStorage.${LEAD_COOKIE}`).should('equal', leadId)
    });
  });
});


/* describe('Person Enters the Site with a Fake Lead ID', () => {
  clearLocalStorage()
  localStorage.setItem('ergonomica_lead_id', 'random_lead_id')
  it(`should: 
    1. create a new lead
    2. overwrite the current local lead id
    3. create a shopping cart w/ the correct lead id`, 
  () => {
    cy.visit('localhost:3000')
    .wait(1500)
    cy.getLocalStorage('ergonomica_lead_id').then(leadId => {
      expect(leadId).to.not.be.null
      expect(leadId).to.not.be.equal('random_lead_id')
      cy.request('http://localhost:3000/api/trpc/lead.getOne?input='+encodeURIComponent(`{"json":"${leadId}"}`))
      .then(response => expect(response.body.result.data.json).to.not.be.null)
    })
    cy.getLocalStorage('ergonomica_cart_id').should('not.be.null')
  })
}) */

/* describe('Returning Person Enters the Site with a real lead ID and an Active Cart', () => {
  it(`should setup local lead_id and cart_id for an existing lead`, () => {
    cy.clearCookies()
    cy.session('leadId', ()=>{
      cy.request('http://localhost:3000/api/trpc/lead.getFirst')
      .then(response => {
        expect(response.body.result.data.json).to.not.be.null
        const lead = response.body.result.data.json
        cy.setCookie('leadId', lead.id, {httpOnly: true})
        cy.request('http://localhost:3000/api/trpc/cart.getActiveCartByUser?input='+encodeURIComponent(`{"json":"${lead.id}"}`))
        .then(response => {
          expect(response.body.result.data.json).to.not.be.null
        })
      })
    })
  })
  it(`should: 
    1. maintain local lead_id and cart_id
    2. not create a new lead
    3. not create a new shopping cart`, 
  () => {
    cy.request('http://localhost:3000/api/trpc/lead.getCount')
    .then(response => {
      expect(response.body.result.data.json).to.not.be.null
      const firstLeadCount = response.body.result.data.json
      cy.request('http://localhost:3000/api/trpc/cart.getCount')
      .then(response => {
        expect(response.body.result.data.json).to.not.be.null
        //const firstCartCount = response.body.result.data.json
        cy.visit('localhost:3000')
        .wait(1500)
        cy.getCookie('leadId').then(leadId => {
          expect(leadId).to.not.be.null
          cy.request('http://localhost:3000/api/trpc/lead.getCount').then(response => {
            expect(response.body.result.data.json).to.equal(firstLeadCount)
          })
        })

        //cy.getLocalStorage('ergonomica_cart_id').then(cartId => {
        //  expect(cartId).to.not.be.null
        //  cy.request('http://localhost:3000/api/trpc/cart.getCount').then(response => {
        //    expect(response.body.result.data.json).to.equal(firstCartCount)
        //  })
        //})

      })
    })
  })
})

// needs seeded user data with purchased carts but no active cart
describe('Returning Person Enters the Site with a real lead ID and no Active Carts', () => {
  it('loads succesfully', () => {
    cy.visit('localhost:3000')
  })
  //add stuff for performance testing
}) */