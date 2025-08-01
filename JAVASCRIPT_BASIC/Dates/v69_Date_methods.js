// console.log('-- Date Methods --')

// // Set Date methods 
// // Create a new Date object with the current date and time
// let date = new Date(); 

// // Set the day of the month to 4
// date.setDate(4);       

// // Set the month to February (month is 0-based, so 1 represents February)
// date.setMonth(1);      

// // Set the year to 2025
// date.setFullYear(2025); 

// // Set the hour to 22 (10 PM in 24-hour format)
// date.setHours(22);

// // Set the minutes to 45
// date.setMinutes(45);

// // Set the seconds to 31
// date.setSeconds(31);    

// // Set the milliseconds to 32
// date.setMilliseconds(32);  

// // Log the updated date object to the console
// console.log(date);

// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Get Date Methods

// Create a new Date object with the current date and time
let date = new Date(); 

console.log(`${date}`)

// Get the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
console.log(`Day: ${date.getDay()}`);

// Get the current month (0-based, so January is 0, February is 1, etc.)
console.log(`Month: ${date.getMonth()}`);      

// Get the full year (e.g., 2025)
console.log(`Full Year: ${date.getFullYear()}`); 

// Get the current hour (0-23 in 24-hour format)
console.log(`Hours: ${date.getHours()}`);

// Get the current minutes (0-59)
console.log(`Minutes: ${date.getMinutes()}`);

// Get the current seconds (0-59)
console.log(`Seconds: ${date.getSeconds()}`);    

// Get the current milliseconds (0-999)
console.log(`Milliseconds: ${date.getMilliseconds()}`); 


// // ++++++++++++++++++++++++++++++++++++++++++++++

// // Create a new Date object with the current date and time
// let date = new Date();

// // Get the current month and day
// let month = date.getMonth();
// let day = date.getDay();

// console.log(`Day: ${date.getDay()} Month: ${date.getMonth()}`);


// // Function to get the month's name based on its number (0 for January, 1 for February, etc.)
// function getMonthName(month_number) {
//     let months_name = [
//         `JAN`, `FEB`, `MAR`, `APR`, `MAY`, `JUN`, 
//         `JUL`, `AUG`, `SEP`, `OCT`, `NOV`, `DEC`,
//     ];
//     return months_name[month_number]; // Access the month's name from the array
// }

// function getDayName(day_number) {
//     let days_name = [
//         `MON`, `TUE`, `WEB`, `THU`, `FRI`, `SAT`, `SUN`,
        
//     ];
//     return days_name[day_number]; 
// }

// // Use the function to get the month's name
// console.log(`Day: ${getDayName(day)} Month: ${getMonthName(month)} `); // Pass the `month` variable as the argument

// ====================================================================================================================================

// // How to Format Date and Time 
// console.log(`-- How to Format Date and Time --`);

// /**
//  * Formats a date as "DD/MON/YYYY".
//  * @param {Date} fd - The date object to format.
//  * @returns {string} - The formatted date string.
//  */
// function formatedDate(fd) {
//     let date = fd.getDate(); // Get the day of the month.

//     // Function to get the month name from the month number.
//     function getMonthName(month_number) {
//         let months_name = [
//             `JAN`, `FEB`, `MAR`, `APR`, `MAY`, `JUN`, 
//             `JUL`, `AUG`, `SEP`, `OCT`, `NOV`, `DEC`,
//         ];
//         return months_name[month_number]; // Return the month's name.
//     }

//     let month = getMonthName(fd.getMonth()); // Get the month's name.
//     let year = fd.getFullYear(); // Get the year.
//     return `${date}/${month}/${year}`; // Combine day, month, and year.
// }

// /**
//  * Formats the time as "HH Hrs, MM Min, SS Sec".
//  * @param {Date} fts - The date object to extract time from.
//  * @returns {string} - The formatted time string.
//  */
// function formatedTimeStamp(fts) {
//     let hrs = fts.getHours(); // Get the hours.
//     let min = fts.getMinutes(); // Get the minutes.
//     let sec = fts.getSeconds(); // Get the seconds.
//     return `${hrs} Hrs, ${min} Min, ${sec} Sec`; // Combine hours, minutes, and seconds.
// }

// // Create a new date object for the current date and time.
// let date = new Date();

// // Print the formatted date (e.g., "3/JAN/2025").
// console.log(formatedDate(date));

// // Print the formatted time (e.g., "10 Hrs, 30 Min, 45 Sec").
// console.log(formatedTimeStamp(date));

// // ===========================================================================================
