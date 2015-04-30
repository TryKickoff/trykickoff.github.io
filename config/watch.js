module.exports.tasks = {

	/**
	* Watch
	* https://github.com/gruntjs/grunt-contrib-watch
	* Watches your scss, js etc for changes and compiles them
	*/
	watch: {
		scss: {
			files: ['scss/**/*.scss', '!scss/styleguide.scss'],
			tasks: [
				'sass:kickoff',
				'autoprefixer:kickoff'
			],
			options: {
				interrupt : true,
				spawn: false
			}
		},

		styleguide_scss: {
			files: ['scss/styleguide.scss'],
			tasks: [
				'sass:styleguide',
				'autoprefixer:styleguide'
			],
			options: {
				interrupt : true,
				spawn: false
			}
		},

		js: {
			files: ['<%=config.js.fileList%>', 'Gruntfile.js'],
			tasks: ['uglify'],
			options: {
				interrupt : true,
				spawn: false
			}
		},

		livereload: {
			options: { livereload: true },
			files: [
				'<%=config.jekyll.buildDirectory%>/css/*.css'
			]
		},

		grunticon : {
			files: ['img/src/*.svg', 'img/src/*.png'],
			tasks: [
				'clean:icons',
				'svgmin',
				'grunticon'
			]
		},

		// text: {
		// 	files: [
		// 		'**/*.md'
		// 	],
		// 	tasks: ['jekyll']
		// },

		// img: {
		// 	files: [
		// 		'img/**/*'
		// 	],
		// 	tasks : 'copy:assets'
		// },

		// fix watch process
		jekyll : {
			files: [
				'**/*.html',
				'**/*.md',
				'img/**/*.*',
				'**/*.css',
				'**/*.js',
				'**/*.yml',
				'_plugins/*.rb',
				'!kickoff/**/*.*',
				'!node_modules/**/*.*'
			],
			tasks: 'jekyll',
			options: {
				livereload: true,
				interrupt : true
			}
		}
	}
};
