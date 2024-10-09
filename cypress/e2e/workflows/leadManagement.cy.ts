import { clearLocalStorage } from '../utils'


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
})

beforeEach(() => {
  //cy.clearCookies()
  cy.session('lead', () => {
    cy.visit('localhost:3000')
    .wait(500)
    cy.getCookie('leadId').then(leadId => {
      if(leadId && leadId.value){
        cy.log('LEAD ID ****** ', leadId.value)
        cy.setCookie('leadId', leadId.value, {httpOnly: true})
      }
    })
  }, {cacheAcrossSpecs: true})
})

describe('Home Page Loads with Acceptable Performance', () => {
  it('loads succesfully', () => {
    cy.visit('localhost:3000')
  })
  //add stuff for performance testing
})

describe('New Person Enters the Site', () => {
  it(`should: 
    1. create a new lead
    2. set the local lead id
    3. create a shopping cart w/ the correct lead id`, 
  () => {
    cy.clearCookies()
    cy.visit('localhost:3000')
    .wait(1500)
    cy.getCookie('leadId').then(leadId => {
      expect(leadId).to.not.be.null
      cy.request('http://localhost:3000/api/trpc/lead.getOne?input='+encodeURIComponent(`{"json":"${leadId}"}`))
      .then(response => expect(response.body).to.not.be.empty)
    })
    /* cy.getLocalStorage('ergonomica_cart_id').then(cartId => {
      expect(cartId).to.not.be.null
      cy.request('http://localhost:3000/api/trpc/cart.getOne?input='+encodeURIComponent(`{"json":"${cartId}"}`))
      .then(response => expect(response.body).to.not.be.empty)
    }) */
  })
})

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

describe('Returning Person Enters the Site with a real lead ID and an Active Cart', () => {
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
        /* cy.getLocalStorage('ergonomica_cart_id').then(cartId => {
          expect(cartId).to.not.be.null
          cy.request('http://localhost:3000/api/trpc/cart.getCount').then(response => {
            expect(response.body.result.data.json).to.equal(firstCartCount)
          })
        }) */
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
})