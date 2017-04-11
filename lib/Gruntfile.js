module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    jshint: {
      files: ['../javascript/**/*.js'],
      options: {
        "esnext": true
      }
    },
    watch: {
      javascripts: {
        files: ['../javascript/**/*.js'],
        tasks: ['jshint']
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'watch']);
};