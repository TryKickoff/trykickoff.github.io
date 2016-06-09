/**
 * Adds all attachments
 * @module
 */

var attach = require('attach.js');

var NavSwipe = require('./navswipe');

attach.add('NavSwipe', function (el, id) {
	el[id] = el[id] || new NavSwipe(el);
});
