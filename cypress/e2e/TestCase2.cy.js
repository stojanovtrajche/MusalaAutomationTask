
require('cypress-xpath')
require('cypress-xpath')

describe('Musalasoft automation task', () => {
before(()=>{
cy.visit(Cypress.config().baseUrl)
Cypress.on('uncaught:exception', (err, runnable) => {
      return false
  })
})

it('Test Case 2', () =>{

  cy.url().should('eq', 'https://www.musala.com/')
  cy.xpath("//div[@id='menu']/descendant::a[contains(@href,'https://www.musala.com/company/')]").click({force: true})
  cy.url().should('eq', 'https://www.musala.com/company/')
  cy.scrollTo(0, 1000)
  cy.get('h2').contains('Leadership').should('be.visible')
  cy.scrollTo('bottom')
 cy.get('#wt-cli-accept-all-btn').click()
 cy.get('a[href*="https://www.facebook.com/MusalaSoft?fref=ts"]').invoke('removeAttr', 'target').click()
 cy.url().should('eq', 'https://www.facebook.com/MusalaSoft?fref=ts')
 cy.xpath("//span[contains(text(),'Reload')]").click()
 cy.get("image[style='height: 132px; width: 132px;']") // only the profile picture is with 132px height and width
 .should('be.visible')
  })

 
})
