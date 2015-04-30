---
layout: docs
navgroup: docs
navactive: docsgrunt
title: "Kickoff &#10084;'s Grunt"

meta:
  title: Grunt setup
  description: Read Kickoff's Grunt documentation

next:
 - title: Kickoff's CSS
   body: Take a look at how Kickoff structures it’s CSS.
   link: css.html
 - title: Kickoff's Javascript
   body: Minimal and flexible, we show you how Kickoff structures it’s JS.
   link: js.html
---
[Grunt](http://gruntjs.com) and Grunt plugins are installed and managed via [npm](https://npmjs.org/), the [Node.js](http://nodejs.org/) package manager. Grunt 0.4.x requires stable Node.js versions `>= 0.8.0`. Odd version numbers of Node.js are considered unstable development versions.

Before setting up Grunt ensure that your npm is up-to-date by running `npm update -g npm` (this might require sudo on certain systems).

[Grunt](http://gruntjs.com) is used extensively in Kickoff; It is the beating heart of the framework. We use it to compile our Sass, concatenate and then minify our JavaScript files, or to fire up a simple local server with [BrowserSync](http://browsersync.io) for some testing.

Using Grunt has other benefits besides this;  it allows any dev to pick up a project, regardless of if they've worked on it before, and get up and running in no time.  It also helps to ensure the menial tasks (sass & js compilation) that can be forgotten, are already configured when you are ready to deploy your site.


<hr class="sectionSplitter">

<a name="setup"></a>
## Setting up Grunt on your machine
Setting up Kickoff to use Grunt is extremely simple – just follow these simple steps:

#### Step 1 - Install Node
Download and install Node.js from [nodejs.org](http://nodejs.org/)

#### Step 2 - Install the Grunt CLI
In order to get started, you'll want to install Grunt's command line interface (CLI) globally.

Run `npm install -g grunt-cli` in your terminal or command shell. This will put the `grunt` command in your system path, allowing it to be run from any directory.

N.b. If you have any problems running the above command due to permission errors, you may need to use sudo (on OSX, *nix, BSD etc) or run your command shell as Administrator (on Windows).

#### That's it, Grunt is now setup! Now you need to get Kickoff.
Download Kickoff using any of the options on the [Get Kickoff page](get.html).


#### Once you have got Kickoff, install all the Node dependencies
Grunt will not work without having installed it's dependencies. Kickoff's [package.json](https://github.com/tmwagency/kickoff/blob/master/package.json) uses a few essential Grunt plugins to operate.

To install them, use your terminal to `cd` into the root of the Kickoff directory, and then run `npm install`.  This will install all of the required dependencies to a new folder called `node_modules` inside your project.

<hr class="sectionSplitter">

<a name="tasks"></a>

## Kickoff’s Grunt tasks

Kickoff comes with a number of useful Grunt tasks configured for you to use.  These are tasks that you can run in the command line from the root directory of your Kickoff project.

Here is a guide to the tasks that are available and what each of them does.

---

<a name="grunt-default"></a><a name="grunt-serve"></a>
#### grunt (the default task) & grunt serve
The default task has been setup as a shortcut for the [**grunt serve**](#grunt-serve) task.

```sh
grunt
# or
grunt serve
```

Running `grunt` or `grunt serve` creates a simple static server (using [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect) via [grunt-browser-sync](https://github.com/shakyShane/grunt-browser-sync)) for previewing your work.

This task will open your defaut browser and enable Livereload so that CSS changes are updated when you edit your Sass.  Because Kickoff uses BrowserSync, it also keeps all of your devices in sync when connected to your local server (see [BrowserSync’s feature list for more details](https://github.com/shakyShane/browser-sync#features))

Tasks carried out when `grunt serve` is run:

* [Shimly](#task-shimly) - allows you to specifiy any JavaScript shims you would like to include in your project
* [Chotto](#chotto) - checks to see if all javascript files (that the build needs) are there
* [Uglify](#task-uglify) - concatinates & compresses your javascript
* [Sass](#task-sass) - compiles Kickoff’s Sass files into native CSS
* [Autoprefixer](#task-autoprefixer) – adds vendor prefixes to the CSS
* [BrowserSync](#task-browsersync) – Starts local server available across multiple devices
* [Watch](#task-watch) – watches for code changes and reacts to them on save

---

<a name="grunt-dev"></a>
#### grunt dev

A task for development environments.  Compiles your code without minifying or optimising it.

```sh
grunt dev
```

Tasks carried out when `grunt dev` is run:

* [Shimly](#task-shimly)
* [Uglify](#task-uglify)
* [Sass](#task-sass) - compiles Kickoff’s Sass files into native CSS
* [Autoprefixer](#task-autoprefixer) – adds vendor prefixes to the CSS


---

<a name="grunt-deploy"></a>
#### grunt deploy

A task for when you need to deploy to production environments. This does not actually deploy any code, but ensures that your code & assets are as compressed as they could be.

```sh
grunt deploy
```

This task is essentially the same as `grunt dev` but minifies the CSS output as well ready for deployment on production environments.

Tasks carried out when `grunt deploy` is run:

* [Shimly](#task-shimly)
* [Uglify](#task-uglify)
* [Sass](#task-sass) - compiles Kickoff’s Sass files into native CSS
* [Autoprefixer](#task-autoprefixer) – adds vendor prefixes to the CSS
* [CSSO](#task-csso) – minifies CSS

---

<a name="grunt-watch"></a>
#### grunt watch

For documentation on the `grunt watch` task, [check out this section in Kickoff’s task index](#task-watch)

---

<a name="grunt-icons"></a>
#### grunt icons

A task to help you create and maintain icons using Grunticon.

Running `grunt icons` carries out the [svgmin](#task-svgmin) and [Grunticon](#task-grunticon) tasks,
generating a set of icons for you to use in the front-end of your project.

Tasks carried out when `grunt icons` is run:

* [clean:icons](#task-clean) – removes any icons already created by Grunticon in our project
* [SVGMin](#task-svgmin) – optimises SVG files
* [Grunticon](#task-grunticon) – creates icon set for use in front end

---

<a name="grunt-checks"></a>
#### grunt checks

A task to help you validate your code.

Running `grunt checks` will run the [JSHint](#task-jshint) task to check the projects JavaScript for errors and formatting inconsistencies.

We plan to expand on the checks carried out using this task in future versions of Kickoff.

Tasks carried out when `grunt checks` is run:

* [JSHint](#task-jshint) – validates your projects JavaScript


<a name="grunt-photobox"></a>
#### grunt photobox

For documentation on the `grunt photobox` task, [check out this section in Kickoff’s task index](#task-photobox)

<a name="grunt-styleguide"></a>
#### grunt styleguide

A task that compiles your project styles into a styleguide.  It also opens up the styleguide in a browser after compilation.


<hr class="sectionSplitter">
<a name="config"></a>
## Grunt config variables

Grunt config variables allow you to control some of the basic settings of your Kickoff project.

Here we take a look at their structure and what each part controls.

---

<a name="config-structure"></a>
### Config structure

Kickoff’s config variables can be [found in the `_grunt-configs/config.js` file in ](https://github.com/tmwagency/kickoff/blob/master/_grunt-configs/config.js) and looks like the following code snippet:

```js
/**
 * Grunt global vars
 * Many of the Grunt tasks use these vars
 */
config : {
	src: "_grunt-configs/*.js",


	srcDir  : './assets/src',  // <%=config.srcDir%>
	distDir : './assets/dist', // <%=config.distDir%>
	tempDir : './assets/temp', // <%=config.tempDir%>


	// CSS-related Grunt vars
	css : {
		scssDir  : '<%=config.srcDir%>/scss', // <%=config.css.scssDir%>
		distDir  : '<%=config.distDir%>/css', // <%=config.css.distDir%>

		// Renaming this changes the name of the generated CSS file
		// Make sure you update your template file
		distFile : 'kickoff', // <%=config.css.srcFile%>

		// We are supporting the last 2 browsers, any browsers with >5% market share,
		// and ensuring we support IE8+ with prefixes
		autoprefixer : ['> 5%', 'last 2 versions', 'firefox > 3.6', 'ie > 7'] // <%=config.css.autoprefixer%>
	},


	// Javascript-related Grunt vars
	js : {
		distDir  : '<%=config.distDir%>/js/', // <%=config.js.distDir%>

		// Renaming this changes the name of the generated JS file
		// Make sure you update your template file
		distFile : 'script.js', // <%=config.js.distFile%>

		// The files in this array will be concatinated and minified by our build
		// Remove any files that you don't want, & add any that you need

		// <%=config.js.fileList%>
		fileList : [
			// if you would like to remove jQuery from your concatenated JS, comment out the line below
			'./node_modules/jquery/dist/jquery.js',

			// if you would like some basic JS shims (when not using jQuery),
			// uncomment the line below to compile Shimly output
			//'<%=config.srcDir%>/js/helpers/shims.js',

			'<%=config.srcDir%>/js/helpers/console.js',
			'./node_modules/trak.js/dist/trak.js',
			'./node_modules/swiftclick/js/libs/swiftclick.js',
			'./node_modules/cookies-js/dist/cookies.js',

			'<%=config.srcDir%>/js/script.js'
		]
	},


	// Image-related Grunt vars
	img : {
		srcDir       : '<%=config.srcDir%>/img',      // <%=config.img.srcDir%>
		grunticonDir : '<%=config.srcDir%>/grunticon' // <%=config.img.grunticonDir%>
	},


	// Testing-related Grunt vars
	// Add any other test vars in here
	testing: {

		// Used by Photobox at the moment
		// http://tmwagency.github.io/kickoff/learn/grunt.html#task-photobox
		visual : {
			sizes: [ '600', '1000', '1200' ], // <%=config.testing.visual.sizes%>

			// Change these urls to test your app
			// <%=config.testing.visual.urls%>
			urls : [
				'http://localhost:3000'
			]
		}
	}
}
```

---

<a name="taskindex"></a>
### Breaking this down

<a name="config-src"></a>
#### config.src

The first line you encounter in the Grunt config is the `config.src` variable.

```js
src: "_grunt-configs/*.js"
```

This is used to specify the path at which the rest of your Grunt config files live.  Kickoff defines the location for these files as in the [_grunt-configs](https://github.com/tmwagency/kickoff/blob/master/_grunt-configs/_grunt-configs) folder, but if you’d like to rename or move this folder for any reason, make sure that you update this value when doing so.

---
<a name="config-assets"></a>
#### config.srcDir, config.distDir, config.tempDir

```js
srcDir  : './assets/src',  // <%=config.srcDir%>
distDir : './assets/dist', // <%=config.distDir%>
tempDir : './assets/temp', // <%=config.tempDir%>
```

These are use to define the three main assets directories. Most other grunt tasks use these.

---
<a name="config-css"></a>
#### config.css

```js
css : {
	scssDir  : '<%=config.srcDir%>/scss', // <%=config.css.scssDir%>
	distDir  : '<%=config.distDir%>/css', // <%=config.css.distDir%>

	// Renaming this changes the name of the generated CSS file
	// Make sure you update your template file
	distFile : 'kickoff', // <%=config.css.srcFile%>

	// We are supporting the last 2 browsers, any browsers with >5% market share,
	// and ensuring we support IE8+ with prefixes
	autoprefixer : ['> 5%', 'last 2 versions', 'firefox > 3.6', 'ie > 7'] // <%=config.css.autoprefixer%>
}
```

The `config.css` variables relate to the directories and paths of Kickoff’s CSS.

`config.css.distDir` is the directory to which the CSS files will be compiled when a Grunt build is run.  By default, this is set to the `css` folder.

`config.css.distFile` is the name given to the compiled CSS file when it is built from the projects SCSS files.  By default, the filename is `kickoff`.

`config.css.scssDir` is the directory at which the projects SCSS files are stored.  By default, this is the `scss` folder, but if you want to move them, be sure to update this config variable.

`config.css.autoprefixer` defines the autoprefixer rules.

---
<a name="config-js"></a>
#### config.js

```js
js : {
	distDir  : '<%=config.distDir%>/js/', // <%=config.js.distDir%>

	// Renaming this changes the name of the generated JS file
	// Make sure you update your template file
	distFile : 'script.js', // <%=config.js.distFile%>

	// The files in this array will be concatinated and minified by our build
	// Remove any files that you don't want, & add any that you need

	// <%=config.js.fileList%>
	fileList : [
		// if you would like to remove jQuery from your concatenated JS, comment out the line below
		'./node_modules/jquery/dist/jquery.js',

		// if you would like some basic JS shims (when not using jQuery),
		// uncomment the line below to compile Shimly output
		//'<%=config.srcDir%>/js/helpers/shims.js',

		'<%=config.srcDir%>/js/helpers/console.js',
		'./node_modules/trak.js/dist/trak.js',
		'./node_modules/swiftclick/js/libs/swiftclick.js',
		'./node_modules/cookies-js/dist/cookies.js',

		'<%=config.srcDir%>/js/script.js'
	]
}
```

The `config.js` variables relate to the directories and paths of the project JavaScript, as well as specifying what JavaScript files are included in the project compilation.

`config.js.distDir` is the directory to which the JavaScript files will be compiled when a Grunt build is run.  By default, this is set to the `js/dist/` folder.

`config.js.distFile` is the name given to the compiled JavaScript file when it is built by Grunt.  By default, the filename is `app.min.js`.

`config.js.fileList` is the list of files that are included in the JavaScript build.  These are concatenated together when Grunt is run, in the order specified in this list.  To find our more about what is included in the default JavaScript for Kickoff, see [Kickoff’s JavaScript documentation](js.html). **This is the Kickoff default, you can switch to use Browserify if you choose that option in the Yeoman generator.**

---
<a name="config-img"></a>
#### config.img

```js
	// Image-related Grunt vars
	img : {
		srcDir       : '<%=config.srcDir%>/img',      // <%=config.img.srcDir%>
		grunticonDir : '<%=config.srcDir%>/grunticon' // <%=config.img.grunticonDir%>
	}
```

---
<a name="config-testing"></a>
#### config.testing

```js
// Testing-related Grunt vars
// Add any other test vars in here
testing: {

	// Used by Photobox at the moment
	// http://tmwagency.github.io/kickoff/learn/grunt.html#task-photobox
	visual : {
		sizes: [ '600', '1000', '1200' ], // <%=config.testing.visual.sizes%>

		// Change these urls to test your app
		// <%=config.testing.visual.urls%>
		urls : [
			'http://localhost:3000'
		]
	}
}
```

The `config.testing` variables are for any testing related variables.

<a name="config-testing-visual"></a>
The `config.testing.visual` variables are used by the [Photobox](#task-photobox) visual regression testing task.

`config.testing.visual.sizes` defines the screen widths that Photobox uses.

`config.testing.visual.urls` defines the urls that Photobox scans. These urls can be local or remote - please edit as you see fit.

<hr class="sectionSplitter">
<a name="task-index"></a>
## Task Index

This is an exhaustive list of all the Grunt tasks that Kickoff uses and what they do.

They are ordered in the same way that Kickoff’s tasks are grouped in the [_grunt-configs](https://github.com/tmwagency/kickoff/blob/master/_grunt-configs/_grunt-configs) directory.

---
### CSS Tasks ([css.js](https://github.com/tmwagency/kickoff/blob/master/_grunt-configs/css.js))

<a name="task-sass"></a>
#### Sass

Uses [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass) to compile Kickoff’s Sass files into native CSS.

We compile Kickoff’s Sass into 2 CSS files.  The first is a straight compilation of the Sass into native CSS.  The second takes a width parameter, as defined in [`scss/kickoff-old-ie.scss`](https://github.com/tmwagency/kickoff/blob/master/scss/kickoff-old-ie.scss), and compiles a CSS file without media queries.  This second file is created so that we can write our Sass code mobile-first, while still being able to serve old versions of Internet Explorer an appropriately sized layout, since they don’t support media queries.  For more information on this approach, see [Jake Archibald’s excellent article on the subject](http://jakearchibald.github.io/sass-ie/).

The Sass task also has a configuration to compile CSS for the projects styleguide, when running `grunt styleguide`.

<a name="task-autoprefixer"></a>
#### Autoprefixer

Kickoff uses [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) to add browser prefixes to the CSS, so that the base Sass files are kept as clean as possible.  This means that you can exclude writing browser specific prefixes (such as `-webkit`) and the plugin will add this in to your CSS when compiled.

This task is run after the Sass task has converted Kickoff’s Sass into native CSS.

For more information on Autoprefixer and how it works, see it’s [Github repo and documentation](https://github.com/ai/autoprefixer).

<a name="task-csso"></a>
#### CSSO

To minify our CSS, we use CSSO via the [grunt-csso](https://github.com/t32k/grunt-csso) plugin.

---
### Image tasks ([images.js](https://github.com/tmwagency/kickoff/blob/master/_grunt-configs/images.js))

The image tasks included in Kickoff compress images and generate icons using Grunticon.

Any images that are placed in `assets/src/img/` are automatically minified (when running a watch process like `grunt serve`) and then copied to `assets/dist/img/`.

<a name="task-grunticon"></a>
#### Grunticon

[Grunticon](https://github.com/filamentgroup/grunticon) is a Grunt task that makes it easy to manage icons and background images for all devices.

If you want to use Grunticon, take a look at [their documenation and examples](https://github.com/filamentgroup/grunticon).

Kickoff includes a basic setup of Grunticon that makes it easy to get started.  Simply add your SVG and PNG files to the `assets/dist/img/src` folder and then run `grunt icons` from the project root directory.  This will run the task giving you the icons and code to include in the front–end of your project.

<a name="task-svgmin"></a>
#### SVGMin

This is used as a precursor to Grunticon to ensure SVG files are optimised.  For more information on `grunt-svgmin`, [check out the documentation](https://github.com/sindresorhus/grunt-svgmin).

---
### JavaScript Tasks ([javascript.js](https://github.com/tmwagency/kickoff/blob/master/_grunt-configs/javascript.js))

<a name="task-uglify"></a>
#### Uglify

Uses [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) to minify and concatenate the specified JavaScript files into one file.  To find out how to add or remove files to be included in this task, see the [js config documentation](#config-js).

This task also creates a JavaScript source map for use by developer tools, making debugging minified JavaScript code much more straightforward.

<a name="task-shimly"></a>
#### Shimly

Using the [grunt-shimly](https://github.com/nicbell/shimly) plugin, this task allows you to specifiy any JavaScript shims you would like to include in your project.

Including shims in your project means that you can use native JavaScript features such as Element.classList, while providing fallbacks for browsers that don’t implement these features yet.

Although this is built by default by Kickoff, the associated JS file needs to be [included in the file list to be compiled](#config-js).

<a name="task-jshint"></a>
#### JSHint

Uses the [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint) plugin to validate your JavaScript files.

This task isn’t specified in the default Kickoff build tasks, but can be initiated by running `grunt checks` from the project root directory.

JSHint can take a number of options when validating your JavaScript, all of which can be managed inside a `.jshintrc` file, found in Kickoff’s root directory.

---
### Server tasks ([server.js](https://github.com/tmwagency/kickoff/blob/master/_grunt-configs/server.js))

Kickoff’s server tasks help create a local development environment for your project.

<a name="task-browsersync"></a>
#### BrowserSync
Browsersync is used in our `grunt serve` task to create a simple server to preview your static site. Not only does it live reload any style changes (without a browser plugin I might add), but it also makes your workflow faster by synchronising URLs, interactions and code changes across multiple devices.

See this video for a demo:
<div class="fluidVideo"><iframe width="640" height="480" src="//www.youtube-nocookie.com/embed/heNWfzc7ufQ" frameborder="0" allowfullscreen></iframe></div>

---
### Utility Tasks ([utilities.js](https://github.com/tmwagency/kickoff/blob/master/_grunt-configs/utilities.js))

<a name="task-clean"></a>
#### Clean

The clean task uses [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean) to remove files from the directories specified.  This is useful when copying files from one directory to another, to avoid artifacts from previous compilation tasks; for example, icons would otherwise remain in the target compilation directory when they may have been deleted from the project.

<a name="task-clean"></a>
#### Shell
The clean task uses [grunt-shell](https://github.com/sindresorhus/grunt-shell) to run shell commands. Kickoff uses this task to install bower dependencies when the `grunt start` command is run.

<a name="task-photobox"></a>
#### Photobox - Visual Regression testing

We have integrated a simple visual regression testing task, [grunt-photobox](https://github.com/stefanjudis/grunt-photoBox), to help prevent deployment of broken code. The task takes screenshots of certain urls – defined in the `config.testing.visual.urls` variable ([see above](#config-testing-visual)) – and compares them against the last screenshots taken.

Usage is simple. Run the `grunt photobox` task in your terminal. If your urls are local and you're using `grunt serve` to view your site, you will need to run the task in a new tab. Once it is complete, open up the `/photobox/` directory in your site.

---
<a name="task-watch"></a>
### Watch Task ([watch.js](https://github.com/tmwagency/kickoff/blob/master/_grunt-configs/watch.js))

The `grunt watch` task is incredibly powerful; it watches for changes in files you are working on and acts on any changes you make to them.

For example, if you edit a Sass file, upon saving the file the watch task will run Kickoff’s Sass and Autoprefixer tasks to generate your projects CSS.  It will also live reload the CSS into your web browser so that you can see the styling changes immediately.

Kickoff is setup by default to watch:

* The SCSS files for changes, compiling them to CSS when saved.
* JavaScript for changes, minifying and concatinating them when saved.
* Any SVG file that is added to the 'img/src' directory, subsequently running SVGMin & Grunticon tasks.

This task uses the [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) plugin.
