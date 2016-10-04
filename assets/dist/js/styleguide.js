/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/mrmartineau/htdocs/trykickoff/trykickoff.github.io/assets/dist/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	import ready from 'lite-ready';
	import $$ from 'double-dollar';
	import copy from 'copy-js/src/copy.js';

	ready(() => {

		$$('.sg-swatch').forEach(function (item) {
			item.addEventListener('click', function (e) {
				var swatchVar = e.currentTarget.querySelector('.sg-swatch-var').innerText;
				const target = e.currentTarget;
				target.classList.add('is-active');

				copy(swatchVar, () => {
					console.log('copied ', swatchVar);

					setTimeout(() => {
						target.classList.remove('is-active');
					}, 500);
				});
			}, false);
		});
	});

/***/ }
/******/ ]);
//# sourceMappingURL=styleguide.js.map