var age = prompt("How old are you?");

if (age <= 0 || isNaN(age)){
	console.log("You must enter a valid age.");
}else{
	if (age == 21){
		console.log("Happy 21st!");
	}
	if (age % 2 != 0){
		console.log("Your age is odd.");
	}
	if (Math.sqrt(age) % 1 == 0 ){
		console.log("perfect square!");
	}
}