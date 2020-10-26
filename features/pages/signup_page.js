/* global require */
/* global module */
/*eslint no-undef: "error"*/
const common = require('./common_elements');

module.exports = {
	common,
	facebook: {css: '.sso-buttons__button__facebook'},
	email: {id: 'email'},
	password: {id: 'password'},
	zipcode: {id: 'zipcode'},
	addMailingList: {css: '[for="user[marketing_opt_in]-1"]'},
	noMailingList: {css: '[for="user[marketing_opt_in]-0"]'},
	mailingListError: {css: '[class*="marketing_opt_in__error"]'},
	privacyPolicy: {css: 'a[class*="marketing_opt_in__button"]'},
	submit: {css: 'button.fd-btn-success'}
};
