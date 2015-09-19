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

---
### Folder Structure

Kickoff has a very simple folder structure for it’s JavaScript; as a base Kickoff contains `helpers` and `libs` directories.

#### `assets/src/js/libs`

This folder contains any 3rd party libraries used in your Kickoff project that are not installed with npm.

By default, Kickoff includes [Modernizr](http://modernizr.com/), although removing it is very straightforward.

For more information on how Kickoff uses 3rd party libraries, [checkout the documentation below](#libs).

<hr class="sectionSplitter">
<a name="browserify"></a>
## Browserify

[Browserify](http://browserify.org/) lets you `require('modules')` in the browser by bundling up all of your dependencies. It also gives you access to thousands of already created modules via [npm](https://www.npmjs.org/), that can be added by simply requiring them within your JavaScript.

If you haven’t already, we strongly recommend you take a look at Browserify; we use it regularly on our projects at TMW and it makes dependency management a breeze, especially on medium-large scale projects.

### From the [Browserify handbook:](https://github.com/substack/browserify-handbook)

Browserify is a tool for compiling node-flavored commonjs modules for the browser.

You can use browserify to organize your code and use third-party libraries even if you don't use node itself in any other capacity except for bundling and installing packages with npm.

The module system that browserify uses is the same as node, so packages published to npm that were originally intended for use in node but not browsers will work just fine in the browser too.

Increasingly, people are publishing modules to npm which are intentionally designed to work in both node and in the browser using browserify and many packages on npm are intended for use in just the browser. npm is for all javascript, front or backend alike.

<hr class="sectionSplitter">
<a name="npm"></a>
## NPM

Kickoff uses NPM to include and manage any 3rd party dependencies that you might need for your site. A few npm packages are included with Kickoff by default, these can be found by viewing the manifest file, [package.json](https://github.com/trykickoff/kickoff/blob/master/package.json), and installed by running:

```sh
npm install
```

#### Default NPM dependencies

* [Swiftclick](https://github.com/tmwagency/swiftclick) - Developed by Ivan Hayes, SwiftClick is a library created to eliminate the 300ms click event delay on touch devices.
* [Trak.js](https://github.com/mrmartineau/trak.js) - Developed by Zander Martineau, trak.js is a universal analytics event tracking API
* [jQuery](https://github.com/jquery/jquery/) - A fast, small, and feature-rich JavaScript library
* [lite-ready](https://www.npmjs.com/package/lite-ready) - Developed by Nic Bell, this is our version of DOMready that is a little bit smarter than the rest

These packages aren’t hard dependencies and can be removed by removing them from the `package.json` before your install your dependencies.

#### Recommended 3rd party npm packages

There are thousands of packages on npm, here are a few that we find particularly useful:

* [Cookies](https://github.com/ScottHamper/Cookies/) - Developed by Scott Hamper, Cookies is a great Cookie manipulation library `npm i cookies-js`
* [Bullet pubsub](https://www.npmjs.com/package/bullet-pubsub) - A lightweight and simple to use pub-sub library. `npm i bullet-pubsub`
* [attach.js](https://www.npmjs.com/package/attach.js) - Attaches JavaScript to HTML without messy selectors `npm i attach.js`
* [utube](https://www.npmjs.com/package/utube) - Youtube video player class `npm i utube`
* [moment.js](https://www.npmjs.com/package/moment) - Parse, validate, manipulate, and display dates  `npm i moment`
* [D'accord validation](https://www.npmjs.com/package/daccord-validation) - Kickoff validation plugin for forms. Uses HTML 5 form attributes to trigger validation tests `npm i daccord-validation`
* [scroll](https://www.npmjs.com/package/scroll) - A function that animates an element’s scrollTop/scrollLeft values `npm i scroll`
* [lodash](https://lodash.com/) - A JavaScript utility library delivering consistency, modularity, performance, & extras `npm i lodash`
* [lazysizes](https://www.npmjs.com/package/lazysizes) - High performance (jankfree) lazy loader for images (including responsive images), iframes and scripts (widgets) `npm i lazysizes`
* [object-assign](https://www.npmjs.com/package/object-assign) - ES6 Object.assign() ponyfill `npm i object-assign`

#### Not using jQuery?
If you're not using jQuery, these npm packages are great alternatives for some of it's functionality:

* [Dominus](https://www.npmjs.com/package/dominus) - Lean DOM Manipulation `npm i dominus`
* [Atomic](https://www.npmjs.com/package/atomicjs) - A tiny AJAX module with great browser support `npm i atomicjs`

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

Kickoff includes jQuery by default, and it is installed via [npm](#npm).

To remove jQuery from your project, simply remove the `require('jquery')` statement in your `script.js` file.

### Modernizr

The latest version of Modernizr, configured to detect some commonly used CSS features, is included by default. You may wish to create your own [custom Modernizr build](http://www.modernizr.com/download/) and replace the included version.

To remove Modernizr from Kickoff, simply delete the [following line from index.html](https://github.com/trykickoff/kickoff/blob/master/index.html#L26) in the root directory:

```js
<script src="/assets/dist/js/libs/modernizr.min.js"></script>
```
