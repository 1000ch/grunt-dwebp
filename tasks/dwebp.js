'use strict';
const {promisify} = require('util');
const {execFile} = require('child_process');
const path = require('path');
const mkdirp = require('mkdirp');
const replaceExt = require('replace-ext');
const dwebp = require('dwebp-bin');
const execFileP = promisify(execFile);

module.exports = grunt => {
  grunt.registerMultiTask('dwebp', 'Convert WebP images to PNG', function () {
    const done = this.async();
    const options = this.options({});

    this.files.forEach(async file => {
      const src = file.src[0];
      const dest = replaceExt(file.dest, '.png');

      mkdirp.sync(path.dirname(dest));
      const args = [src, '-o', dest];

      Object.keys(options).forEach(key => {
        args.push(`-${key}`);
        args.push(options[key]);
      });

      try {
        await execFileP(dwebp, args);
        grunt.verbose.writeln(`✔ ${src} was converted to ${dest}`);
      } catch (error) {
        grunt.warn(error);
      }
    });

    done();
  });
};
