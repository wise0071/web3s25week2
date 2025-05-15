//console.log will output a message in the dev console
//this is a comment
console.log("work");

/*
this is a multi line comment
*/

//to declare a variable use let or const
const ourClassNum = "J206";
let numStudents = 9; //no quotes needed for number

console.log(ourClassNum);

//if you declare a variable with let, you can change its value
numStudents = 21;

console.log(numStudents);

//if you declare a value with const, you cant change its value
//ourClassNum = "C128";
//(if you are trying to change a const variable, you will get a error and will stop the code)
console.log(ourClassNum);

//const and let cannot be redeclared(recreated)
//let numStudents = 25;
//showing that we cannot recycle let/var with different number (already declared on line11)

/*********************************
javascript datatypes
 */

//storing a value of true or false is caleed a boolean
let doorClosed = true; //no quotes, just like a number
console.log(doorClosed);

//you can crnate an empty variable, which will return undefined
let whiteboardContent;
console.log(whiteboardContent); //returns undefined

//you can use the keyword "null" which means undefined/nothing
let classKids = null;
console.log(classKids);

//number can be written without quotes, like null/true/false
//string is text that must be written in quotes
