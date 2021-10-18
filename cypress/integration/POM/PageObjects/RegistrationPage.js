///<reference types='cypress'/>
const locators = require('../PageElements/LoginPageElements.json')
const locatorsRegister = require('../PageElements/RegistrationPageElements.json')
const DataFile = require('../../../fixtures/RegistrationData.json')


class Register{

clickRegister(){
    cy.get(locators.Register).should('be.visible')
    cy.get(locators.Register).click()
}

registerUser(){
    cy.get(locatorsRegister.FirstName).clear().type(DataFile.FirstName)
    cy.get(locatorsRegister.LastName).clear().type(DataFile.LastName)
    cy.get(locatorsRegister.Address).clear().type(DataFile.Address)
    cy.get(locatorsRegister.City).clear().type(DataFile.City)
    cy.get(locatorsRegister.State).clear().type(DataFile.State)
    cy.get(locatorsRegister.ZipCode).clear().type(DataFile.ZipCode)
    cy.get(locatorsRegister.Phone).clear().type(DataFile.Phone)
    cy.get(locatorsRegister.Ssn).clear().type(DataFile.SSN)
    cy.generateRandomString().then(($el) => {
        cy.get(locatorsRegister.Username).clear().type($el)
        cy.get(locatorsRegister.Password).clear().type(DataFile.Password)
        cy.get(locatorsRegister.Confirm).clear().type(DataFile.Confirm)
        cy.get(locatorsRegister.Register).click()
        cy.wrap($el).as('randomUserName');
        cy.setUsername($el);
        })
        
}

sucessMessage(){
    cy.get(locatorsRegister.SuccessMessage).should('be.visible')
    cy.get('@randomUserName').then(randomUserName => {
        cy.get(locatorsRegister.SuccessMessage).should('contain.text', randomUserName)
        })
}
   
}

export default Register