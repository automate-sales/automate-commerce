const outOfStockMsg = 'Item is out of stock'
const successMsg = 'items were added to the cart'
const updateQtyMsg = 'Item quantity updated'
const removeItemMsg = 'Item removed from cart'

export const clearLocalStorage = () => {
  it('should clear local storage', () => {
    cy.clearLocalStorage();
    cy.getAllLocalStorage().then((result) => {
      expect(result).to.be.empty;
    })
  });
};

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
    cy.get('#cart-total').then(elem => expect(elem.text()).eq(`$${subtotal}`))
}

export const addProductFromPage = (sku:string, qty:number) => {
  cy.viewport(1300, 800)
  cy.visit(`localhost:3000/products/${sku}`)
  cy.get(`#${sku}-qty`).type('{backspace}').type(String(qty))
  cy.get(`#${sku}-add-to-cart`).click()
  .wait(500)
  cy.contains(successMsg).should("be.visible")
}

export const clickMiddle =() => {
  cy.window().then((win) => {
    const width = win.innerWidth;
    const height = win.innerHeight;
    cy.get('body').click(width / 2, height / 2);
  });
}

export const fillForm = (id: string, data: {[key:string]: string}, selects: Array<string>=[]) => {
  cy.log(`Filling form ${id} . . .`)
  Object.keys(data).map(key => {
    if(selects.includes(key)){
      cy.get("#".concat(id)).click();
      cy.get('body').then(($body) => {
        if ($body.find(`option[value="${data[key]}"]`).length > 0) {
          cy.log(`Found option: ${data[key]}`);
        } else {
          cy.log(`Option not found: ${data[key]}`);
        }
      });
      cy.get(`#${key}`).select(data[key]);
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
  cy.task('getLastEmail', email).then((email)=> {
    const typedEmail = email as { body: string; html: string };
    cy.log('EMAIl FOUND: ', typedEmail)
    let body = typedEmail.body.toString()
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