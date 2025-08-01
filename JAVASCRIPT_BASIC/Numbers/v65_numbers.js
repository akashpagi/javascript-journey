console.log(' -- Numbers in JS --');

// console.log('Using Primative Numeric Value')
// // Direct assignment
// let num1 = 42;       // Integer
// let num2 = 3.14;     // Floating-point number

// console.log(num1);
// console.log(num2);

// // Scientific Notation:
// let largeNumber = 10e3;  // (10 x 10^3)
// console.log(largeNumber);

 
// console.log('Using Number() Constructor')

// // Number Object
// let numObj = new Number(200);
// console.log(numObj);
// console.log(typeof(numObj));

// // Converting Strings or Booleans to Numbers:
// let fromString = Number("123"); // Converts string "123" to number 123
// let fromBoolean = Number(true); // Converts true to number 1
// console.log(fromString);
// console.log(fromBoolean);

// // Checking type
// console.log(typeof fromString);
// console.log(typeof fromBoolean);

// ====================================

console.log(`-- NaN Property --`);

// String containing a numeric value
// JavaScript automatically converts it to the number 60 for the division operation due to Automatic Type Coercion:
let num = `60`;  
let num1 = `Hello`;   
let num2 = 10;      

console.log(num / num2); // output: 6

console.log(num1 / num2); // output: NaN (invalid)

// =============================================

console.log(`-- isNaN Method--`);

// isNaN Method
let str  = `Hello`;
let num3  = 34;

console.log(isNaN(str));
console.log(isNaN(num3));

if(str == NaN){
    console.log(`${str} is equal to NaN !`);
} else {
    console.log(`${str} is not equal to NaN !`);
};

// This is because NaN does not represent a specific value, so comparing it to another NaN is always false.
console.log(NaN === NaN); // Output: false
console.log(NaN == NaN);  // Output: false

// ============================================

console.log(`Special numeric values`);

// infinty
let inf = 1 / 0;
console.log(inf); // Output: Infinity

// - infinty
let negInf = -1 / 0;
console.log(negInf); // Output: - Infinity