const login_settings = require("../elements/login");
const child_details = require("../elements/child-details-values")
    module.exports = {
        logintofoundation: function (login , password) {
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get(login_settings.foundationUrl);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(element(by.id('email'))));
        login_settings.email_field.sendKeys(login);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(login_settings.password_field.sendKeys(password)));
        login_settings.login_button.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(element(by.css('[class="menu-icon icon-child icon-2x"]'))));
        expect(element(by.css('[class="menu-icon icon-child icon-2x"]')).isPresent()).toBeTruthy();
        },

        getIntoProto: async function () {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(login_settings.proto_button));
        login_settings.proto_button.click();
        browser.sleep(500);

	const currentURL = await browser.getCurrentUrl();
	 browser.sleep(1000);
         expect(currentURL).toEqual("https://app.foundations.software/childcare/proto");

        //browser.getCurrentUrl().then((text) => expect(text).toEqual("https://app.foundations.software/childcare/proto"));
        browser.sleep(500);
        expect(protractor.ExpectedConditions.urlContains('proto')).toBeTruthy();
        browser.wait(ExpectedConditions.urlContains('proto'));
        },


        stepProtoChildSection: async function () {

         browser.sleep(500);
         browser.wait(protractor.ExpectedConditions.elementToBeClickable(child_details.child_add_btn));
         browser.sleep(500);
         child_details.child_add_btn.click();
         browser.sleep(500);
         const currentURL = await browser.getCurrentUrl();
	 browser.sleep(1000);
         expect(currentURL).toEqual("https://app.foundations.software/childcare/proto/child");
        },
    }
