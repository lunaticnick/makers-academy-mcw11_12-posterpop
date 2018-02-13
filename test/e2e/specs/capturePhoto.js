module.exports = {
  // 'Shows the extracted url ".uk" link': function test(browser) {
  //   const devServer = browser.globals.devServerURL;
  //
  //   browser
  //     .url(devServer)
  //     .waitForElementVisible('#app', 5000)
  //     // .click('input[id="chooseFile"]')
  //     .setValue('input[type="file"]', require('path').resolve('http://payload536.cargocollective.com/1/3/108157/13033615/Screen-Shot-2017-12-13-at-14.48.52_920.png'))
  //     .click("#sendImage")
  //     .assert.elementPresent('#extractedLink', 'http://nhm.ac.uk')
  //     .end();
  // },
  //
  // 'Shows the extracted url ".com" link': function test(browser) {
  //   const devServer = browser.globals.devServerURL;
  //
  //   browser
  //     .url(devServer)
  //     .waitForElementVisible('#app', 5000)
  //     // .click('input[id="chooseFile"]')
  //     .setValue('input[type="file"]', require('path').resolve('http://www.coolture.pt/wp-content/uploads/2017/10/nos-alive-18-3.jpg'))
  //     .click("#sendImage")
  //     .assert.elementPresent('#extractedLink', 'http://nosalive.com')
  //     .end();
  // },
  //
  // 'Redirect the extracted url to the actual website': function test(browser) {
  //   const devServer = browser.globals.devServerURL;
  //
  //   browser
  //     .url(devServer)
  //     .waitForElementVisible('#app', 5000)
  //     .assert.elementPresent('#extractedLink', 'http://nosalive.com')
  //
  //     // .click('input[id="chooseFile"]')
  //     // .assert.elementPresent('#testing', 'testing')
  //     // .assert.containsText('#testing', 'testing')
  //     // .setValue('input[type="file"]', require('path').resolve('http://www.coolture.pt/wp-content/uploads/2017/10/nos-alive-18-3.jpg'))
  //     // .click("#sendImage")
  //     // .waitForElementVisible('#extractedLink', 5000)
  //     //
  //     // .assert.containsText('#extractedLink', 'http://nosalive.com')
  //     // .click("#extractedLink", function(result) {
  //     //   console.log("button clicked")
  //     // })
  //   .end();
  // },

  'Redirect the extracted url to the actual website': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setValue('input[type="file"]', require('path').resolve('/Users/lan/Desktop/makers_academy/week11/mEVENTo/test/e2e/specs/IMG_4049.JPG'))
      .click("#sendImage")
      .assert.elementPresent('a[name="linkExtraction"]')
      .waitForElementVisible('button[id="extractedLinkButton"]', 10000)
      .click('a[name="linkExtraction"]')
      .assert.urlEquals('http://www.nhm.ac.uk/')
    .end();
  },

};
