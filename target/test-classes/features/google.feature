Feature: Google Search Functionality

  Background:
    Given user navigates to "https://www.google.com/"


  @Regression @Google @Integration
  Scenario: Validate Google Search
    When user searches for "Tesla" on Google
    Then user should see "Tesla" in the url
    And user should see "Tesla" in the title

  @Smoke @Google @Functional
  Scenario: Validate Google Search Result
    When user searches for "Apple" on Google
    Then user should see results are more than 0




