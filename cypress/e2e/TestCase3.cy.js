import {applyForQa } from '../e2e/methods.cy'
require('cypress-xpath')
require('cypress-xpath')

describe('Musalasoft automation task', () => {
before(()=>{
cy.visit(Cypress.config().baseUrl)
Cypress.on('uncaught:exception', (err, runnable) => {
      return false
  })
})



  it('Test Case 3', () =>{

    cy.url().should('eq', 'https://www.musala.com/')
    cy.xpath("//div[@id='menu']/descendant::a[contains(@href,'https://www.musala.com/careers/')]").click({force: true})
    cy.url().should('eq', 'https://www.musala.com/careers/')
    cy.get('button[type*="button"]').contains('Check our open positions').click()
    cy.url().should('eq', 'https://www.musala.com/careers/join-us/')
    cy.get('#get_location').select("Anywhere")
    cy.get("a[href*='/experienced-automation-qa-engineer/']").click()
    cy.get('h2').contains('General description').should('be.visible')
    cy.xpath("//p[contains(text(),'We build next generation IT solutions for impactful organizations')]").should('be.visible')
    cy.get('h2').contains('Requirements').should('be.visible')
    cy.xpath("//li[contains(text(),'Passionate about quality and striving to its improvement in every detail')]").should('be.visible')
    cy.get('h2').contains('Responsibilities').should('be.visible')
    cy.xpath("//li[contains(text(),'Participate in automation test tool selection')]").should('be.visible')
    cy.get('h2').contains('What we offer').should('be.visible')
    cy.xpath("//li[contains(text(),'Attractive compensation package – competitive salary, additional health insurance, “big family” bonus')]").should('be.visible')
    cy.get("input[value='Apply']").should('be.visible').click()
    applyForQa('aplicantname',' ',' ','cypress-logo.png','linkedinprofile','message')
    cy.get('#adConsentChx').click()
    cy.get("input[value='Send']").should('be.visible').click()
    cy.xpath("//div[contains(text(),'One or more fields have an error. Please check and try again.')]").should("be.visible")
   cy.get('.close-form').click()
    applyForQa(' ',' ',' ','TrajcheStojanovCV.pdf',' ',' ')
    cy.get("input[value='Send']").should('be.visible').click()
    cy.xpath("//div[contains(text(),'One or more fields have an error. Please check and try again.')]").should("be.visible")
     

  })

})
