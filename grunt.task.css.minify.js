///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// @@script: grunt.task.css.minify.js
// @@description: task configuration for Yogurt
// @@version:
// @@author: Loouis Low
// @@copyright:
// @@license: MIT License
//

/***
 ** Configurations
 */

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// CSS Compressor
		cssmin: {
			minifyYogurt: {
				expand: true,
				// target assets
				cwd: 'dist/css/',
				// minifying
				src: ['**/yogurt.css'],
				// assets move to
				dest: 'dist/css/',
				// rename asset
				ext: '.min.css'
			}
		}
	});

	/***
	 ** Run tasks
	 */

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['cssmin']);

	// results
	require('time-grunt')(grunt);
};
