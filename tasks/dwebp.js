const path = require('path');
const mkdirp = require('mkdirp');
const replaceExt = require('replace-ext');
const dwebp = require('dwebp-bin');
const execa = require('execa');

const booleanFlags = new Set(['bmp', 'tiff', 'pam', 'ppm', 'pgm', 'yuv', 'nofancy', 'nofilter', 'nodither', 'mt', 'flip', 'noasm']);

module.exports = grunt => {
  grunt.registerMultiTask('dwebp', 'Convert WebP images to PNG', function () {
    const done = this.async();
    const options = this.options({});

    for (const file of this.files) {
      const src = file.src[0];
      const dest = replaceExt(file.dest, '.png');

      mkdirp.sync(path.dirname(dest));
      const args = [src, '-o', dest];

      for (const key of Object.keys(options)) {
        args.push(`-${key}`);

        if (!booleanFlags.has(key)) {
          args.push(options[key]);
        }
      }

      try {
        execa.sync(dwebp, args);
        grunt.log.writeln(`✔ ${src} was converted to ${dest}`);
      } catch (error) {
        grunt.warn(error);
      }
    }

    done();
  });
};
