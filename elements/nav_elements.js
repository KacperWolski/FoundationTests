module.exports = { 
    select_box: element.all(by.css('[class="ccf-select-box-inner"]')),
    calendar_field : element.all(by.css('[class="ccf-input mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored"]')),
    option_value : ('.ccf-option-value'),
    //next_button : ('.ccf-btn-inner'),
    next_button: element(by.cssContainingText('.ccf-btn-inner', 'Step')),
    confirm_button: element(by.cssContainingText('.ccf-btn-inner', 'Confirm')),
    image_upload_button: element(by.css('[class="ccf-input-icon icon-image"]')),
    child_add_btn : element(by.css('[class="menu-icon icon-child icon-2x"]')),
    child_select: function (FirstName) {
        element(by.cssContainingText('.name-text-link', FirstName)).click();
    },
}