// Define movie array
var movieArr = [
	{
		title: "Terminator",
		rating: 4.0,
		hasWatched: true
	},
	{
		title: "The Avengers",
		rating: 4.5,
		hasWatched: true
	},
	{
		title: "Jurassic Park",
		rating: 4.8,
		hasWatched: true
	},
	{
		title: "Frozen",
		rating: 3.0,
		hasWatched: false
	},
	{
		title: "Cars",
		rating: 2.0,
		hasWatched: true
	},
	{
		title: "Guardians of the Galaxy",
		rating: 5.0,
		hasWatched: true
	},
	{
		title: "Batman Begins",
		rating: 3.8,
		hasWatched: false
	}
]

// Define callback function to print movie data
function printInfo(elem, index){
	console.log("==========\n" + "Movie #" + index + ": " + elem.title +
		"\nRating: " + String(elem.rating) + 
		"\nWatched: " + (elem.hasWatched ? "YES" : "NO") + "\n");
}

// Call .forEach with callback function to print each movie's data individually
movieArr.forEach(printInfo);




































