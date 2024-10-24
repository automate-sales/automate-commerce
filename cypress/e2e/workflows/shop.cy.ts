const LEAD_COOKIE = 'ergo_lead_id'

// ADD PRODUCT FROM INDEX / SEARCH
// ADD PRODUCT FROM PRODUCT PAGE
// ADD PRODUCT FROM CATEGORY/SUBCATEGORY
// ADD PRODUCT FROM CAROUSEL

// TEST THAT CATEGORIES ARE LISTED BY PRIORITY
// TEST THAT SUBCATEGORIES ARE LISTED BY PRIORITY
// TEST THAT PRODUCTS IN SUBCATEGORIES ARE LISTED BY PRIORITY
// TEST THAT PRODUCTS IN INDEX ARE LISTED BY PRIORITY

// TEST THAT INACTIVE PRODUCTS ARE NOT DISPLAYED
// TEST THAT PRODUCT VARIANTS WORK CORRECTLY

// TEST THAT CAROUSEL WITHOUT IMAGES ARE DISPLAYED CORRECTLY
// TEST THAT PRODUCT WITHOUT IMAGES ARE DISPLAYED CORRECTLY
// TEST THAT SUBCATEGORY WITHOUT IMAGES ARE DISPLAYED CORRECTLY
// TEST THAT CATEGORY WITHOUT IMAGES ARE DISPLAYED CORRECTLY

// TEST SHOPPING CART ICON UPDATES CORRECTLY AND REFLECTS THE CORRECT COUNT OF ITEMS

