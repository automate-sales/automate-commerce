export const clearLocalStorage =()=> {
    it('should clear local storage', () => {
      cy.clearLocalStorage()
      cy.getLocalStorage('ergonomica_lead_id').should('be.null')
      cy.getLocalStorage('ergonomica_cart_id').should('be.null')
    })
}

export const checkCart =(expectedLength:number, expectedStock: {[key:string]: number}, subtotal=0)=> {
  cy.get('#cart-items').children().should("have.length", expectedLength)
    cy.get('#cart-items').children().each(elem => {
      let sku = elem.find('div.cart-item-sku').text()
      expect(Object.keys(expectedStock)).include(sku)
      cy.get(`#${sku}-qty`).should('have.value', String(expectedStock[sku]))
      cy.get(`#${sku}-price`).then(price => {
        let total = expectedStock[sku] * Number(price.text().substring(1))
        cy.get(`#${sku}-total`).then(itemTotal => 
          expect(itemTotal.text()).eq(`$${total}`)
        )
        subtotal += total
      })
    })
    cy.get('#sub-total').then(elem => expect(elem.text()).eq(`$${subtotal}`))
}

export const addProductFromPage = (sku:string, qty:number) => {
  cy.viewport(1300, 800)
  cy.visit(`localhost:3000/products/${sku}`)
  cy.get(`#${sku}-qty`).type('{backspace}').type(String(qty))
  cy.get(`#${sku}-add-to-cart`).click()
  .wait(500)
  const success_msg = `Has agregado ${qty} ${sku} al carrito`
  cy.contains(success_msg).should("be.visible")
}

export const fillForm = (id: string, data: {[key:string]: string}, selects: Array<string>=[]) => {
  cy.log(`Filling form ${id} . . .`)
  Object.keys(data).map(key => {
    if(selects.includes(key)){
      cy.get(`#${id}`).click()
      cy.contains(data[key]).click({force: true})
    } else {
      cy.get(`#${id}`).find(`input[name="${key}"]`)
      .clear()
      .type(data[key])
    }
  })
}


export const existingUserEmailLogin =(email:string, reroute:string)=> {
  const email_confirmation_msg = 'Te hemos enviado un correo. Confirmalo para iniciar sesión.'
  //const sign_in_success_msg = 'Ha iniciado sesión'
  cy.log('\n\n Logging in with existing user email . . .')
  cy.clearAllCookies()
  cy.visit('localhost:3000/login')
  .wait(1000)
  cy.get('#email')
  .type(email)
  .should('have.value', email)
  .type('{enter}')
  .wait(1000)
  cy.log('Email sent, checking inbox . . . ', email)
  cy.contains(email_confirmation_msg).should("be.visible")
  .wait(3000)
  cy.task('getLastEmail', email).then((email:{body:string, html:string})=> {
    cy.log('EMAIl FOUND: ', email)
    let body = email.body.toString()
    let url = body.slice(body.indexOf('http'))
    expect(url).to.not.be.empty
    cy.visit({url: url, method: 'POST'})
    .wait(1000)
    cy.url().should('eq', `http://localhost:3000/${reroute}`)
    //cy.contains(sign_in_success_msg).should("be.visible")
  })
}

export const logOut =()=> {
  //const logout_success_msg = 'Ha cerrado su sesión'
  cy.get('#userMenuBtn').click()
  cy.get('#signOutBtn').click()
  //cy.contains(logout_success_msg).should("be.visible")
}