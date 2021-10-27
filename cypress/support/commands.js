// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


function generateRandomString(){
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < 20; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
Cypress.Commands.add('generateRandomString', generateRandomString)



function setUsername(arg){
  cy.readFile("cypress/fixtures/userData.json", (err, data) => {
    if (err) {
        return console.error(err);
    };
}).then((data) => {
    data.Username = arg;
    cy.writeFile("cypress/fixtures/userData.json", JSON.stringify(data))
})
}
Cypress.Commands.add('setUsername', setUsername)


function setField(arg){
  cy.readFile("cypress/fixtures/commonData.json", (err, data) => {
    if (err) {
        return console.error(err);
    };
}).then((data) => {
    data.childWindowURL = arg;
    cy.writeFile("cypress/fixtures/commonData.json", JSON.stringify(data))
})
}
Cypress.Commands.add('setField', setField)