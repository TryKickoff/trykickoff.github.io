import axios from 'axios';

// List of packages to be included
const packages = [
	'kickoff',
	'generator-kickoff',
	'kickoff-grid.css',
	'kickoff-utils.scss',
	'kickoff-fluidVideo.css',
	'kickoff-snippets',
	'statix'
]

let packageEndpoints = [];

function init() {
	packages.forEach(pkg => {
		packageEndpoints.push(axios.get(`https://rawgit.com/TryKickoff/${pkg}/master/package.json`));
	});

	// If you add a package to the array above,
	// ensure you add its data as an argument here
	axios.all(packageEndpoints).then(axios.spread((kickoffData, generatorData, gridData, utilsData, fluidVideoData, snippetsData, statixData) => {
		// console.log(kickoffData, generatorData, gridData, utilsData, fluidVideoData, snippetsData)

		// Manually add the button using the data from 'ajax' :wink:
		document.querySelector('.nav-releases').innerHTML = `
			<a class="nav-subItem" href="https://github.com/TryKickoff/${kickoffData.data.name}/" target="_blank">${kickoffData.data.name}@${kickoffData.data.version}</a>
			<a class="nav-subItem" href="https://github.com/TryKickoff/${generatorData.data.name}/" target="_blank">${generatorData.data.name}@${generatorData.data.version}</a>
			<a class="nav-subItem" href="https://github.com/TryKickoff/${gridData.data.name}/" target="_blank">${gridData.data.name}@${gridData.data.version}</a>
			<a class="nav-subItem" href="https://github.com/TryKickoff/${utilsData.data.name}/" target="_blank">${utilsData.data.name}@${utilsData.data.version}</a>
			<a class="nav-subItem" href="https://github.com/TryKickoff/${fluidVideoData.data.name}/" target="_blank">${fluidVideoData.data.name}@${fluidVideoData.data.version}</a>
			<a class="nav-subItem" href="https://github.com/TryKickoff/${snippetsData.data.name}/" target="_blank">${snippetsData.data.name}@${snippetsData.data.version}</a>
			<a class="nav-subItem" href="https://github.com/TryKickoff/${statixData.data.name}/" target="_blank">${statixData.data.name}@${statixData.data.version}</a>
		`;

		// Add the version to the home page hero area
		if (document.querySelector('.currentVersion--new')) {
			document.querySelector('.currentVersion--new').textContent = kickoffData.data.version;
		}
	}));
}

module.exports = init;
