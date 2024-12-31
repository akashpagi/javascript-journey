console.log('-- Number Method --')

// toString() method
let num = 10;
convert_str = num.toString();
console.log(`${num} : ${convert_str} (type is ${typeof convert_str})`);
console.log(`${num} : ${num.toString(2)} (Binary)`)
console.log(`${num} : ${num.toString(8)} (Octa)`)
console.log(`${num} : ${num.toString(16)} (Hexadecimal)`)

//toExponetial
let expo_num = 1234.5678;
console.log(`${expo_num} : ${expo_num.toExponential()}`);
console.log(`${expo_num} : ${expo_num.toExponential(2)} (Only 2 digit after decimal)`);
console.log(`${expo_num} : ${expo_num.toExponential(5)} (Only 5 digit after decimal)`);

//toFixed
// convert number into string
// default decimal is 0s
let fixed_num = 1234.56788787;
console.log(`${fixed_num} : ${fixed_num.toFixed()}`);
console.log(`${fixed_num} : ${fixed_num.toFixed(2)}`);
console.log(`${fixed_num} : ${fixed_num.toFixed(5)}`);


console.log(`-- toPrecision --`)
//toPrecision
// Formats a number to a specific length, including decimal places.
let pre_num = 1234.66788787;
console.log(`${pre_num} : ${pre_num.toPrecision()}`);
console.log(`${pre_num} : ${pre_num.toPrecision(2)}`);
console.log(`${pre_num} : ${pre_num.toPrecision(4)}`);
console.log(`${pre_num} : ${pre_num.toPrecision(8)}`);

console.log(`-- Number.isInteger() --`)
// Checks if a value is an integer is type is Number then return true value otherwise false
console.log(`${Number.isInteger()}`); // false
console.log(`${Number.isInteger(100)}`); // true
console.log(`${Number.isInteger(-100)}`); // true
console.log(`${Number.isInteger(100.34)}`); // false
console.log(`${Number.isInteger(0.4)}`); // false
console.log(`${Number.isInteger(`0.1`)}`);  // false


console.log(`-- Number.isSafeInteger() --`)
// The Number.isSafeInteger() method returns trueif a number is a safe integer.
// A safe integer is an integer that can be exactly represented as an IEEE-754 double precision number: all integers from (253 - 1) to -(253 - 1). Otherwise it returns false.
console.log(`${Number.isSafeInteger()}`); // false
console.log(`${Number.isSafeInteger(100)}`); // true
console.log(`${Number.isSafeInteger(-100)}`); // true 
console.log(`${Number.isSafeInteger(100.34)}`); // false
console.log(`${Number.isSafeInteger(548957543755749474579457)}`);  // false



console.log(`-- Number() Method --`);
console.log(`${Number(`123`)}`); // 123
console.log(`${Number(true)}`); // 1
console.log(`${Number(false)}`); // 0
console.log(`${Number(undefined)}`); // NaN
console.log(`${Number(NaN)}`); // NaN
console.log(`${Number(`Hello`)}`); // NaN
console.log(`${Number(100)}`); // 100

// ====================================================

console.log(`-- parseInt() --`);
// syntax: parseInt(string, radix)
console.log(`${parseInt(`123`)}`); // 123
console.log(`${parseInt(`11.30`)}`); // 11
console.log(`${parseInt(`    1   `)}`); // 1

console.log(`${parseInt(`10 years`)}`); // 10
console.log(`${parseInt(`years 10`)}`); // NaN
console.log(`${parseInt(`012`)}`); // 12

// 12 octal = 10 decimal
// parseInt(12, 8) treats 12 as an octal number because the radix is specified as 8. 
// In octal, 12 is equivalent to 1×8^1 +2×8 0 =8+2=10 in decimal.
console.log(parseInt(`12`, 8));

// 12 hex = 18 decimal
// The 0x prefix automatically interprets 12 as a hexadecimal number. 
// In hexadecimal, 12 is equivalent to 1×16^1 +2×16^0 =16+2=18 in decimal.
console.log(parseInt(`0x12`));

// 10 hex == 16 decimal
// parseInt(10, 16) treats 10 as a hexadecimal number because the radix is specified as 16. 
// In hexadecimal, 10 is equivalent to 1×16^1 +0×16^0 =16 in decimal.
console.log(parseInt(`10`, 16)); 

// ====================================================

console.log(`-- parseFloat() --`); 
// syntax: parseInt(string, radix)
console.log(`${parseFloat(`123`)}`); // 123
console.log(`${parseFloat(`11.30`)}`); // 11.3
console.log(`${parseFloat(`    1   `)}`); // 1
console.log(`${parseFloat(`10 20 30`)}`); // 10
console.log(`${parseFloat(`10 years`)}`); // 10
console.log(`${parseFloat(`years 10`)}`); // NaN
console.log(`${parseFloat(`012`)}`); // 12
