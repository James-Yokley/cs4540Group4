var b = null;
if(typeof browser != 'undefined'){
	b = browser;
}
else{
	b = chrome;
}

//Change class
b.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if(message.action == "bodyClass") {
		document.body.classList.remove("protanopia");
		document.body.classList.remove("deuteranopia");
		if(message.class != ""){					
			document.body.classList.add(message.class);
		}
	}
});

//Inject SVG
injectSVGFromFile(b.extension.getURL("rgblind/rgblind.svg"));
console.log('In believing js')
//Inject CSS
injectCSSFromFile(b.extension.getURL("rgblind/rgblind-inject.css"));