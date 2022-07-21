import {goToContactUsFillUpFormSubmit} from '../e2e/methods.cy'
require('cypress-xpath')
require('cypress-xpath')

describe('Musalasoft automation task', () => {
before(()=>{
cy.visit(Cypress.config().baseUrl)
Cypress.on('uncaught:exception', (err, runnable) => {
      return false
  })
})

it('Test Case 1', () =>{

    cy.url().should('eq', 'https://www.musala.com/')
    cy.goToContactUsPage()
    cy.fixture('invalidEmails').each((email) => {
    goToContactUsFillUpFormSubmit('Trajche',email,' ','Subject','Automation task')
    cy.xpath("//span[contains(text(),'The e-mail address entered is invalid.')]").should("be.visible")
    })
})


})
