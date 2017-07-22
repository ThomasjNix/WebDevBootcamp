/*
	Have a player 1 score and player 2 score
	Click on player one or player two button
	When a player hits a specified number of points (in the input field), end the game and don't let the score change
	Reset sets it again to 0 to 0
	Allow user to set what to play to
*/

// Select all elements that will be used
var pSelector = document.querySelector('p span');
var inputSelector = document.querySelector('input');
var p1Button = document.querySelector('#p1');
var p2Button = document.querySelector('#p2');
var p1Display = document.querySelector("h1 > span:first-of-type");
var p2Display = document.querySelector("h1 > span:last-of-type");
var resetButton = document.querySelector('#reset');

// Set starting scores
var p1Score = 0;
var p2Score = 0;
var winningScore = Number(inputSelector.value);
var gameOver = false;

// Change the <p> to what the game is played to
inputSelector.addEventListener('input', function(){
	// A little proud of this, keeps the score from being dropped below the highest score at the time 
	if (this.value < p1Score + 1 || this.value < p2Score + 1){
		console.log("Score already passed!");
		(p1Score >= p2Score ? 
			this.value = p1Score + 1 :
			this.value = p2Score + 1);
	}
	
	winningScore = Number(this.value);
	pSelector.textContent = winningScore;
});

// Increment player one score UNLESS game is over, otherwise set p1's score to green text
p1Button.addEventListener('click', function(){
	
	if (!gameOver){
		p1Display.textContent = ++p1Score;	
		console.log("Player 1 scores!");
	}

	if(p1Score >= winningScore){
		gameOver = true;
		p1Display.style.color = "green";
		console.log("Player 1 wins!");
	}
});

// Increment player one score UNLESS game is over, otherwise set p2's score to green text
p2Button.addEventListener('click', function(){
	// Increment player one score UNLESS game is over
	if (!gameOver){
		p2Display.textContent = ++p2Score;
		console.log("Player 2 scores!");
	}

	if(p2Score >= winningScore){
		gameOver = true;
		p2Display.style.color = "green";
		console.log("Player 2 wins!");
	}
});

// Reset the scores, set game over to false, clear any green text
resetButton.addEventListener('click', function(){
	// Reset score to 0-0
	gameOver = false;
	p1Score = p2Score = 0;
	p1Display.textContent = p2Display.textContent = 0;
	p1Display.style.color = p2Display.style.color = "black";
	console.clear();
});
