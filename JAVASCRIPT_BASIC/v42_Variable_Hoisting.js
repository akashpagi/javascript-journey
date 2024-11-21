console.log('---- VARIABLE HOISTING ----');

// variable hoisting
// var a = 10;
// console.log('a : ' + a);

/* 
// Compile Phase
    var a;  // decleration
    a = 10;
    console.log('a : ' + a);
*/

// var a = 10;
// console.log('a : ' + a );
// console.log('b : ' + b ); // undefined
// var b = 20;
// console.log('b : ' + b ); // output : 20

/* 
// Compile Phase
    var a; // decleration
    var b;  // decleration
    a = 10;  /// Assignment stays in place

    console.log('a : ' + a );  // output : 10
    console.log('b : ' + b ); // undefined

    b = 20;  // Assignment stays in place

    console.log('b : ' + b ); // output : 20
*/

// console.log('A variable can be used before it has been declared.')

// a = 10;
// console.log('a : ' + a);
// var a;

/* 
// Compile Phase
    var a; 
    a = 10;
    console.log('a : ' + a);
*/

console.log('Function ')

var i = 'Hello';
console.log('i : ' + i);

function show(){
    console.log('i inside function : ' + i); 
    var i = 'Akash';
}
show();

/* 
// Compile Phase
    console.log('Function ');

    var i;           // Global variable declaration (hoisted)
    i = 'Hello';     // Global variable assignment
    console.log('i : ' + i); // Output: i : Hello

    function show() {
        var i;       // Local variable declaration (hoisted within the function)
        console.log('i inside function : ' + i); // Output: undefined (local `i` is hoisted but not initialized yet)
        i = 'Akash'; // Local variable assignment
    }
    show();

*/
