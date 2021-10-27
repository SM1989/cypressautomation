@login @automation
Feature: Login Page Verification
Login Verification

Scenario: Verification of Sucessfull Login
Given I navigate to the Login page
And I filled the login form with valid credentials
Then I verified the sucessfull login
Then I verified the child window