module.exports = function(grunt) {
    'use strict';
    // Declare JS dependencies and third-party libraries required
    var jsVendorSourceFiles = [
        'app/bower_components/jquery/jquery.js',
        'app/bower_components/lodash/dist/lodash.js',
        'app/bower_components/handlebars/handlebars.js',
        'app/bower_components/ember/ember.js',
        'app/bower_components/accounting/accounting.js',
        'app/bower_components/moment/moment.js'
    ];

    // Declare the App's source files
    var jsAppSourceFiles = [
        'app/js-src/app.js'
    ];

    // Concatenate our file arrays to create a bundle we can use later
    var jsSourceFiles = jsVendorSourceFiles.concat(jsAppSourceFiles);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                jshintrc: 'js-src/.jshintrc'
            },
            files: {
                src: jsAppSourceFiles
            }
        },
        concat: {
            dev: {
                files: [
                    {
                        src: jsSourceFiles,
                        dest: 'js/app.js'
                    }
                ]
            }
        },
        uglify: {
            prod: {
                files: [
                    {
                        src: jsSourceFiles,
                        dest: 'app/js/app.js'
                    }
                ]
            },
        },
    });

    // Load the plugin tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'concat:dev']);
    grunt.registerTask('build-prod', ['jshint', 'uglify:prod']);
};