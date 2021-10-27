@api @automation
Feature: API - Get Request for Users Verification
    Get Request for Users Verification

    Scenario: API - Verification of Get Request for Users
        Given I created a get request for Users
        When I verified the status code should be "200"
        Then I verified "username" attribute to be "Bret" in the response

    Scenario: API - Verification of Post Request for Users
        Given I created a Post request for Users
        When I verified the status code should be "201"
        Then I verified "name" attribute to be "morpheus" in the response
        #And I stored the "id" from the response