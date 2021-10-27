import users from '../../Services/users'

const user = new users()

Given('I created a get request for Users',()=>{
    user.getUser()
    cy.log('Created a get request for Users')
})

When('I verified the status code should be {string}',function(keyword){
    user.statusCode(keyword)
    cy.log(' verified the status code')
})

Then('I verified {string} attribute to be {string} in the response',function(keyword1,keyword2){
    user.verifyAttribute(keyword1,keyword2)
    cy.log('Verified the attribute')
})

Given('I created a Post request for Users',()=>{
    user.postUser()
    cy.log('Created a Post request for Users')
})

Given('I stored the {string} from the response',function(keyword){
    user.storeAttribute()
    cy.log('Stored the attribute - '+keyword)
})

