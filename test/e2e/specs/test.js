module.exports = {

  'Shows the Sign In page': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.signInForm')
      .end();
  },

  'Shows Sign In form on the Sign In page': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('#email')
      .assert.elementPresent('#password')
      .end();
  },

  'Shows the Sign In button': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('#signInButton')
      .end();
  },

  'Redirects from Sign In page to Sign Up page': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .click('#signUpHyperlink')
      .assert.urlEquals(devServer + '/#/sign_up')
      .end();
  },

  'User is redirected to home page after Sign In': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setValue('input[type="text"]', 'example@test.com')
      .setValue('input[type="password"]', '123456')
      .click('#signInButton')
      .waitForElementVisible('.homeMessage', 5000)
      .assert.containsText('.homeMessage', 'Welcome to your mEVENTo page!')
      .end();
  },

  'Shows the Sign Up page': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer + '/#/sign_up')
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.signUpForm')
      .end();
  },

  'Shows a Sign Up form on the Sign Up page': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer + '/#/sign_up')
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('#email')
      .assert.elementPresent('#password')
      .end();
  },

  'Shows the Sign Up button': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer + "/#/sign_up")
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('#signUpButton')
      .end();
  },

  // This test is hashed out because user is already registered - we have not created a dummy Firebase
  // 'User is redirected to home page after Sign Up': function test(browser) {
  //   const devServer = browser.globals.devServerURL;
  //
  //   browser
  //     .url(devServer + "/#/sign_up")
  //     .waitForElementVisible('#app', 5000)
  //     .setValue('input[type="text"]', 'example@test.com')
  //     .setValue('input[type="password"]', '123456')
  //     .click('#signInButton')
  //     .waitForElementVisible('.homeMessage', 5000)
  //     .assert.containsText('.homeMessage', 'Welcome to your mEVENTo page!')
  //     .end();
  // },

  'Redirects from Sign Up page to Sign In page': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer + '/#/sign_up')
      .waitForElementVisible('#app', 5000)
      .click('#signInHyperlink')
      .assert.urlEquals(devServer + '/#/sign_in')
      .end();
  },

  'User is able to view the name of the app in the navigation bar': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setValue('input[type="text"]', 'example@test.com')
      .setValue('input[type="password"]', '123456')
      .click('#signInButton')
      .waitForElementVisible('.home', 5000)
      .assert.elementPresent('.home')
      .assert.containsText('.nav-item', 'mEVENTo')
      .end();
  },

  'User is able to view the About Us link in the navigation bar': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setValue('input[type="text"]', 'example@test.com')
      .setValue('input[type="password"]', '123456')
      .click('#signInButton')
      .waitForElementVisible('.home', 5000)
      .assert.elementPresent('.home')
      .assert.containsText('li:nth-of-type(2)', 'About Us')
      .end();
  },

  'User navigates to the About Us page by redirection': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setValue('input[type="text"]', 'example@test.com')
      .setValue('input[type="password"]', '123456')
      .click('#signInButton')
      .waitForElementVisible('#infoId', 5000)
      .click("#infoId")
      .assert.urlEquals(devServer + '/#/about_us')
      .end();
  },

  'User is able to view the Sign Out button on the navigation bar': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setValue('input[type="text"]', 'example@test.com')
      .setValue('input[type="password"]', '123456')
      .click('#signInButton')
      .waitForElementVisible('#logOutButton', 5000)
      .assert.elementPresent('#logOutButton')
      .end();
  },

  'User is signed out when pressing the Sign Out button and sent to Sign In page': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setValue('input[type="text"]', 'example@test.com')
      .setValue('input[type="password"]', '123456')
      .click('#signInButton')
      .waitForElementVisible('#logOutButton', 5000)
      .click('#logOutButton')
      .waitForElementVisible('.signInForm', 5000)
      .assert.urlEquals(devServer + '/#/sign_in')
      .end();
  },

  'Shows the choose file button on the home page when logged in': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setValue('input[type="text"]', 'example@test.com')
      .setValue('input[type="password"]', '123456')
      .click('#signInButton')
      .waitForElementVisible('.capture-photo', 5000)
      .assert.elementPresent('.capture-photo')
      .verify.visible('input[id="chooseFile"]', 'choose file inputbox')
      .end();
  },

  'Shows the Send Image button': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setValue('input[type="text"]', 'example@test.com')
      .setValue('input[type="password"]', '123456')
      .click('#signInButton')
      .waitForElementVisible('.capture-photo', 5000)
      .assert.elementPresent('.capture-photo')
      .verify.visible('input[id="chooseFile"]', 'choose file inputbox')
      .setValue('input[type="file"]', require('path').resolve('./test/e2e/specs/NosAlive.jpg'))
      .assert.elementPresent('.capture-photo')
      .assert.elementPresent('#sendImage')
      .end();
  },

  'User can see the button with the poster link': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setValue('input[type="text"]', 'example@test.com')
      .setValue('input[type="password"]', '123456')
      .click('#signInButton')
      .waitForElementVisible('#chooseFile', 5000)
      .setValue('input[type="file"]', require('path').resolve('./test/e2e/specs/NosAlive.jpg'))
      .click("#sendImage")
      .assert.elementPresent('a[name="linkExtraction"]')
      .waitForElementVisible('button[id="extractedLinkButton"]', 10000)
      .click('a[name="linkExtraction"]')
      .assert.urlEquals('http://nosalive.com/')
      .end();
  },

};
