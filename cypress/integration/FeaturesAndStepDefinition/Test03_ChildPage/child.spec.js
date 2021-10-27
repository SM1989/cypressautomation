import ChildPage from '../../POM/PageObjects/ChildPage'

const child = new ChildPage()

Given('I navigate to the child window',()=>{
    child.launchPage()
    cy.log('Navigated to the child window')
})
