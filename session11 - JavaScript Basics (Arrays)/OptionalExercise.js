/*
The goal is to write a forEach function from scratch
*/

Array.prototype.myForEach = function(fn){
	for (var i = 0; i < this.length; i++){
		fn(this[i], i, this);
	}
};

var arr = [1,2,3];
arr.myForEach(function(elem, i, arr){
	console.log(elem);
	console.log(i);
	console.log(arr);
});

/*
So this was done by adding the myForEach function to the Array object's prototype, 
this way whenever it is called, "this" will fall back to the array stored in the Array object.
*/