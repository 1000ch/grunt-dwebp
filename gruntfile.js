module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      test: ['tmp'],
    },
    dwebp: {
      static: {
        options: {
          nofancy: true,
        },
        files: {
          'tmp/test.png': 'test/fixtures/test-png.webp',
        },
      },
    },
    nodeunit: {
      tests: ['test/test.js'],
    },
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.registerTask('mkdir', grunt.file.mkdir);
  grunt.registerTask('test', [
    'clean',
    'mkdir:tmp',
    'dwebp',
    'nodeunit',
    'clean',
  ]);
};
