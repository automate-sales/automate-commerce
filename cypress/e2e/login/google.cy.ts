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
    it('Is succesfull', () => {
      cy.clearCookies()
      cy.visit('localhost:3000/login')
    })
})