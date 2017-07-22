//This exercise is done on Google where the Google image has an ID of hplogo
// Get the google image
var imgToChange = document.querySelector('#hplogo');

// Set all the properties. This should be done with CSS but for a simple exercise there's no point in creating a CSS file and class just to add it once
imgToChange.setAttribute('srcset','https://i.amz.mshcdn.com/T-1lk14ibhlM_Th2YypKscTn4-Q=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F63234%2FUntitled-2.jpg');
imgToChange.style.height = "200px";
imgToChange.style.width = "500px";
imgToChange.style.border = "2px solid lightblue";
imgToChange.style.padding = "0 0 0 0";

// Get all the links on the page and loop through them
var googleLinks = document.links;
for (var i = 0; i < googleLinks.length; i++){

	// Again, this could be done with CSS but for the purpose of demonstration there's no point. 
	var tempVar = googleLinks[i];
	tempVar.style.background = "green";
	tempVar.style.color = "purple";
	tempVar.style.border = "2px dashed red";

	// Print all the link contents on the page followed by their href value
	console.log(tempVar.textContent + ":\t" + tempVar.getAttribute('href'));

	// Set all links on the page to go to bing
	tempVar.setAttribute('href','https://www.bing.com');
}