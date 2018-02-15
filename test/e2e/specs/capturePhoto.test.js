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
  },

  'Shows the Send Image button': function test(browser) {

    browser
      .assert.elementPresent('#sendImage')
      .end();
  },

  'User can see the button with the poster link': function test(browser) {

    browser
      .click("#sendImage")
      .waitForElementVisible('button[id="extractedLinkButton"]', 10000)
      .assert.elementPresent('a[name="linkExtraction"]')
      .assert.containsText('#extractedLink', 'http://NOSALIVE.COM')
      .end();
  },

  'Redirect the extracted url to the actual website': function test(browser) {

    browser
      .click("#sendImage")
      .waitForElementVisible('button[id="extractedLinkButton"]', 10000)
      .click('a[name="linkExtraction"]')
      .assert.urlEquals('http://nosalive.com/')
    .end();
  },
};
