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
import trak from 'trak.js';
import anchorJS from 'anchor-js';
import SwiftClick from 'swiftclick';

// Global libs that don't return a value
import 'console';
import 'kickoff-welcome.js'; // The Kickoff message in the js console. Remove it if you like :)

// our code
import packageInfo from './modules/packageInfo';
import demos from './modules/demos';

window.$$ = $$; // add double-dollar to global scope

// DOM ready code goes in here
ready(() => {
	const swiftclick = SwiftClick.attach(document.body);
	const anchors = new anchorJS();
	anchors.options = {
		icon: '¶'
	}
	anchors.add('article h1, article h2, article h3, article h4');

	trak.start();
	packageInfo();
	demos();
	svg4everybody();

	document.querySelector('.sidebarReveal').addEventListener('click', ev => {
		document.querySelector('.sidebar').classList.toggle('u-showAboveMid');
	}, false);
});
