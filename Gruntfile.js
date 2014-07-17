'use strict';

module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // ---------------------------------------------------------------------- //
    watch: {
      code: {
        files: ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js'],
        tasks: ['jshint:all']
      },
      tests: {
        files: ['test/**/*.js'],
        tasks: ['shell:npmtest']
      }
    },
    // ---------------------------------------------------------------------- //
    jshint: {
      options: {jshintrc: '.jshintrc', reporter: require('jshint-stylish')},
      all: ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js']
    },
    // ---------------------------------------------------------------------- //
    shell: {
      npmtest: {
        command: 'npm test'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('build', ['jshint:all']);
  grunt.registerTask('test', ['shell:npmtest']);
  grunt.registerTask('default', ['build', 'watch:code']);

};

