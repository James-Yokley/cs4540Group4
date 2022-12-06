var b = browser;

document.addEventListener('DOMContentLoaded', function() {

	var setBodyClass = function(className) {
	    b.tabs.query({active: true, currentWindow: true}, function(tabs){
			b.tabs.sendMessage(tabs[0].id, {action: "bodyClass", class: className})
			.catch(onError); 
		});
	}
	
	var onFilterChange = function(){
		var filter = document.querySelector('button[name="filterButton"]:hover').value;
		setBodyClass(filter);
		if(document.querySelector('#resetButton') !== null) {
			b.tabs.query({active: true, currentWindow: true}, function(tabs){
				b.tabs.sendMessage(tabs[0].id, {action: "dyslexiaReset", class: 'dyslexia'})
				.catch(onError);
			});
		}
	}
	
	var buttons = document.getElementsByName("filterButton");
    console.log(buttons); 
	for (i = 0; i < buttons.length; i++) {
	    buttons[i].addEventListener("click", onFilterChange);
	}

	var helpRedirect = function(){
		location.href = 'help.html'; 
	}


	var helpButton = document.getElementById("helpButton"); 
	helpButton.addEventListener("click", helpRedirect); 

	

	document.getElementsByName("dyslexiaButton")[0].addEventListener("click", function(){
		b.tabs.query({active: true, currentWindow: true}, function(tabs){
			b.tabs.sendMessage(tabs[0].id, {action: "dyslexiaClass", class: 'dyslexia'})
			.catch(onError);
		});
	});
	console.log("dyslexia font event listener");

});

