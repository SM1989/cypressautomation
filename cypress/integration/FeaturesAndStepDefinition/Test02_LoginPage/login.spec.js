import LoginPage from '../../POM/PageObjects/LoginPage'

const login = new LoginPage()

Given('I navigate to the Login page',()=>{
    login.launchPage()
    cy.log('Navigated to the Login page')
})

And('I filled the login form with valid credentials',()=>{
    login.login()
    cy.log('Login Performed')
})

And('I clicked on the Register option',()=>{
    login.clickRegister()
    cy.log('Clicked on the Register option')
})

Then('I verified the sucessfull login',()=>{
    login.sucessMessage()
    cy.log('Verified the Login')
})

