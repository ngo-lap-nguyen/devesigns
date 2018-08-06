module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        postcss: {
            options: {
              map: true, // inline sourcemaps
              processors: [
                require('pixrem')(), // add fallbacks for rem units
                require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                require('cssnano')() // minify the result
              ]
            },
            dist: {
              src: 'preprocess/css/*.css',
              dest: 'public/css/'
            }
          }
    });

    grunt.loadNpmTasks('grunt-postcss');
    grunt.registerTask('default', ['postcss']);
};