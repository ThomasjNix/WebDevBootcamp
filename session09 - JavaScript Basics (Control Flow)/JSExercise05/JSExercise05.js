var answer = prompt("Are we there yet?");

while(answer.toLowerCase() !== "yes" && answer.toLowerCase().indexOf("ye") === -1){
	answer = prompt("Are we there yet?");
}

alert("ok cool");