///<reference types='cypress'/>
const locators = require('../PageElements/LoginPageElements.json')
const DataFile = require('../../../fixtures/userData.json')


class Login{

launchPage(){  
    cy.visit(Cypress.env('baseUrl'))
    cy.log('Landed in the PDP')
}

clickRegister(){
    cy.get(locators.Register).should('be.visible')
    cy.get(locators.Register).click()
}

login(){
    cy.get(locators.UserName).clear().type(DataFile.Username)
    cy.get(locators.Password).clear().type(DataFile.Password)

    cy.get(locators.LoginButton).click()
}

sucessMessage(){
    cy.get(locators.Title).should('be.visible')
    cy.get(locators.Title).should('contain.text', DataFile.Message)
}
   
}
export default Login