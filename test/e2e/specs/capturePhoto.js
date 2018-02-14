// <<<<<<< HEAD
// module.exports = {
//   'Shows The extrapolated url link': function test(browser) {
//     const devServer = browser.globals.devServerURL;
//
//     browser
//       .url(devServer)
//       .waitForElementVisible('#app', 5000)
//       .click('input[id="chooseFile"]')
//       .setValue('input[type="file"]', require('path').resolve('https://i.imgur.com/xo03IMi.jpg'))
//       .click("#sendImage")
//       .assert.elementPresent('#extrapolatedLink', 'https')
//       .end();
//   },
// };
// =======
// module.exports = {
//   'Shows The extrapolated url link': function test(browser) {
//     const devServer = browser.globals.devServerURL;
//
//     browser
//       .url(devServer)
//       .waitForElementVisible('#app', 5000)
//       .click('input[id="chooseFile"]')
//       .setValue('input[type="file"]', require('path').resolve('https://i.imgur.com/xo03IMi.jpg'))
//       .click("#sendImage")
//       .assert.elementPresent('#extrapolatedLink', 'https')
//       .end();
//   },
// >>>>>>> parent of 2a40dfd... Fixing the issue with the json package file
