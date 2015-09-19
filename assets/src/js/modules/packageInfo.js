var $ = require('jquery');

function init() {
	getPackageJSON();
}

function getPackageJSON() {
	$.ajax({
		url: 'https://rawgit.com/tmwagency/kickoff/master/package.json',
		type: 'GET',
		dataType: 'json',
	})
	.done(function(data) {
		console.log("success", data);

		setVersion(data.version);
	});
}

function setVersion(version) {
	$('.currentVersion').text(' v' + version);
}

function getLatestCommit() {
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
}

module.exports = init;
