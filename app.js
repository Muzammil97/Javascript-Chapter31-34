// // Q1 Write a program that displays the current date and time in your browser.
// var currentDate = new Date();
// document.write(currentDate);


// // Q2 Write a program that alerts the current month in words (e.g., "December").

// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentMonth = new Date().getMonth();
// alert(months[currentMonth]);


// Q3 Write a program that alerts the first three varters of the current day
//  (e.g., if today is Sunday, the alert should display "Sun").

// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDay = new Date().getDay();
// alert(`Today is ${days[currentDay]}`);


// Q4 Write a program that displays the message "It’s Fun day" if today is Saturday or Sunday.

// var today = new Date().getDay();
// if (today === 6 || today === 0) {
//     alert("It’s Fun day");
// }
// else{
//     alert("Today is not a Fun day");

// }

 
// // Q5 Write a program that shows the message "First fifteen days of the month" 
// // if the date is less than the 16th of the month, otherwise display "Last days of the month."

// var date = new Date().getDate();
// if (date < 16) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }



// // Q6 Write a program that determines the minutes since midnight, Jan. 1, 1970,
// //  and assigns it to a variable that hasn't been declared beforehand.


// var currentDate = new Date();
// var millisecond = new Date().getTime();


// document.write(`<br>Current Date: ${currentDate}<br>`);
// document.write(`Elapsed milliseconds since January 1, 1970: ${millisecond}<br>`);
// document.write(`Elapsed minutes since January 1, 1970: ${Math.floor(Date.now() / (1000 * 60))}<br>`);




// // Q7 Write a program that tests whether it's before noon and alerts "It's AM" or "It's PM."

// var hours = new Date().getHours();
// if (hours < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }


// // Q8 Write a program that creates a Date object for the last day of the last month of 2020
// //  and assigns it to a variable named laterDate.

// var laterDate = new Date(2020, 11, 31);  // December is month 11 (0-indexed)
// document.write(laterDate);


// // Q9 Create a Date object for the starting date of Ramadan (e.g., June 18, 2015),
// //  and alert the number of days that have passed since the 1st of Ramadan.

// var ramadanStart = new Date('June 18, 2015');
// var todayDate = new Date();
// var daysPassed = Math.floor((todayDate - ramadanStart) / (1000 * 60 * 60 * 24));
// alert(daysPassed + " days have passed since 1st Ramadan.");


// // Q10 Write a program that displays in your browser the seconds 
// // that elapsed between the reference date and the beginning of 2015.

// var referenceDate = new Date('January 1, 2015');
// var now = new Date();
// var secondsElapsed = Math.floor((now - referenceDate) / 1000);
// document.write(secondsElapsed + " seconds have elapsed since the beginning of 2015.");


// // Q11 Create a Date object for the current date and time, extract the hours,
// //  reset the date object an hour ahead, and display the updated date.

// var dateObj = new Date();
// dateObj.setHours(dateObj.getHours() + 1);
// document.write(dateObj);


// // Q12 Write a program that creates a Date object 
// // and shows the date reset to 100 years back in an alert box.

// var hundredYearsBack = new Date();
// hundredYearsBack.setFullYear(hundredYearsBack.getFullYear() - 100);
// alert(hundredYearsBack);


// // Q13 Write a program that asks the user for their age, calculates, and displays their birth year.

// var age = prompt("Enter your age:");
// var birthYear = new Date().getFullYear() - age;
// document.write("Your birth year is: " + birthYear);


// // Q14 Write a program to generate a K-Electric bill in the browser. The bill should include:
// //     Customer Name
// //     Current Month
// //     Number of Units
// //     Charges per Unit
// //     Net Amount Payable (within Due Date)
// //     Late Payment Surcharge
// //     Gross Amount Payable (after Due Date)

// // Formulae:

// // Net Amount Payable = Number of Units * Charges per Unit
// // Gross Amount Payable = Net Amount Payable + Late Payment Surcharge

// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var customerName = prompt("Enter customer name:");
// var currentMonth = new Date().getMonth();
// var units = parseFloat(prompt("Enter number of units:"));
// var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
// var netAmount = units * chargesPerUnit;
// var latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));
// var grossAmount = netAmount + latePaymentSurcharge;

// document.write("<h2>K-Electric Bill</h2>");
// document.write("Customer Name: " + customerName + "<br>");
// document.write("Current Month: " + months[currentMonth] + "<br>");
// document.write("Number of Units: " + units + "<br>");
// document.write("Charges per Unit: " + chargesPerUnit.toFixed(2) + "<br>");
// document.write("Net Amount Payable (within Due Date): " + netAmount.toFixed(2) + "<br>");
// document.write("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + grossAmount.toFixed(2) + "<br>");


