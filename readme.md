# [grunt-dwebp](https://www.npmjs.org/package/grunt-dwebp)

## About

Convert WebP images to PNG with grunt task.

[![Build Status](https://travis-ci.org/1000ch/grunt-dwebp.svg?branch=master)](https://travis-ci.org/1000ch/grunt-dwebp)
[![NPM version](https://badge.fury.io/js/grunt-dwebp.svg)](http://badge.fury.io/js/grunt-dwebp)
[![Dependency Status](https://david-dm.org/1000ch/grunt-dwebp.svg)](https://david-dm.org/1000ch/grunt-dwebp)
[![devDependency Status](https://david-dm.org/1000ch/grunt-dwebp/dev-status.svg)](https://david-dm.org/1000ch/grunt-dwebp#info=devDependencies)

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

MIT