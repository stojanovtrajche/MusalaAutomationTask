export function goToContactUsFillUpFormSubmit(name,email,mobile,subject,message) {
var name
var email
var mobile
var subject
var message

cy.get('h2').contains('Contact Us').should('be.visible')
cy.get('#cf-1').clear().type(name)
cy.get('#cf-2').clear().type(email)
cy.get('#cf-3').clear().type(mobile)
cy.get('#cf-4').clear().type(subject)
cy.get('#cf-5').clear().type(message)
cy.get('input[type*="submit"]').click()
}


export function applyForQa(aplicantname,email,mobile,file,linkedinprofile,message) {
    var aplicantname
    var email
    var mobile
    var file
    var linkedinprofile
    var message
cy.get('#cf-1').click().type(aplicantname)
    cy.get('#cf-2').click().type(email)
    cy.get('#cf-3').click().type(mobile)
    cy.get('input[type="file"]').attachFile(file);
    cy.get('#cf-5').click().type(linkedinprofile)
    cy.get('#cf-6').click().type(message)
    
}

export function filterAvailablePositionsByCity(city) {
var city
cy.get("select[id='get_location']").select(city)
cy.get("h2[class='card-jobsHot__title']").each(($element) => {
let txt = $element.text()
cy.log("Sofia open positions:")
cy.log("Position: " + txt + "\n")
cy.xpath(`//h2[text()='${txt}']/ancestor-or-self::a`).each(($hrefA) => {
let aText = $hrefA.attr('href') 
cy.log("More information: " + aText)
        })
    })
}