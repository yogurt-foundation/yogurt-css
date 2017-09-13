/*
 * grunt-stats
 * https://github.com/soul-wish/grunt-stats
 *
 * Copyright (c) 2016 Sergey Lysenko
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs'),
    path = require('path'),
    CliTable = require('cli-table'),
    fileSize = require('file-size');

module.exports = function (grunt) {
    /**
     * Get total amount of files
     * @param  {array}  files   array of file objects
     * @return {number}         amount of files
     */
    function getTotalFilesAmount(files) {
        return files.length;
    }

    /**
     * Get amount of files with caption (file | files) | pluralize
     * @param  {array}  files   array of file objects
     * @return {string}         pluralized amount of files
     */
    function getTotalFilesAmountWithCaption(files) {
        var filesAmount = getTotalFilesAmount(files);
        return filesAmount + (filesAmount === 1 ? ' file' : ' files');
    }

    /**
     * Get human redable size
     * @param  {number}     size    size of file in bites
     * @return {string}             size of file in human redable form
     */
    function getHumanReadableFilesize(size) {
        return fileSize(size).human();
    }

    /**
     * Get human readable size for all files
     * @param  {array}      files   array of file objects
     * @return {string}             human readable size
     */
    function getTotalFilesSize(files) {
        var totalSize = 0;

        files.forEach(function (file) {
            totalSize += file.size;
        });
        return getHumanReadableFilesize(totalSize);
    }

    /**
     * Format table log
     * @param  {array}  files   array of file objects
     * @return {string}         string representation of table
     */
    function formatTable(files) {
        var table;

        table = new CliTable({
            head: ['File Name', 'Size', 'Extension']
        });
        files.forEach(function (file) {
            table.push([file.name, file.hrSize, file.extension]);
        });
        return table.toString();
    }

    /**
     * Display simple report for each src
     * @param  {array}  files   array of file objects
     */
    function simpleReport(files) {
        grunt.log.ok('Files total: ' + getTotalFilesAmount(files));
        grunt.log.ok('Size total: ' + getTotalFilesSize(files));
    }

    /**
     * Display complex report for each src
     * @param  {array}      files   array of file objects
     */
    function complexReport(files) {
        files.sort(function (a, b) {
            return b.size - a.size;
        });
        // add total bottom line
        files.push({
            name: 'Total:',
            hrSize: getTotalFilesSize(files),
            extension: getTotalFilesAmountWithCaption(files)
        });
        grunt.log.writeln(formatTable(files));
    }

    /**
     * Recursively traverse directory
     * @param  {string}     dirPath     path to the directory
     * @param  {array}     allFiles     array of file objects
     * @return {array}                  full array of file objects in directory
     */
    function readDirectory(dirPath, allFiles) {
        var files;

        allFiles = allFiles || [];
        files = fs.readdirSync(dirPath);
        files.forEach(function (file) {
            var fileStats = fs.statSync(dirPath + file);
            if (fileStats.isDirectory()) {
                allFiles = readDirectory(dirPath + file + '/', allFiles);
            } else {
                allFiles.push({
                    name: file,
                    size: fileStats.size,
                    hrSize: fileSize(fileStats.size).human(),
                    extension: path.extname(file)
                });
            }
        });
        return allFiles;
    }

    grunt.registerMultiTask('stats', 'Display files statistic for separate directories in your project.', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            mode: 'simple'
        });

        // error if src is empty
        if (!this.filesSrc.length) {
            grunt.log.error('It seems like provided [src] is empty...');
        }

        /**
         * Process each directory from src configuration
         * @param  {string}     dirPath     path to the directory
         * @return {boolean}                function status
         */
        function processDirectory(dirPath) {
            var files;

            // fix incorrect directory src
            if (dirPath[dirPath.length - 1] !== '/') {
                dirPath = dirPath.concat('/');
            }
            // error in case [src] is not a directory
            if (!fs.statSync(dirPath).isDirectory()) {
                grunt.log.error(dirPath + ' is not a directory!');
                return false;
            }
            files = readDirectory(dirPath);
            grunt.log.subhead('~Stats for [' + dirPath + '] directory~');
            if (options.mode === 'simple') {
                simpleReport(files);
            } else {
                complexReport(files);
            }
            return true;
        }

        /**
         * Process all src's from task configuration
         */
        this.filesSrc.forEach(function (directory) {
            processDirectory(directory);
        });
    });

    // testable functions
    return {
        getTotalFilesAmount: getTotalFilesAmount,
        getTotalFilesAmountWithCaption: getTotalFilesAmountWithCaption,
        getHumanReadableFilesize: getHumanReadableFilesize,
        getTotalFilesSize: getTotalFilesSize,
        readDirectory: readDirectory
    };
};
