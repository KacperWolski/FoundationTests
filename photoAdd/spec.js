const upload = require("../elements/helper-uploading");
const login_details = require("../elements/login");
const child_details = require("../elements/child-details-values");
const login_settings = require("../elements/loginhelp");
const navigation = require("../elements/nav_elements");



describe ('uplaod a photo ', function () {
    it('log in into foundation and reach proto child sect', function () {
        login_settings.logintofoundation()
        login_settings.getIntoProto()
        login_settings.stepProtoChildSection()
        browser.sleep(1000);
        browser.element(by.cssContainingText('.name-text-link', child_details.first_name_value)).click();
        browser.sleep(2000);
        
    })
    it('edit chidl details and add photo', async function () {
        browser.element(by.css('[class="icon-edit-1"]')).click();
        browser.sleep(3000);
        browser.actions().mouseMove(element(by.cssContainingText('.ccf-input' , 'Select'))).perform();
        browser.sleep(1000);
        browser.element(by.cssContainingText('.ccf-input' , 'Select').upload.uploadMedia(momo.jpeg));
        browser.sleep(3000);
        browser.element(by.cssContainingText(navigation.next_button, 'Step')).click();
        browser.sleep(1000);
        browser.element(by.cssContainingText(navigation.next_button, 'Step')).click();
        browser.sleep(1000);
        browser.element(by.cssContainingText(navigation.next_button, 'Step')).click();
        browser.sleep(1000);
        browser.element(by.cssContainingText(navigation.next_button, 'Confirm')).click();
        browser.sleep(3000);

    })

})
