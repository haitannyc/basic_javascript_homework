// types of commenting

//  single line comment

/* more than
 one 
 line 
 for comments
  */

// Variable types and Examples

// number Variable
var number = 3;
number *= 20;
console.log(number);
 
// string type
var name = "Joe Smith";
console.log(name);

// boolean type

console.log(8 > 5);
console.log(8 <5);

// undefined type
var greeting;
console.log(greeting);

// arrays
var class_names = ["Julie", "Sophie", "Rob", "John"];

// mutli-arrays
var teams = [["Mets","Yankees"],["Knicks","Nets"]];
//  prints all names
console.log(class_names);
console.log(teams);

// call for certain name
console.log(class_names[3]);
console.log(teams[0],[1]);
// -----------------------------------------
// problems also 3 functions

// problem1
function num(num1, num2) {
  return(num1 + num2);
}
console.log(num(2,5));


function person(firstName, lastName) {
     return(firstName + " " + lastName); 
}
console.log(person("Joe", "Smith"));

// --------------------------------------

// problem2
var teams = [["mets", "newyork"],["cubs", "chicago"],["redsox", "boston"]];
console.log("Team " + teams[0][1] +" " + teams[0][0]);

// ------------------------------------------

// problem3
var num = 77;
if (num < 10) {
  alert("Your number is less than 10");
} else {
  console.log("Your number " + num + " is greater than 10");  
}

// ------------------------------------------

// problem5
var stringOne = "Good Morning";
var stringTwo = "Good Evening";
if (stringOne !== stringTwo) {
  alert("Your response is not correct");
} else {
  console.log(stringOne + " to you");
}

// print to console for debugging code
console.log("The comment prints");

// alert to open panel also can used for debugging
alert("hello world");


// ------------------------------

// reference material
// function someName(numberOne, otherNumber){
//   // return the sum of numberOne, 10, and otherNumber
//   return numberOne + 10 + otherNumber;
// }
// // call your new function, giving it 2 argument values
// // numberOne = 4, otherNumber = 14
// // log the result to the console
// console.log(someName(4, 14));

