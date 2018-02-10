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

  'Shows the choose file button': function test(browser) {
  const devServer = browser.globals.devServerURL;

  browser
    .url(devServer)
    .waitForElementVisible('#app', 5000)
    .assert.elementPresent('.capture-photo')
    .verify.visible('input[id="chooseFile"]', 'choose file inputbox')
    .end();

  },

  'Shows the "Send image" button' : function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .click('input[id="chooseFile"]')
      .setValue('input[type="file"]', require('path').resolve('https://i.imgur.com/xo03IMi.jpg'))
      .assert.elementPresent('.capture-photo')
      .assert.elementPresent('#sendImage')
      .end();
  },

  'Shows the "Sign up" button' : function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('#signUpButton')
  },
};
