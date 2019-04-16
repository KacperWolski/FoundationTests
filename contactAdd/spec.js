const login_settings = require("../elements/loginhelp");
const login_details = require("../elements/login");
const child_details = require("../elements/child-details-values")
const navigation = require("../elements/nav_elements");


describe('add a child contact', function () {
    it('log in into foundation and reach proto child sect', function () {
        login_settings.logintofoundation('piotr.wolski@connectchildcare.com' , 'dupadupa')
        login_settings.getIntoProto()
        login_settings.stepProtoChildSection()
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(navigation.child_add_btn));
	    navigation.child_add_btn.click();
        browser.sleep(1000);
    })
    it ('select a child' , function () {
        navigation.child_select('First Name');
    })
    it('contact add', function () {
        browser.sleep(1000);
        browser.element(by.css('[class="icon-contact-list icon-2x"]')).click();
        browser.sleep(1000);
        browser.element(by.cssContainingText('.ccf-btn-inner' , 'Contact')).click();
        browser.sleep(1000);
        browser.element(by.cssContainingText('.ccf-btn-inner' , 'Existing')).click();
        browser.sleep(1000);
        browser.element.all(by.css('[class="item-box"]')).get(1).click();
        browser.element.all(by.css('[class="item-box"]')).get(3).click();
        browser.element.all(by.css('[class="item-box"]')).get(2).click();
        navigation.next_button.click();
        browser.sleep(1000);
        navigation.select_box.click();
        browser.element(by.cssContainingText(navigation.option_value , 'Doctor')).click();
        browser.sleep(1000);
        browser.element.all(by.css('[class="inner-inactive"]')).get(0).click();
        browser.element.all(by.css('[class="inner-inactive"]')).get(2).click();
        navigation.next_button.click();
        browser.sleep(1000);
        navigation.confirm_button.click();

    })

})