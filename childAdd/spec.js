const child_details = require("../elements/child-details");
const login_settings = require("../elements/loginhelp");
const login_details = require("../elements/login");
const child_add_help = require("../elements/child-details-fil");

describe('add a child', function () {
    it('log in into foundation', function () {
        login_settings.logintofoundation()
        
    })
    it('get into proto',async function () {
        login_settings.getIntoProto()
        login_settings.stepProtoChildSection()

    })
    it('click add new child', async function () {
        debugger;
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(child_details.child_add_btn));
        browser.sleep(500);
        child_details.child_add_btn.click();
        browser.sleep(500);
        const currentURL = await browser.getCurrentUrl();
        expect(currentURL).toEqual("https://app.foundations.software/childcare/proto/child");
        browser.wait(ExpectedConditions.urlContains('child'));
    })
    it('filing child details', async function () {
        child_add_help.childDetailsFiling()

    })
    it ('filling address details',function () {
        child_add_help.addressDetailsFiling()
    })
    it ('filing more info section', function () {
        child_add_help.sectionMoreFiling()
    })
})