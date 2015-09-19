/**
 * Project Name:
 * Client:
 * Author:
 * Company:
 */

'use-strict';

// npm modules
var SwiftClick = require('swiftclick');
var trak = require('trak.js');
var ready = require('lite-ready');

// Our own modules
var packageInfo = require('./modules/packageInfo');
var demos = require('./modules/demos');

// Bundle global libs that don't return a value
require('console');


// DOM ready code goes in here
ready(function () {
	trak.start();
	var swiftclick = SwiftClick.attach(document.body);

	packageInfo();
	demos();
});
