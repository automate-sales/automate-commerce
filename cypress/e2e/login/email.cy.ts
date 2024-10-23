
const email_confirmation_msg = 'Te hemos enviado un correo. Confirmalo para iniciar sesión.'
const sign_in_success_msg = 'Ha iniciado sesión'
const logout_success_msg = 'Ha cerrado su sesión'
const default_locale = 'en'


import { addProductFromPage, checkCart } from "../utils"


describe('A new lead with an empty cart signs up', () => {
  before(() => {
    Cypress.session.clearAllSavedSessions();
    cy.clearAllCookies();
    cy.task('wipeTables');
  });
  it('Is succesfull', () => {
    cy.clearAllCookies()
    cy.visit('localhost:3000/login')
    cy.get('#email', {timeout: 1500})
    .type('user@testuser.com')
    .should('have.value', 'user@testuser.com')
    .type('{enter}').wait(1000)
    //cy.contains(email_confirmation_msg).should("be.visible")
    cy.task('getLastEmail', 'user@testuser.com').then((email)=> {
      const typedEmail = email as { body: string; html: string };
      cy.log('EMAIl FOUND: ', typedEmail)
      let body = typedEmail.body.toString()
      let url = body.slice(body.indexOf('http'))
      expect(url).to.not.be.empty
      cy.visit({url: url, method: 'POST'})
      cy.url({timeout: 1500}).should('include', '/user/info?first_login=true')
      // check signup email subject and message
      // add no info on the signup form
      cy.get('#submitUserInfo').click()
      cy.url({timeout: 1500}).should('include', '/user/info?first_login=true')
      // should ask user to fill in atleast name
      cy.get('#name').type('John Doe').should('have.value', 'John Doe')
      cy.get('#submitUserInfo').click().wait(500)
      // get the language from the browser
      cy.get('html').invoke('attr', 'lang').then((lang) => {
        cy.url().should('eq', 'http://localhost:3000/'+ lang)
      })
    })
  })
})

describe('A new lead with a non empty cart signs up', () => { 
  const expectedStock = {'frame-double-bl': 1}
  const initialStock = Object.entries(expectedStock)[0]
  const userEmail = 'test@user.com'
  before(() => {
    Cypress.session.clearAllSavedSessions();
    cy.clearAllCookies();
    cy.task('wipeTables');
  });
  it('should keep the leads existing cart', () => {
    cy.viewport('macbook-15')
    cy.visit('localhost:3000').wait(1000)
    addProductFromPage(initialStock[0], initialStock[1])
    cy.get('#userIconBtn').click({timeout: 6000}).wait(100)
    cy.get('#startSessionBtn').click()
    cy.url({timeout: 1500}).should('include', '/login')
    cy.get('#email')
    .type(userEmail)
    .should('have.value', userEmail)
    .type('{enter}').wait(1000)
    //cy.contains(email_confirmation_msg).should("be.visible")
    cy.task('getLastEmail', userEmail).then((email)=> {
      const typedEmail = email as { body: string; html: string };
      cy.log('EMAIl FOUND: ', typedEmail)
      let body = typedEmail.body.toString()
      let url = body.slice(body.indexOf('http'))
      expect(url).to.not.be.empty
      cy.visit({url: url, method: 'POST'})
      cy.url({timeout: 1500}).should('include', '/user/info?first_login=true')
      // should ask user to fill in atleast name
      cy.get('#name').type('John Doe').should('have.value', 'John Doe')
      cy.get('#submitUserInfo').click().wait(200)
      // get the language from the browser
      //cy.url().should('include', 'frame-double-bl')
      cy.visit('localhost:3000/cart').wait(200)
      checkCart(Object.keys(expectedStock).length, expectedStock)
    })
  })
})


