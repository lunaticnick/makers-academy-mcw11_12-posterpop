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

  'User is redirected to home page after Sign In': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser

      .assert.urlEquals(devServer + '/#/home')
      .end();
  },

  'User is able to view the name of the app in the navigation bar': function test(browser) {

    browser
      .assert.elementPresent('.home')
      .assert.containsText('.home-message', 'posterpop!')
      .end();
  },

  'User is able to view the About Usnpm  link in the navigation bar': function test(browser) {

    browser
      .assert.containsText('li:nth-of-type(2)', 'About Us')
      .end();
  },

  'User navigates to the About Us page by redirection': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .waitForElementVisible('#infoId', 5000)
      .click("#infoId")
      .assert.urlEquals(devServer + '/#/about_us')
      .end();
  },

  'User redirects to home page after clicking posterpop logo in navigation bar': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .click(".nav-link")
      .assert.urlEquals(devServer + '/#/home')
      .end();
  },

  'User is able to view the Sign Out button on the navigation bar': function test(browser) {

    browser
      .assert.elementPresent('#logOutButton')
      .end();
  },


  'Shows the choose file button on the home page when logged in': function test(browser) {

    browser
      .assert.elementPresent('.capture-photo')
      .verify.containsText('.capture-photo__file-btn', 'Snap your poster')
      .end();
  },
};
