document.getElementById("fetch_title").addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		let tabTitle = tabs[0].title;
		document.getElementById("title").innerHTML = tabTitle;
	});
});