describe('An existing user without any leads signs in from the login page', () => {
  const existing_user_email = 'johndoe@doejohn.com'
  before(() => {
    Cypress.session.clearAllSavedSessions();
    cy.clearAllCookies();
    cy.task('wipeTables');
    cy.task('createUser')
  });
  it('The signin is succesfull', () => {
    cy.clearAllCookies()
    cy.visit('localhost:3000/login')
    .wait(1000)
    cy.get('#email')
    .type(existing_user_email)
    .should('have.value', existing_user_email)
    .type('{enter}').wait(1000)
    //cy.contains(email_confirmation_msg).should("be.visible")
    
    cy.task('getLastEmail', existing_user_email).then((email)=> {
      const typedEmail = email as { body: string; html: string };
      cy.log('EMAIl FOUND: ', typedEmail)
      let body = typedEmail.body.toString()
      let url = body.slice(body.indexOf('http'))
      expect(url).to.not.be.empty
      cy.visit({url: url, method: 'POST'})
      .wait(1000)
      cy.url().should('not.include', '/user/info?first_login=true')
    })
  })
})

describe('An existing user signs in from a random page', () => {
  const existing_user_email = 'johndoe@doejohn.com'
  before(() => {
    Cypress.session.clearAllSavedSessions();
    cy.clearAllCookies();
    cy.task('wipeTables');
    cy.task('createUser')
  });
  it('Is succesfull', () => {
    cy.clearAllCookies()
    cy.visit('localhost:3000/products/chair-stack-gr')
    cy.get('#userIconBtn').click().wait(200)
    cy.get('#startSessionBtn').click().wait(1000)
    cy.url().should('include', '/login')
    cy.get('#email')
    .type(existing_user_email)
    .should('have.value', existing_user_email)
    .type('{enter}').wait(1000)
    //cy.contains(email_confirmation_msg).should("be.visible")
    
    cy.task('getLastEmail', existing_user_email).then((email)=> {
      const typedEmail = email as { body: string; html: string };
      cy.log('EMAIl FOUND: ', typedEmail)
      let body = typedEmail.body.toString()
      let url = body.slice(body.indexOf('http'))
      expect(url).to.not.be.empty
      cy.visit({url: url, method: 'POST'})
      .wait(1000)
      cy.url().should('include', '/products/chair-stack-gr')
    })
  })
})

describe('An existing user asociated to the current lead signs in', () => {
  const LEAD_COOKIE = 'ergo_lead_id'
  before(() => {
    Cypress.session.clearAllSavedSessions();
    cy.clearAllCookies();
    cy.task('wipeTables');
  });
  it('Keeps the current lead w cart', ()=> {
    // visit localhost:3000
    const current_lead_email = 'user_with_lead@test.com'
    const expectedStock = {'frame-double-bl': 1}
    const initialStock = Object.entries(expectedStock)[0]
    cy.viewport('macbook-15')
    cy.visit('localhost:3000').wait(1000)
    addProductFromPage(initialStock[0], initialStock[1])
    cy.getCookie(LEAD_COOKIE).then(leadId => {
      const initialLeadId = leadId as { value: string };
      cy.log('leadId ', leadId.value)
      cy.task('createUserWithLead', leadId.value).then((user) => {
        cy.log('user ', user)
        // sign in with user
        cy.visit('localhost:3000/login')
        .wait(1000)
        cy.get('#email')
        .type(current_lead_email)
        .should('have.value', current_lead_email)
        .type('{enter}').wait(1000)
        //cy.contains(email_confirmation_msg).should("be.visible")
        
        cy.task('getLastEmail', current_lead_email).then((email)=> {
          const typedEmail = email as { body: string; html: string };
          cy.log('EMAIl FOUND: ', typedEmail)
          let body = typedEmail.body.toString()
          let url = body.slice(body.indexOf('http'))
          expect(url).to.not.be.empty
          cy.visit({url: url, method: 'POST'})
          .wait(1000)
          cy.url().should('not.include', '/user/info?first_login=true')
          cy.getCookie(LEAD_COOKIE).then(leadId => {
            cy.log('leadId ', leadId.value)
            expect(leadId.value).to.eq(initialLeadId.value)
          })
          // visit the cart page and make sure the cart contains the item
          cy.visit('localhost:3000/cart').wait(500)
          checkCart(Object.keys(expectedStock).length, expectedStock)
        })
      })
    })
  })
})


