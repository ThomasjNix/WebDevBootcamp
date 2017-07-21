//Create ToDo array
var todoArr = [];

//Prompt user for input 
var input = prompt("What would you like to do?");

while(input !== "quit"){
	//Operate based on response
	switch(input){
		case "list":
			console.log(todos);
			break;
		case "new":
			todoArr.push(prompt("What would you like to add?"));
			break;
		case "quit":
			alert("Done!");
			break;
		default:
			alert("Command not recogniozed");
	}

	//Prompt for new input
	input = prompt("What would you like to do?");
}


/* Kind of did this my way instead of using if/else statements, but it functions the same way */