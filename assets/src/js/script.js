import ready from 'lite-ready';
import svg4everybody from 'svg4everybody';
import trak from 'trak.js';
import AnchorJS from 'anchor-js';
import 'console';
import 'kickoff-welcome.js';
import packageInfo from './modules/packageInfo';
import demos from './modules/demos';

// DOM ready code goes in here
ready(() => {
	const anchors = new AnchorJS();
	anchors.options = {
		icon: '¶'
	};
	anchors.add('article h1, article h2, article h3, article h4');

	trak.start();
	packageInfo();
	demos();
	svg4everybody();

	if (document.querySelector('.sidebarReveal')) {
		document.querySelector('.sidebarReveal').addEventListener('click', ev => {
			document.querySelector('.sidebar').classList.toggle('u-showAboveMid');
		}, false);
	}

});