describe('A lead with an empty cart signs in with an existing user asociated to another lead with an empty cart', () => {
  const LEAD_COOKIE = 'ergo_lead_id'
  const current_lead_email = 'user_with_lead@test.com'
  before(() => {
    Cypress.session.clearAllSavedSessions();
    cy.clearAllCookies();
    cy.task('wipeTables');
  });
  // the lead has an empty cart
  it('Keeps the current lead w empty cart', () => {
    cy.task('createUserWithLead').then((user) => {
      // it expects the user to be created correctly with an active lead
      const initialUserLead = user.leads[0]
      const initialUserLeadId = initialUserLead.id
      expect(initialUserLead.status).to.eq('lead')

      // it expects a new active lead to be created by a new visitor
      cy.viewport('macbook-15')
      cy.visit('localhost:3000').wait(1000)
      cy.getCookie(LEAD_COOKIE).then(leadId => {
        const visitorLeadId = leadId.value
        cy.log('leadId ', visitorLeadId)
  
        // sign in with the existing user
        cy.visit('localhost:3000/login')
        .wait(1000)
        cy.get('#email')
        .type(current_lead_email)
        .should('have.value', current_lead_email)
        .type('{enter}').wait(1000)
        
        cy.task('getLastEmail', current_lead_email).then((email)=> {
          const typedEmail = email as { body: string; html: string };
          cy.log('EMAIl FOUND: ', typedEmail)
          let body = typedEmail.body.toString()
          let url = body.slice(body.indexOf('http'))
          expect(url).to.not.be.empty
          cy.visit({url: url, method: 'POST'})
          .wait(1000)
          cy.url().should('not.include', '/user/info?first_login=true')

          // lead ID in the cookies should be the visitorLeadId
          cy.getCookie(LEAD_COOKIE).then(leadId => {
            cy.log('leadId ', leadId.value)
            expect(leadId.value).to.eq(visitorLeadId)
          })

          // active lead id in the user should be the visitorLeadId
          cy.task('getUserWithLead', current_lead_email).then((user) => {
            expect(user.leads.length).to.eq(2)
            user.leads.map(lead => {
              if(lead.id === visitorLeadId){
                expect(lead.status).to.eq('lead')
              } else {
                expect(lead.status).to.eq('inactive')
              }
            })
          } )
        })
      })
    })
  })
})

describe('A lead with a non-empty cart signs in with an existing user asociated to another lead with an empty cart', () => {
  const LEAD_COOKIE = 'ergo_lead_id'
  const current_lead_email = 'user_with_lead@test.com'
  const expectedStock = {'frame-double-bl': 1}
  const initialStock = Object.entries(expectedStock)[0]
  
  before(() => {
    Cypress.session.clearAllSavedSessions();
    cy.clearAllCookies();
    cy.task('wipeTables');
  });
  // the lead has an empty cart
  it('Keeps the current lead w the non-empty cart', () => {
    cy.task('createUserWithLead').then((user) => {
      // it expects the user to be created correctly with an active lead
      const initialUserLead = user.leads[0]
      const initialUserLeadId = initialUserLead.id
      expect(initialUserLead.status).to.eq('lead')

      // it expects a new active lead to be created by a new visitor
      cy.viewport('macbook-15')
      cy.visit('localhost:3000').wait(1000)
      cy.getCookie(LEAD_COOKIE).then(leadId => {
        const visitorLeadId = leadId.value
        cy.log('leadId ', visitorLeadId)

        // make some shopping
        cy.viewport('macbook-15')
        cy.visit('localhost:3000').wait(1000)
        addProductFromPage(initialStock[0], initialStock[1])
  
        // sign in with the existing user
        cy.visit('localhost:3000/login')
        .wait(1000)
        cy.get('#email')
        .type(current_lead_email)
        .should('have.value', current_lead_email)
        .type('{enter}').wait(1000)
        
        cy.task('getLastEmail', current_lead_email).then((email)=> {
          const typedEmail = email as { body: string; html: string };
          cy.log('EMAIl FOUND: ', typedEmail)
          let body = typedEmail.body.toString()
          let url = body.slice(body.indexOf('http'))
          expect(url).to.not.be.empty
          cy.visit({url: url, method: 'POST'})
          .wait(1000)
          cy.url().should('not.include', '/user/info?first_login=true')

          // lead ID in the cookies should be the visitorLeadId
          cy.getCookie(LEAD_COOKIE).then(leadId => {
            cy.log('leadId ', leadId.value)
            expect(leadId.value).to.eq(visitorLeadId)
          })

          // active lead id in the user should be the visitorLeadId
          cy.task('getUserWithLead', current_lead_email).then((user) => {
            expect(user.leads.length).to.eq(2)
            user.leads.map(lead => {
              if(lead.id === visitorLeadId){
                expect(lead.status).to.eq('lead')
              } else {
                expect(lead.status).to.eq('inactive')
              }
            })
          } )

          // review cart
          cy.visit('localhost:3000/cart').wait(500)
          checkCart(Object.keys(expectedStock).length, expectedStock)
          
        })
      })
    })
  })
})

