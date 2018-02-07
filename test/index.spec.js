const Browser = require('zombie');

Browser.localhost('example.com', 3000);

describe('User visits landing page', function() {

  const browser = new Browser();

  before(function(done) {
    browser.visit('/index', done);
  });

  describe('take a photo', function() {

    it('should be successful', function() {
      browser.assert.success();
    });

    it('should see a button to take a photo', function() {
      browser.assert.text('button', 'Snap');
    });
  });
});
