module.exports.tasks = {

	/**
	* Clean
	* https://github.com/gruntjs/grunt-contrib-clean
	* Clean some files
	*/
	clean: {
		icons: ['img/icons']
	},


	/**
	* Shell
	* https://github.com/sindresorhus/grunt-shell
	* Run shell commands
	*/
	shell: {
		bowerinstall: {
			command: 'bower install'
		}
	},

	copy: {
		dist: {
			files: [
				{ expand: true, cwd: './img', src: ['./**/*.*'], dest: 'kickoff/img' },
				{ expand: true, cwd: './css', src: ['./**/*.*'], dest: 'kickoff/css' },
				{ expand: true, cwd: './js', src: ['./**/*.*'], dest: 'kickoff/js' }
			]
		},
		assets : {
			files: [
				{ expand: true, cwd: './img', src: ['./**/*.*'], dest: 'kickoff/img' },
				{ expand: true, cwd: './fonts', src: ['./**/*.*'], dest: 'kickoff/fonts' }
			]
		},
		css : {
			files: {
				// Copy the sass-generated style file to
				// the kickoff/ folder
				'kickoff/css/kickoff.css': 'css/kickoff.css',
				'kickoff/css/kickoff-old-ie.css': 'css/kickoff-old-ie.css',
				'kickoff/css/styleguide.css': 'css/styleguide.css'
			}
		},
		js: {
			files: [
				{ expand: true, cwd: './js', src: ['./**/*.*'], dest: 'kickoff/js' }
			]
		}
	}
};
