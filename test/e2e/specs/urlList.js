module.exports = {
  'Navigates to the links page for the current user': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setValue('input[type="text"]', 'example@test.com')
      .setValue('input[type="password"]', '123456')
      .click('#signInButton')
      .waitForElementVisible('#my_links', 5000)
      .click('#my_links')
      .assert.urlEquals(devServer + '/#/my_links')
      .end();
  },

  'Displays the saved links of the current user': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setValue('input[type="text"]', 'example@test.com')
      .setValue('input[type="password"]', '123456')
      .click('#signInButton')
      .waitForElementVisible('#my_links', 5000)
      .click('#my_links')
      .waitForElementVisible('#links-container', 5000)
      // .assert.containsText('#links-container', 'My Links')
      .assert.containsText('.listLinks', 'http://NOSALIVE.COM')
      .end();
  },

}
