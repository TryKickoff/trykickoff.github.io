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

export default function () {
	packages.forEach(pkg => {
		packageEndpoints.push(axios.get(`https://rawgit.com/TryKickoff/${pkg}/master/package.json`));
	});

	axios.all(packageEndpoints).then((response) => {
		let html = ``;
		response.forEach(item => {
			const name = item.data.name === 'kickoff-framework' ? 'kickoff' : item.data.name;
			html += `
				<a class="nav-subItem release"
					title="Visit the ${name} repo"
					href="https://github.com/TryKickoff/${name}/"
					target="_blank">
						<span class="release-name">${name}</span>
						<span class="release-version">${item.data.version}</span>
				</a>`;
				// Add the version to the home page hero area
				if (document.querySelector('.currentVersion--new') && name === 'kickoff') {
					document.querySelector('.currentVersion--new').textContent = item.data.version;
				}
		});

		document.querySelector('.nav-releases').innerHTML = html;
	});
}
