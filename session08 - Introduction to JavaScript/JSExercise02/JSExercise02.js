var promptAnswer = prompt("What is your age?");

var resultAnswer = promptAnswer * 365.25;

document.getElementById('answer_holder').innerText = promptAnswer + " is approximately " + resultAnswer + "days.";