describe('An existing user asociated to another lead with a non empty cart signs in', () => {
  // the lead has an empty cart
  it('automatically swaps the leads')
  // the lead has a non empty cart
  it('brings up a modal to ask the user if they want to replace the current cart', () => {
    // the lead selects no
    it('Keeps the current lead w non empty cart')
    // the lead selects yes
    it('swaps the leads')
  })
})

describe('A lead with an empty cart signs in with existing user thats asociated to another lead with a non-empty cart', () => {
  const LEAD_COOKIE = 'ergo_lead_id'
  const user_email = 'user_with_lead_and_cart_with_items@test.com'
  const expectedStock = {'stand-cpu-under-bl': 1}
  before(() => {
    Cypress.session.clearAllSavedSessions();
    cy.clearAllCookies();
    cy.task('wipeTables');
  });
  // the lead has an empty cart
  it('Keeps the current lead w empty cart', () => {
    cy.task('createUserWithLeadAndCartWithItems').then((user) => {
      // it expects the user to be created correctly with an active lead
      const initialUserLead = user.leads[0]
      const initialUserLeadId = initialUserLead.id
      expect(initialUserLead.status).to.eq('lead')

      // it expects a new active lead to be created by a new visitor
      cy.viewport('macbook-15')
      cy.visit('localhost:3000').wait(1000)
      cy.getCookie(LEAD_COOKIE).then(leadId => {
        const visitorLeadId = leadId?.value
        // verify that the shopping cart is empty
        cy.visit('localhost:3000/cart')
        cy.get('#cart-items', {timeout: 1500})
        .should("be.empty")
        // sign in with the existing user
        cy.visit('localhost:3000/login')
        cy.get('#email', {timeout: 1500})
        .type(user_email)
        .should('have.value', user_email)
        .type('{enter}').wait(1000)
        cy.task('getLastEmail', user_email).then((email)=> {
          const typedEmail = email as { body: string; html: string };
          cy.log('EMAIl FOUND: ', typedEmail)
          let body = typedEmail.body.toString()
          let url = body.slice(body.indexOf('http'))
          expect(url).to.not.be.empty
          cy.visit({url: url, method: 'POST'})
          cy.url({timeout: 1500})
          .should('not.include', '/user/info?first_login=true')
          // lead ID in the cookies should be the user lead Id
          cy.getCookie(LEAD_COOKIE).then(leadId => {
            cy.log('leadId ', leadId?.value)
            expect(leadId?.value).to.eq(visitorLeadId)
          })
          // active lead id in the user should be the visitorLeadId
          cy.task('getUserWithLead', user_email).then((user) => {
            user.leads.map(lead => {
              if(lead.id === visitorLeadId){
                expect(lead.status).to.eq('lead')
              } else {
                expect(lead.status).to.eq('inactive')
              }
            })
          })
          // review cart
          cy.visit('localhost:3000/cart').wait(500)
          checkCart(Object.keys(expectedStock).length, expectedStock)
        })
      })
    })
  })
})

