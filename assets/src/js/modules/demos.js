var $ = require('jquery');

// Expose for demos
var Daccord = require('daccord-validation');

new Daccord(document.querySelector('.form-daccord'));


function init() {
	grid();
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



module.exports = init;
