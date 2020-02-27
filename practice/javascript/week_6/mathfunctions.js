function adder(num1, num2) {
    return num1 + num2;
}

console.log(  adder(100, "Tony")  );
/*
1) 100 and Tony get sent to the Adder function.
2) Adder function runs, and places 100 and Tony, into num1 and num2.
3) Before we can return a value, we need to add/concatenate. We call num1 and num2 variables for its values, and then add/concatenate them together.
4) The return keyword says that we will return this single value back to whereever the function was called.
5) The adder function has returned "100Tony" as a single string and is replaced by that value.
6) Because this value is inside of the console.log arguments area, it will be sent off to the console.log function.
*/





function taxCalculator(itemPrice) {

    var tax = itemPrice * .085;
    var taxedFixedToTwoDecimalPlaces = tax.toFixed(2);
    var taxNumber = parseInt(taxedFixedToTwoDecimalPlaces);

    return taxNumber;
}


// parseInt();

var laptopPrice = 699.95;
var laptopTax = taxCalculator(laptopPrice);

console.log("Price of item: $" + laptopPrice + ". Tax on item: " + laptopTax + ". Total Cost: $" + (laptopPrice + laptopTax) + ".");





/*
Create a function called mathifier

This function will take two Numbers

With these two numbers, you will add them, then add the sum to the first number, and then multiply that by the second number.

The function will return the result.
*/


function mathifier(num1, num2) {

    var sum = num1 + num2;

    var newSum = sum + num1;

    var product = newSum * num2;

    return product;
}



console.log( mathifier(2, 4) );


/*

This function will be called mathResults

This function takes only 2 numbers.

This function will console.log the first number and the second number.

This function will console.log each of the following:
The sum of these two numbers.
The difference of these two numbers.
the product of these two numbers.
the dividend of these two numbers.
the remainder of these two numbers. (modulo)

Bonus: each console log will tell me what that number is about.
*/

function mathResults(num1, num2) {
    console.log(num1, num2);

    // sum
    var sum = num1 + num2
    console.log("The sum of these numbers is " + sum);

    // difference
    console.log(num1 - num2);

    //product
    var product = num1 * num2;
    console.log(product);

    //dividend
    console.log(num1 / num2);

    //remainder
    var remainder = num1 % num2;
    console.log(remainder);
}

mathResults(600, 399);

mathResults(1, 2);

