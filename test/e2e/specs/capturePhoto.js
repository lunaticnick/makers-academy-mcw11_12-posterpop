module.exports = {
  'Redirect the extracted url to the actual website': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setValue('input[type="text"]', 'example@test.com')
      .setValue('input[type="password"]', '123456')
      .click('#signInButton')
      .waitForElementVisible('#chooseFile', 5000)
      .setValue('input[type="file"]', require('path').resolve('/Users/lan/Desktop/makers_academy/week11/mEVENTo/test/e2e/specs/NosAlive.jpg'))
      .click("#sendImage")
      .assert.elementPresent('a[name="linkExtraction"]')
      .waitForElementVisible('button[id="extractedLinkButton"]', 10000)
      .click('a[name="linkExtraction"]')
      .assert.urlEquals('http://nosalive.com/')
    .end();
  },
};