describe('A new lead enters the site and shops for a variety of items', () => {
  const uniqueSessionId = `lead-${new Date().getTime()}`;
  before(() => {
    Cypress.session.clearAllSavedSessions();
    cy.clearAllCookies();
    cy.task('wipeTables');
    cy.task('seedProducts');
  });
  beforeEach(() => {
    cy.session(uniqueSessionId, () => {
      cy.visit('localhost:3000').wait(1000);
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

  const outOfStockMsg = 'Item is out of stock'
  const successMsg = 'items were added to the cart'
  const updateQtyMsg = 'Item quantity updated'
  const removeItemMsg = 'Item removed from cart'
  const warnMsg =(allowableQty: number, requestedQty: number) => `${allowableQty} items were added to the cart, ${requestedQty - allowableQty} are not in stock`
  
  const expectedStock = {
    'chair-vergex-bl': 0,
    'light-arm-bl': 0,
    'chair-xtc-gr': 1,
    'chair-stack-gr': 1,
    'stand-arm-alum-single-bl': 3,
    'chair-axis-wh': 3
  }
  //'chair-axis-wh': 10,
  //'stand-arm-alum-double-gr': 18,
  //'stand-laptop-adjus-sl': 30
  
  let cartSubtotal = 0
  it('Visits the index page', ()=> {
    cy.viewport('macbook-15')
    cy.visit('localhost:3000').wait(1000)
    cy.getCookie(LEAD_COOKIE).should('exist');
    cy.window().its(`localStorage.${LEAD_COOKIE}`).then(leadId => {
      expect(leadId).to.not.be.null
    });
    cy.window().its(`sessionStorage.${LEAD_COOKIE}`).then(leadId => {
      expect(leadId).to.not.be.null
    })
  })

  it('Adds a product from the index', ()=> {
    let productSku = 'chair-xtc-gr'
    cy.viewport('macbook-15')
    cy.visit('localhost:3000/products?query=xtc')
    cy.get('#products').children().should('have.lengthOf', 1)
    cy.get(`#${productSku}-add-to-cart`).click().wait(500)
    cy.contains(`1 ${successMsg}`).should("be.visible")
    // try to add the product again
    cy.get(`#${productSku}-add-to-cart`).click().wait(500)
    cy.contains(warnMsg(0, 1)).should("be.visible")
  })

  it('Adds an out-of-stock product from the index', ()=> {
    let productSku = 'chair-vergex-bl'
    cy.viewport('macbook-15')
    cy.visit('localhost:3000/products?query=chair%20x')
    cy.get('#products').children().should('have.lengthOf.greaterThan', 1)
    cy.get(`#${productSku}-add-to-cart`).click()
    cy.contains(outOfStockMsg).should("be.visible")
    let productSku2 = 'chair-stack-gr'
    cy.visit(`localhost:3000/products?query=${productSku2}`)
    cy.get(`#${productSku2}-add-to-cart`).click().wait(500)
    cy.contains(`1 ${successMsg}`).should("be.visible")
  })

  it('Adds a product from the product page', ()=> {
    let productSku = 'stand-arm-alum-single-bl'
    let qty = 1
    cy.viewport('macbook-15')
    cy.visit(`localhost:3000/products/${productSku}`)
    cy.get(`#${productSku}-add-to-cart`).click().wait(500)
    cy.contains(`1 ${successMsg}`).should("be.visible")
    qty = 2
    cy.get(`#${productSku}-qty`).type('{backspace}').type(String(qty))
    cy.get(`#${productSku}-add-to-cart`).click().wait(500)
    cy.contains(`2 ${successMsg}`).should("be.visible")
  })

  it('Adds an out-of-stock product from the product page', ()=> {
    let productSku = 'light-arm-bl'
    cy.viewport('macbook-15')
    cy.visit(`localhost:3000/products/${productSku}`)
    cy.get(`#${productSku}-add-to-cart`).click()
    .wait(500)
    cy.contains(outOfStockMsg).should("be.visible")
  })

  it('Adds a product with available stock and qty > available stock', ()=> {
    let productSku = 'chair-axis-wh'
    cy.viewport('macbook-15')
    cy.visit(`localhost:3000/products/${productSku}`)
    let requestedQty = 5
    cy.get(`#${productSku}-qty`).type('{backspace}').type(String(requestedQty))
    cy.get(`#${productSku}-add-to-cart`).click().wait(500)
    cy.contains(warnMsg(3, requestedQty)).should("be.visible")
  })

  it('Adds a product with 0 available stock but stock > 0', ()=> {
    let productSku = 'chair-xtc-gr'
    cy.viewport('macbook-15')
    cy.visit(`localhost:3000/products/${productSku}`)
    let requestedQty = 3
    cy.get(`#${productSku}-qty`).type('{backspace}').type(String(requestedQty))
    cy.get(`#${productSku}-add-to-cart`).click().wait(500)
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
    cy.log('Must display the correct products with the correct qtys and correct subtotal')
    cy.viewport('macbook-15')
    cy.visit('localhost:3000/cart')
    cy.get('#cart-items', {timeout: 1500}).children().should("have.length", 4)
    cy.get('#cart-items').children().each(elem => {
      let sku = elem.find('div.cart-item-sku').text() as keyof typeof expectedStock
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
    let productSku = 'chair-axis-wh' as keyof typeof expectedStock
    cy.viewport('macbook-15')
    cy.visit('localhost:3000/cart')
    cy.get(`#${productSku}-price`, {timeout: 1500}).then(price => {
      let productTotal = expectedStock[productSku] * Number(price.text().substring(1))
      cartSubtotal-=productTotal
      cy.get(`#${productSku}-remove`).click()
      cy.contains(removeItemMsg, {timeout: 1500}).should("be.visible").wait(500)
      cy.get('#cart-total').then(elem => {
        expect(elem.text()).eq(`$${cartSubtotal}`)
      })
    })
    cy.scrollTo('top')
  })

  it('Increases qty of an item', ()=> {
    // ADD MISSING CODE
  })

  it('Decreases qty of an item', ()=> {
    let productSku = 'stand-arm-alum-single-bl' as keyof typeof expectedStock
    cy.viewport('macbook-15')
    cy.visit('localhost:3000/cart')
    cy.get(`#${productSku}-price`).then(price => {
      let productTotal = Number(price.text().substring(1))
      cartSubtotal-=productTotal
      cy.get(`#${productSku}-qty`).should('have.value', String(expectedStock[productSku]))
      cy.get(`#${productSku}-qty`).type('{backspace}').type(String(expectedStock[productSku]-1))
      cy.get(`#${productSku}-qty`).should('have.value', String(expectedStock[productSku]-1))
      cy.contains(updateQtyMsg, {timeout: 1500}).should("be.visible")
      cy.get(`#${productSku}-qty`).should('have.value', String(expectedStock[productSku]-1))
      cy.get('#cart-total').then(elem =>
        expect(elem.text()).eq(`$${cartSubtotal}`)
      )
    })
  })

  it('Increases qty of an item to a qty > stock', ()=> {
    let productSku = 'chair-stack-gr' as keyof typeof expectedStock
    cy.viewport('macbook-15')
    cy.visit('localhost:3000/cart')
    cy.get(`#${productSku}-price`).then(price => {
      let productTotal = Number(price.text().substring(1))
      cartSubtotal+=productTotal
      cy.get(`#${productSku}-qty`).should('have.value', String(expectedStock[productSku]))
      cy.get(`#${productSku}-qty`).type('{backspace}').type(String(expectedStock[productSku]+3))
      cy.get(`#${productSku}-qty`).should('have.value', String(expectedStock[productSku]+3))
      let warning_msg = `Only ${2} available`
      cy.contains(warning_msg, {timeout: 1500}).should("be.visible")
      cy.get(`#${productSku}-qty`).should('have.value', 2)
      cy.get('#cart-total').then(elem =>
        expect(elem.text()).eq(`$${cartSubtotal}`)
      )
    })
  })
  
  it('reviews the subtotal', ()=> {
    const finalExpectedStock = {
      'chair-vergex-bl': 0,
      'light-arm-bl': 0,
      'chair-xtc-gr': 1,
      'chair-stack-gr': 2,
      'stand-arm-alum-single-bl': 2,
      'chair-axis-wh': 0
    }
    //cy.restoreLocalStorage()
    cy.viewport('macbook-15')
    cy.visit('localhost:3000/cart')
    //has the correct number of items and items have the correct values
    cy.get('#cart-items', {timeout: 1500}).children().should("have.length", 3)
    let finalCartSubtotal = 0
    cy.get('#cart-items').children().each(elem => {
      let sku = elem.find('div.cart-item-sku').text() as keyof typeof finalExpectedStock
      expect(Object.keys(finalExpectedStock)).include(sku)
      cy.get(`#${sku}-qty`).should('have.value', String(finalExpectedStock[sku]))
      cy.get(`#${sku}-price`).then(price => {
        let total = finalExpectedStock[sku] * Number(price.text().substring(1))
        cy.get(`#${sku}-total`).then(itemTotal => 
          expect(itemTotal.text()).eq(`$${total}`)
        )
        cy.log('ITEM TOTAL ',sku, total)
        finalCartSubtotal += total
      })
    })
    cy.get('#cart-total').then(elem => expect(elem.text()).eq(`$${finalCartSubtotal}`))
 
  })
})


describe('A new lead enters the site and shops for a variety of items without any cookies or local storage', () => {
  before(() => {
    Cypress.session.clearAllSavedSessions();
    cy.clearAllCookies();
    cy.clearLocalStorage();
    cy.task('wipeTables');
    cy.task('seedProducts');
  });
  beforeEach(() => {
    cy.clearAllCookies();
  });

  const successMsg = 'items were added to the cart'
  const updateQtyMsg = 'Item quantity updated'
  const removeItemMsg = 'Item removed from cart'
  const warnMsg =(allowableQty: number, requestedQty: number) => `${allowableQty} items were added to the cart, ${requestedQty - allowableQty} are not in stock`
  
  const expectedStock = {
    'chair-xtc-gr': 1,
    'stand-arm-alum-single-bl': 3,
  }

  let cartSubtotal = 0
  it('Shops for some products', ()=> {
    cy.log('must create a lead with a cart')
    cy.visit('localhost:3000').wait(1500)
    cy.clearAllCookies();
    cy.clearLocalStorage();
    cy.getCookie(LEAD_COOKIE).should('not.exist');

    // ADD PRODUCT FROM INDEX
    let productSku = 'chair-xtc-gr' as keyof typeof expectedStock
    cy.visit('localhost:3000/products?query=xtc')
    cy.clearAllCookies();
    cy.clearLocalStorage();
    cy.get('#products').children().should('have.lengthOf', 1)
    cy.get(`#${productSku}-add-to-cart`).click()
    .wait(500)
    cy.contains(`1 ${successMsg}`).should("be.visible")
    cy.get(`#${productSku}-add-to-cart`).click()
    .wait(500)
    cy.contains(warnMsg(0, 1)).should("be.visible")

    // ADD PRODUCT FROM PRODUCT PAGE
    let productSku2 = 'stand-arm-alum-single-bl' as keyof typeof expectedStock
    let qty = 1
    cy.visit(`localhost:3000/products/${productSku2}`).wait(1000)
    cy.clearAllCookies();
    cy.clearLocalStorage();
    cy.get(`#${productSku2}-add-to-cart`).click()
    .wait(500)
    cy.contains(`1 ${successMsg}`).should("be.visible")
    qty = 2
    cy.get(`#${productSku2}-qty`).type('{backspace}').type(String(qty))
    cy.get(`#${productSku2}-add-to-cart`).click()
    .wait(500)
    cy.contains(`2 ${successMsg}`).should("be.visible")

    // VISIT THE CART PAGE
    cy.visit('localhost:3000/cart').wait(1000)
    cy.clearAllCookies();
    cy.clearLocalStorage();
    cy.get('#cart-items').children().should("have.length", 2)
    cy.get('#cart-items').children().each(elem => {
      let sku = elem.find('div.cart-item-sku').text() as keyof typeof expectedStock

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

    // REMOVE AN ITEM FROM THE CART
    cy.visit('localhost:3000/cart').wait(1000)
    cy.clearAllCookies();
    cy.clearLocalStorage();
    cy.get(`#${productSku}-price`).then(price => {
      let productTotal = expectedStock[productSku] * Number(price.text().substring(1))
      cartSubtotal-=productTotal
      cy.get(`#${productSku}-remove`).click()
      cy.contains(removeItemMsg, {timeout: 2000}).should("be.visible").wait(500)
      cy.get('#cart-total').then(elem => {
        expect(elem.text()).eq(`$${cartSubtotal}`)
        cy.log('CART TOTAL ', elem.text())
        cy.log('CART SUBTOTAL ', cartSubtotal)
      })
    })
    cy.scrollTo('top')

    // DECREASE QTY OF AN ITEM
    cy.visit('localhost:3000/cart').wait(1000)
    cy.clearAllCookies();
    cy.clearLocalStorage();
    cy.get(`#${productSku2}-price`).then(price => {
      let productTotal = Number(price.text().substring(1))
      cartSubtotal-=productTotal
      cy.get(`#${productSku2}-qty`).should('have.value', String(expectedStock[productSku2]))
      cy.get(`#${productSku2}-qty`).type('{backspace}').type(String(expectedStock[productSku2]-1))
      cy.get(`#${productSku2}-qty`).should('have.value', String(expectedStock[productSku2]-1))
      cy.contains(updateQtyMsg, {timeout: 2000}).should("be.visible").wait(500)
      cy.get(`#${productSku2}-qty`).should('have.value', String(expectedStock[productSku2]-1))
      cy.get('#cart-total').then(elem =>
        expect(elem.text()).eq(`$${cartSubtotal}`)
      )
    })

    const finalExpectedStock = {
      'stand-arm-alum-single-bl': 2,
    }
    cy.visit('localhost:3000/cart').wait(1000)
    cy.clearAllCookies();
    cy.clearLocalStorage();
    //has the correct number of items and items have the correct values
    cy.get('#cart-items').children().should("have.length", 1)
    let finalCartSubtotal = 0
    cy.get('#cart-items').children().each(elem => {
      let sku = elem.find('div.cart-item-sku').text() as keyof typeof finalExpectedStock
      expect(Object.keys(finalExpectedStock)).include(sku)
      cy.get(`#${sku}-qty`).should('have.value', String(finalExpectedStock[sku]))
      cy.get(`#${sku}-price`).then(price => {
        let total = finalExpectedStock[sku] * Number(price.text().substring(1))
        cy.get(`#${sku}-total`).then(itemTotal => 
          expect(itemTotal.text()).eq(`$${total}`)
        )
        cy.log('ITEM TOTAL ',sku, total)
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
      cy.viewport('macbook-15')
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
    cy.viewport('macbook-15')
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