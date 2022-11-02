


 const hidePage = `body > :not(.seeing-image) {
    display: none;
  }`;

/**
* Listen for clicks on the buttons, and send the appropriate message to
* the content script in the page.
*/
function listenForClicks() {

document.addEventListener("click", (e) => {

function onCaptured(imageUri) {
        console.log(imageUri);
      }

let capturing = browser.tabs.captureVisibleTab();
/* show the captured webpage as image source on console */
capturing.then(onCaptured);
/**
* Given the deficiency and webpage, get the URL.
*/
function seeToURL(seewhat) {
switch (seewhat) {
case "Protanopia":
    return browser.runtime.getURL(imageUri,"Protanopia");
case "Deuteranopia":

case "Dyslexia":

case "Reset":

}
}

/**
* Insert the page-hiding CSS into the active tab,
* then get the tab image source and visual deficiency
* send an image source to the content script in the active tab.
*/
function filter(tabs) {
browser.tabs.insertCSS({ code: hidePage }).then(() => {
let url = seeToURL(e.target.textContent);
browser.tabs.sendMessage(tabs[0].id, {
command: "filter",
filterURL: url
});
});
}

/**
* Remove the page-hiding CSS from the active tab,
* send a "reset" message to the content script in the active tab.
*/
function reset(tabs) {
browser.tabs.removeCSS({ code: hidePage }).then(() => {
browser.tabs.sendMessage(tabs[0].id, {
command: "reset",
});
});
}

/**
* Just log the error to the console.
*/
function reportError(error) {
console.error(`Could not see: ${error}`);
}

/**
* Get the active tab,
* then call "beastify()" or "reset()" as appropriate.
*/
if (e.target.classList.contains("visual")) {
browser.tabs
.query({ active: true, currentWindow: true })
.then(beastify)
.catch(reportError);
} else if (e.target.classList.contains("reset")) {
browser.tabs
.query({ active: true, currentWindow: true })
.then(reset)
.catch(reportError);
}
});
}

/**
* There was an error executing the script.
* Display the popup's error message, and hide the normal UI.
*/
function reportExecuteScriptError(error) {
document.querySelector("#popup-content").classList.add("hidden");
document.querySelector("#error-content").classList.remove("hidden");
console.error(`Failed to execute Seeing is Believing content script: ${error.message}`);
}

/**
* When the popup loads, inject a content script into the active tab,
* and add a click handler.
* If we couldn't inject the script, handle the error.
*/

browser.tabs
.executeScript({ file: "/content_scripts/filter.js" })
.then(listenForClicks)
.catch(reportExecuteScriptError);
