const login = require("../elements/loginhelp");

describe('log in', function() {
    it('get website and login', function() {
        login.logintofoundation('piotr.wolski@connectchildcare.com' , 'dupadupa');
        browser.sleep(3000);
    })
    it ('proto click' , function () {
        login.getIntoProto();
        browser.sleep(3000);
    })
    it ('child click' , function () {
        login.stepProtoChildSection()
        browser.sleep(3000)
    })
}) 