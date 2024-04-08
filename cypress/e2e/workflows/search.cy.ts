/* describe('Home Page Loads with Acceptable Performance', () => {
    it('loads succesfully', () => {
      cy.visit('localhost:3000')
    })
    //add stuff for performance testing
  })

describe('Search functionality works as expected', () => {
    it('performs the search query on large screen', ()=> {
        cy.viewport(1300, 800)
        cy.visit('localhost:3000')
        .wait(1500)
        cy.get('#search')
        .type('sillas')
        .should('have.value', 'sillas')
        .type('{enter}')
        cy.url().should('include', '/products')
    })
    it('performs the search query on small screen', ()=> {
        cy.visit('localhost:3000')
        .wait(1500)
        cy.get('#sidemenu-collapse').click()
        cy.get('#search')
        .type('sillas')
        .should('have.value', 'sillas')
        .type('{enter}')
        cy.url().should('include', '/products')
    })
  })


  describe('Search for an existing product with spaces', () => {
    it('performs the search query on large screen', ()=> {
        cy.viewport(1300, 800)
        cy.visit('localhost:3000')
        .wait(1500)
        cy.get('#search')
        .type('silla phaser')
        .should('have.value', 'silla phaser')
        .type('{enter}')
        cy.url().should('include', '/products')
        cy.get('#products').children().should('have.lengthOf', 1)
        cy.get('#chair-phaser-bl').click()
        cy.url().should('include', '/products/chair-phaser-bl')
    })
  }) */