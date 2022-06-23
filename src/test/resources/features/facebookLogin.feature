Feature: Validate Login Functionality


  Background:
    Given user navigates to "https://www.facebook.com/"

@Facebook
  Scenario Outline: Validate user can login into Facebook account with invalid credentials
    When user enters an email as "<email>" and a password as "<password>"
    And user then clicks on "Login" button
    Then user should see a message starts with a "<message>"
    Examples:
      | email                  | password    | message                                                                                             |
      |                        |             | The email or mobile number you entered isn’t connected to an account. Find your account and log in. |
      | jennincekara@gmail.com |             | The password you’ve entered is incorrect. Forgot Password?                                          |
      |                        | Z9b3hd76*** | The email or mobile number you entered isn’t connected to an account. Find your account and log in. |
      | jennincekara           | z9b3hd76*** | The password you’ve entered is incorrect. Forgot Password?                                          |
      | jennincekara@gmail.com | 9b3hd76***  | The password you’ve entered is incorrect. Forgot Password?                                          |

@Valid
  Scenario: Validate user can login into Facebook account with valid credentials
    When user enters an email as "jennincekara@gmail.com" and a password as "***********"
    And user then clicks on "Login" button
    Then user should see home page with their name "Guluzar Akin" displayed"








