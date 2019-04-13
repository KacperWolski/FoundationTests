const login_settings = require("../elements/loginhelp");
const login_details = require("../elements/login");
const child_details = require("../elements/child-details")

describe('add a child contact', function () {
    it('log in into foundation and reach proto child sect', function () {
        login_settings.logintofoundation()
        login_settings.getIntoProto()
        login_settings.stepProtoChildSection()
        browser.element(by.cssContainingText('.name-text-link', child_details.first_name_value)).click();
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
        browser.element(by.cssContainingText(child_details.next_button, 'Step')).click();
        browser.sleep(1000);
        child_details.select_box.click();
        browser.element(by.cssContainingText(child_details.option_value , 'Doctor')).click();
        browser.sleep(1000);
        browser.element.all(by.css('[class="inner-inactive"]')).get(0).click();
        browser.element.all(by.css('[class="inner-inactive"]')).get(2).click();
        browser.element(by.cssContainingText(child_details.next_button, 'Step')).click();
        browser.sleep(1000);
        browser.element(by.cssContainingText(child_details.next_button, 'Confirm')).click();

    })

})