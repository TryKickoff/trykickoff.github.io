---
title: JavaScript
layout: docs
navgroup: docs
navactive: docsjs
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

<hr class="sectionSplitter">

### script.js

This file can be used to contain or reference your site/app JavaScript code.

<hr class="sectionSplitter">

### Folder Structure

Kickoff has a very simple folder structure for it’s JavaScript; as a base Kickoff contains `utils`, `standalone` and a `modules` directories.

#### `assets/src/js/modules`
This directory is where you ought to put all your local, non-npm modules.

#### `assets/src/js/utils`
This directory is where you ought to put all your local utility scripts. These are the simple, single-serving scripts that are shared by more than one module.

#### `assets/src/js/standalone`
Any script/file in this directory will be copied, without modification, to the `assets/dist/js/standalone` directory. As an example, we added our Modernizr.js file here

For more information on how Kickoff uses 3rd party libraries, [checkout the documentation below](#libs).

<hr class="sectionSplitter">
<a name="webpack"></a>

## Webpack

[Webpack](https://webpack.github.io/) lets you `require('modules')` in the browser by bundling up all of your dependencies. It also gives you access to thousands of already created modules via [npm](https://www.npmjs.org/), that can be added by simply requiring them within your JavaScript.

Kickoff uses Webpack to bundle its Javascript. By default, only `script.js` is compiled, but if you need to split your code and provide another entry point, you need to create the new source file in the `/assets/src/js` directory and then edit the `entryPoints` object in [`.kickoff/config.js`](https://github.com/trykickoff/kickoff/blob/master/.kickoff/config.js).

```js
entryPoints: {
	kickoff: [`${this.srcDir}/js/script.js`],
	styleguide: [`${this.srcDir}/js/styleguide.js`],

	// Create more entry-points by adding to this array, e.g.
	foo: [`${this.srcDir}/js/bar.js`],
},
```

<hr class="sectionSplitter">
<a name="babel"></a>

## Babel

Kickoff uses the Browserify transform **Babelify** to allow you to write ES2015 (previously called ES6) in your projects.  This will automatically compile your ES2015 code back into ES5 syntax so that older browsers can understand it.

The main benefit of this is that you can learn to use the latest JavaScript syntax without having to wait for browsers to implement those features.  The compilcation step will take care of this for you.

To learn more about Babel, [check out their documentation](https://babeljs.io/).

<hr class="sectionSplitter">
<a name="npm"></a>

## NPM

Kickoff uses NPM to include and manage any 3rd party dependencies that you might need for your site. A few npm packages are included with Kickoff by default, these can be found by viewing the manifest file, [package.json](https://github.com/trykickoff/kickoff/blob/master/package.json), and installed by running:

```sh
npm install
```

#### Default NPM dependencies

* [lite-ready](https://www.npmjs.com/package/lite-ready) - **[javascript]** Developed by Nic Bell, this is our version of DOMready that is a little bit smarter than the rest
* [console](https://github.com/matthewhudson/console) - **[javascript]** Drop-in replacement for console - a cross-environment fix for missing methods
* [svg4everybody](https://github.com/jonathantneal/svg4everybody) - **[javascript]** Use external SVG spritemaps today
* [double-dollar](https://github.com/mrmartineau/double-dollar) - **[javascript]** forEach over DOM elements more easily
* [kickoff-welcome.js](https://github.com/TryKickoff/kickoff-welcome.js) - **[javascript]** A JS console welcome message for the Kickoff framework
* [kickoff-fluidVideo.css](https://github.com/TryKickoff/kickoff-fluidVideo.css) - **[sass]** Simple fluid-width videos using only CSS
* [kickoff-utils.scss](https://github.com/TryKickoff/kickoff-utils.scss) - **[sass]** Sass utility functions and mixins for the Kickoff framework
* [normalize.css](https://necolas.github.io/normalize.css/) - **[sass]** A modern, HTML5-ready alternative to CSS resets
* [copy-js](https://github.com/duyetdev/copy.js) - **[javascript, styleguide]** Simple copy to clipboard. **Only used on the styleguide**

These packages aren’t hard dependencies and can be removed by removing them from the `package.json` before your install your dependencies. **The sass dependencies are all used in the framework**, be careful when removing them.

#### Recommended 3rd party npm packages
If you need to add any 3rd party library code, we suggest that you install it from [npm](https://npmjs.org). [Libraries.io](http://libraries.io) or [npms](https://npms.io) however, both have a better search than npm so it might be easier to find them on there. There are thousands of packages on npm, here are a few that we find particularly useful:

* [lodash](https://lodash.com/) - A JavaScript utility library delivering consistency, modularity, performance, & extras `npm i lodash -S`
* [lazysizes](https://www.npmjs.com/package/lazysizes) - High performance (jankfree) lazy loader for images (including responsive images), iframes and scripts (widgets) `npm i lazysizes -S`
* [attach.js](https://www.npmjs.com/package/attach.js) - Attaches JavaScript to HTML without messy selectors `npm i attach.js -S`
* [D'accord form validation](https://www.npmjs.com/package/daccord-validation) - Kickoff validation plugin for forms. Uses HTML 5 form attributes to trigger validation tests `npm i daccord-validation -S`
* [Dominus](https://www.npmjs.com/package/dominus) - Lean DOM Manipulation and a great alternative to jQuery at a fraction of the size `npm i dominus -S`
* [jQuery](https://github.com/jquery/jquery/) - A fast, small, and feature-rich JavaScript library
* [Cookies](https://github.com/ScottHamper/Cookies/) - Developed by Scott Hamper, Cookies is a great Cookie manipulation library `npm i cookies-js -S`
* [Bullet pubsub](https://www.npmjs.com/package/bullet-pubsub) - A lightweight and simple to use pub-sub library. `npm i bullet-pubsub -S`
* [utube](https://www.npmjs.com/package/utube) - Youtube video player class `npm i utube -S`
* [moment.js](https://www.npmjs.com/package/moment) - Parse, validate, manipulate, and display dates  `npm i moment -S`
* [scroll](https://www.npmjs.com/package/scroll) - A function that animates an element’s scrollTop/scrollLeft values `npm i scroll -S`
* [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client `npm i axios -S`
* [Flickity](https://www.npmjs.com/package/flickity) - Flickity carousel - Touch, responsive, flickable galleries  `npm i flickity -S`
* [Swiftclick](https://github.com/tmwagency/swiftclick) - Developed by Ivan Hayes, SwiftClick is a library created to eliminate the 300ms click event delay on touch devices.  `npm i swiftclick -S`
* [Trak.js](https://github.com/mrmartineau/trak.js) - Developed by Zander Martineau, trak.js is a universal analytics event tracking API  `npm i trak.js -S`
* [get-size](https://www.npmjs.com/package/get-size) - measures element size  `npm i get-size -S`
* [responsive-watch](https://www.npmjs.com/package/responsive-watch) - Watch some media queries and react when they change `npm i responsive-watch -S`
* [throttle-debounce](https://www.npmjs.com/package/throttle-debounce) - Throttle/debounce your functions `npm i throttle-debounce -S`
* [uppie](https://www.npmjs.com/package/uppie) - Cross-browser directory and multi-file upload library `npm i uppie -S`

<hr class="sectionSplitter">
<a name="shims"></a>

## Shims and polyfills

From version 7, Kickoff uses the [polyfill.io](http://polyfill.io) service to dynamically add any polyfills that a browser should need.

<hr class="sectionSplitter">
<a name="modernizr"></a>

### Modernizr
Modernizr is included with Kickoff if you need support for non-flexbox supporting browsers. You may wish to create your own [custom Modernizr build](http://www.modernizr.com/download/) and replace the included version.
