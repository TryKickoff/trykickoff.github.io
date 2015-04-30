module.exports = function (grunt) {

	'use strict';

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	var options = {
		pkg: require('./package'), // <%=pkg.name%>

		/**
		 * Config - Edit this section
		 * ==========================
		 * Choose javascript dist filename
		 * Choose javascript dist location
		 * Choose javascript files to be uglified
		 */
		config : {
			scss : {
				cssFile : 'kickoff' // <%=config.scss.cssFile%>
			},

			js : {
				// <%=config.js.distDir%>
				distDir  : 'js/dist/',

				// <%=config.js.distFile%>
				distFile : 'app.min.js',

				// <%=config.js.fileList%>
				fileList : [
					'bower_components/trak/dist/trak.js',
					'js/libs/plugins/skeleton.tabs.js',
					'js/script.js'
				]
			},

			jekyll : {
				buildDirectory: 'kickoff' // <%=config.jekyll.buildDirectory%>
			}
		}
	};


	/**
	 * Config - Edit this section
	 * ==========================
	 * Choose javascript dist filename
	 * Choose javascript dist location
	 * Choose javascript files to be uglified
	 */


	// Load grunt configurations automatically
	var configs = require('load-grunt-configs')(grunt, options);

	// Define the configuration for all the tasks
	grunt.initConfig(configs);


	/* ==========================================================================
		Available tasks:
* grunt            : run jshint, uglify and sass:kickoff
* grunt watch      : run sass:kickoff, uglify and livereload
* grunt dev        : run uglify, sass:kickoff & autoprefixer:kickoff
* grunt deploy     : run jshint, uglify, sass:kickoff and csso
* grunt jquery     : build custom version of jquery
* grunt serve      : watch js & scss and run a local server
* grunt icons      : generate the icons. uses svgmin and grunticon
* grunt jscheck    : run jshint & jscs
		 ========================================================================== */

	/**
	* GRUNT * Default task
	* run uglify, sass:kickoff and autoprefixer
	*/
	grunt.registerTask('default', [
		'newer:uglify',
		'newer:sass:kickoff',
		'autoprefixer:kickoff'
	]);


	/**
	 * GRUNT DEV * A task for development
	 * run uglify, sass:kickoff & autoprefixer:kickoff
	 */
	grunt.registerTask('dev', [
		'uglify',
		'sass:kickoff',
		'autoprefixer:kickoff'
	]);


	/**
	* GRUNT DEPLOY * A task for your production environment
	* run uglify, sass:kickoff, autoprefixer:kickoff and csso
	*/
	grunt.registerTask('deploy', [
		'newer:uglify',
		'newer:sass:kickoff',
		'newer:autoprefixer:kickoff',
		'newer:csso'
	]);


	/**
	 * GRUNT SERVE * A task for for a static server with a watch
	 * run connect and watch
	 */
	grunt.registerTask('serve', [
		'uglify',
		'sass:kickoff',
		'sass:styleguide',
		'autoprefixer:kickoff',
		'jekyll',
		'connect:site',
		'watch'
	]);


	/**
	 * GRUNT ICONS * A task to create all icons using grunticon
	 * run clean, svgmin and grunticon
	 */
	grunt.registerTask('icons', [
		'clean:icons',
		'svgmin',
		'grunticon'
	]);


	/**
	 * GRUNT JSCHECK * Check js for errors and style problems
	 * run jshint, jscs
	 */
	// Default task
	grunt.registerTask('jscheck', [
		'jshint',
		'jscs'
	]);

};
