module.exports = {

  beforeEach : function(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer + '/#/sign_up')
      .waitForElementVisible('#app', 5000)
  },

  'Shows the Sign Up page': function test(browser) {

    browser
      .assert.elementPresent('.signUpForm')
      .end();
  },

  'Shows a Sign Up form on the Sign Up page': function test(browser) {

    browser
      .assert.elementPresent('#email')
      .assert.elementPresent('#password')
      .end();
  },

  'Shows the Sign Up button': function test(browser) {

    browser
      .assert.elementPresent('#signUpButton')
      .end();
  },

  'Redirects from Sign Up page to Sign In page': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .click('#signInHyperlink')
      .assert.urlEquals(devServer + '/#/sign_in')
      .end();
  },

  // // This test is hashed out because user is already registered - we have not created a dummy Firebase
  // // 'User is redirected to home page after Sign Up': function test(browser) {
  // //   const devServer = browser.globals.devServerURL;
  // //
  // //   browser
  // //     .url(devServer + "/#/sign_up")
  // //     .waitForElementVisible('#app', 5000)
  // //     .setValue('input[type="text"]', 'example@test.com')
  // //     .setValue('input[type="password"]', '123456')
  // //     .click('#signInButton')
  // //     .waitForElementVisible('.homeMessage', 5000)
  // //     .assert.containsText('.homeMessage', 'Welcome to posterpop!')
  // //     .end();
  // // },
  //
}
