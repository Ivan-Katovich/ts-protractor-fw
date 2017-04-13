///<reference path="../../node_modules/@types/jasmine/index.d.ts"/>
"use strict";
var protractor_1 = require('protractor');
describe('protractor with typescript typings', function () {
    beforeEach(function () {
        protractor_1.browser.get('https://www.travelsupermarket.com/');
    });
    it('Say Hello', function () {
        console.log('Hello mate');
        protractor_1.browser.sleep(5000);
    });
    it('Say Goodbye', function () {
        console.log('Good bye Priyatel');
        protractor_1.browser.sleep(5000);
    });
});
