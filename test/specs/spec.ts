///<reference path="../../node_modules/@types/jasmine/index.d.ts"/>

import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('protractor with typescript typings', () => {
    beforeEach(() => {
        browser.get('https://www.travelsupermarket.com/');
    });

    it('Say Hello', () => {
        console.log('Hello mate');
        browser.sleep(5000);
    });

    it('Say Goodbye', function() {
        console.log('Good bye Priyatel');
        browser.sleep(5000);
    });
});