import {filterAvailablePositionsByCity} from '../e2e/methods.cy'
require('cypress-xpath')
require('cypress-xpath')

describe('Musalasoft automation task', () => {
before(()=>{
cy.visit(Cypress.config().baseUrl)
Cypress.on('uncaught:exception', (err, runnable) => {
      return false
  })
})



  it('Test Case 4', () => {
    cy.xpath("//div[@id='menu']/descendant::a[contains(@href,'https://www.musala.com/careers/')]").click({force: true})
    cy.get("section[class='link_field']").find("a[href='join-us/']").click()
    cy.url().should('eq', 'https://www.musala.com/careers/join-us/')
    filterAvailablePositionsByCity('Sofia')
    filterAvailablePositionsByCity("Skopje")
  })

})
