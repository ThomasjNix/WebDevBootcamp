//Create ToDo array
var todoArr = [];

//Prompt user for input 
var input = prompt("What would you like to do?");

//Loops while the user hasn't selected to quit
while(input !== "quit"){

	//Operate based on response
	switch(input){
		//No quit case is needed because it can't ever be executed. The loop will never run if input = quit
		case "list":
			//Lists the array aesthetically in the console
			console.log("==========")
			todoArr.forEach(function(elem, i){
				console.log(i + ":\t" + elem);
			});
			break;
		case "new":
			//Pushes new value to the array
			var toPush = prompt("What would you like to add?");
			todoArr.push(toPush);
			console.log("Added: " + toPush);
			break;
		case "delete":
		/*
			Checks if the index to delete from is valid and deletes it if it is
			Quits the switch/case if not, loops back to delete choice
			Also prints a reference of the array in the console 
		*/
			console.log("ARRAY INDEX REFERENCE\n======================");
			todoArr.forEach(function(elem, i){
				console.log(i + ":\t" + elem);
			});
			var deleteIndex = prompt("What index? Pick from 0 to " + (todoArr.length - 1));
			if (isNaN(deleteIndex) || deleteIndex !== deleteIndex || (deleteIndex > todoArr.length - 1)){
				console.log("INVALID INPUT!");
			}else{
				var deleted = todoArr.splice(deleteIndex, 1);
				console.log("Deleted: " + deleted);
			}
			break;
		default:
			alert("Command not recognized");
			break;
	}

	//Prompt for new input
	input = prompt("What would you like to do?");
	if (input === "quit"){
		console.log("Goodbye!");
	}
}


/* Kind of did this my way instead of using if/else statements, but it functions the same way */