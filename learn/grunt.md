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
[Grunt](http://gruntjs.com) and Grunt plugins are installed and managed via [npm](https://npmjs.org/), the [Node.js](http://nodejs.org/) package manager. Grunt 0.4.x requires stable Node.js versions `>= 0.12`.

Before setting up Grunt ensure that your npm is up-to-date by running `npm update -g npm` (this might require sudo on certain systems).

[Grunt](http://gruntjs.com) is used extensively in Kickoff; It is the beating heart of the framework. We use it to compile our Sass, bundle our JavaScript files, or to fire up a simple local server with [BrowserSync](http://browsersync.io) for some testing.

Using Grunt has other benefits besides this; it allows any dev to pick up a project, regardless of if they've worked on it before, and get up and running in no time.  It also helps to ensure the menial tasks (sass & js compilation) that can be forgotten, are already configured when you are ready to deploy your site.

<hr class="sectionSplitter">

<a name="setup"></a>
## Setting up Grunt on your machine
Setting up Kickoff to use Grunt is extremely simple – just follow these simple steps:

#### Step 1 - Install Node
Download and install Node.js from [nodejs.org](http://nodejs.org/), using apt-get (on Linux), or by using Homebrew (on a mac) `brew install node`

#### Step 2 - Install the Grunt CLI
In order to get started, you'll want to install Grunt's command line interface (CLI) globally.

Run `npm install -g grunt-cli` in your terminal or command shell. This will put the `grunt` command in your system path, allowing it to be run from any directory.

N.b. If you have any problems running the above command due to permission errors, you may need to use sudo (on OSX, *nix, BSD etc) or run your command shell as Administrator (on Windows).

#### That's it, Grunt is now setup! Now you need to get Kickoff.
Download Kickoff using any of the options on the [Get Kickoff page](get.html).

#### Install all the things
If you already have Node installed, the command below will setup Kickoff and its dependencies for you:

```sh
npm i -g grunt-cli yo generator-kickoff
```
This installs the Grunt CLI, [Yeoman](http://yeoman.io) and the [Kickoff Yeoman generator](yeoman.html).

#### Once you have got Kickoff, install all the Node dependencies
Grunt will not work without having installed it's dependencies. Kickoff's [package.json](https://github.com/trykickoff/kickoff/blob/master/package.json) uses a few essential Grunt plugins to operate.

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
* [Browserify](#task-browserify) - bundle Javascript
* [Sass](#task-sass) - compiles Kickoff’s Sass files into native CSS
* [Autoprefixer](#task-autoprefixer) – adds vendor prefixes to the CSS
* [BrowserSync](#task-browsersync) – Starts local server available across multiple devices
* [Watch](#task-watch) – watches for code changes and reacts to them on save

---

<a name="grunt-compile"></a>
#### grunt compile

* Run `grunt compile` to only compile your static assets.
* Run `grunt compile --release` to minfify the Sass as well.

---

<a name="grunt-watcher"></a>
#### grunt watcher

Run `grunt watcher` to compile everything then watch. This is useful on an integrated site (rather than on a static templates) or for back-end developers.

---

<a name="grunt-icons"></a>
#### grunt icons

A task to help you create and maintain icons using Grunticon.

Running `grunt icons` carries out the [svgmin](#task-svgmin) and [Grunticon](#task-grunticon) tasks,
generating a set of icons for you to use in the front-end of your project.

Tasks carried out when `grunt icons` is run:

* [clean:icons](#task-clean) – removes any icons already created by Grunticon in our project
* [imagemin:grunticon](#task-imagemin) – optimises SVG files
* [grunticon](#task-grunticon) – creates icon set for use in front end

---

<a name="grunt-checks"></a>
#### grunt checks

A task to help you validate your code.

Running `grunt checks` will run the [validation](#task-htmlvalidation) task to check the project's HTML for errors and formatting inconsistencies.

Tasks carried out when `grunt checks` is run:

* [HTML validation](#task-htmlvalidation) – validates your project's HTML


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

Kickoff’s config variables can be [found in the `_grunt-configs/config.js` file in ](https://github.com/trykickoff/kickoff/blob/master/_grunt-configs/config.js) and looks like the following code snippet:

```js
/**
 * Global Grunt vars
 * Many of the Grunt tasks use these vars. Change as much as you like :)
 */

module.exports = {
	src : "./_grunt-configs/*.js", // This directory. Has all the Grunt tasks grouped into specific js files

	srcDir  : './assets/src',  // <%=config.srcDir%>
	distDir : './assets/dist', // <%=config.distDir%>
	tempDir : './assets/temp', // <%=config.tempDir%>


	// CSS-related Grunt vars
	css : {
		scssDir  : '<%=config.srcDir%>/scss', // <%=config.css.scssDir%>
		distDir  : '<%=config.distDir%>/css', // <%=config.css.distDir%>

		// Renaming this changes the name of the generated CSS file
		// Make sure you update your template file
		distFile : 'kickoff', // <%=config.css.distFile%>

		// We are supporting the last 2 browsers, any browsers with >5% market share,
		// and ensuring we support IE8+ with prefixes
		autoprefixer : ['> 5%', 'last 2 versions', 'firefox > 3.6', 'ie > 7'] // <%=config.css.autoprefixer%>
	},


	// Javascript-related Grunt vars
	js: {
		srcFile: '<%=config.srcDir%>/js/script.js',// <%=config.js.srcFile%>

		distDir: '<%=config.distDir%>/js/', // <%=config.js.distDir%>

		// Renaming this changes the name of the generated JS file
		// Make sure you update your template file
		distFile: 'script.js' // <%=config.js.distFile%>
	},


	// Image-related Grunt vars
	img : {
		srcDir       : '<%=config.srcDir%>/img',      // <%=config.img.srcDir%>
		distDir      : '<%=config.distDir%>/img',     // <%=config.img.distDir%>
		grunticonDir : '<%=config.srcDir%>/grunticon' // <%=config.img.grunticonDir%>
	},


	// Testing-related Grunt vars
	// Add any other test vars in here
	testing: {
		validationDir  : './testing',  // <%=config.tests.validationDir%>
	}
};
```

---

### Breaking this down

<a name="config-src"></a>
#### config.src

The first line you encounter in the Grunt config is the `config.src` variable.

```js
src: "_grunt-configs/*.js"
```

This is used to specify the path at which the rest of your Grunt config files live.  Kickoff defines the location for these files as in the [_grunt-configs](https://github.com/trykickoff/kickoff/blob/master/_grunt-configs/) folder, but if you’d like to rename or move this folder for any reason, make sure that you update this value when doing so.

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
// Javascript-related Grunt vars
js: {
	srcFile: '<%=config.srcDir%>/js/script.js',// <%=config.js.srcFile%>

	distDir: '<%=config.distDir%>/js/', // <%=config.js.distDir%>

	// Renaming this changes the name of the generated JS file
	// Make sure you update your template file
	distFile: 'script.js' // <%=config.js.distFile%>
},
```

The `config.js` variables relate to the directories and paths of the project JavaScript.

`config.js.distDir` is the directory to which the JavaScript files will be compiled when a Grunt build is run.  By default, this is set to the `assets/dist/js/` folder.

`config.js.distFile` is the name given to the compiled JavaScript file when it is built by Grunt.  By default, the filename is `script.js`.

`config.js.srcFile` is the main file that Browserify uses to bundle everything together. By default it is at `assets/src/js/script.js` but can be changed here.

To find our more about what is included in the default JavaScript for Kickoff, see [Kickoff’s JavaScript documentation](js.html).

---
<a name="config-img"></a>
#### config.img

```js
// Image-related Grunt vars
img : {
	srcDir       : '<%=config.srcDir%>/img',      // <%=config.img.srcDir%>
	distDir      : '<%=config.distDir%>/img',     // <%=config.img.distDir%>
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
	validationDir  : './testing',  // <%=config.tests.validationDir%>
}
```

The `config.testing` variables are for any testing related variables.

<hr class="sectionSplitter">
<a name="taskindex"></a>
## Task Index

This is an exhaustive list of all the Grunt tasks that Kickoff uses and what they do.

They are ordered in the same way that Kickoff’s tasks are grouped in the [_grunt-configs](https://github.com/trykickoff/kickoff/blob/master/_grunt-configs/) directory.

---
### CSS Tasks ([css.js](https://github.com/trykickoff/kickoff/blob/master/_grunt-configs/css.js))

<a name="task-sass"></a>
#### grunt-postscss

Uses [grunt-postscss](https://github.com/nicbell/grunt-postscss/) to compile, autoprefix and minify Kickoff’s Sass files into native CSS.

We compile Kickoff’s Sass into 2 CSS files.  The first is a straight compilation of the Sass into native CSS.  The second takes a width parameter, as defined in [`scss/kickoff-old-ie.scss`](https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/kickoff-old-ie.scss), and compiles a CSS file without media queries.  This second file is created so that we can write our Sass code mobile-first, while still being able to serve old versions of Internet Explorer an appropriately sized layout, since they don’t support media queries.  For more information on this approach, see [Jake Archibald’s excellent article on the subject](http://jakearchibald.github.io/sass-ie/).


---
### Image tasks ([images.js](https://github.com/trykickoff/kickoff/blob/master/_grunt-configs/images.js))

The image tasks included in Kickoff compress images and generate icons using Grunticon.

Any images that are placed in `assets/src/img/` are automatically minified (when running a watch process like `grunt serve`) and then copied to `assets/dist/img/`.

<a name="task-imagemin"></a>
#### Imagemin

[Imagemin](https://github.com/gruntjs/grunt-contrib-imagemin/) is used to compress all images placed in the `assets/src/img/` & `assets/src/grunticon` directories. Images in `assets/src/img/` are compressed to `assets/dist/img/` & icons in `assets/src/grunticon/` are compressed but they need Grunticon to manipulate them before being added to `assets/dist/img/icons/`.

<a name="task-grunticon"></a>
#### Grunticon

[Grunticon](https://github.com/filamentgroup/grunticon) is a Grunt task that makes it easy to manage icons and background images for all devices.

If you want to use Grunticon, take a look at [their documenation and examples](https://github.com/filamentgroup/grunticon).

Kickoff includes a basic setup of Grunticon that makes it easy to get started. Simply add your SVG & PNG icons to the `assets/src/grunticon` folder and then run `grunt icons` from the project root directory. This will run the task giving you the icons and code to include in the front–end of your project. The Grunticon src directory is also being watched by `grunt watch` so if that is running then the icons will be generated for you.

---
### JavaScript Tasks ([javascript.js](https://github.com/trykickoff/kickoff/blob/master/_grunt-configs/javascript.js))

<a name="task-browserify"></a>
#### Browserify

Uses [grunt-browserify](https://github.com/jmreidy/grunt-browserify) to bundle your JavaScript files into one file.

This task also creates a JavaScript source map for use by developer tools, making debugging minified JavaScript code much more straightforward.

<a name="task-shimly"></a>
#### Shimly

Using the [grunt-shimly](https://github.com/nicbell/shimly) plugin, this task allows you to specifiy any JavaScript shims you would like to include in your project.

Including shims in your project means that you can use native JavaScript features such as Element.classList, while providing fallbacks for browsers that don’t implement these features yet.

Although this is built by default by Kickoff, the associated JS file needs to be [included in the file list to be compiled](#config-js).

---
### Server tasks ([server.js](https://github.com/trykickoff/kickoff/blob/master/_grunt-configs/server.js))

Kickoff’s server tasks help create a local development environment for your project.

<a name="task-browsersync"></a>
#### BrowserSync
Browsersync is used in our `grunt serve` task to create a simple server to preview your static site. Not only does it live reload any style changes (without a browser plugin I might add), but it also makes your workflow faster by synchronising URLs, interactions and code changes across multiple devices.

See this video for a demo:
<div class="fluidVideo"><iframe width="640" height="480" src="//www.youtube-nocookie.com/embed/heNWfzc7ufQ" frameborder="0" allowfullscreen></iframe></div>

---
### Utility Tasks ([utilities.js](https://github.com/trykickoff/kickoff/blob/master/_grunt-configs/utilities.js))

<a name="task-clean"></a>
#### Clean

The clean task uses [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean) to remove files from the directories specified.  This is useful when copying files from one directory to another, to avoid artifacts from previous compilation tasks; for example, icons would otherwise remain in the target compilation directory when they may have been deleted from the project.

---
<a name="task-watch"></a>
### Watch Task ([watch.js](https://github.com/trykickoff/kickoff/blob/master/_grunt-configs/watch.js))

The `grunt watch` task is incredibly powerful; it watches for changes in files you are working on and acts on any changes you make to them.

For example, if you edit a Sass file, upon saving the file the watch task will run Kickoff’s Sass and Autoprefixer tasks to generate your projects CSS.  It will also live reload the CSS into your web browser so that you can see the styling changes immediately.

Kickoff is setup by default to watch:

* The SCSS files for changes, compiling them to CSS when saved.
* JavaScript for changes, minifying and concatinating them when saved.
* Any SVG file that is added to the 'img/src' directory, subsequently running SVGMin & Grunticon tasks.

This task uses the [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) plugin.
