var fName = prompt("What is your first name?");
var lName = prompt("What is your last name?");
var age = prompt("What is your age?");

var liItems = document.getElementsByTagName('li');

liItems[0].innerHTML = "Your first name is " + fName;
liItems[1].innerHTML = "Your last name is " + lName;
liItems[2].innerHTML = "Your age name is " + age;