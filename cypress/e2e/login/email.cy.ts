// before each test:
    // seed users

// after each test case
    // logout
    // clearcookies
    // wipe users

//new user sign in from a random page
    // navigate to random page
    // click on login button
    // reroute to sign in
    // sign in with google
    // sign in success
    // the user is rerouted to the user/info page
    // a react toast success displays sign in success message
    // the user presses enter
        // the user is rerouted to the random page
    // user signout

//existing user sign in from a random page
    // the user is rerouted to the user/info page
    // a react toast success displays sign in success message

//existing user sign in from a login page
describe('An existing user signs in from the login page', () => {
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
      .wait(3000)
      cy.task('getLastEmail', 'user@testuser.com').then((email:{body:string, html:string})=> {
        cy.log('EMAIl FOUND: ', email)
        let body = email.body.toString()
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
      })
    })
  })


// ** The correct lead_id must always be stored in memory
//lead creates cart and then signs in for the first time
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