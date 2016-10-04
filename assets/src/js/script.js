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
