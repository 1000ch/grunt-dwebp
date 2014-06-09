module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      test: ['tmp']
    },
    dwebp: {
      static: {
        options: {},
        files: {
          'tmp/test.png': 'test/fixtures/test-png.webp'
        }
      }
    },
    nodeunit: {
      tests: ['test/test.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.loadTasks('tasks');

  grunt.registerTask('mkdir', grunt.file.mkdir);
  grunt.registerTask('test', [
    'clean',
    'mkdir:tmp',
    'dwebp',
    'nodeunit',
    'clean'
  ]);
};