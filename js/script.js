/*	Author:
		TMW - (Author Name Here)
*/

// ======================================
// === Declare global 'TMW' namespace ===
// ======================================
var TMW = window.TMW || {};

// Create a closure to maintain scope of the '$' and remain compatible with other frameworks
(function($) {

	$(function() {

		TMW.SiteSetup.init();

	});// END DOC READY

})(jQuery);

TMW.SiteSetup = {

	init : function () {
		TMW.Demos.init();
		TMW.Kickoff.init();
	}
};

TMW.Demos = {
	init : function() {
		this.grids();
	},

	grids : function() {
		// $('.grid-test .col.centred').each(function() {
		// 	var $spanName = $(this).attr('class'),
		// 		$html = $(this).html();
		// 	$(this).html($html + $spanName);
		// });

		// $('.grid-test .split > div').each(function() {
		// 	var $spanName = $(this).attr('class');
		// 	$(this).text('split ' + $spanName);
		// });

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
};

TMW.Kickoff = {

	init : function() {
		this.getPackageJSON();
		trak.start();
		// trak.options.debug = true;
		this.getLatestCommit();
	},

	// Show Repo versions
	getPackageJSON : function() {
		var that = this;
		$.ajax({
			url: 'https://rawgit.com/tmwagency/kickoff/master/package.json',
			type: 'GET',
			dataType: 'json',
		})
		.done(function(data) {
			// console.log("success", data, that);

			that.setVersion(data.version);
		});
	},

	setVersion : function(version) {
		$('.currentVersion').text(version);
	},

	// Show latest commit message
	getLatestCommit : function() {
		var that = this;
		$.ajax({
			url: 'https://api.github.com/repos/tmwagency/kickoff/commits',
			type: 'GET',
			dataType: 'json',
		})
		.done(function(data) {
			console.log("success", data[0].commit);
			var commitText = 'Latest commit: "' + data[0].commit.message + '" by ' + data[0].commit.author.name;
			var commitUrl = data[0].commit.url.replace('api.', '').replace('repos/', '').replace('git/', '').replace('commits', 'commit');

			$('.latestCommit span').text(commitText);
			$('.latestCommit a').attr('href', commitUrl);
		});
	},



};
