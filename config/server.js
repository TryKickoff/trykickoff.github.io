module.exports.tasks = {

	/**
	 * Connect
	 * https://github.com/gruntjs/grunt-contrib-connect
	 * Start a static web server
	 */
	connect: {
		site: {
			options: {
				base : '_site',
				open: {
					target: 'http://localhost:8000/'
				},
				livereload: true
			}
		},
		styleguide: {
			options: {
				open: {
					target: 'http://localhost:8000/_docs/styleguide.html'
				},
				livereload: true
			}
		}
	},

	jekyll : {
		src: '',
		dest: '<%=config.jekyll.buildDirectory%>'
	}
};
