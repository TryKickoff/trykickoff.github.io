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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Project Name: Kickoff
	 * @description The Kickoff boilerplate js file
	 * @author The Kickoff team
	 *
	 * Need help using JSDoc? Find out more at http://usejsdoc.org/
	 */

	'use-strict';

	// their code e.g. npm modules

	import ready from 'lite-ready'; // https://github.com/nicbell/liteready
	import $$ from 'double-dollar'; // https://github.com/mrmartineau/double-dollar
	import svg4everybody from 'svg4everybody'; // https://github.com/jonathantneal/svg4everybody
	import trak from 'trak';

	// Global libs that don't return a value
	import 'console';
	import 'kickoff-welcome.js'; // The Kickoff message in the js console. Remove it if you like :)

	// our code
	import packageInfo from './modules/packageInfo';
	import demos from './modules/demos';

	window.$$ = $$; // add double-dollar to global scope

	// DOM ready code goes in here
	ready(() => {
	  var swiftclick = SwiftClick.attach(document.body);
	  trak.start();
	  packageInfo();
	  demos();
	  svg4everybody();
	});

/***/ }
/******/ ]);
//# sourceMappingURL=kickoff.js.map