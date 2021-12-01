async function getReleaseVersion(callback) {
	const response = await fetch('https://api.github.com/repos/oriedita/oriedita/releases/latest');
	const json = await response.json();
	let version = json.tag_name;
	version = version.replace(/^v/, '');
	callback(version);
}