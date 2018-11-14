// Create an array with 5 different strings. Log the length of your array
//var myArray = ["miami", "atlanta", "sanfran", "losangeles", "lasvegas"]
//console.log(myArray.length);

//    Log the length of each of the strings in your array.
//for (var i = 0; i < myArray.length; i++) {
  //console.log(myArray[i].length);
//};

// Finally, reverse the array and console the array again
// myArray.reverse();
// console.log(myArray);

// Comment out your reverse function. Create a copy of your original array (do not simply re-type your array; create a new variable containing an empty array, and use .push() to add each item in your original array into the new, empty array). Now reverse the copied array.
//var copy = [];
//for(var i = 0; i < myArray.length; i++) {
	//copy.push(myArray[i]);
//};
//copy.reverse();
//console.log(copy);

// Sort your array of strings alphabetically.
//myArray.sort();

// Create an array of at least 5 numbers.  Each number should be at least two digits. Sort the array numerically, in ascending order (smallest to biggest).
//var numbersArray = [124, 238, 563, 200, 79]
  // look at values as it sorts
  //numbersArray.sort(function(a, b) {
  //console.log(a, b);
  //return a - b;
//});
//console.log(numbersArray);

//    Then sort it in descending order
//numbersArray.sort(function(a, b) {
  // look at values as it sorts
  //console.log(b, a);
  //return b - a;
//});
//console.log(numbersArray);

// Create an array of three strings. 
//var newArray = ["mind", "body", "soul"]

// Using array methods, add two new strings to the end of the array
//newArray.push("focus", "breath");

// remove one from the beginning
//newArray.shift();

// Console the final array - it should have four strings
//console.log(newArray);

// Create a new, empty array stored in a variable.
var emptyArr = [];

// Create a function which will run when the button is clicked. This function should add the value of the input to your empty array. THEN, your function should effectively loop through your array and append each item inside a list item to the unordered list in your HTML. It should do this correctly no matter how many strings are in your array (in other words, if your array has one string, you will see one list item; if your array has five strings, you will see five list items).
var myList = document.getElementsByTagName("ul")[0];

function populateList() {
	var userValue = document.getElementsByTagName("input")[0].value;
		// push the value of the input into our empty array
		emptyArr.push(userValue);
		// empty out the list first (in case there's already list-items in there)
		myList.innerHTML = "";
	for(var i = 0; i < emptyArr.length; i++) {
		// create a list item
		var newLi = document.createElement("li");
		// add the strings into the list-items
		newLi.innerText = emptyArr[i];
		// append the list-item to our list
		myList.appendChild(newLi);
	}
}


