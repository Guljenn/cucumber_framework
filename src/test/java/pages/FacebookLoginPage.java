package pages;

import cucumber.api.java.en_lol.WEN;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Driver;

public class FacebookLoginPage {
    public FacebookLoginPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(id = "email")
    public WebElement emailInputBox;

    @FindBy(css = "input[type='password']")
    public WebElement passwordInputBox;

    @FindBy(css = "button[name='login']")
    public WebElement loginButton;

    @FindBy(xpath = "//span[text()='Guluzar Akin']")
    public WebElement userFacebookHomePage;

    @FindBy(css = "div[class='_9ay7']")
    public WebElement loginErrorMessage;





}
