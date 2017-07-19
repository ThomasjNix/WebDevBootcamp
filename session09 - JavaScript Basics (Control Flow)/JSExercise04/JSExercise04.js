var secretNum = Math.floor(Math.random() * 10 + 1); // I just did this for giggles, the video said to hard code a number. I mean, that would be easier, but this way is hectic!

var guess = prompt("Guess a number between 1 and 10! Every time you guess it will be a random number.");

/*
Colt uses a different method for checking the number value, I like this way.
This allows for implicit coercion, which wouldn't be safe... but it's already 
Confirmed by the if statement that the guess IS a number.

This way checks against NaN and all non-numeric values.
*/
if (isNaN(guess) || guess !== guess){
	console.log("I said a number. Now you have to refresh to play.");
}else{

	if (guess > secretNum){
		console.log("Nope, too high.");
	}else if (guess < secretNum){
		console.log("Nope, too low");
	}else{
		console.log("You got it right!");
	}
}