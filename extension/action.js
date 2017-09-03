chrome.browserAction.onClicked.addListener(function (tab) {
    if (tab.url.indexOf("http://opal.openu.ac.il/mod/ouilvideocollection") != -1) {
        chrome.tabs.executeScript({
        file: 'jquery.min.js'
    }, function(){
            chrome.tabs.executeScript(null, { file: "bla.js" });
         }
     )}
});