describe('A lead with an non-empty cart signs in with existing user thats asociated to another lead with a non-empty cart and cancels the swap', () => {
  const LEAD_COOKIE = 'ergo_lead_id'
  const user_email = 'user_with_lead_and_cart_with_items@test.com'
  const leadExpectedStock = {'frame-double-bl': 1}
  const initialStock = Object.entries(leadExpectedStock)[0]

  before(() => {
    Cypress.session.clearAllSavedSessions();
    cy.clearAllCookies();
    cy.task('wipeTables');
  });
  it('Keeps the current lead w empty cart', () => {
    
    cy.task('createUserWithLeadAndCartWithItems').then((user) => {
      // it expects the user to be created correctly with an active lead
      const initialUserLead = user.leads[0]
      expect(initialUserLead.status).to.eq('lead')
      // it expects a new active lead to be created by a new visitor
      cy.viewport('macbook-15')
      cy.visit('localhost:3000').wait(1000)
      cy.getCookie(LEAD_COOKIE).then(leadId => {
        const visitorLeadId = leadId?.value
        // make some shopping
        cy.viewport('macbook-15')
        cy.visit('localhost:3000').wait(1000)
        addProductFromPage(initialStock[0], initialStock[1])
        // sign in with the existing user
        cy.visit('localhost:3000/login')
        cy.get('#email', {timeout: 1500})
        .type(user_email)
        .should('have.value', user_email)
        .type('{enter}').wait(1000)
        cy.task('getLastEmail', user_email).then((email)=> {
          const typedEmail = email as { body: string; html: string };
          cy.log('EMAIl FOUND: ', typedEmail)
          let body = typedEmail.body.toString()
          let url = body.slice(body.indexOf('http'))
          expect(url).to.not.be.empty
          cy.visit({url: url, method: 'POST'})
          .wait(1000)
          
          cy.url().should('not.include', '/user/info?first_login=true')
          cy.url().should('include', '/user/cart')

          cy.get('#swap-modal').should('be.visible')
          cy.get('#cancel-swap').click().wait(500)
          // the url should end with /cart
          cy.url().should('include', '/cart')
          cy.url().should('not.include', '/user/')

          // cart should contain the intial cart
          checkCart(Object.keys(leadExpectedStock).length, leadExpectedStock)

          // active lead id in the user should be the visitorLeadId
          cy.task('getUserWithLead', user_email).then((user) => {
            user.leads.map(lead => {
              if(lead.id === visitorLeadId){
                expect(lead.status).to.eq('lead')
              } else {
                expect(lead.status).to.eq('inactive')
              }
            })
          })

        })
      })
    })
  })
})

