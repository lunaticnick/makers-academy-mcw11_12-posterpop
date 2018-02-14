module.exports = {
  'User is redirected to home page after sign in': function test(browser) {
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

  'User is able to view the Log Out button on the navigation bar': function test(browser) {
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

  'Shows the "Send image" button': function test(browser) {
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
    .setValue('input[type="file"]', require('path').resolve('https://i.imgur.com/xo03IMi.jpg'))
    .assert.elementPresent('.capture-photo')
    .assert.elementPresent('#sendImage')
    .end();
  },
  // 'Shows the "Sign up" button': function test(browser) {
  //   const devServer = browser.globals.devServerURL;
  //
  //   browser
  //     .url(devServer + "/#/home")
  //     .waitForElementVisible('#app', 5000)
  //     .assert.elementPresent('#signUpButton')
  //     .end();
  // },
  // 'Shows the "Log in" button': function test(browser) {
  //   const devServer = browser.globals.devServerURL;
  //
  //   browser
  //     .url(devServer + "/#/home")
  //     .waitForElementVisible('#app', 5000)
  //     .assert.elementPresent('#logInButt')
  //     .end();
  // },
  //
  // 'Sign-up form redirection test': function test(browser) {
  //   const devServer = browser.globals.devServerURL;
  //
  //   browser
  //     .url(devServer + "/#/home")
  //     .waitForElementVisible('#app', 5000)
  //     .click('#signUpButton')
  //     .assert.urlEquals(devServer + '/#/sign_up')
  //     .end();
  // },
  //
  // 'Shows the "Sign in" page': function test(browser) {
  //   const devServer = browser.globals.devServerURL;
  //
  //   browser
  //     .url(devServer + '/#/sign_in')
  //     .waitForElementVisible('#app', 5000)
  //     .assert.elementPresent('.signInForm')
  //     .end();
  // },
  //
  // 'Shows a sign in form on the SignIn page': function test(browser) {
  //   const devServer = browser.globals.devServerURL;
  //
  //   browser
  //     .url(devServer + '/#/sign_in')
  //     .waitForElementVisible('#app', 5000)
  //     .assert.elementPresent('#email')
  //     .assert.elementPresent('#password')
  //     .end();
  // },
  //
  // 'Shows the "Sign up" page': function test(browser) {
  //   const devServer = browser.globals.devServerURL;
  //
  //   browser
  //     .url(devServer + '/#/sign_up')
  //     .waitForElementVisible('#app', 5000)
  //     .assert.elementPresent('.signUpForm')
  //     .end();
  // },
  //
  // 'Shows a sign up form on the signUp page': function test(browser) {
  //   const devServer = browser.globals.devServerURL;
  //
  //   browser
  //     .url(devServer + '/#/sign_up')
  //     .waitForElementVisible('#app', 5000)
  //     .assert.elementPresent('#email')
  //     .assert.elementPresent('#password')
  //     .end();
  // },
  //
  // 'Redirects from sign in page to sign up page': function test(browser) {
  //   const devServer = browser.globals.devServerURL;
  //
  //   browser
  //     .url(devServer + '/#/sign_in')
  //     .waitForElementVisible('#app', 5000)
  //     .click('#signUpHyperlink')
  //     .assert.urlEquals(devServer + '/#/sign_up')
  //     .end();
  // },
  //
  // 'Redirects from sign up page to sign in page': function test(browser) {
  //   const devServer = browser.globals.devServerURL;
  //
  //   browser
  //     .url(devServer + '/#/sign_up')
  //     .waitForElementVisible('#app', 5000)
  //     .click('#signInHyperlink')
  //     .assert.urlEquals(devServer + '/#/sign_in')
  //     .end();
  // },

};
