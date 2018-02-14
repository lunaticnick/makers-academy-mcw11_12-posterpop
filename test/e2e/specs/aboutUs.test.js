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
      .click("#infoId")
      .waitForElementVisible('.aboutUsContent', 5000)
  },

  'User views the About Us content': function test(browser) {

    browser

      .assert.containsText('.aboutUsContent', 'About Us')
      .end();
  },

};
