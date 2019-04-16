module.exports = {
    first_name: element(by.id('firstName')),
    last_name: element(by.id('lastName')),
    ID: element(by.id('knownAs')),
    house_number: element(by.id('houseNumber')),
    street_name: element(by.id('streetName')),
    house_number: element(by.id('houseNumber')),
    street_name: element(by.id('streetName')),
    city: element(by.id('townCity')),
    county: element(by.id('county')),
    postcode: element(by.id('postcode')),
    image_upload_button: element(by.css('[class="ccf-input-icon icon-image"]')),
    select_box: element.all(by.css('[class="ccf-select-box-inner"]')),
    text_area: element.all(by.tagName('textarea'))
}