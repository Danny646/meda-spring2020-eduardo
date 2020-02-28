// If-Else Statements, AKA conditional statements
// if (condition) {}

if (true) {

    console.log("This code ran if the if statement was true.");

}

console.log("End of script");


//Comparison operators or "Comparitors"
/*
== equal to
>= greater than or equal
>  greater than
<= lesser than or equal
<  lesser than
!= not equal (should not equal to be true)
*/

var age = 22;

if (age >= 21) {
    console.log("Congratz, go get drunk!");
}

var password = "Abcdef";

if (password == "abcdef") {
    console.log("welcome to your profile!");
}

var isCranky = false;

if (isCranky) {
    console.log("go home and sleep");
}


var test = "1000";

if ( test === 1000 ) {
    console.log("test!");
}


// Type coercion: Forces a datatype to be another datatype.
// The follow allow type coercion: == >= <= !=

// These do not allow type coercion: === >== <== !==

var sayHello;

// If and Else parts
if (sayHello) {
    console.log("hello");
} else {
    console.log("goodbye");
}

// Truthy and Falsy values.

//If a variable is holding any of the following it will become a false boolean:
/*
LIST OF MOST COMMON FALSYS
undefined
null
0
""
NaN

LIST OF MOST COMMON TRUTHYS
ANYTHING ELSE
"0"
-1

*/

var checkIfTrue = "";

if (checkIfTrue) {
    console.log("The '" + checkIfTrue + "' value is truthy.");
} else {
    console.log("The '" + checkIfTrue + "' value is falsy.");
}

// Logical Operators: &&, ||, !
/*
&& = both sides must be true.
|| = either side must be true.
! = opposite of the current boolean. (if true, it becomes false, and if false, it becomes true).
*/

var firstBool = true;
var secondBool = false;

if ( !firstBool ) {
    console.log("This has runned because the condition is true.");
}

if (firstBool || secondBool) {
    // do something;
}


// If Else Section, allows you to test something and run other code, if the first question was false.

var level = "twelve";

// && says both sides must be true to be a child.
if (level > 0 && level < 18) {
    console.log("You are child");
// if not a child, but below 0 then you are not born yet.
} else if (level < 0) {
    console.log("You are not born yet");
// if not a child, and not born yet, but between level 18 and 112, then you are an adult.
} else if (level >= 18 && level < 112) {
    console.log("You are an adult");
    // if you are not any of the previous, then you are dead.
} else {
    console.log("Thank you for living, come again next time.");
}


/*
if always comes first. only one if per if statement.
else if must come after if. else ifs are optional.
else must come last. else are optional. only one else per if statement.
*/



// Multiple Logical Operators

// All && go first, then ||
// if equal, then left to right.

if (true && false || true || false && true) {

}