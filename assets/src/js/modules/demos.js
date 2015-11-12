var $ = require('jquery');
var Daccord = require('daccord-validation');
var nextItem = require('nextmatchingelement');

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

function toggleCodeSnippet() {
	var demoHeadings = document.querySelectorAll('.demoHeading');

	for (var i = 0; i < demoHeadings.length; i++) {
		var showCodeBtn = document.createElement('a');
		showCodeBtn.classList.add('demoHeading-showCodeBtn');
		showCodeBtn.setAttribute('title', 'View source code');
		demoHeadings[i].appendChild(showCodeBtn);

		demoHeadings[i].querySelector('.demoHeading-showCodeBtn').addEventListener('click', function (ev) {
			ev.preventDefault();
			var that = this;

			nextItem(this.parentNode, 'demo', function (el) {
				el.classList.toggle('show-code');
				that.classList.toggle('is-active');
			});
		});
	}
}

module.exports = init;
