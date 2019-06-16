chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: "#FFFF00"}, function() {
        var message = chrome.runtime.lastError ? `Error + ${chrome.runtime.lastError}` : "The color now is yellow.";
        console.log(message);
    });
});