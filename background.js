chrome.tabs.onUpdated.addListener(function () {
	setTimeout(() => {
		getCurrentTab();
	}, 500);
});

chrome.tabs.onActivated.addListener(function () {
	setTimeout(() => {
		getCurrentTab();
	}, 500);
});

async function getCurrentTab() {
	let queryOptions = { active: true, currentWindow: true };
	let [tab] = await chrome.tabs.query(queryOptions);
	console.log(tab.url);
}
