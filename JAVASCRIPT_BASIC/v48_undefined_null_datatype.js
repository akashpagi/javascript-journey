console.log('-- UNDEFINED --')
var a;
console.log('a :' + a); // undefined
console.log('type of b :' + typeof(b));  // output: type of b :undefined

// console.log('b :' + b); // b is not defined

/*
NOTE: 
The typeof operator is designed to never throw an error, even if the variable has not been declared. Instead of throwing a ReferenceError, it gracefully returns "undefined".
*/

console.log('-- NULL --')
var n = null;
console.log('n :' + n); // n : null
console.log('type of n : ' + typeof(n));  // output: type of n :object

