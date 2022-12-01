var b = browser; 
//Change class
b.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if(message.action == "bodyClass") {
		document.body.classList.remove("protanopia");
		document.body.classList.remove("deuteranopia");
		document.body.classList.remove("deuteranopia_daltonize"); 
		document.body.classList.remove("protanopia_daltonize"); 
		if(message.class != ""){					
			console.log(`message.class: ${message.class}`); 
			document.body.classList.add(message.class);
		}
	}
});

//Inject SVG
injectSVGFromFile(b.extension.getURL("rgblind/rgblind.svg"));
//Inject CSS
injectCSSFromFile(b.extension.getURL("rgblind/rgblind-inject.css"));