var submit = document.getElementById("submitQuery");
var str;
var fibSequence = new Array();

submit.addEventListener("click", function() {
	// get value of input text box
	var num = document.getElementById("inputText").value;

	// reset fibTable
	document.getElementById("fibTable").innerHTML = "";

	// validate input
	if(inputValidation(num)) { // if valid, show result of input, create table
		str = "The result of f(" + num + ") is " + doFibonacci(Number(num));

		createTable();

		// display contents in console
		fibSequence.forEach(function(element) {
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
	fibSequence = [];
	fibSequence.push(0);

	if(num === 0) {
		return 0;
	} else if(num === 1) {
		fibSequence.push(1);

		return 1;
	}

	var num1 = 0;
	var num2 = 1;
	var temp;

	fibSequence.push(1);
	fibSequence.push(1);

	for(var i = 3; i <= num; i++) {
		temp = num1;
		num1 = num2;
		num2 += temp;

		fibSequence.push(num1 + num2);
	}

	return (num1 + num2);
}

function createTable() {
	var tableStr = "<table border = 1px><tr>";

	for(var i = 0; i < fibSequence.length; i++) {
		tableStr += "<td>f(" + i + ")</td>";
	}

	tableStr += "</tr><tr>";

	for(var i = 0; i < fibSequence.length; i++) {
		tableStr += "<td>" + fibSequence[i] + "</td>";
	}

	tableStr += "</tr></table>";

	//document.add.innerHTML(tableCreation);
	document.getElementById("fibTable").innerHTML = tableStr;
}