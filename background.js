async function launchContent() {
  let queryOptions = { active: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"],
  });
}

chrome.action.onClicked.addListener(() => {
  launchContent();
});
