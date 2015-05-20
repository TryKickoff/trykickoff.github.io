---
layout: docs
navgroup: docs
navactive: docsjs
title: JavaScript

meta:
  description: Understand how we use Javascript in Kickoff

next:
 - title: Kickoff's CSS
   body: Take a look at how Kickoff structures it’s CSS.
   link: css.html
 - title: The Kickoff Grid
   body: Find out how to use the default Kickoff grid in your project.
   link: grid.html
---

Kickoff has a very simple base JavaScript structure.

We appreciate that everyone has a preferred way of writing and structuring their JavaScript and so we have made it easy to get up and running, while also making it easy to switch out Kickoff’s JavaScript structure should you want to do something more complex.

While not included in the default Kickoff branch, Kickoff now includes a base setup for using Browserify.  This version of Kickoff is maintained in a separate branch, more information on which can be [found in the following documentation](#browserify).

<hr class="sectionSplitter">
<a name="structure"></a>
## JavaScript Structure

As mentioned above, Kickoff’s JavaScript is very non prescriptive.  Here we look at how we structure Kickoff’s JavaScript by default as well as how this can be adapted for your own needs.

---
### script.js

This file can be used to contain or reference your site/app JavaScript code.

For larger projects, we recommend using [Browserify](#browserify) to manage your projects JavaScript dependencies.

By default, Kickoff defines all of it’s JavaScript in the `KO` namespace, but this can be changed to anything you like, perhaps the name of the project. We tend to use the [singleton pattern](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript).

---
### Folder Structure

Kickoff has a very simple folder structure for it’s JavaScript; as a base Kickoff contains `helpers` and `libs` directories.

#### `assets/src/js/helpers`

This folder contains a number of JavaScript helper files to be used in your project.

* **console.js** – a shim for console.log in browsers that don’t support it
* **log.js** – for lazy developers.  Write `log()` to write to the console instead of `console.log()`.
* **shims.js** – file compiled by [Shimly](grunt.html#task-shimly).  Anything added to this file will be overriden by Shimly, so either add the functionality you need to Shimly via pull request, or instead add the code into **helpers.js**.


#### `assets/src/js/libs`

This folder contains any 3rd party libraries used in your Kickoff project.

By default, Kickoff includes [Modernizr](http://modernizr.com/), although removing it is very straightforward.

For more information on how Kickoff uses 3rd party libraries, [checkout the documentation below](#libs).

<hr class="sectionSplitter">
<a name="browserify"></a>
## Browserify

We now maintain a [separate branch of Kickoff](https://github.com/trykickoff/kickoff/tree/browserify) that integrates Browserify into the Grunt build.

[Browserify](http://browserify.org/) is a JavaScript dependency manager that lets you bundle together modules and encourages you to write your JavaScript in a more modular way.  It also gives you access to thousands of already created modules via [NPM (Node Package Manager)](https://www.npmjs.org/), that can be added by simply requiring them within your JavaScript.

Using the Browserfy branch of Kickoff couldn’t be easier.  You can download it or [clone it](https://github.com/trykickoff/kickoff/tree/browserify) in the usual ways, or use [Kickoff’s Yeoman generator](yeoman.html) which gives you the choice to install Kickoff’s Browserify setup or the default JavaScript base.  This is the best solution if you think you may be using it on some projects, but want the default JS base on others.

If you haven’t already, we strongly recommend you take a look at Browserify; we use it regularly on our projects at TMW and it makes dependency management a breeze, especially on medium-large scale projects.

[Download Kickoff with Browserify](https://github.com/trykickoff/kickoff/tree/browserify).

### The best, & easiest, way to use Browserify with Kickoff is to use the [Yeoman generator](yeoman.html)

<hr class="sectionSplitter">
<a name="npm"></a>
## NPM

Kickoff uses NPM to include and manage any 3rd party dependencies that you might need for your site. A few npm packages are included with Kickoff by default, these can be found by viewing the manifest file, [package.json](https://github.com/trykickoff/kickoff/blob/master/package.json), and installed by running:

```sh
npm install
```

#### Default NPM dependencies

* [Swiftclick](https://github.com/tmwagency/swiftclick) - Developed by our own Ivan Hayes, SwiftClick is a library created to eliminate the 300ms click event delay on touch devices.
* [Trak.js](https://github.com/mrmartineau/trak.js) - Developed by our own Zander Martineau, trak.js is a universal analytics event tracking API
* [Cookies](https://github.com/ScottHamper/Cookies/) - Developed by Scott Hamper, Cookies is a great Cookie manipulation library
* [jQuery](https://github.com/jquery/jquery/) - A fast, small, and feature-rich JavaScript library

These packages aren’t hard dependencies and can be removed by removing them from the `config.js.fileList` [found in the grunt config](grunt.html#config-js).

<hr class="sectionSplitter">
<a name="shims"></a>
## Shims

To manage JavaScript Shims, we use a Grunt plugin called [Shimly](https://github.com/nicbell/Shimly), created by  Nic Bell.  To find out more about Shimly, [check out our Grunt task documentation](grunt.html#task-shimly).

<hr class="sectionSplitter">
<a name="libs"></a>
## Libraries

If you need to add any 3rd party library code, we suggest placing it in the [assets/src/js/libs/](https://github.com/trykickoff/kickoff/tree/master/assets/src/js/libs) folder.

By default, Kickoff includes the following libraries:

### jQuery

Kickoff includes jQuery by default in it’s Grunt build, and is installed via [NPM](#npm).

To remove jQuery from your project, simply remove it from the [fileList config variable](grunt.html#config-js) in the [`Gruntfile.js`](https://github.com/trykickoff/kickoff/blob/master/Gruntfile.js#L28).

### Modernizr

The latest version of Modernizr, configured to detect some commonly used CSS features, is included by default. You may wish to create your own [custom Modernizr build](http://www.modernizr.com/download/) and replace the included version.

To remove Modernizr from Kickoff, simply delete the [following line from index.html](https://github.com/trykickoff/kickoff/blob/master/index.html#L26) in the root directory:

```js
<script src="/js/libs/modernizr.min.js"></script>
```
