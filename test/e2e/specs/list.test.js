module.exports = {
  'Displays all the links for the current user': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setValue('input[type="text"]', 'example@test.com')
      .setValue('input[type="password"]', '123456')
      .click('#signInButton')
      .waitForElementVisible('#my_list', 5000)
      .assert.elementPresent('#my_list')
      // .verify.visible('input[id="chooseFile"]', 'choose file inputbox')
      // .setValue('input[type="file"]', require('path').resolve('https://i.imgur.com/xo03IMi.jpg'))
      // .assert.elementPresent('.capture-photo')
      // .assert.elementPresent('#sendImage')
      .end();
  },

}
