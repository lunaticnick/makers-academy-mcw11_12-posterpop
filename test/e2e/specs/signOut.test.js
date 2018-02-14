module.exports = {

  beforeEach : function(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setValue('input[type="text"]', 'example@test.com')
      .setValue('input[type="password"]', '123456')
      .click('#signInButton')
      .waitForElementVisible('.home', 5000)
  },

  'User is signed out when pressing the Sign Out button and sent to Sign In page': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .click('#logOutButton')
      .waitForElementVisible('.signInForm', 5000)
      .assert.urlEquals(devServer + '/#/sign_in')
      .end();
  },
}
