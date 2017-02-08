import axios from 'axios';

// List of packages to be included
const packages = [
	'kickoff',
	'generator-kickoff',
	'kickoff-grid.css',
	'kickoff-utils.scss',
	'kickoff-fluidVideo.css',
	'kickoff-snippets',
	'kickoff-welcome.js',
	'statix'
];

let packageEndpoints = [];

function init() {
	packages.forEach(pkg => {
		packageEndpoints.push(axios.get(`https://rawgit.com/TryKickoff/${pkg}/master/package.json`));
	});

	axios.all(packageEndpoints).then((response) => {
		console.log(response);
		let html = ``;

		response.forEach(item => {
			html += `
				<a class="nav-subItem release"
					title="Visit the ${item.data.name} repo"
					href="https://github.com/TryKickoff/${item.data.name}/"
					target="_blank">
						<span class="release-name">${item.data.name}</span>
						<span class="release-version">${item.data.version}</span>
				</a>`;

				// Add the version to the home page hero area
				if (document.querySelector('.currentVersion--new') && item.data.name === 'kickoff') {
					document.querySelector('.currentVersion--new').textContent = item.data.version;
				}
		});

		document.querySelector('.nav-releases').innerHTML = html;

	});
}

module.exports = init;
