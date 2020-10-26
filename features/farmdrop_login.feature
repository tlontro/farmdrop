Feature: Farmdrop Login Tests

  Scenario: Login Successfully
    Given I am at the Farmdrop login page
    When I fill in the login details as
      | email    | barry_allen@maildrop.cc |
      | password | test123                 |
    Then I click the 'Log in' button
    Then I shall be at the Home page
    Then I shall see the account item text as "Account"

  Scenario: Login Successfully with capital letters
    Given I am at the Farmdrop login page
    When I fill in the login details as
      | email    | BARRY_ALLEN@MAILDROP.CC |
      | password | test123                 |
    Then I click the 'Log in' button
    Then I shall be at the Home page
    Then I shall see the account item text as "Account"

# # Errors:
#
# # HTML5 invalid email validation ignored
# - special characters
# - no @ sign
# - more than one @ sign

  Scenario: Login Fails for blank fields
    Given I am at the Farmdrop login page
    When I click the 'Log in' button
    Then I shall see an error saying "Invalid email or password."
    Then I shall be at the Login page
    Then I shall see the account item text as "Sign up or Log in"

  Scenario: Login Fail with invalid email
    Given I am at the Farmdrop login page
    When I fill in the login details as
      | email    | invalid_email@ishouldntexist.xx |
      | password | test123                         |
    Then I click the 'Log in' button
    Then I shall see an error saying "Invalid email or password."
    Then I shall be at the Login page
    Then I shall see the account item text as "Sign up or Log in"

  Scenario: Login password field should be masked
    Given I am at the Farmdrop login page
    Then the password field is masked
