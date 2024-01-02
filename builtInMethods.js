// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();
// converts string to lower case
// "hello world"


"Hello World".includes("Hello");
// asks if the parameter is included in the string
// true


"Hello World".endsWith("Hello");
// asks if the string ends with the parameter provided
// false


"Hello World".endsWith("rld");
// asks if the string ends with the parameter provided
// true



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff".
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

var firstName = "Garrett";
console.log(firstName.includes("X"));
// false

var phrase = "Stop listening to music";
console.log(phrase.split(" "))
// [ 'Stop', 'listening', 'to', 'music' ]



// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat())
// [0, 1, 2, 3, 4]

var arr2 = [0, 1, 2, [3, 4]];
console.log(arr1.flat().flatMap((num) => (num === 2 ? [2, 2] : 1)));
// this will first flatten the array then call flatMap, which is essentially going to go through each
// element and check to see if the number equals 2, if it does, it's going to return an array of 2, 2, and
// if it doesn't it will return a 1
// [1, 1, 2, 2, 1, 1]
