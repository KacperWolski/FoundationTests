const fields = require("../elements/child_details_elements");
const child_details = require("../elements/child-details-values");
const navigation = require("../elements/nav_elements")
module.exports = {
    childDetailsFiling: function () {
        browser.sleep(500);
        browser.element(by.css('[class="icon-add"]')).click();
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(fields.first_name));
        fields.first_name.sendKeys(child_details.first_name_value);
        fields.last_name.sendKeys(child_details.last_name_value);
        fields.ID.sendKeys(child_details.knownAs_value);
        browser.element(by.css('[class="mat-icon-button"]')).click();
        browser.element(by.css('[class="mat-calendar-arrow"]')).click();
        browser.element(by.cssContainingText('.mat-calendar-body-cell-content', '2016')).click();
        browser.element(by.cssContainingText('.mat-calendar-body-cell-content', 'OCT')).click();
        browser.element(by.cssContainingText('.mat-calendar-body-cell-content', '16')).click();
        browser.sleep(500);
        fields.select_box.get(0).click();
        browser.element(by.cssContainingText(navigation.option_value, 'Female')).click();
        browser.sleep(500);
        fields.select_box.get(1).click();
        browser.element(by.cssContainingText(navigation.option_value, 'Polish')).click();
        browser.actions().mouseMove(element(by.tagName('ccf-image-upload'))).perform();
        fields.select_box.get(2).click();
        browser.element(by.cssContainingText(navigation.option_value, 'Gypsy')).click();
        fields.select_box.get(3).click();
        browser.element(by.cssContainingText(navigation.option_value, 'Buddhist ')).click();
        navigation.next_button.click();
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(fields.house_number));
    },
    addressDetailsFiling: function () {
        fields.house_number.sendKeys(child_details.house_number_value);
        fields.street_name.sendKeys(child_details.street_name_value);
        fields.city.sendKeys(child_details.city_value);
        fields.county.sendKeys(child_details.county_value);
        fields.postcode.sendKeys(child_details.postcode_value);
        browser.element(by.cssContainingText('.selected-value', 'Select')).click();
        browser.actions().mouseMove(element(by.cssContainingText(navigation.option_value, 'Scotland'))).perform();
        browser.element(by.cssContainingText(navigation.option_value, 'Scotland')).click();
        navigation.next_button.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(element(by.cssContainingText('.selected-value', 'Select'))));
    },
    sectionMoreFiling: function () {
        navigation.calendar_field.get(1).sendKeys(child_details.start_date_value);
        navigation.calendar_field.get(2).sendKeys(child_details.end_date_value);
        browser.element(by.cssContainingText('.selected-value', 'Select')).click();
        browser.element(by.cssContainingText(navigation.option_value, 'Inactive')).click();
        browser.element(by.id('school')).sendKeys(child_details.school_field_value);
        fields.text_area.get(0).sendKeys(child_details.school_field_value);
        fields.text_area.sendKeys(child_details.allergies_field_value);
        fields.text_area.get(1).sendKeys(child_details.notes_field_value);
        navigation.next_button.click();
        browser.sleep(1000);
        navigation.confirm_button.click();
    },
}