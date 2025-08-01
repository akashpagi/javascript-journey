console.log('-- Dates --')


// Create a Date Object

// Date() constructor
let current_date = new Date();
console.log(`${current_date}`);

// Date(millionseconds)
// Javascript stores the date in a number of milliseconds since January 01, 1970, 00:00:00 UTC, till now it's 1658230119890 milliseconds(constantly running) from the January 01, 1970.
let date1 = new Date(86400000); // Fri Jan 02 1970 05:30:00 GMT+0530
let date2 = new Date(1735749530590); // Wed Jan 01 2025 22:08:50 GMT+0530
console.log(`${date1}`);
console.log(`${date2}`);


// Date(year, month, day, hours, minutes, seconds, milliseconds)
// unday Starting Value: In JavaScript, Sunday is 0, and days are numbered from 0 to 6:
// 0 - sunday, 1 monday & so on
// 0 - january , 1 feb and so on
let date3 = new Date(2024, 10, 23, 20, 25, 30, 10000);
let date4 = new Date(2024, 10, 23, 20, 25, 30);
let date5 = new Date(2024, 10, 23, 20, 25);
let date6 = new Date(2024, 10, 23, 20);
let date7 = new Date(2024, 11, 23);

console.log(date3);
console.log(date4);
console.log(date5);
console.log(date6);
console.log(date7);

// ================

console.log(`===============================`);
// date(dateString)
let now = new Date("Thu Jan 02 2025");
let now1 = new Date("Thu Jan 02 2025 10:23:23");

// ISO Date (YYYY-MM-DDTHH:mm:ss.sssZ)
let isoDate = new Date("2025-01-02T10:23:23Z");

// Short Date (MM/DD/YYYY or YYYY/MM/DD)
let shortDate1 = new Date("01/02/2025"); // US format
let shortDate2 = new Date("2025/01/02"); // International format

// Long Date (Day Month Date Year)
let longDate = new Date("January 2, 2025");

// Log outputs
console.log("Date from day string:", now); 
console.log("Date with time:", now1);
console.log("ISO Date:", isoDate);
console.log("Short Date (MM/DD/YYYY):", shortDate1);
console.log("Short Date (YYYY/MM/DD):", shortDate2);
console.log("Long Date:", longDate);

// -=====================================

