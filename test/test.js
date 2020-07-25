'use strict';
const fs = require('fs');

exports.cwebp = {
  convertWebP: test => {
    test.expect(1);
    test.ok(fs.existsSync('tmp/test.png'), 'should convert WebP images');
    test.done();
  }
};
