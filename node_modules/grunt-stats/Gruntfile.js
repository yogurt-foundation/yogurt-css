/*
 * grunt-stats
 * https://github.com/soul-wish/grunt-stats
 *
 * Copyright (c) 2016 Sergey Lysenko
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({

        // Configuration to be run.
        stats: {
            default_options: ['test/fixtures/'],
            custom_options: {
                options: {
                    mode: 'verbose'
                },
                src: ['test/', 'tasks/']
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Run tests.
    grunt.registerTask('test', ['nodeunit']);

    // By default, run all tests.
    grunt.registerTask('default', ['test']);
};
