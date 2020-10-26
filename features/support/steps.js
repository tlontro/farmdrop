/* global require */
const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const until = require('selenium-webdriver/lib/until');
const faker = require('faker');
const homePage = require('../pages/home_page.js');
const loginPage = require('../pages/login_page.js');
const signupPage = require('../pages/signup_page.js');

Given(/^I am at the Farmdrop (.*?)$/,async function (page) {
	var pageUrl = '';
	switch (page) {
	case 'homepage':
		pageUrl = 'https://staging-web.farmdrop.com/london';
		break;
	case 'login page':
		pageUrl = 'https://staging-web.farmdrop.com/login';
		break;
	case 'signup page':
		pageUrl = 'https://staging-web.farmdrop.com/signup';
		break;
	}

	return await this.driver.get(pageUrl);
});

When(/^I fill in the login details as$/, function (dataTable) {
	var creds = dataTable.rowsHash();
	var fillEmail = this.driver.findElement(loginPage.email).sendKeys(creds.email);
	var fillPw = this.driver.findElement(loginPage.password).sendKeys(creds.password);

	return Promise.all([fillEmail, fillPw]);
});

Then(/^I click the 'Log in' button$/, function () {
	return this.driver.findElement(loginPage.submit).click();
});

Then(/^I shall see the account item text as "(.*?)"$/,async function (expectedText) {
	return await this.driver.sleep(2000).then(() => {
		return this.driver.findElement(homePage.header.account_txt).getText().then((el) => {
			expect(el.replace(/\n/g, ' ')).to.equal(expectedText);
		});
	});
});

Then(/^I shall be at the (.*?) page$/, function (thePage) {
	var content = '';
	switch (thePage) {
	case 'Home':
		content = 'farmdrop.com/london';
		break;
	case 'Login':
		content = 'farmdrop.com/login';
		break;
	}
	return this.driver.wait(until.urlContains(content), 5000, 'not on the correct page');
});

Then(/^I shall see an error saying "(.*?)"$/,async function (errorText) {
	return await this.driver.sleep(2000).then(() => {
		return this.driver.findElement(loginPage.common.error).getText().then(el => {
			expect(errorText).to.equal(el);
		});
	});
});

Then(/^the password field is masked$/,async function () {
	return await this.driver.sleep(2000).then(() => {
		return this.driver.findElement(loginPage.password).getAttribute('type').then(el => {
			expect(el).to.equal('password');
		});
	});
});

// Sign up Steps

Then(/^I fill in the (.*?) as "(.*?)"$/, function (field, value) {
	if (field == 'email') {
		switch (value) {
		case 'random_email':
			value = Math.floor(Math.random() * 1000) + faker.internet.email().toLowerCase();
			break;
		case 'random_email_cap':
			value = Math.floor(Math.random() * 1000) + faker.internet.email().toUpperCase();
			break;
		case 'too_long_email':
			value = 'x'.repeat(500) + faker.internet.email().toLowerCase();
			break;
		}
		value = (value == 'random_email' ? faker.internet.email().toLowerCase() : value);
	}
	return this.driver.findElement(signupPage[field]).sendKeys(value);
});

Then(/^I select the mailing list as "(.*?)"$/, function (text) {
	if (text == 'No, thanks') {
		return this.driver.findElement(signupPage.noMailingList).click();
	} else {
		return this.driver.findElement(signupPage.addMailingList).click();
	}
});

Then(/^I click the 'Let's fix the food chain' button$/, function () {
	return this.driver.findElement(signupPage.submit).click();
});

Then(/^I shall see an error for the Mailing list as "(.*?)"$/,async  function (errorText) {
	return this.driver.findElement(signupPage.mailingListError).getText().then(error => {
		expect(error).to.equal(errorText);
	});
});

When(/^I click the 'Sign up with Facebook'$/, function () {
	return this.driver.findElement(signupPage.facebook).click();
});

Then(/^I close the facebook popup$/, async function() {
	await this.driver.getAllWindowHandles().then((handles) => {
		return this.driver.switchTo().window(handles[1]).then(() => {
			return this.driver.close().then(() => {
				return this.driver.wait(this.driver.switchTo().window(handles[0]));
			});
		});
	});
});
