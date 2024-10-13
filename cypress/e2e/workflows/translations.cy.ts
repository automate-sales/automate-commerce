// CHANGE LANG IN NAV
    // the url and content of the site change to the desired language
    // the user clicks on another page -> the language is maintained
    // the user closes the browser and opens it again -> the language is maintained

describe('Checks that the right language is chosen accoring to the users language preference', () => {
    it('performs the search query on large screen', ()=> {
        cy.viewport('macbook-15')
        cy.visit({
            url: 'localhost:3000',
            method: 'GET',
            headers: {
              'Accept-Language': 'es-ES,es;q=0.9'  // Spanish as the main language
            }
        })
        .wait(500)
        cy.get('#lang-selected').then((elem) => {
            expect(elem.text()).to.eq('es')
        })
        cy.get('#lang-selected').click().wait(500)
        cy.get('#lang-en').should('be.visible').click().wait(500)
        cy.url().should('include', '/en')
        cy.get('#lang-selected').then((elem) => {
            expect(elem.text()).to.eq('en')
        })
    })
})


describe('Changes the kanguage in the nav', () => {
    it('performs the search query on large screen', ()=> {
        cy.viewport('macbook-15')
        cy.visit({
            url: 'localhost:3000',
            method: 'GET',
            headers: {
              'Accept-Language': 'en-EN,en;q=0.9'  // English as the main language
            }
        })
        .wait(500)
        cy.get('#lang-selected').then((elem) => {
            expect(elem.text()).to.eq('en')
        })
        cy.get('#lang-selected').click().wait(500)
        cy.get('#lang-es').should('be.visible').click().wait(500)
        cy.url().should('include', '/es')
        cy.get('#lang-selected').then((elem) => {
            expect(elem.text()).to.eq('es')
        })
        cy.get('#shopNow').click().wait(500)
        cy.url().should('include', '/es/products')
    })
})

// CHANGE LANG IN URL
    // the url and content of the site change to the desired language
    // the user clicks on another page -> the language is maintained
    // the user closes the browser and opens it again -> the language is maintained
// CHANGE LANG DEPENDING ON LOCATION/LANG HEADER
    // the user enters the site with a given browser user-agent accept-language header
    // the site is displayed in the language of the user-agent header
    // the user changes the language in the nav
    // the site is displayed in the language selected by the user in the nav
    // the user changes pages -> the selected language is maintained