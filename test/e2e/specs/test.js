module.exports = {
  'default e2e tests': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.page-title')
      .assert.containsText('h1', 'Hi!')
      .assert.elementPresent('.capture-photo')
      .end();
  },

  'navigation bar title test': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.home')
      .assert.containsText('.nav-item', 'Title')
      .end();
  },

  'navigation bar about us test': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.home')
      .assert.containsText('li:nth-of-type(2)', 'About Us')
      .end();
  },

  'navigation bar about us redirection test': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .click("#infoId")
      .assert.urlEquals(devServer + '/#/about_us')
      .end();
  },
};
