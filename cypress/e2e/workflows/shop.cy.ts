//import { clearLocalStorage } from "../utils"

describe('A new lead enters the site and shops for a variety of items', () => {
  
  before(() => {
    cy.log('CLEARING COOKIES ...')
    Cypress.session.clearAllSavedSessions()
    cy.clearAllCookies()
  })

  beforeEach(() => {
    //cy.clearCookies()
    cy.session('lead', () => {
      cy.visit('localhost:3000')
      .wait(1000)
      cy.getCookie('ergo_lead_id').then(leadId => {
        cy.log('LEAD ID ****** ', leadId.value)
        cy.setCookie('leadId', leadId.value, {httpOnly: true})
      })
    }, {cacheAcrossSpecs: true})
  })

  const outOfStockMsg = 'Item is out of stock'
  const successMsg = 'items were added to the cart'
  const updateQtyMsg = 'Item quantity updated'
  const removeItemMsg = 'Item removed from cart'
  const warnMsg =(allowableQty: number, requestedQty: number) => `${allowableQty} items were added to the cart, ${requestedQty - allowableQty} are not in stock`
  
  const expectedStock = {
    'chair-vergex-bl': 0,
    'monitor-lg-20mk400h-bl': 0,
    'chair-xtc-gr': 2,
    // 'chair-stackx-bl': 1,
    "chair-gamer-apexelite-bl": 4,
    'stand-arm-alum-single-bl': 3,
    'chair-axis-wh': 3
  }
  //'chair-axis-wh': 10,
  //'stand-arm-alum-double-gr': 18,
  //'stand-laptop-adjus-sl': 30
  let cartSubtotal = 0
  it('Visits the index page', ()=> {
    cy.log('must create a lead with a cart')
    //cy.visit('localhost:3000')
    //.wait(1500)
    cy.getCookie('leadId').then(leadId => {
      cy.log('LEAD ID ****** ', leadId.value)
      /* expect(leadId).to.not.be.null
      cy.request('http://localhost:3000/api/trpc/lead.getOne?input='+encodeURIComponent(`{"json":"${leadId}"}`))
      .then(response => expect(response.body).to.not.be.empty) */
    })
  })
  /* it('Searches for a product', ()=> {
    //cy.restoreLocalStorage()
    cy.log('search must work')
    cy.viewport(1300, 800)
    cy.visit('localhost:3000')
    .wait(1500)
    cy.get('#search')
    .type('silla xtc')
    .should('have.value', 'silla xtc')
    .type('{enter}')
    cy.url().should('include', '/products')
    cy.url().should('include', 'query=silla%20xtc')
    cy.log('results must be relevant to the serach. partial matching')
  }) */
  it('Adds a product from the index', ()=> {
    //cy.restoreLocalStorage()
    let productSku = 'chair-xtc-gr'
    cy.viewport(1300, 800)
    cy.visit('localhost:3000/en/products?query=xtc')
    cy.get('#products').children().should('have.lengthOf', 1)
    cy.get(`#${productSku}-add-to-cart`).click()
    .wait(500)
    cy.contains(`1 ${successMsg}`).should("be.visible")

    // try to add the product again
    cy.get(`#${productSku}-add-to-cart`).click()
    .wait(500)
    cy.contains(warnMsg(0, 1)).should("be.visible")
  })

  it('Adds an out-of-stock product from the index', ()=> {
    //cy.restoreLocalStorage()
    let productSku = 'chair-vergex-bl'
    cy.viewport(1300, 800)
    cy.visit('localhost:3000/en/products?query=chair%20x')
    cy.get('#products').children().should('have.lengthOf.greaterThan', 1)
    cy.get(`#${productSku}-add-to-cart`).click()
    cy.contains(outOfStockMsg).should("be.visible")
    let productSku2 = 'chair-stackx-bl'
    cy.get(`#${productSku2}-add-to-cart`).click()
    .wait(500)
    cy.contains(`1 ${successMsg}`).should("be.visible")
  })
  it('Adds a product from the product page', ()=> {
    //cy.restoreLocalStorage()
    let productSku = 'stand-arm-alum-single-bl'
    let qty = 1
    cy.viewport(1300, 800)
    cy.visit(`localhost:3000/en/products/${productSku}`)
    cy.get(`#${productSku}-add-to-cart`).click()
    .wait(500)
    cy.contains(`1 ${successMsg}`).should("be.visible")
    qty = 2
    cy.get(`#${productSku}-qty`).type('{backspace}').type(String(qty))
    cy.get(`#${productSku}-add-to-cart`).click()
    .wait(500)
    cy.contains(`2 ${successMsg}`).should("be.visible")
  })
  it('Adds an out-of-stock product from the product page', ()=> {
    //cy.restoreLocalStorage()
    let productSku = 'monitor-lg-20mk400h-bl'
    cy.viewport(1300, 800)
    cy.visit(`localhost:3000/en/products/${productSku}`)
    cy.get(`#${productSku}-add-to-cart`).click()
    .wait(500)
    cy.contains(outOfStockMsg).should("be.visible")
  })
  it('Adds a product with available stock and qty > available stock', ()=> {
    //cy.restoreLocalStorage()
    let productSku = 'chair-gamer-apexelite-bl'
    cy.viewport(1300, 800)
    cy.visit(`localhost:3000/en/products/${productSku}`)
    let requestedQty = 5
    cy.get(`#${productSku}-qty`).type('{backspace}').type(String(requestedQty))
    cy.get(`#${productSku}-add-to-cart`).click()
    .wait(500)
    cy.contains(warnMsg(4, requestedQty)).should("be.visible")
  })
  it('Adds a product with 0 available stock but stock > 0', ()=> {
    //cy.restoreLocalStorage()
    let productSku = 'chair-xtc-gr'
    cy.viewport(1300, 800)
    cy.visit(`localhost:3000/en/products/${productSku}`)
    let requestedQty = 3
    cy.get(`#${productSku}-qty`).type('{backspace}').type(String(requestedQty))
    cy.get(`#${productSku}-add-to-cart`).click()
    .wait(500)
    cy.contains(warnMsg(0, requestedQty)).should("be.visible")
  })
  it('Browses through categories and adds a product', ()=> {
    cy.log('clicks on products link in the nav bar')
    cy.log('the categories page must be displayed')
    cy.log('clicking on a category displays its products')
    cy.log('A success message is displayed')
  })
  it('Adds a product from its subcategory', ()=> {
    cy.log('clicks on a subcategory in the nav bar')
    cy.log('the categories page must be displayed')
    cy.log('clicking on a category displays its products')
    cy.log('A success message is displayed')
  })
  it('Visits the cart page', ()=> {
    //cy.restoreLocalStorage()
    cy.log('Must display the correct products with the correct qtys')
    cy.log('Must display the correct subtotal')
    cy.viewport(1300, 800)
    cy.visit('localhost:3000/en/cart')
    .wait(100)
    //has the correct number of items and items have the correct values
    cy.get('#cart-items').children().should("have.length", 3)
    cy.get('#cart-items').children().each(elem => {
      let sku = elem.find('div.cart-item-sku').text()
      cy.log("Expected SKU", sku)
      expect(Object.keys(expectedStock)).include(sku)
      cy.get(`#${sku}-qty`).should('have.value', String(expectedStock[sku]))
      cy.get(`#${sku}-price`).then(price => {
        let total = expectedStock[sku] * Number(price.text().substring(1))
        cy.get(`#${sku}-total`).then(itemTotal => 
          expect(itemTotal.text()).eq(`$${total}`)
        )
        cartSubtotal += total
      })
    })
    cy.get('#cart-total').then(elem => expect(elem.text()).eq(`$${cartSubtotal}`))
  })
  it('Removes an item from the cart', ()=> {
    //cy.restoreLocalStorage()
    let productSku = 'chair-xtc-gr'
    cy.viewport(1300, 800)
    cy.visit('localhost:3000/cart')
    .wait(100)
    cy.get(`#${productSku}-price`).then(price => {
      let productTotal = expectedStock[productSku] * Number(price.text().substring(1))
      cartSubtotal-=productTotal
      cy.get(`#${productSku}-remove`).click()
      .wait(100)
      cy.contains(removeItemMsg).should("be.visible")
      cy.get('#cart-total').then(elem => expect(elem.text()).eq(`$${cartSubtotal}`))
    })
    cy.scrollTo('top')
  })
  it('Increases qty of an item', ()=> {
    //cy.restoreLocalStorage()
    // ADD MISSING CODE
  })
  it('Decreases qty of an item', ()=> {
    //cy.restoreLocalStorage()
    let productSku = 'stand-arm-alum-single-bl'
    cy.viewport(1300, 800)
    cy.visit('localhost:3000/cart')
    cy.get(`#${productSku}-price`).then(price => {
      let productTotal = Number(price.text().substring(1))
      cartSubtotal-=productTotal
      cy.get(`#${productSku}-qty`).should('have.value', String(expectedStock[productSku]))
      cy.get(`#${productSku}-qty`).type('{backspace}').type(String(expectedStock[productSku]-1))
      cy.get(`#${productSku}-qty`).should('have.value', String(expectedStock[productSku]-1))
      .wait(500)
      cy.contains(updateQtyMsg).should("be.visible")
      cy.get(`#${productSku}-qty`).should('have.value', String(expectedStock[productSku]-1))
      cy.get('#cart-total').then(elem =>
        expect(elem.text()).eq(`$${cartSubtotal}`)
      )
    })
  })
  it('Increases qty of an item to a qty > stock', ()=> {
    //cy.restoreLocalStorage()
    let productSku = 'chair-gamer-apexelite-bl'
    cy.viewport(1300, 800)
    cy.visit('localhost:3000/cart')
    cy.get(`#${productSku}-price`).then(price => {
      let productTotal = Number(price.text().substring(1))
      cartSubtotal+=productTotal
      cy.get(`#${productSku}-qty`).should('have.value', String(expectedStock[productSku]))
      cy.get(`#${productSku}-qty`).type('{backspace}').type(String(expectedStock[productSku]+3))
      cy.get(`#${productSku}-qty`).should('have.value', String(expectedStock[productSku]+3))
      .wait(600)
      let warning_msg = `Only ${4} available`
      cy.contains(warning_msg).should("be.visible")
      cy.get(`#${productSku}-qty`).should('have.value',4)
      cy.get('#cart-total').then(elem =>
        expect(elem.text()).eq(`$${cartSubtotal}`)
      )
    })
  })
  it('reviews the subtotal', ()=> {
    const finalExpectedStock = {
      'chair-vergex-bl': 0,
      'monitor-lg-20mk400h-bl': 0,
      'chair-xtc-gr': 0,
      'chair-stackx-bl': 0,
      'stand-arm-alum-single-bl': 2,
      'chair-gamer-apexelite-bl': 4
    }
    //cy.restoreLocalStorage()
    cy.viewport(1300, 800)
    cy.visit('localhost:3000/cart')
    .wait(100)
    //has the correct number of items and items have the correct values
    cy.get('#cart-items').children().should("have.length", 2)
    let finalCartSubtotal = 0
    cy.get('#cart-items').children().each(elem => {
      let sku = elem.find('div.cart-item-sku').text()
      expect(Object.keys(finalExpectedStock)).include(sku)
      cy.get(`#${sku}-qty`).should('have.value', String(finalExpectedStock[sku]))
      cy.get(`#${sku}-price`).then(price => {
        let total = finalExpectedStock[sku] * Number(price.text().substring(1))
        cy.get(`#${sku}-total`).then(itemTotal => 
          expect(itemTotal.text()).eq(`$${total}`)
        )
        finalCartSubtotal += total
      })
    })
    cy.get('#cart-total').then(elem => expect(elem.text()).eq(`$${finalCartSubtotal}`))
  })
})


