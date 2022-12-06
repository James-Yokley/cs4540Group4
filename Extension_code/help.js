var b = browser;

document.addEventListener('DOMContentLoaded', function() {

    var backRedirect = function(){
		console.log('Back Redirect'); 
		location.href = 'choose_filter.html'; 
	}
    var backButton = document.getElementById("backButton"); 
	backButton.addEventListener("click", backRedirect); 

});