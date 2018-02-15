module.exports = {

  beforeEach : function(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
  },

  'Shows the Sign In page': function test(browser) {

    browser
      .assert.elementPresent('.signInForm')
      .end();
  },

  'Shows Sign In form on the Sign In page': function test(browser) {

    browser
      .assert.elementPresent('#email')
      .assert.elementPresent('#password')
      .end();
  },

  'Shows the Sign In button': function test(browser) {

    browser
      .assert.elementPresent('#signInButton')
      .end();
  },

  'Redirects from Sign In page to Sign Up page': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .click('#signUpHyperlink')
      .assert.urlEquals(devServer + '/#/sign_up')
      .end();
  },
}
