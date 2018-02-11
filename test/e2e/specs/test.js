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
      .end();
  },
  'Shows the "Log in" button' : function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
    .url(devServer)
    .waitForElementVisible('#app', 5000)
    .assert.elementPresent('#logInButt')
    .end();
  },

  'Sign-up form redirection test' : function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
    .url(devServer)
    .waitForElementVisible('#app', 5000)
    .click('#signUpButton')
    .assert.urlEquals(devServer + '/#/sign_up')
    .end();
  },

  // 'Shows a form to fill in on the SignUp page': function test(browser) {
  //   const devServer = browser.globals.devServerURL;
  //
  //   browser
  //   .url(devServer)
  //   .waitForElementVisible('#app', 5000)
  //   .click('#signUpButton')
  //   .assert.elementPresent(".signUpForm")
  //   .end();
  // },

  'Shows the "Log out" button' : function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
    .url(devServer)
    .waitForElementVisible('#app', 5000)
    .assert.elementPresent('#logOutButton')
    .end();
  },

  'Shows the "Sign in" page' : function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
    .url(devServer + '/#/sign_in')
    .waitForElementVisible('#app', 5000)
    .assert.elementPresent('.signInForm')
    .end();
  },

  'Shows a sign in form on the SignIn page': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
    .url(devServer + '/#/sign_in')
    .waitForElementVisible('#app', 5000)
    .assert.elementPresent('#email')
    .assert.elementPresent('#password')
    .end();
  },

  'Shows the "Sign up" page' : function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
    .url(devServer + '/#/sign_up')
    .waitForElementVisible('#app', 5000)
    .assert.elementPresent('.signUpForm')
    .end();
  },

  'Shows a sign up form on the signUp page': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
    .url(devServer + '/#/sign_up')
    .waitForElementVisible('#app', 5000)
    .assert.elementPresent('#firstName')
    .assert.elementPresent('#lastName')
    .assert.elementPresent('#username')
    .assert.elementPresent('#email')
    .assert.elementPresent('#password')
    .assert.elementPresent('#password_confirmation')
    .end();
  },

  'Redirects from sign in page to sign up page' : function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
    .url(devServer + '/#/sign_in')
    .waitForElementVisible('#app', 5000)
    .click('#signUpHyperlink')
    .assert.urlEquals(devServer + '/#/sign_up')
    .end();
  },

  'Redirects from sign up page to sign in page' : function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
    .url(devServer + '/#/sign_in')
    .waitForElementVisible('#app', 5000)
    .click('#signUpHyperlink')
    .assert.urlEquals(devServer + '/#/sign_up')
    .end();
  },
};
