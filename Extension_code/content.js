var b = browser;

var insertDyslexiaFont = function(){
	var injectCSS = document.createElement("style");
		injectCSS.id = 'dyslexiaCSS';
		injectCSS.className = 'dyslexiaFont'
		injectCSS.innerHTML = `* {
			font-family: 'OpenDyslexic3Regular' !important;
			font-weight: normal;
			font-style: normal;
		}
		`;
		
		document.head.appendChild(injectCSS);
		var inject  = document.createElement("link");
		inject.type = 'text/css';
		inject.rel = 'stylesheet';
		inject.id = 'openDyslexic';
		inject.className = 'dyslexiaFont'
		inject.media = 'screen';
		inject.href = 'https://fontlibrary.org//face/opendyslexic';
		document.head.appendChild(inject);
} 

var removeDyslexiaFont = function(){
	const existFilters = document.querySelectorAll(".dyslexiaFont");
    for (const filter of existFilters) {
    	filter.remove();
    }
}

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
	if(message.action == "dyslexiaClass") {
		insertDyslexiaFont();
	}
	if(message.action == "dyslexiaReset") {
		removeDyslexiaFont();
	}
});

//Inject SVG
injectSVGFromFile(b.extension.getURL("rgblind/rgblind.svg"));
//Inject CSS
injectCSSFromFile(b.extension.getURL("rgblind/rgblind-inject.css"));