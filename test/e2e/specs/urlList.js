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
      .setValue('input[type="file"]', require('path').resolve('./test/e2e/specs/testImage.jpg'))
      .click('#myLinks')
  },

  'Navigates to the links page for the current user': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .assert.urlEquals(devServer + '/#/my_links')
      .end();
  },

  'Displays the saved links of the current user': function test(browser) {

    browser
      .waitForElementVisible('#links-container', 5000)
      .assert.containsText('.list-links', 'http://NOSALIVE.COM')
      .end();
  },
}
