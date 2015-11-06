var $ = require('jquery');
var Daccord = require('daccord-validation');

function init() {
	grid();
	validation();
	fileInput();
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

function validation() {
	if (document.querySelector('.form-daccord')) {
		new Daccord(document.querySelector('.form-daccord'));
	}
}

function fileInput() {
	if (document.querySelector('.form-input-file')) {
		var fileInput = document.querySelector('.form-input-file');
		var fileInputText = document.querySelector('.form-input--file-text');
		fileInputTextContent = fileInputText.textContent;

		fileInput.addEventListener('change', function(e) {
			var value = e.target.value.length > 0 ? e.target.value.replace("C:\\fakepath\\", "") : fileInputTextContent;
			fileInputText.textContent = value;
		});
	}
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
