///<reference types='cypress'/>
const DataFile = require('../../fixtures/apiData.json')

// var response;
class user {

    getUser() {
        cy.request(DataFile.userBaseUrl + DataFile.userPath).then((rsp) => {
            cy.wrap(rsp).as('response');
        })
    }

    statusCode(code) {
        cy.get('@response').then(response => {
            expect(response.statusCode, code)
        })
    }

    verifyAttribute(keyword1, keyword2) {
        cy.get('@response').then(response => {
            cy.log('response -->' + response)
            expect(response.body).to.have.property(keyword1, keyword2)
        })
    }

    postUser() {
        cy.request('POST', DataFile.reqresUserBaseUrl + DataFile.reqresuserPath, { "name": "morpheus", "job": "leader" }).then((rsp) => {
            cy.wrap(rsp).as('response');
        })
    }

    storeAttribute(keyword) {
        cy.get('@response').then(response => {

            cy.wrap(response.body.keyword).as('keyword');
        })
        cy.get('@keyword').then(keyword => {
            cy.log('keyword --> '+keyword);
        })
    }

}
export default user