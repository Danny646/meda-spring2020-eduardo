var employeeSalaries = [100000, 10000, 1000000, 55000, 75000, 24000, 32000, 40000, 29500, 72000];

// Update all of these values so we add a 5% bonus if they make less than 50000, or 2.5% if they make more than 50000.


// For each item in the employeeSalaries array...
for (var i = 0; i < employeeSalaries.length; i++) {

    // ...console log the individual value...
    console.log(employeeSalaries[i]);

    // ...assign this value to the salary variable.
    var salary = employeeSalaries[i];

    // Test the salary variable to see whether its above or below 50000.
    if (salary < 50000) {

        console.log("Old salary: " + salary);

        // If it is below, add a 5% bonus to it.
        salary = salary + (salary * .05);
        console.log("New Salary: " + salary);

        // And update the array with this new value.
        employeeSalaries[i] = salary;

    } else {
    
        console.log("Old salary: " + salary);

        //Otherwise add a 2.5% bonus to it.
        salary = salary + (salary * .025);
        console.log("New Salary: " + salary);

        // And update the array with this new value.
        employeeSalaries[i] = salary;

    }


}

// Finally console log the new salary array.
console.log(employeeSalaries);








