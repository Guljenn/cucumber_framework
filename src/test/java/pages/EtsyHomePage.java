package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Driver;

import java.util.List;

public class EtsyHomePage {

    public EtsyHomePage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(css = "div[id='desktop-category-nav'] li>a>span")
    public List<WebElement> etsyMainNavigationItems;
}
