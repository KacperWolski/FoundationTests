const child_details = require("../elements/child-details");
const login_settings = require("../elements/login");
const login_help = require("../elements/loginhelp");
describe('add a child', function () {
    it('get into proto',async function () {
        login_help.logintofoundation();
        login_help.getIntoProto();
        browser.sleep(3000);
    })
    it('getting into childs section', function () {
        login_help.stepProtoChildSection();
        browser.sleep(3000);
    })
    it ('check child details', function () {
        browser.element(by.cssContainingText('.name-text-link' , 'First Name')).click();
        expect(element(by.cssContainingText('.item-value', child_details.first_name_value)).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('.item-value' , child_details.first_name_value)).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('.item-value' , child_details.last_name_value)).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('.item-value' , child_details.knownAs_value)).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('.item-value' , '16/10/2016')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('.item-value' , 'Female')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('.item-value' , 'Polish')).isPresent()).toBeTruthy();
        browser.actions().mouseMove(element(by.cssContainingText('.item-label' , 'Note'))).perform();
        expect(element(by.cssContainingText('.item-value' , 'Gypsy')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('.item-value' , 'Buddhist')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('.item-value' , child_details.house_number_value && child_details.street_name_value && child_details.street_name_value && child_details.city_value && child_details.county_value && child_details.postcode_value)).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('.item-value' , child_details.start_date)).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('.item-value' , child_details.end_date)).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('.item-value' , 'Inactive')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('.item-value' , child_details.school_field)).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('.item-value' , child_details.allergies_field)).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('.item-value' , child_details.notes_field)).isPresent()).toBeTruthy();
        browser.sleep(3000);
    })

})