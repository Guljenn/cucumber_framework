Feature: Etsy Landing Page Validation


  @Regression
  Scenario: Validate Etsy main navigation headers
    Given user navigates to "https://www.etsy.com/"
    Then user should see below menu items link
      | Summer Clothing & Accessories | Jewelry & Accessories | Clothing & Shoes | Home & Living | Wedding & Party | Toys & Entertainment | Art & Collectibles | Craft Supplies | Gifts & Gift Cards |


