/* global require */
/* global module */
/*eslint no-undef: "error"*/
const header = require('./header');
const common = require('./common_elements');

module.exports = {
	header,
	common,
	email: {id: 'email'},
	password: {id: 'password'},
	submit: {id: 'email-login-form-submit'},
	email_pw_errors: {css: '.fd-alert-danger'}
};
