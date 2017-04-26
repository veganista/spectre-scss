module.exports = function (grunt) {
  'use strict';
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Sass
    sass: {
      options: {
        'sourcemap=auto': true, // Create source map
        style: 'compressed' // minify output
      },
      dist: {
        files: [
          {
            expand: true, // Recursive
            cwd: "scss", // The startup directory
            src: ["*.scss"], // Source files
            dest: "docs/dist", // Destination
            ext: ".css" // File extension 
          }
        ]
      }
    },

    // Autoprefixer
    autoprefixer: {
      options: {
        browsers: [
          'last 4 versions'
        ],
        map: true // Update source map (creates one if it can't find an existing map)
      },

      // Prefix all files
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'docs/dist/*.css',
        dest: 'docs/dist/'
      },
    },

    // Watcher
    watch: {
      css: {
        files: 'scss/**/*.scss',
        tasks: ['sass', 'autoprefixer']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['sass', 'autoprefixer']);
};
