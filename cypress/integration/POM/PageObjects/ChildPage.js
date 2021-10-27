///<reference types='cypress'/>
const DataFile = require('../../../fixtures/commonData.json')


class Child{

launchPage(){  
    cy.visit(DataFile.childWindowURL)
    cy.log('Landed in the Child Window')
}
   
}
export default Child