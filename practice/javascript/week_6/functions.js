// Intro to Functions

// Example of functions we have used so far.
console.log();

Math.round();
Math.floor();
Math.ceil();
Math.random();

var currentTime = Date.now();
console.log(currentTime);

// A function that belongs to a class ("library") is called a "Method".
// A variable that belongs to a class ("library") is called a "Property".



// The Syntax Structure of a Function definition.
function nameOfFunction() {
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
}


nameOfFunction();
nameOfFunction();



/*
Similar to CSS Rulesets

selector {
    property: value;
    property: value;
}

*/


nameOfFunction();











function dataTypePrinter() {
    console.log(102903);
    console.log("Hello World!");
    console.log(false);   
}



dataTypePrinter();





// Arguments and Parameters

// "hello" is the argument
console.log("hello", 100, true);

// text is the parameter (variable) that will accept any data that is given to this function.
function takeDataIn(text1, text2) {

    console.log(text1, text2);

}


takeDataIn("How are you doing?", "Jesser");
takeDataIn("Goodbye!", 1000);








function adder(number2, number1) {

    var sum = number1 + number2;

    console.log( "The sum of" + number1 + " and " + number2 + " is " + sum );

}

adder(4000, 19);