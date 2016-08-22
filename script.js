function tweetText(info,tab) {
    console.log("Word " + info.selectionText + " was clicked.");
    var formattedTweet = encodeURIComponent(info.selectionText);
    
    chrome.tabs.create({  
        url: "https://twitter.com/intent/tweet?text=" + formattedTweet,
    });           
}

chrome.contextMenus.create({
    title: "Tweet: %s", 
    contexts: ["selection"], 
    onclick: tweetText,
});