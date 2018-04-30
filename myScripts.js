var submitBtn = document.getElementById("submitQuery");
var fibOutputStr;
var fibSequence = new Array();
var tableNums;
var timeInterval = null;

submitBtn.addEventListener("click", function() {
	// get value of input text box
	var num = document.getElementById("inputText").value;

	// reset fibTable
	document.getElementById("fibTable").innerHTML = "";

	// reset table fib teaching
	if(timeInterval != null) {
		stopTeaching(timeInterval);
	}

	// validate input
	if(inputValidation(num)) { // if valid, show result of input, create table
		fibOutputStr = "The result of f(" + num + ") is " + doFibonacci(Number(num));

		createTable();

		teachTable();
	}
	
	document.getElementById("output").innerHTML = fibOutputStr;
});

/**
 * input validation for text form
 * 
 * @param {*} val
 * @return {boolean}
 */
function inputValidation(val) {
	var isValidInt = true;

	if(val < 0) { // check if val is a negative
		fibOutputStr = "Invalid Input: negative number";
		return false;
	} else if(val === "") { // check if val is an empty string
		fibOutputStr = "Invalid Input: empty field";
	 	return false;
	} else if(isNaN(Number(val))) { // check if val is not a number
		fibOutputStr = "Invalid Input: not a number";
		return false;
	} else if(val % 1 != 0) { // check if val is a decimal
		fibOutputStr = "Invalid Input: decimal number";
		return false;
	}

	return isValidInt;
}

/**
 * calculates the fibonnaci result of user input
 * 
 * @param {number} num
 * @return {number}
 */
function doFibonacci(num) {
	fibSequence = [];
	fibSequence.push(0);

	// check if num is 0 or 1
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

	// perform fibonacci sequence and save each iteration
	for(var i = 3; i <= num; i++) {
		temp = num1;
		num1 = num2;
		num2 += temp;

		fibSequence.push(num1 + num2);
	}

	// result
	return (num1 + num2);
}

/**
 * creates the html table with the created fib sequence
 */
function createTable() {
	//start of table
	var tableStr = "<h2>The resulting table</h2><div class=\"results\" style=\"overflow-x:auto;\"><table border = 1px><tr>";

	// table headers
	for(var i = 0; i < fibSequence.length; i++) {
		tableStr += "<th>f(" + i + ")</th>";
	}

	tableStr += "</tr><tr class=\"numbers\">";

	for(var i = 0; i < fibSequence.length; i++) {
		tableStr += "<td>" + fibSequence[i] + "</td>";
	}

	// end of table	
	tableStr += "</tr></table></div>";

	// insert table html
	document.getElementById("fibTable").innerHTML = tableStr;

	tableNums = document.querySelectorAll(".numbers td");
}

/**
 * goes through fibonacci sequence highlighting cells
 */
function teachTable() {
	var i = 0;
	var n1 = 0;
	var n2 = 0;

	timeInterval = setInterval(function() {
		tableNums[i].classList.toggle("highlightOutput"); // red

		if(i == 2) {
			tableNums[i - 1].classList.toggle("highlightOutput"); // red
			tableNums[i - 2].classList.toggle("highlightOutput"); // red

			tableNums[i - 1].classList.toggle("highlightNumbers"); // blue
			tableNums[i - 2].classList.toggle("highlightNumbers"); // blue
		}

		if(i > 2) {
			tableNums[i - 1].classList.toggle("highlightOutput"); // red
			tableNums[i - 1].classList.toggle("highlightNumbers"); // blue
		}

		if((i - 3) >= 0) { // remove class from current last number
			tableNums[i - 3].classList.toggle("highlightNumbers"); // blue
		}

		i++;

		if(i  >= tableNums.length) { // end of table has been reached
			stopTeaching(timeInterval);
		}
	}, 1500);
}

/**
 * stops the timer
 * 
 * @param {*} timeInterval 
 */
function stopTeaching(timeInterval) {
	clearInterval(timeInterval);
}