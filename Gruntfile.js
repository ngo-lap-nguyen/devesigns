module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        postcss: {
            options: {
                map: true, // inline sourcemaps
                processors: [
                    require('pixrem')(), // add fallbacks for rem units
                    require('autoprefixer')({ browsers: 'last 8 versions' }), // add vendor prefixes
                    require('cssnano')() // minify the result
                ]
            },
            dist: {
                files: [{
                    cwd: 'preprocess/css/',
                    src: '*.css',
                    dest: 'public/css/',
                    expand: true
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-postcss');
    grunt.registerTask('default', ['postcss']);
};