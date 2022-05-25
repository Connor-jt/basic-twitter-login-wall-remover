
const loadedTabs = {}; // global
// call within a function that has access to 'tab' permission
function load(tabId) {
  [loadedTabs[tabId]] = response;
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if ((tabId !== tab.id && loadedTabs[tabId]) || !/^https:\/\/twitter/.test(tab.url)) return;  
  if (changeInfo.status === 'complete' && tab.active) {
    chrome.tabs.executeScript(null, {file: './foreground.js'}, () => console.log('twitter tab found & loaded!'))
  }
});

// thank you for your code internet man :)