/* describe('Searches for a product and adds it to cart', () => {
  clearLocalStorage()
  const productSku = 'chair-phaser-bl'
  it('Adds product to cart from product index', ()=> {
      cy.viewport(1300, 800)
      //cy.visit('localhost:3000')
      .wait(1500)
      cy.get('#search')
      .type('silla phaser')
      .should('have.value', 'silla phaser')
      .type('{enter}')
      cy.url().should('include', '/products')
      cy.get('#products').children().should('have.lengthOf', 1)
      cy.get(`#${productSku}-add-to-cart`).click()
      cy.url().then(url => expect(url.endsWith('/products')))
      //confirm that the cart item exists and has qty 1
      cy.getLocalStorage('ergonomica_cart_id').then(cartId => {
        expect(cartId).to.not.be.null
        cy.request('http://localhost:3000/api/trpc/product.getOne?input='+encodeURIComponent(`{"json":"${productSku}"}`)).then(response => {
          const productId = response.body.result.data.json.id  
          cy.request('http://localhost:3000/api/trpc/cartItem.getOne?input='+encodeURIComponent(`{"json":{"cartId":"${cartId}", "productId":"${productId}"}}`))
          .then(response => {
            expect(response.body.result.data.json.qty).to.equal(1)
          })
        })
      })
      cy.saveLocalStorage()
  })
  it('Updates product qty from the product page', ()=> {
    cy.restoreLocalStorage()
    cy.viewport(1300, 800)
    cy.visit(`localhost:3000/products/${productSku}`)
    .wait(2000)
    cy.get(`#${productSku}-qty`).type('{backspace}').type('2').should('have.value', '2')
    cy.get(`#${productSku}-add-to-cart`).click()
    //confirm that the cart item exists and has qty 1
    cy.getLocalStorage('ergonomica_cart_id').then(cartId => {
      expect(cartId).to.not.be.null
      cy.request('http://localhost:3000/api/trpc/product.getOne?input='+encodeURIComponent(`{"json":"${productSku}"}`)).then(response => {
      const productId = response.body.result.data.json.id  
      cy.request('http://localhost:3000/api/trpc/cartItem.getOneByCartAndProduct?input='+encodeURIComponent(`{"json":{"cartId":"${cartId}", "productId":"${productId}"}}`))
        .then(response => {
          expect(response.body.result.data.json.qty).to.equal(3)
        })
      })
    })
})
}) */

// Add to cart button works correctly

// New item is added to cart
  // cart displays the new item

// Existing item is added to cart
  // it sums the qtys and update the current carf item