const child_details = require("../elements/child-details");
    module.exports = {
        childDetailsFiling: function () {
            browser.sleep(500);
            browser.element(by.css('[class="icon-add"]')).click();
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(child_details.first_name));
            child_details.first_name.sendKeys(child_details.first_name_value);
            child_details.last_name.sendKeys(child_details.last_name_value);
            child_details.ID.sendKeys(child_details.knownAs_value);
            browser.element(by.css('[class="mat-icon-button"]')).click();
            browser.element(by.css('[class="mat-calendar-arrow"]')).click();
            browser.element(by.cssContainingText('.mat-calendar-body-cell-content', '2016')).click();
            browser.element(by.cssContainingText('.mat-calendar-body-cell-content', 'OCT')).click();
            browser.element(by.cssContainingText('.mat-calendar-body-cell-content', '16')).click();
            browser.sleep(500);
            child_details.select_box.get(0).click();
            browser.element(by.cssContainingText(child_details.option_value, 'Female')).click();
            browser.sleep(500);
            child_details.select_box.get(1).click();
            browser.element(by.cssContainingText(child_details.option_value, 'Polish')).click();
            browser.actions().mouseMove(element(by.tagName('ccf-image-upload'))).perform();
            child_details.select_box.get(2).click();
            browser.element(by.cssContainingText(child_details.option_value, 'Gypsy')).click();
            child_details.select_box.get(3).click();
            browser.element(by.cssContainingText(child_details.option_value, 'Buddhist ')).click();
            browser.element(by.cssContainingText(child_details.next_button, 'Step')).click();
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(child_details.house_number));    
        },
        addressDetailsFiling: function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable((child_details.house_number).sendKeys(child_details.house_number_value)));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable((child_details.street_name).sendKeys(child_details.street_name_value)));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable((child_details.city).sendKeys(child_details.city_value)));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable((child_details.county).sendKeys(child_details.county_value)));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable((child_details.postcode).sendKeys(child_details.postcode_value)));
        browser.sleep(1000);
        browser.element(by.cssContainingText('.selected-value', 'Select')).click();
        browser.actions().mouseMove(element(by.cssContainingText(child_details.option_value, 'Scotland'))).perform();
        browser.element(by.cssContainingText(child_details.option_value, 'Scotland')).click();
        browser.element(by.cssContainingText(child_details.next_button, 'Step')).click();
        browser.sleep(1000);
        expect(element(by.id('school')).isPresent()).toBeTruthy();
        },
        sectionMoreFiling: function () {
            child_details.calendar_field.get(1).sendKeys(child_details.start_date);
        child_details.calendar_field.get(2).sendKeys(child_details.end_date);
        browser.element(by.cssContainingText('.selected-value', 'Select')).click();
        browser.element(by.cssContainingText(child_details.option_value, 'Inactive')).click();
        browser.element(by.id('school')).sendKeys(child_details.school_field);     
        browser.element(by.tagName('textarea')).sendKeys(child_details.allergies_field);
        browser.sleep(1000);
        browser.element.all(by.tagName('textarea')).get(1).sendKeys(child_details.notes_field);
        browser.sleep(1000);
        browser.element(by.cssContainingText(child_details.next_button, 'Step')).click();
        browser.sleep(1000);
        browser.element(by.cssContainingText(child_details.next_button, 'Confirm')).click();
        },
    }