describe('A lead with an non-empty cart signs in with existing user thats asociated to another lead with a non-empty cart and confirms the swap', () => {
  const LEAD_COOKIE = 'ergo_lead_id'
  const user_email = 'user_with_lead_and_cart_with_items@test.com'
  const leadExpectedStock = {'frame-double-bl': 1}
  const userExpectedStock = {'stand-cpu-under-bl': 1}
  const initialStock = Object.entries(leadExpectedStock)[0]

  before(() => {
    Cypress.session.clearAllSavedSessions();
    cy.clearAllCookies();
    cy.task('wipeTables');
  });
  it('Keeps the current lead w empty cart', () => {
    
    cy.task('createUserWithLeadAndCartWithItems').then((user) => {
      // it expects the user to be created correctly with an active lead
      const initialUserLead = user.leads[0]
      const initialUserLeadId = initialUserLead.id
      expect(initialUserLead.status).to.eq('lead')

      // it expects a new active lead to be created by a new visitor
      cy.viewport('macbook-15')
      cy.visit('localhost:3000').wait(1000)
      cy.getCookie(LEAD_COOKIE).then(leadId => {
        const visitorLeadId = leadId?.value
        cy.log('leadId ', visitorLeadId)
        
        // make some shopping
        cy.viewport('macbook-15')
        cy.visit('localhost:3000').wait(1000)
        addProductFromPage(initialStock[0], initialStock[1])

        // sign in with the existing user
        cy.visit('localhost:3000/login')
        cy.get('#email', {timeout: 1500})
        .type(user_email)
        .should('have.value', user_email)
        .type('{enter}').wait(1000)
        cy.task('getLastEmail', user_email).then((email)=> {
          const typedEmail = email as { body: string; html: string };
          cy.log('EMAIl FOUND: ', typedEmail)
          let body = typedEmail.body.toString()
          let url = body.slice(body.indexOf('http'))
          expect(url).to.not.be.empty
          cy.visit({url: url, method: 'POST'})
          .wait(1000)
          
          cy.url().should('not.include', '/user/info?first_login=true')
          cy.url().should('include', '/user/cart')

          cy.get('#swap-modal').should('be.visible')
          cy.get('#confirm-swap').click().wait(500)

          cy.url().should('include', '/cart')
          cy.url().should('not.include', '/user/')

          checkCart(Object.keys(userExpectedStock).length, userExpectedStock)

           // active lead id in the user should be the visitorLeadId
           cy.task('getUserWithLead', user_email).then((user) => {
            user.leads.map(lead => {
              if(lead.id === visitorLeadId){
                expect(lead.status).to.eq('lead')
              } else {
                expect(lead.status).to.eq('inactive')
              }
            })
          })
        })
      })
    })
  })
})


// A new user signs up with a non empty cart
    // new lead accesses the index
    // leadId and cartId are stored in memory
    // lead adds 2 items to shopping cart
    // cart contains 2 items X & Y
    // lead signs in succesfully
    // the lead is updated with the userId
    // user navigates to cart
    // cart contains 2 items X & Y
    // user navigates to the user/info page
    // correct leadId is displayed


// WORKFLOWS
// 1. Existing user without any leads signs in -> add userId in lead
// 2. Existing user with one active lead that is equal to the current leadId
// 3. Existing user with another active lead with an empty cart
  // add the userId in the current lead
  // set the other lead as inactive
  // join leads -> adds nonempty fields
// 4. Existing user with another lead that has an active, non-empty cart
  // add the userId in the current lead
  // ask the user if they want to keep the current cart
  // if yes,
  // if no, set the current cart as inactive and add the leadId in the other cart
  // set the other lead as inactive
  // join leads -> adds nonempty fields


// ** a factory must create a lead with a cart that has items and assign it to an email user
//user with active cart with items signs in for the first time. Existing cart is empty
    // lead_id and user.lead_id are different
    // the current lead is updated with the user_id and disabled
    // the leads active cart is also diasbled
    // an http only cookie with the leadId from the user is set
    // the user navigates to the cart page
    // the cart contains the items from the factory

// ** a factory must create a lead with a cart that has items and assign it to an email user
//user with active cart with items signs in. Existing cart already contains several items. This user wants to keep the existing items
    // sign in is succesfull
    // modal popup: Desea borrar los productos que tenia en su carrito antes de autenticarse y usar el carrito que su usuario tenia guardado? 
    // NO
    // the users active lead is disabled
    // the current lead is updated with the user_id

// ** a factory must create a lead with a cart that has items and assign it to an email user
//user with active cart with items signs in. Existing cart already contains several items. This user wants to use the user's saved cart
    // sign in is succesfull
    // modal popup: Desea borrar los productos que tenia en su carrito antes de autenticarse y usar el carrito que su usuario tenia guardado? 
    // SI
    // the current lead is updated with the user_id and disabled
    // the leads active cart is also diasbled
    // an http only cookie with the leadId from the user is set