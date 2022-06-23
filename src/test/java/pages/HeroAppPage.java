package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Driver;

import java.util.List;

public class HeroAppPage {

    public HeroAppPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(css = "#content>h3")
    public WebElement addRemoveHeading3;

    @FindBy(css = "button[onclick='addElement()']")
    public WebElement addElementButton;

    @FindBy(css = "#elements>button")
    public WebElement deleteElementButton;

    @FindBy(xpath = "//li/a")
    public List<WebElement> categoryLinks;

    @FindBy(css = ".example>h3")
    public WebElement contextMenuHeading3;

    @FindBy(css = ".example>p:nth-child(2)")
    public WebElement contextMenuParagraph1;

    @FindBy(css = ".example>p:nth-child(3)")
    public WebElement contextMenuParagraph2;

    @FindBy(id = "hot-spot")
    public WebElement rectangleBox;

    @FindBy(id = "username")
    public WebElement usernameInputBox;

    @FindBy(id = "password")
    public WebElement passwordInputBox;

    @FindBy(css = "i[class='fa fa-2x fa-sign-in']")
    public WebElement loginButton;

    @FindBy(id = "flash")
    public WebElement errorMessage;

    @FindBy(css = "div[class='example'] h3")
    public WebElement entryAdHeading;

    @FindBy(xpath = "//div[@class='example']/p[1]")
    public WebElement entryAdParagraph1;

    @FindBy(xpath = "//div[@class='example']/p[2]")
    public WebElement entryAdParagraph2;

    @FindBy(css = "div[class='example'] p>a")
    public WebElement entryAdClickHereLink;

    @FindBy(css = "div[class='modal-title']")
    public WebElement entryAdPopupModalMessage;

    public void clickOnCategoryLink(String linkText){
        for(WebElement link: categoryLinks){
            if(link.getText().equals(linkText)){
                link.click();
                break;
            }
        }
    }

}
