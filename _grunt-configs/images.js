var mozjpeg  = require('imagemin-mozjpeg');
var pngquant = require('imagemin-pngquant');
var gifsicle = require('imagemin-gifsicle');

module.exports.tasks = {

	/**
	 * grunt-contrib-imagemin
	 * https://github.com/gruntjs/grunt-contrib-imagemin
	 * Minify PNG, SVG, gif & JPEG images
	 */
	imagemin: {
		images: {
			files: [{
				expand: true,
				cwd: '<%=config.img.srcDir%>/',
				src: ['**/*.{svg,png,jpg,gif}'],
				dest: '<%=config.img.distDir%>'
			}]
		},

		grunticon: {
			options: {
				optimizationLevel: 3,
				progressive : true,
				svgoPlugins: [
					{ removeViewBox: false },
					{ removeUselessStrokeAndFill: false },
					{ removeTitle: true },
					{ removeXMLProcInst: false },
				],
				use: [
					mozjpeg(),
					pngquant(),
					gifsicle()
				]
			},
			files: [{
				expand: true,
				cwd: '<%=config.img.grunticonDir%>',
				src: ['**/*.{svg,png,jpg,gif}'],
				dest: '<%=config.tempDir%>/icons'
			}]
		},
	},


	/**
	 * Grunticon
	 * https://github.com/filamentgroup/grunticon
	 */
	grunticon: {
		myIcons: {
			files: [{
				expand: true,
				cwd   : '<%=config.tempDir%>/icons',
				src   : ['*.{svg,png,jpg,gif}'],
				dest  : '<%=config.img.distDir%>/icons'
			}]
		}
	}
};
