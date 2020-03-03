var employeeSalaries = [100000, 10000, 1000000, 55000, 75000, 24000, 32000, 40000, 29500, 72000];

// Update all of these values so we add a 5% bonus if they make less than 50000, or 2.5% if they make more than 50000.



for (var i = 0; i < employeeSalaries.length; i++) {

    console.log(employeeSalaries[i]);


    var salary = employeeSalaries[i];

    if (salary < 50000) {

        console.log("Old salary: " + salary);
        salary = salary + (salary * .05);
        console.log("New Salary: " + salary);

        employeeSalaries[i] = salary;

    } else {
    
        console.log("Old salary: " + salary);
        salary = salary + (salary * .025);
        console.log("New Salary: " + salary);

        employeeSalaries[i] = salary;
        
    }


}

console.log(employeeSalaries);








