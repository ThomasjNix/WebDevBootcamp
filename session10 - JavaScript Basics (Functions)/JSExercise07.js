function doAThing(){
	console.log("This is a thing that will repeat every second... forever.");
};

setInterval(doAThing, 1000);

setInterval(function(){
	console.log("This comes from an anonymous function! It will repeat twice a second... forever.");
}, 500);