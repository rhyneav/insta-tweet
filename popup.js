// Initialize a blank tweet
var tweet = "";

// String -> String
// Consume a string and tweet that string if it's below 140 characters. Otherwise, open a dialogue to shorten it.
function StringSizer() {
    if (tweet.length > 140) {
        // Open dialogue to edit the tweet
        console.log("edit tweet: " + tweet);
        document.getElementById("TweetEdit").value = tweet;
        SetCharacterLength();
    } 
    else {
        // String is good, prepare to tweet
        console.log("send tweet: " + tweet);
    }
}

// Selected Text -> String
// Grabs the text selected/highlighted on the page and convert it into a string
function GetSelectedText() {
    if (window.getSelection) {  // all browsers, except IE before version 9
        var range = window.getSelection();
        tweet = range.toString();
        StringSizer();
    } 
    else {
        if (document.selection.createRange) { // Internet Explorer
            var range = document.selection.createRange();
            tweet = range.text;
            StringSizer();
        }
    }
}


// See how long the tweet being edited is
function SetCharacterLength(){
    var TweetEdit = document.getElementById("TweetEdit");
    var TweetCharacter = document.getElementById("TweetLength");
    
    function Update(){
        var CharactersLeft = 140 - TweetEdit.value.length;
        TweetCharacter.innerHTML = CharactersLeft;
    }
    
    Update();
    
    TweetEdit.onkeyup = function() {
        Update();
    };
};

// TODO Add Twitter API

// TODO Send tweet to twitter API

// TODO Have dropdown appear to show tweet has been sent

// TODO Add picture functionality