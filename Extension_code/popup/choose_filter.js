

document.addEventListener('DOMContentLoaded', function() {

	var setBodyClass = function(className) {
	    b.tabs.query({active: true, currentWindow: true}, function(tabs){
			b.tabs.sendMessage(tabs[0].id, {action: "bodyClass", class: className});
		});
	}
	
	var onFilterChange = function(){
		var filter = document.querySelector('input[name = "filterButton"]').value;
        console.log(`Inside onfilterchange filter: ${filter}`); 
		setBodyClass(filter);
	}
	
	var buttons = document.getElementsByName("filterButton");
    console.log(buttons); 
	for (i = 0; i < buttons.length; i++) {
	    buttons[i].addEventListener("click", onFilterChange);
        console.log('Added event listeners')
	}

});