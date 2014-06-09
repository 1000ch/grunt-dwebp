'use strict';

var fs = require('fs');

exports.cwebp = {
  convertWebP: function (test) {
    test.expect(1);
    test.ok(fs.existsSync('tmp/test.png'), 'should convert WebP images');
    test.done();
  }
};