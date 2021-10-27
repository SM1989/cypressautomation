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
    //New Code-Start
    cy.get('td:nth-child(2) > b.ng-binding').then(($el) => {
        console.log('Price --> '+$el.text())
        console.log('Price splitted --> '+$el.text().split('$')[0].split('.')[1])
    })
    //New Code-Ends
    cy.get(locators.Title).should('be.visible')
    cy.get(locators.Title).should('contain.text', DataFile.Message)
}

childWindow(){
    cy.get(locators.childWindowFooter).should('be.visible')
    cy.get(locators.childWindowFooter).then(function(cw){
        const txt = cw.prop('href');
        cy.log('Child Window URL -----> '+txt);
        //cy.visit(txt);
        cy.setField(txt);
     })
}

   
}
export default Login