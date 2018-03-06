var submit = document.getElementById("submitQuery");
var str;
var sequence = new Array();

submit.addEventListener("click", function() {
	// get value of input text box
	var num = document.getElementById("inputText").value;

	// check input
	if(inputValidation(num)) {
		str = "The result of f(" + num + ") is " + doFibonacci(Number(num));

		sequence.forEach(function(element) {
  			console.log(element);
		});
	}
	
	document.getElementById("output").innerHTML = str;
});

function inputValidation(num) {
	var isValidInt = true;

	if(num < 0) { // check if num is a negative
		str = "Invalid Input: negative number";
		return false;
	} else if(num === "") { // check if num is an empty string
		str = "Invalid Input: empty field";
	 	return false;
	} else if(isNaN(Number(num))) { // check if num is not a number
		str = "Invalid Input: not a number";
		return false;
	} else if(num % 1 != 0) { // check if num is a decimal
		str = "Invalid Input: decimal number";
		return false;
	}

	return isValidInt;
}

function doFibonacci(num) {
	sequence = [];
	sequence.push(0);

	if(num === 0) {
		return 0;
	} else if(num === 1) {
		sequence.push(1);

		return 1;
	}

	var num1 = 0;
	var num2 = 1;
	var temp;

	sequence.push(1);
	sequence.push(1);

	for(var i = 3; i <= num; i++) {
		temp = num1;
		num1 = num2;
		num2 += temp;

		sequence.push(num1 + num2);
	}

	return (num1 + num2);
}