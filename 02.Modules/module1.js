function testFunction() {
    console.log('testFunction was called');
}

var testString = 'This is a test string';

// Module.exports helps to mark anything as part of this module

module.exports.testFunction = testFunction;
module.exports.testString = testString;