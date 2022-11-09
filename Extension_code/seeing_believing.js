var b = browser; 

//Change class
b.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	console.log(`message.action : ${message.action}`); 
	if(message.action == "bodyClass") {
		document.body.classList.remove("protanopia");
		document.body.classList.remove("deuteranopia");
		if(message.class != ""){					
			console.log(`message.class: ${message.class}`); 
			document.body.classList.add(message.class);
		}
	}
});

//Inject SVG
injectSVGFromFile(b.extension.getURL("rgblind/rgblind.svg"));
console.log('In believing js')
//Inject CSS
injectCSSFromFile(b.extension.getURL("rgblind/rgblind-inject.css"));