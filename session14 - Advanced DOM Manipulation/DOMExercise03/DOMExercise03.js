// On a button click, change the background from white to purple or from purple to white

// Set variables for the button and body
var button = document.querySelector('#colorChangeBtn');
var body = document.querySelector('body');

// Set the background color to be white for the click event so I don't have to use rgb()
body.style.background = "white"; 

// Add a click event with conditional anonymous function to change the body color
button.addEventListener('click', function(){
	if (body.style.background === "white"){
		body.style.background = "purple";
	}else{
		body.style.background = "white";
	}
});