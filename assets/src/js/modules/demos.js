var $ = require('jquery');

// Expose for demos
var Daccord = require('daccord-validation');

if (document.querySelector('.form-daccord')) {
	new Daccord(document.querySelector('.form-daccord'));
}


function init() {
	grid();
	toggleCodeSnippet();
}

function grid() {
	// Show the grid
	$('.show-grid-button').click(function() {
		if ( $('body').hasClass('show-grid') ) {
			$('body').removeClass('show-grid');
			$('.show-grid-button').text('Show Grid');
			console.log('show grid');
		} else {
			$('body').addClass('show-grid');
			$('.show-grid-button').text('Hide Grid');
			console.log('hide grid');
		}
	});
}


function toggleCodeSnippet(el) {
	console.log('show more code stuff');
	var els = document.querySelectorAll('.btn--showCode');

	for (var i = 0; i < els.length; i++) {
		els[i].addEventListener('click', function (ev) {
			ev.preventDefault();
			var target = this.getAttribute('href');
			console.log(target);
			document.querySelector(target).classList.toggle('show-code');
		})
	}
}

module.exports = init;
