
# Template for web automation test

This is an example Cucumber JS project to Farmdrop Login/Sign in Pages

# Framework and tools

* **BDD Test Specification**: Cucumber (Gherkin), structured English sentences
* **Main Programming Language**: Javascript
* **UI Automation**: Selenium webdriver

## Environment Setup

Get last version of npm (example for OSXs):

	https://www.npmjs.com/get-npm

Required Node version:
  node v11.8
  > npm install node-latest-version --save
  or
  > brew install node

Download chromedriver and put it on:
  > /usr/local/bin/

Install project dependencies:
  (at the route of the project)
  > npm install

## Test execution

To run the tests execute command:
  chrome:
  > BROWSER=chrome npm run test
	
  headless_chrome:
  > BROWSER=headless_chrome npm run test

### Environment Variables

* **BROWSER** - name of the browser the test should be executed on, e.g. chrome or headless_chrome.



##### Execution:
> 15 scenarios (1 failed, 14 passed) 96 steps (1 failed, 2 skipped, 93
> passed) 1m57.209s

*There is one failure for the scenario: "Scenario: Sign in Fail with blank Email"
Where the error shows 2 lines saying the same error (BUG)!*

![](cucjs.gif)
