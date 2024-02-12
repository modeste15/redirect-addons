chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && changeInfo.url.startsWith("https://www.instagram.com")) {
    chrome.tabs.update(tabId, { url: chrome.runtime.getURL("redirect.html") });
  }
});
