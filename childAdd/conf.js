exports.config = {
    framework: 'jasmine',
    capabilities: {
    browserName: 'chrome',
    },
    specs: ['spec.js' , 'check_spec.js'],
    //getPageTimeout: 300000,
}