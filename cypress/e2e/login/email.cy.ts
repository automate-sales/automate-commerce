
// SEED DATA
// 1. create a user without any leads
// 2. create a user with an existing lead equal to the current lead
// 3. create a user with an existing lead different to the current lead with an empty cart
// 4. create a user with an existing lead different to the current lead with a nonempty cart

describe('An existing user signs in from the login page', () => {
    const email_confirmation_msg = 'Te hemos enviado un correo. Confirmalo para iniciar sesión.'
    const sign_in_success_msg = 'Ha iniciado sesión'
    const logout_success_msg = 'Ha cerrado su sesión'
    const default_locale = 'en'
    const existing_user_email = 'johndoe@doejohn.com'
    it('Is succesfull', () => {
      cy.clearAllCookies()
      cy.visit('localhost:3000/login')
      .wait(1000)
      cy.get('#email')
      .type(existing_user_email)
      .should('have.value', existing_user_email)
      .type('{enter}')
      //cy.contains(email_confirmation_msg).should("be.visible")
      .wait(1000)
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
    const email_confirmation_msg = 'Te hemos enviado un correo. Confirmalo para iniciar sesión.'
    const sign_in_success_msg = 'Ha iniciado sesión'
    const logout_success_msg = 'Ha cerrado su sesión'
    const default_locale = 'en'
    const existing_user_email = 'johndoe@doejohn.com'
    it('Is succesfull', () => {
      cy.clearAllCookies()
      cy.visit('localhost:3000/products/chair-stackx-bl')
      cy.get('#userIconBtn').click().wait(100)
      cy.get('#startSessionBtn').click().wait(1000)
      cy.url().should('include', '/login')
      cy.get('#email')
      .type(existing_user_email)
      .should('have.value', existing_user_email)
      .type('{enter}')
      //cy.contains(email_confirmation_msg).should("be.visible")
      .wait(1000)
      cy.task('getLastEmail', existing_user_email).then((email)=> {
        const typedEmail = email as { body: string; html: string };
        cy.log('EMAIl FOUND: ', typedEmail)
        let body = typedEmail.body.toString()
        let url = body.slice(body.indexOf('http'))
        expect(url).to.not.be.empty
        cy.visit({url: url, method: 'POST'})
        .wait(1000)
        cy.url().should('include', '/products/chair-stackx-bl')
      })
    })
  })


describe('A new user signs up with an empty cart', () => {
    const email_confirmation_msg = 'Te hemos enviado un correo. Confirmalo para iniciar sesión.'
    const sign_in_success_msg = 'Ha iniciado sesión'
    const logout_success_msg = 'Ha cerrado su sesión'
    const default_locale = 'en'
    it('Is succesfull', () => {
      cy.clearAllCookies()
      cy.visit('localhost:3000/login')
      .wait(1000)
      cy.get('#email')
      .type('user@testuser.com')
      .should('have.value', 'user@testuser.com')
      .type('{enter}')
      //cy.contains(email_confirmation_msg).should("be.visible")
      .wait(1000)
      cy.task('getLastEmail', 'user@testuser.com').then((email)=> {
        const typedEmail = email as { body: string; html: string };
        cy.log('EMAIl FOUND: ', typedEmail)
        let body = typedEmail.body.toString()
        let url = body.slice(body.indexOf('http'))
        expect(url).to.not.be.empty
        cy.visit({url: url, method: 'POST'})
        .wait(1000)
        cy.url().should('include', '/user/info?first_login=true')
        
        //cy.contains(sign_in_success_msg).should("be.visible")
        //fill out the user info
        //cy.get('#userMenuBtn').click()
        //cy.get('#signOutBtn').click()
        //.wait(1000)
        //cy.contains(logout_success_msg).should("be.visible")

        // LOG BACK IN -> shouldnt contain first_login=true
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