package steps;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pages.FacebookLoginPage;
import utils.Driver;
import utils.Waiter;


public class FacebookSteps {

    WebDriver driver;
    FacebookLoginPage facebookLoginPage;

    @Before
    public void setup() {
        driver = Driver.getDriver();
        facebookLoginPage = new FacebookLoginPage();
    }


    @When("user enters an email as {string} and a password as {string}")
    public void userEntersAnEmailAsAndAPasswordAs(String email, String password) {
        facebookLoginPage.emailInputBox.sendKeys(email);
        facebookLoginPage.passwordInputBox.sendKeys(password);
        Waiter.pause(2);

    }

    @And("user then clicks on {string} button")
    public void userThenClicksOnButton(String Login) {
        facebookLoginPage.loginButton.click();
    }


    @Then("user should see home page with their name {string} displayed\"")
    public void userShouldSeeHomePageWithTheirNameDisplayed(String name) throws Throwable {
        Assert.assertTrue(facebookLoginPage.userFacebookHomePage.isDisplayed());
        Assert.assertEquals(name, facebookLoginPage.userFacebookHomePage.getText());

        // Write code here that turns the phrase above into concrete actions    throw new cucumber.api.PendingException();}
    }

    @Then("user should see a message starts with a {string}")
    public void userShouldSeeAMessageStartsWithA(String errorMessage) {
        Assert.assertEquals(errorMessage, facebookLoginPage.loginErrorMessage.getText());
    }
}