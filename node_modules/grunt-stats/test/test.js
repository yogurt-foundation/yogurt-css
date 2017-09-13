'use strict';

var grunt = require('grunt'),
    stats = require('../tasks/stats')(grunt);

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.stats = {
    setUp: function (done) {
        done();
    },
    default: function (test) {
        var testFiles,
            files;

        testFiles = [{ name: '.editorconfig', size: 236, hrSize: '236.00 Bytes', extension: '' }, { name: 'test-markdown-file.md', size: 15, hrSize: '15.00 Bytes', extension: '.md' }, { name: 'test-html-file.html', size: 183, hrSize: '183.00 Bytes', extension: '.html' }, { name: 'test-js-file.js', size: 14, hrSize: '14.00 Bytes', extension: '.js' }, { name: 'test-json-file.json', size: 18, hrSize: '18.00 Bytes', extension: '.json' }];
        files = stats.readDirectory('test/fixtures/');
        test.deepEqual(files, testFiles, 'readDirectory');
        test.equal(stats.getTotalFilesAmount(files), 5, 'getTotalFilesAmount');
        test.equal(stats.getTotalFilesAmountWithCaption(files), '5 files', 'getTotalFilesAmountWithCaption');
        test.equal(stats.getTotalFilesSize(files), '466.00 Bytes', 'getTotalFilesSize');
        test.equal(stats.getHumanReadableFilesize(8147436), '7.77 MiB', 'getHumanReadableFilesize');
        test.done();
    }
};
