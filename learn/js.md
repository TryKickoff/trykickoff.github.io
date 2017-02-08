---
title: JavaScript in Kickoff
layout: docs
navgroup: docs
navactive: docsjs
meta:
  description: Understand how we use JavaScript in Kickoff
next:
- title: Kickoff's CSS
  body: Take a look at how Kickoff structures it’s CSS.
  link: css.html
- title: The Kickoff Grid
  body: Find out how to use the default Kickoff grid in your project.
  link: grid.html
---

Kickoff has a very simple base JavaScript structure. We appreciate that everyone has a preferred way of writing and structuring their JavaScript and so we have made it easy to get up and running, while also making it easy to switch out Kickoff’s JavaScript structure should you want to do something more complex.

<a name="structure"></a>

## JavaScript structure

As mentioned above, Kickoff’s JavaScript is very non prescriptive.  Here we look at how we structure Kickoff’s JavaScript by default as well as how this can be adapted for your own needs.

<hr class="sectionSplitter">

### script.js

This file can be used to contain or reference your site/app JavaScript code.

<hr class="sectionSplitter">

### Folder structure

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

## webpack

[webpack](https://webpack.github.io/) lets you `import` (ES2015) or `require('modules')` (ES5) in the browser by bundling up all of your dependencies. It also gives you access to thousands of already created modules via [npm](https://www.npmjs.org/), that can be added by simply requiring them within your JavaScript.

Kickoff uses webpack to bundle its JavaScript. By default, only `script.js` is compiled, but if you need to split your code and provide another entry point, you need to create the new source file in the `/assets/src/js` directory and then edit the `entryPoints` object in [`.kickoff/config.js`](https://github.com/trykickoff/kickoff/blob/master/.kickoff/config.js).

```js
entryPoints: {
	kickoff: [`${this.srcDir}/js/script.js`], // generates /assets/dist/kickoff.js
	styleguide: [`${this.srcDir}/js/styleguide.js`], // generates /assets/dist/styleguide.js

	// Create more entry-points by adding to this array, e.g.
	foo: [`${this.srcDir}/js/foo.js`], // generates /assets/dist/foo.js
},
```

<hr class="sectionSplitter">
<a name="babel"></a>

## ES2015 & Babel

Kickoff uses the webpack Babel loader to allow you to write ES2015 in your projects.  This will automatically compile your ES2015 code back into ES5 syntax so that older browsers can understand it.

The main benefit of this is that you can learn to use the latest JavaScript syntax without having to wait for browsers to implement those features.  The compilcation step will take care of this for you.

To learn more about Babel, [check out their documentation](https://babeljs.io/).

<hr class="sectionSplitter">
<a name="npm"></a>

## npm

Kickoff uses NPM to include & manage any 3rd party dependencies that you might need for your site. A few npm packages are included with Kickoff by default, these can be found by viewing the manifest file, [package.json](https://github.com/trykickoff/kickoff/blob/master/package.json), and installed by running:

```sh
npm install
```

#### Default npm dependencies

* [lite-ready](https://www.npmjs.com/package/lite-ready) - **[javascript]** Developed by Nic Bell, this is our version of DOMready that is a little bit smarter than the rest
* [console](https://github.com/matthewhudson/console) - **[javascript]** Drop-in replacement for console - a cross-environment fix for missing methods
* [svg4everybody](https://github.com/jonathantneal/svg4everybody) - **[javascript]** Use external SVG spritemaps today
* [kickoff-welcome.js](https://github.com/TryKickoff/kickoff-welcome.js) - **[javascript]** A JS console welcome message for the Kickoff framework
* [kickoff-fluidVideo.css](https://github.com/TryKickoff/kickoff-fluidVideo.css) - **[sass]** Simple fluid-width videos using only CSS
* [kickoff-utils.scss](https://github.com/TryKickoff/kickoff-utils.scss) - **[sass]** Sass utility functions and mixins for the Kickoff framework
* [kickoff-grid.css](https://github.com/TryKickoff/kickoff-grid.css) - **[sass]** Kickoff’s Grid System
* [normalize-scss](https://github.com/JohnAlbin/normalize-scss) - **[sass]** A modern, HTML5-ready alternative to CSS resets based on [normalize.css](https://necolas.github.io/normalize.css/)
* [copy-js](https://github.com/duyetdev/copy.js) - **[javascript]** Simple copy to clipboard. **Only used on the styleguide**

These packages aren’t hard dependencies and can be removed by removing them from the `package.json` before your install your dependencies. **The sass dependencies are all used in the framework**, be careful when removing them.

#### Recommended 3rd party npm packages
If you need to add any 3rd party library code, we suggest that you install it from [npm](https://npmjs.org). [Libraries.io](http://libraries.io) or [npms](https://npms.io) however, both have a better search than npm so it might be easier to find them on there. There are thousands of packages on npm, here are a few that we find particularly useful:

* [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client `npm i axios -S`. 👍
* [lodash](https://lodash.com/) - A JavaScript utility library delivering consistency, modularity, performance, & extras `npm i lodash -S`
* [gator](https://gator.com/) - Event delegation in javascript `npm i gator -S`
* [double-dollar](https://github.com/mrmartineau/double-dollar) - `forEach` over DOM elements more easily `npm i double-dollar -S`
* [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch) - A window.fetch polyfill. `npm i whatwg-fetch -S`
* [lazysizes](https://www.npmjs.com/package/lazysizes) - High performance (jankfree) lazy loader for images (including responsive images), iframes and scripts (widgets) `npm i lazysizes -S`
* [get-size](https://www.npmjs.com/package/get-size) - measures element size  `npm i get-size -S`
* [throttle-debounce](https://www.npmjs.com/package/throttle-debounce) - Throttle/debounce your functions `npm i throttle-debounce -S`
* [responsive-watch](https://www.npmjs.com/package/responsive-watch) - Watch some media queries and react when they change `npm i responsive-watch -S`
* [attach.js](https://www.npmjs.com/package/attach.js) - Attaches JavaScript to HTML without messy selectors `npm i attach.js -S`
* [D'accord form validation](https://www.npmjs.com/package/daccord-validation) - Kickoff validation plugin for forms. Uses HTML 5 form attributes to trigger validation tests `npm i daccord-validation -S`
* [Dominus](https://www.npmjs.com/package/dominus) - Lean DOM Manipulation and a great alternative to jQuery at a fraction of the size `npm i dominus -S`
* [Cookies](https://github.com/ScottHamper/Cookies/) - Developed by Scott Hamper, Cookies is a great Cookie manipulation library `npm i cookies-js -S`
* [Bullet pubsub](https://www.npmjs.com/package/bullet-pubsub) - A lightweight and simple to use pub-sub library. `npm i bullet-pubsub -S`
* [utube](https://www.npmjs.com/package/utube) - Youtube video player class `npm i utube -S`
* [moment.js](https://www.npmjs.com/package/moment) - Parse, validate, manipulate, and display dates  `npm i moment -S`
* [scroll](https://www.npmjs.com/package/scroll) - A function that animates an element’s scrollTop/scrollLeft values `npm i scroll -S`
* [Flickity](https://www.npmjs.com/package/flickity) - Flickity carousel - Touch, responsive, flickable galleries  `npm i flickity -S`
* [Swiftclick](https://github.com/tmwagency/swiftclick) - Developed by Ivan Hayes, SwiftClick is a library created to eliminate the 300ms click event delay on touch devices.  `npm i swiftclick -S`
* [Trak.js](https://github.com/mrmartineau/trak.js) - Developed by Zander Martineau, trak.js is a universal analytics event tracking API  `npm i trak.js -S`
* [switch-fn](https://www.npmjs.com/package/switch-fn) - Write a functional switch statement. `npm i switch-fn -S`
* [eases](https://www.npmjs.com/package/eases) - grab bag of easing equations `npm i eases -S`
* [mousetrap](https://www.npmjs.com/package/mousetrap) - Simple library for handling keyboard shortcuts `npm i mousetrap -S`
* [dateformat](https://www.npmjs.com/package/dateformat) - A node.js package for Steven Levithan's excellent dateFormat() function. `npm i dateformat -S`
* [jQuery](https://github.com/jquery/jquery/) - A fast, small, and feature-rich JavaScript library
* [uppie](https://www.npmjs.com/package/uppie) - Cross-browser directory and multi-file upload library `npm i uppie -S`

<hr class="sectionSplitter">
<a name="shims"></a>

## Shims & polyfills

From version 7, Kickoff uses the [polyfill.io](http://polyfill.io) service to dynamically add any polyfills that a browser should need. Read the 'Feature detection' section of [this page](https://qa.polyfill.io/v2/docs/examples) to discover better ways to test for polyfills.

<hr class="sectionSplitter">

### Modernizr
Modernizr is included with Kickoff if you need support for non-flexbox supporting browsers. You may wish to create your own [custom Modernizr build](http://www.modernizr.com/download/) and replace the included version. The Modernizr file is included in the `standalone` directory, find out more about it [above](#assetssrcjsstandalone).
