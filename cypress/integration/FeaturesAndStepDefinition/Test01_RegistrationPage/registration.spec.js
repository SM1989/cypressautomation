import LoginPage from '../../POM/PageObjects/LoginPage'
import RegistrationPage from '../../POM/PageObjects/RegistrationPage'

const login = new LoginPage()
const register = new RegistrationPage()

Given('I navigate to the Home page',()=>{
    login.launchPage()
    cy.log('Navigated to the Home page')
})

And('I clicked on the Register option',()=>{
    login.clickRegister()
    cy.log('Clicked on the Register option')
})

And('I filled the registration form with valid data',()=>{
    register.registerUser()
    cy.log('Registrtion form filled')
})

Then('I verified the registration',()=>{
    register.sucessMessage()
    cy.log('Verified the Registration')
})