// Defines what the pyramidBuilder does. Takes in one argument.
function pyramidBuilder(height) {

    // Holds the height for the pyramid to be built.
    var pyramidHeight;

    // Check if the paramter holds a number or undefined.
    if (height == undefined) {
        // If undefined, then generate a number between 1 and 20 for us.
        var randomNumber = (Math.random() * 20) + 1;
        pyramidHeight = Math.floor(randomNumber);
    } else {
        // Otherwise height has a number and assign it to the pyramidHeight variable.
        pyramidHeight = height;
    }

    // The string to print, starting with an empty string.
    var pyramidRow = "";

    //Loop for a certain of times, for each time, add a asterisk and then console.log the string.
    for (var i = 0; i < pyramidHeight; i++) {
        pyramidRow = pyramidRow + "*";
        console.log(pyramidRow);
    }
    
    // Once the first half of the pyramid is done, we need to go "down" but we need to break the string into an array.
    var pyramidArray = pyramidRow.split("");

    // Loop through the array, remove the last element of the array (to shorten the asterisks), then combine array into string, and console.log the string.
    for (var i = 0; i < pyramidHeight - 1; i++) {
        pyramidArray.pop();
        pyramidRow = pyramidArray.join("");
        console.log(pyramidRow);
    }

}

// Loop for 100 times, and run the function with no number provided.
for (var i = 0; i < 100; i++) {
    pyramidBuilder();
}