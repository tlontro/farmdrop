Feature: Farmdrop Sign in Tests

  Scenario: Sign in successfully
    Given I am at the Farmdrop signup page
    When I fill in the email as "random_email"
    Then I fill in the password as "test123"
    Then I fill in the zipcode as "EC1V 9BP"
    Then I select the mailing list as "No, thanks"
    Then I click the 'Let's fix the food chain' button
    Then I shall be at the Home page
    Then I shall see the account item text as "Account"

  Scenario: Sign in successfully adding to the mailing list
    Given I am at the Farmdrop signup page
    When I fill in the email as "random_email"
    Then I fill in the password as "test123"
    Then I fill in the zipcode as "EC1V 9BP"
    Then I select the mailing list as "Add me to the mailing list"
    Then I click the 'Let's fix the food chain' button
    Then I shall be at the Home page
    Then I shall see the account item text as "Account"

  Scenario: Sign in successfully with capital letters
    Given I am at the Farmdrop signup page
    When I fill in the email as "random_email_cap"
    Then I fill in the password as "test123"
    Then I fill in the zipcode as "EC1V 9BP"
    Then I select the mailing list as "No, thanks"
    Then I click the 'Let's fix the food chain' button
    Then I shall be at the Home page
    Then I shall see the account item text as "Account"

# This scenario is giving back a 500 and should be a 400
  Scenario: Sign in fail for too long email
    Given I am at the Farmdrop signup page
    When I fill in the email as "too_long_email"
    Then I fill in the password as "test123"
    Then I fill in the zipcode as "EC1V 9BP"
    Then I select the mailing list as "No, thanks"
    Then I click the 'Let's fix the food chain' button
    Then I shall see an error saying "An unknown error occurred, if this persists please contact hello@farmdrop.com"
    Then I shall be at the Signup page
    Then I shall see the account item text as "Sign up or Log in"

  # Actual Issue - Email can't be blank is appearing twice!
  Scenario: Sign in Fail with blank Email
    Given I am at the Farmdrop signup page
    Then I fill in the password as "test123"
    Then I fill in the zipcode as "EC1V 9BP"
    Then I select the mailing list as "No, thanks"
    Then I click the 'Let's fix the food chain' button
    Then I shall see an error saying "Email can't be blank"
    Then I shall be at the Signup page
    Then I shall see the account item text as "Sign up or Log in"

  Scenario: Sign in Fail with blank Password
    Given I am at the Farmdrop signup page
    When I fill in the email as "random_email"
    Then I fill in the zipcode as "EC1V 9BP"
    Then I select the mailing list as "No, thanks"
    Then I click the 'Let's fix the food chain' button
    Then I shall see an error saying "Password can't be blank"
    Then I shall be at the Signup page
    Then I shall see the account item text as "Sign up or Log in"

  Scenario: Sign in Fail with blank Postcode
    Given I am at the Farmdrop signup page
    When I fill in the email as "random_email"
    Then I fill in the password as "test123"
    Then I select the mailing list as "No, thanks"
    Then I click the 'Let's fix the food chain' button
    Then I shall see an error saying "Zipcode can't be blank"
    Then I shall be at the Signup page
    Then I shall see the account item text as "Sign up or Log in"

  Scenario: Sign in Fail with no selection for Mailing list
    Given I am at the Farmdrop signup page
    When I click the 'Sign up with Facebook'
    Then I close the facebook popup
    Then I shall see an error saying "Failed to sign in with Facebook"
    Then I shall be at the Signup page
    Then I shall see the account item text as "Sign up or Log in"

  Scenario: Sign in Fail with Facebook and cancel
    Given I am at the Farmdrop signup page
    When I fill in the email as "random_email"
    Then I fill in the password as "test123"
    Then I fill in the zipcode as "EC1V 9BP"
    Then I click the 'Let's fix the food chain' button
    Then I shall see an error for the Mailing list as "Let us know if you would like to sign up for the latest seasonal news, updates and exclusive offers below:"
    Then I shall be at the Signup page
    Then I shall see the account item text as "Sign up or Log in"

  Scenario: Sign in password should be masked
    Given I am at the Farmdrop signup page
    Then the password field is masked
