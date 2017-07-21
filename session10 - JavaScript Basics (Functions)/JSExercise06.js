function isEven(num){
	if (Number(num)){
		return (num % 2 === 0);	
	}else{
		console.log("Invalid input");
		return 0;
	}
};

function factorial(num){
	if (Number(num) || Number(num) === 0){
		if (num === 0){
			return 1;
		}else if (num > 0){
			var totalNum = 1;
			for (num; num > 0; num--){
				totalNum *= num;	
			}	
			return totalNum;
		}else{
			console.log("Invalid input");
			return 0;
		}
	}else{
		console.log("Invalid input");
		return 0;
	}
}

function kebabToSnake(str){
	if (str.indexOf("-") !== -1){
		return str.replace(/-/g, "_");
	}else{
		return str;
	}
};


isEven(2); // true
isEven(3); // false

factorial(5); // 120 
factorial(6); // 720

kebabToSnake("this-is-a-string"); // "this_is_a_string"
kebabToSnake("-----"); // "_____"