async function getRelease(callback) {
	const response = await fetch('https://api.github.com/repos/oriedita/oriedita/releases/latest');
	callback(await response.json());
}

function version(json) {
	let version = json.tag_name;
	return version.replace(/^v/, '');
}

function asset(json, ext) {
	return json.assets.find(a => a.browser_download_url.endsWith(ext))?.browser_download_url;
}