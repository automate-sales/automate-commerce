// create a product with a price < $1 (declined payment)

import { addProductFromPage, checkCart, existingUserEmailLogin, fillForm, logOut } from "../utils"

const customer1 = {
  full_name: "John Doe",
  email: "johndoe@doejohn.com",
  phone_number: "+50766887744"
}
const address1 = {
  street_1: "coconut st, bldg 1, apt 2",
  city: "Panama City",
  state: "panama_ciudad",
  zip: "00000",
  country: "panama"
}
const customer2 = {
  full_name: "Sally Smith",
  email: "sally@smithsally.com",
  phone_number: "+50766887744",
}
const address2 = {
  address_1: "ocean st, bldg 2, apt 1",
  address_2: "by the stairwell",
  city: "Panama City",
  state: "panama_ciudad",
  zip: "00000",
  country: "panama"
}
const validMasterCard = {
  ccNumber: "5431111111111111",
  ccExp: "10/25",
  cvv: "999"
}
const validVisa = {
  ccNumber: "4111111111111111",
  ccExp: "10/25",
  cvv: "999"
}
const invalidVisa = {
  ccNumber: "4111111231111411",
  ccExp: "10/25",
  cvv: "999"
}

describe('A lead tests the functionality of the checkout process', () => {
  before(() => {
    Cypress.session.clearAllSavedSessions()
    cy.clearAllCookies()
  })
  beforeEach(() => {
    cy.session('lead', () => {
      cy.visit('localhost:3000')
      .wait(500)
      cy.getCookie('leadId').then(leadId => {
        cy.setCookie('leadId', leadId.value, {httpOnly: true})
      })
    }, {cacheAcrossSpecs: true})
  })
  it('Adds products to the cart', () => {
    addProductFromPage('chair-gamer-prodigy-gr', 2)
    addProductFromPage('frame-3stage-wh', 1)
  })
  /* it('tests lead signin during checkout', () => {
    const customerInfo = 'informacion_de_contacto'
    cy.log('Tests lead signin during checkout !!')
    cy.visit('localhost:3000/checkout')
    cy.get('#login').click()
    cy.url().should('include', '/login')
    cy.log('navigate to login page')
    existingUserEmailLogin(customer1.email, 'checkout')
    cy.url().should('include', '/checkout')
    cy.get(`#${customerInfo}`).should('be.visible')
    cy.get(`#${customerInfo}`).find(`input[name="full_name"]`)
    .should('have.value', customer1.full_name)
    cy.get(`#${customerInfo}`).find(`input[name="email"]`)
    .should('have.value', customer1.email)
    logOut()
  }) */
  it('tests the billing is same as shipping checkbox', () => {
    const steps = [
      'direccion_de_envio',
      'direccion_de_facturacion',
      'informacion_del_pago'
    ]
    cy.visit('localhost:3000/checkout')
    cy.get(`#${steps[0]}-btn`).click()
    cy.get(`#${steps[0]}`).should('be.visible')
    fillForm(steps[0], address1, ['state'])
    cy.get(`#${steps[1]}`).should('be.visible')
    cy.get(`#same_as_shipping`).click()
    Object.keys(address1).map(k => {
      cy.get(`#${steps[1]} input[name="${k}"]`).should('have.value', address1[k])
    })
    // the payment form should be visible after ticking the checkbox
    //cy.get(`#${steps[2]}`).should('be.visible')
  })
  it('tests the appllication of a valid coupon', () => {})
})

describe('A new lead makes a succesful order', () => {
  before(() => {
    Cypress.session.clearAllSavedSessions()
    cy.clearAllCookies()
  })
  beforeEach(() => {
    cy.session('lead', () => {
      cy.visit('localhost:3000')
      .wait(500)
      cy.getCookie('leadId').then(leadId => {
        cy.setCookie('leadId', leadId.value, {httpOnly: true})
      })
    }, {cacheAcrossSpecs: true})
  })
  
  it('Adds products to the cart', () => {
    addProductFromPage('chair-gamer-prodigy-gr', 2)
    addProductFromPage('frame-3stage-wh', 1)
  })
  
  it('Checks cart', () => {
    cy.visit('localhost:3000/cart')
    .wait(1000)
    cy.get(`#lead_id`).should("be.visible").invoke('text')
    .then(text => {
      expect(text.trim().length).to.be.greaterThan(8);
    });
    const expectedStock = {
      'chair-gamer-prodigy-gr': 2,
      'frame-3stage-wh': 1
    }
    checkCart(Object.keys(expectedStock).length, expectedStock)
    cy.get('#checkoutBtn').click()
    cy.url().should('include', '/checkout')
  })

  it('Fills out checkout', () => {
    const steps = [
      'informacion_de_contacto',
      'direccion_de_envio',
      'direccion_de_facturacion',
      'informacion_del_pago'
    ]
    cy.visit('localhost:3000/checkout')
    // validate subtotal, tax, delivery and total
    cy.get(`#${steps[0]}`).should('be.visible')
    steps.map((s, i) => cy.get(`#${s}`).should(i===0? 'be.visible': 'not.be.visible'))
    fillForm(steps[0], customer1)
    cy.get(`#${steps[1]}`).should('be.visible')
    fillForm(steps[1], address1, ['state'])
    cy.get(`#${steps[2]}`).should('be.visible')
    fillForm(steps[2], address1, ['state'])
    cy.get(`#${steps[3]}`).should('be.visible')
    fillForm(steps[3], {...validMasterCard, name: customer1.full_name})
    cy.get('#mastercard-logo').should('be.visible')
    // validate subtotal, tax, delivery and total
    cy.get('#checkout-btn').click()
    //const success_msg = '¡Gracias por tu compra!'
    //cy.contains(success_msg).should("be.visible")
    cy.url().should('include', '/order_confirmation?order=')
    cy.task('getLastEmail', customer1.email).then((email:{body:string, html:string})=> {
      cy.log('EMAIl ', email)
      const body = email.body.toString()
      const orderId = body.split('identificador unico de tu orden es: ')[1]
      expect(orderId).to.not.be.empty
      expect(orderId).to.not.equal('undefined')
    })
  })

  // it refreshes the cart count after the order is placed
})

//ERRORS

// test form validations
describe('A lead tries to make a purchase without filling out all the required inputs', () => {})

//empty order
describe('A lead tries to submit an empty order', () => {})

// invalid coupon
describe('A lead tries to use an invalid coupon', () => {})

// payment declined
describe('A lead tries to pay with a credit card that is declined', () => {})

// invalid card
describe('A lead tries to pay with an invalid credit card', () => {})

// reduced stock
describe('A lead tries to submit an order but one of the porducts has less stock than the cartItem qty', () => {})

// invalid amount
describe('A lead tries to submit an order but total doesnt match backend validation', () => {})
