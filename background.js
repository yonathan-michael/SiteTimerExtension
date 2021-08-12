// Fires when a tab is updated
chrome.tabs.onUpdated.addListener(function () {
	setTimeout(() => {
		getCurrentTab();
	}, 500);
});

// Fires when the active tab in a window changes
chrome.tabs.onActivated.addListener(function () {
	setTimeout(() => {
		getCurrentTab();
	}, 500);
});

// Fires when a tab is closed.
chrome.tabs.onRemoved.addListener(function () {
	console.log("Tab Closed");
});

// Fires when the currently focused window changes
chrome.windows.onFocusChanged.addListener(function () {
	setTimeout(() => {
		getCurrentTab();
	}, 500);
});

// Fires when a window is closed.
chrome.windows.onRemoved.addListener(function () {
	console.log("Window Closed");
});

// Retrieving the currently focused tab
async function getCurrentTab() {
	let queryOptions = { active: true, currentWindow: true };
	let [tab] = await chrome.tabs.query(queryOptions);
	console.log(tab.url);
}

// How do I get a timer to start and stop during user's
// active time on a page

// Retrieving the currently focused tab
async function startTimer() {
	const start = Date.now();
}

// Retrieving the currently focused tab
async function stopTimer() {}
