const child_details = require("../elements/child-details");
const login_settings = require("../elements/loginhelp");
const login_details = require("../elements/login");
const child_add_help = require("../elements/child-details-fil");

describe('creating an event', function () {
    it('log in into foundation', function () {
        login_settings.logintofoundation()
        
    })
    it('add new event',async function () {
        login_settings.getIntoProto()
        login_settings.stepProtoChildSection()
        browser.sleep(3000); 
        browser.element(by.cssContainingText('.name-text-link', child_details.first_name_value)).click();
        browser.sleep(3000); 
        browser.element(by.css('[class="icon-timeline-1 icon-2x"]')).click();
        browser.sleep(3000);
        browser.element(by.cssContainingText('.btn-text', 'Create')).click();
        browser.sleep(500);
        browser.element(by.css('[class="icon-meal icon-2x"]')).click();
        browser.element(by.css('[class="icon-medicine icon-2x"]')).click();
        browser.element(by.css('[class="icon-nappy icon-2x"]')).click();
        browser.element(by.css('[class="icon-sleep icon-2x"]')).click();
        browser.element.all(by.css('[class="ccf-input mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored"]')).get(1).sendKeys('1108p');
        browser.element.all(by.css('[class="ccf-input mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored"]')).get(2).sendKeys('1110p');
        browser.sleep(1000);
        browser.actions().mouseMove(element(by.cssContainingText('.upload-btn-text' , 'Photo'))).perform();
        browser.element(by.cssContainingText(child_details.next_button, 'Step')).click();
        browser.sleep(1000);
        browser.element(by.cssContainingText(child_details.next_button, 'Step')).click();
        browser.sleep(1000);
        browser.element(by.cssContainingText(child_details.next_button, 'Confirm')).click();
        browser.sleep(1000);
        browser.element.all(by.css('[class="icon icon-close"]')).get(1).click();
        browser.sleep(1000);
        browser.wait(ExpectedConditions.urlContains('child'));
        browser.actions().mouseMove(element(by.cssContainingText('.info-q' , 'When'))).perform();
        browser.sleep(2000);
        //expect(element(by.cssContainingText('.text-event-time' , '11:08')).isPresent()).toBeTruthy();
    })
})