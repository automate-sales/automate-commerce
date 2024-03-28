type LhReport = {
    performance: number,
    accessibility: number,
    bestPractices: number,
    seo: number
  }
  
describe('Home Page Loads with Acceptable Performance', () => {
    /* const expectedScores = {
      performance: 40,
      accessibility: 60,
      bestPractices: 60,
      seo: 60
    }
    it('loads succesfully', () => {
        cy.visit('localhost:3000')
        cy.on('window:before:load', (win) => {
          cy.spy(win.console, 'error');
          cy.spy(win.console, 'warn');
        })
        cy.window().then((win) => {
          //expect(win.console.error).to.have.callCount(0);
          //expect(win.console.warn).to.have.callCount(0);
          console.log('ERRORS: ', win.console.error.length)
          console.log('WARNINGS: ', win.console.warn.length)
          console.log('LOGS: ', win.console.log.length)
        })
        cy.task('lighthouse', 'mobile').then((report: LhReport )=> {
          cy.log('MOBILE REPORT: ', JSON.stringify(report))
          for(let metric in report){
            expect(report[metric]).to.be.greaterThan(expectedScores[metric], metric)
          }
        })
        cy.task('lighthouse', 'desktop').then((report: LhReport )=> {
          cy.log('DESKTOP REPORT: ', JSON.stringify(report))
          for(let metric in report){
            expect(report[metric]).to.be.greaterThan(expectedScores[metric], metric)
          }
        })
      }) */
    })