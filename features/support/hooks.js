/* global require */
var {After, Before} = require('cucumber');
var {setDefaultTimeout} = require('cucumber');

Before(function () {
	setDefaultTimeout(30 * 1000);
});

After(function () {
	return this.driver.quit();
});
