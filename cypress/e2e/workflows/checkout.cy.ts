const LEAD_COOKIE = 'ergo_lead_id'

import { error } from "console"
// create a product with a price < $1 (declined payment)

import { addProductFromPage, checkCart, clickMiddle, existingUserEmailLogin, fillForm, logOut } from "../utils"

const customer1 = {
  full_name: "John Doe",
  email: "johndoe@doejohn.com",
  phone_number: "+50766887744"
}
const address1 = {
  street_1: "coconut st, bldg 1, apt 2",
  city: "Panama City",
  state: "panama_ciudad",
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

const productStocks = {
  'chair-axis-wh': 2,
  'stand-arm-alum-single-bl': 1,
  'chair-executive-stratus-gr': 2,
  'frame-double-bl': 1
}

describe('A lead tests the functionality of the checkout process', () => {
  const uniqueSessionId = `lead-${new Date().getTime()}`;
  before(() => {
    Cypress.session.clearAllSavedSessions();
    cy.clearAllCookies();
    cy.task('wipeTables');
  });
  beforeEach(() => {
    cy.session(uniqueSessionId, () => {
      cy.visit('localhost:3000').wait(1500);
      cy.getCookie(LEAD_COOKIE).then((leadId) => {
        if (leadId && leadId.value) {
          cy.log('Setting LEAD_COOKIE: ', leadId.value);
          cy.setCookie('leadId', leadId.value, { httpOnly: true });
        } else {
          cy.log('LEAD_COOKIE is null or undefined during session setup');
        }
      });
    }, { cacheAcrossSpecs: true });
  });

  it('Adds products to the cart', () => {
    cy.visit('localhost:3000').wait(500)
    addProductFromPage('chair-axis-wh', 2)
    addProductFromPage('stand-arm-alum-single-bl', 1)
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
    cy.viewport('macbook-15')
    cy.getCookie(LEAD_COOKIE).then(leadId => {
      cy.log('leadId ', leadId.value)
    })
    cy.visit('localhost:3000/checkout').wait(1000)
    cy.get(`#step-2-btn`).click()
    cy.get(`#step-2`).scrollIntoView().should('be.visible')
    fillForm('step-2', address1, ['state'])
    /* cy.get(`#${steps[1]}`).should('be.visible')
    cy.get(`#same_as_shipping`).click()
    Object.entries(address1).forEach(([key, value]) => {
      cy.get(`#${steps[1]} input[name="${key}"]`).should('have.value', value);
    }); */
    // the payment form should be visible after ticking the checkbox
    //cy.get(`#${steps[2]}`).should('be.visible')
  })
  it('tests the appllication of a valid coupon', () => {})
})

describe('A new lead makes a succesful order', () => {
  const uniqueSessionId = `lead-${new Date().getTime()}`;
  before(() => {
    Cypress.session.clearAllSavedSessions();
    cy.clearAllCookies();
    cy.task('wipeTables');
  });
  beforeEach(() => {
    cy.session(uniqueSessionId, () => {
      cy.visit('localhost:3000').wait(1500);
      cy.getCookie(LEAD_COOKIE).then((leadId) => {
        if (leadId && leadId.value) {
          cy.log('Setting LEAD_COOKIE: ', leadId.value);
          cy.setCookie('leadId', leadId.value, { httpOnly: true });
        } else {
          cy.log('LEAD_COOKIE is null or undefined during session setup');
        }
      });
    }, { cacheAcrossSpecs: true });
  });

  it('Adds products to the cart', () => {
    addProductFromPage('chair-executive-stratus-gr', 2)
    addProductFromPage('frame-double-bl', 1)
  })
  
  it('Checks cart', () => {
    cy.viewport('macbook-15')
    cy.visit('localhost:3000/cart')
    .wait(1000)
    /* cy.get(`#lead_id`).should("be.visible").invoke('text')
    .then(text => {
      expect(text.trim().length).to.be.greaterThan(8);
    }); */
    const expectedStock = {
      'chair-executive-stratus-gr': 2,
      'frame-double-bl': 1
    }
    checkCart(Object.keys(expectedStock).length, expectedStock)
    cy.get('#checkoutBtn').click()
    cy.url().should('include', '/checkout')
  })

  it('Fills out checkout', () => {
    const steps = [
      'step-1',
      'step-2',
      'step-3',
      'step-4'
    ]
    cy.viewport('macbook-15')
    cy.visit('localhost:3000/checkout')
    // validate subtotal, tax, delivery and total
    cy.get(`#${steps[0]}`).scrollIntoView().should('be.visible')
    //steps.map((s, i) => cy.get(`#${s}`).should(i===0? 'be.visible': 'not.be.visible'))
    fillForm(steps[0], customer1)
    clickMiddle()
    cy.get(`#${steps[1]}`).should('be.visible')
    fillForm(steps[1], address1, ['state'])
    clickMiddle()
    cy.get(`#${steps[2]}`).should('be.visible')
    fillForm(steps[2], address1, ['state'])
    clickMiddle()
    cy.get(`#${steps[3]}`).should('be.visible')
    fillForm(steps[3], {...validMasterCard, name: customer1.full_name})
    clickMiddle()
    cy.get('#mastercard-logo').should('be.visible')
    // validate subtotal, tax, delivery and total
    cy.get('#checkout-btn').click()
    //const success_msg = '¡Gracias por tu compra!'
    //cy.contains(success_msg).should("be.visible")
    cy.url().should('include', '/orders/confirmation?id=')
    cy.task('getLastEmail', customer1.email).then((email)=> {
      const typedEmail = email as { body: string; html: string };
      cy.log('EMAIl ', typedEmail)
      const body = typedEmail.body.toString()
      const orderId = body.split('identificador unico de tu orden es: ')[1]
      expect(orderId).to.not.be.empty
      expect(orderId).to.not.equal('undefined')
    })
    // cart is refreshed after the order is placed
    .wait(5000)
    cy.get('#cartBtn').click()
    cy.url().should('include', '/cart')
    // cart-items should not have any children
    cy.get('#cart-items').should('be.empty');
    // cart total value should be 0
    cy.get('#cart-total').then(elem => expect(elem.text()).eq('$0'))

  })
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
