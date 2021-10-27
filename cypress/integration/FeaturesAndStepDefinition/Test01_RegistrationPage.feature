@registration @automation
Feature: UI - Registration Page Verification
    Registration Verification

    Scenario: UI - Verification of Sucessfull Registration
        Given I navigate to the Home page
        And I clicked on the Register option
        And I filled the registration form with valid data
        Then I verified the registration