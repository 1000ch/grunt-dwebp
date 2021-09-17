# grunt-dwebp ![GitHub Actions Status](https://github.com/1000ch/grunt-dwebp/workflows/test/badge.svg)

Convert WebP images to PNG with grunt task.

## Install

```sh
$ npm install --save-dev grunt-dwebp
```

## Usage

Please see following `gruntfile.js` example.

```js
module.exports = function (grunt) {
  grunt.initConfig({
    dwebp: {
      static: {
        files: { 
          'dist/img.png': 'src/img.webp'
        }
      },
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/', 
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dist/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-dwebp');
};
```

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
