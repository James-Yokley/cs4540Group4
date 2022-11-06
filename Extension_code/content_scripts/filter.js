(()=>{

if (window.hasRun){
    return; 
}

window.hasRun = true; 

function insertFilter(filterURL,deficiency){
    removeExistingFilters(); 


}

function removeExistingFilters() {
    const existFilters = document.querySelectorAll(".seeing-image");
    for (const filter of existFilters) {
      filter.remove();
    }
  }

document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        injectSVGFromFile(getScriptPath()+"rgblind.svg");
        injectCSSFromFile(getScriptPath()+"rgblind-inject.css");
    }
}

var injectCSSFromFile = function(filePath){
	var xmlHttp = null;	
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", filePath, true);
	xmlHttp.send( null );
	xmlHttp.onreadystatechange = function() {
	    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
	        var inject  = document.createElement("style");
			inject.innerHTML = xmlHttp.responseText;
			//document.body.appendChild(inject);
			document.body.insertBefore(inject, document.body.childNodes[0]);
		}
	};
}

var injectSVGFromFile = function(filePath){
	var xmlHttp = null;	
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", filePath, true);
	xmlHttp.send( null );
	xmlHttp.onreadystatechange = function() {
	    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
	        var inject  = document.createElement("temp");
			inject.innerHTML = xmlHttp.responseText;
			//document.body.appendChild(inject.firstChild);
			document.body.insertBefore(inject.firstChild, document.body.childNodes[0]);
		}
	};
}

var getScriptPath = function(){
	var scripts= document.getElementsByTagName('script');
	var path= scripts[scripts.length-1].src.split('?')[0];
	return path.split('/').slice(0, -1).join('/')+'/';
}

browser.runtime.onMessage.addListener((message) => {
	if(message.command === "filter"){
		insertFilter(message.filterURL,message.deficiency);
		}else if (message.command === "reset"){
			removeExistingFilters();
		}
	
})

})();
