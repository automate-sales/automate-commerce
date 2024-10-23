import { clearLocalStorage } from '../utils'
const LEAD_COOKIE = 'ergo_lead_id'
   
beforeEach(() => {
  Cypress.session.clearAllSavedSessions()
  cy.clearAllCookies()
  cy.task('wipeTables')
})

// test all methods
// make sure lead is retrieved from cookies, local storage, session storage, and fingerprint

// test only sesion storage
// delete the fingerpirnt on the exsiting lead

// test only the fingerprint
// delete all the cookies and session and local storage

describe('New Person Enters the Site', () => {
  it(`should create a lead in the DB and store the lead ID in a cookie`, 
  () => {
    // Verify there are no existing cookies or leads in the DB 
    cy.getCookie(LEAD_COOKIE).should('not.exist');
    cy.task('getLeads').then((leads: {[key: string]:any}[]) => {
      expect(leads).to.be.empty
    })
    // visit the home page
    cy.visit('localhost:3000').wait(1000)
    // verify the lead cookie was created and set in server/client and 1 lead was created in the DB
    cy.getCookie(LEAD_COOKIE).should('exist');
    cy.window().its(`localStorage.${LEAD_COOKIE}`).then(leadId => {
      expect(leadId).to.not.be.null
    });
    cy.window().its(`sessionStorage.${LEAD_COOKIE}`).then(leadId => {
      expect(leadId).to.not.be.null
    });
    cy.task('getLeads').then((leads: {[key: string]:any}[]) => {
      expect(leads).to.not.be.empty
      expect(leads.length).to.equal(1)
    })
  })
})

describe('New Person Enters the Site with cookies disabled', () => {
  beforeEach(() => {
    // Simulate blocked cookies by overriding the `document.cookie` setter and getter
    cy.visit('localhost:3000', {
      onBeforeLoad(win) {
        Object.defineProperty(win.document, 'cookie', {
          get: () => '',
          set: () => {}
        });
      }
    });
  });

  it('should create a lead in the DB and store the lead ID in session storage', () => {
    // Verify there are no existing cookies or leads in the DB 
    cy.getCookie(LEAD_COOKIE).should('not.exist');
    cy.task('getLeads').then((leads: {[key: string]:any}[]) => {
      expect(leads).to.be.empty
    })
    // visit the home page
    cy.visit('localhost:3000').wait(1000).clearAllCookies()
    cy.getCookie(LEAD_COOKIE).should('not.exist');
    cy.window().its(`sessionStorage.${LEAD_COOKIE}`).then(leadId => {
      expect(leadId).to.not.be.null
      // navigate to other pages still should maintain session
      cy.visit('http://localhost:3000/products').wait(1000).clearAllCookies()
      cy.window().its(`sessionStorage.${LEAD_COOKIE}`).should('equal', leadId)
    });
    // make sure only 1 lead was created in the DB
    cy.task('getLeads').then((leads: {[key: string]:any}[]) => {
      expect(leads).to.not.be.empty
      expect(leads.length).to.equal(1)
    })
  });
});

// visitor in europe



// test lead relation via cookies
// test lead relation via local storage
// test lead relation via session storage
// test lead relation via fingerprint



//
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