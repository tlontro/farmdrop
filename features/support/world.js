/* global module */
/* global process */
/* global require */
var {setWorldConstructor} = require('cucumber');
var webdriver = require('selenium-webdriver');

function CustomWorld() {
	var browser = process.env.BROWSER || 'chrome';

	switch (browser) {
	case 'chrome':
		this.driver = new webdriver.Builder()
			.forBrowser('chrome')
			.build();
		this.driver.manage().window().maximize();
		break;

	case 'headless_chrome':
		this.driver = new webdriver.Builder().withCapabilities({
			browserName: 'chrome',
			chromeOptions: {
				args: ['headless', 'disable-gpu']
			},
			javascriptEnabled: true,
			acceptSslCerts: true,
			path: '/usr/local/bin/'
		}).build();

		this.driver.manage().window().setRect({
			'x': 0,
			'y': 23,
			'width': 1440,
			'height': 830
		});
		break;
	}
}

module.exports = function() {
	this.World = CustomWorld;
};

setWorldConstructor(CustomWorld);
