// search sillas shhould display all chairs. results should be paginated including more than one page. results should be listed in priority according to match criteria

// search with spaces

// search for a specific product should only return one product

// search for non existing products

describe('Search functionality works as expected', () => {
    it('performs the search query on large screen', ()=> {
        cy.viewport('macbook-15')
        cy.visit('localhost:3000')
        .wait(500)
        cy.get('#search').type('chair', {force: true})
        .should('have.value', 'chair')
        .type('{enter}', {force: true})
        cy.url().should('include', '/products')
        // first product should contain chair in the name
        cy.get('#products').children().first().then((product) => {
          expect(product.text().toLocaleLowerCase()).to.include('chair')
        } )
        // scroll to the bottom and expect to find the pagination element
        cy.scrollTo('bottom')
        cy.get('#pagination').should('be.visible')
        // click on the next page
        cy.get('#paginationNext').click()
        cy.url().should('include', '/products?page=1')
    })

    it('performs the search query on small screen', ()=> {
        cy.viewport('iphone-x')
        cy.visit('localhost:3000')
        .wait(1500)
        cy.get('#hamburgerMenu').click()
        cy.get('#search')
        .type('chairs')
        .should('have.value', 'chairs')
        .type('{enter}')
        cy.url().should('include', '/products')
        cy.get('#sideMenu').should('be.visible')
        // click at the middle of the screen
        cy.get('#closeDrawerBtn').should('be.visible').click()
        cy.get('#sideMenu').should('not.be.visible')
    })
  })

  describe('Search for an existing product by sku', () => {
    it('performs the search query on large screen', ()=> {
        cy.viewport('macbook-15')
        cy.visit('localhost:3000')
        .wait(1500)
        cy.get('#search')
        .type('chair-radix-bl', {force: true})
        .should('have.value', 'chair-radix-bl')
        .type('{enter}', {force: true})
        cy.url().should('include', '/products')
        cy.get('#products').children().first().then((product) => {
          expect(product.text().toLocaleLowerCase()).to.include('radix')
        } )
    })
  })

  describe('Search for an existing product with spaces', () => {
    it('performs the search query on large screen', ()=> {
        cy.viewport('macbook-15')
        cy.visit('localhost:3000')
        .wait(1500)
        cy.get('#search')
        .type('radix chair', {force: true})
        .should('have.value', 'radix chair')
        .type('{enter}', {force: true})
        cy.url().should('include', '/products')
        cy.get('#products').children().first().then((product) => {
          expect(product.text().toLocaleLowerCase()).to.include('radix')
        } )
    })
  })

  
  // search for a similar product (xc chair) -> should return the similar product
  describe('Search for a similar product', () => {
    it('performs the search query on large screen', ()=> {
        cy.viewport('macbook-15')
        cy.visit('localhost:3000')
        .wait(1500)
        cy.get('#search')
        .type('xc chair', {force: true})
        .should('have.value', 'xc chair')
        .type('{enter}', {force: true})
        cy.url().should('include', '/products')
        cy.get('#products').children().first().then((product) => {
          expect(product.text().toLocaleLowerCase()).to.include('xtc')
        } )
    })
  })

  // search for an inexistent product -> should return no results (and a no results icon)
  describe('Search for an inexistent product', () => {
    it('performs the search query on large screen', ()=> {
        cy.viewport('macbook-15')
        cy.visit('localhost:3000')
        .wait(1500)
        cy.get('#search')
        .type('spoons', {force: true})
        .should('have.value', 'spoons')
        .type('{enter}', {force: true})
        cy.url().should('include', '/products')
        cy.get('#products').children().should('have.length', 1)
        cy.get('#noResults').should('be.visible')
    })
  })