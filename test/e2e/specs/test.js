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

  'capture photo redirection test': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .click('button[name=captureBtn]')
      .assert.urlEquals(devServer + '/#/photo')
      .end();
  },
};
