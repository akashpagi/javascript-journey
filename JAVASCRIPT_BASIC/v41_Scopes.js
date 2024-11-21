// console.log('Scopes In JavaScripts:')
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // Global scope

// console.log('---- GLOBAL SCOPE ----')

// // Access anywhere in program
// var g = 'I am global variable'; // Global variable
// function showGlobal(){
//     console.log(g + ' ' + '[ inside the showGlobal() function ]');
// }
// showGlobal();

// // Outside the function
// console.log(g + ' ' + '[ outside function ]');


// // Accessing global variable inside another function
// function otherGlobal(){
//     console.log(g + ' ' + '[ inside of another otherGlobal() function ]');
// }
// otherGlobal();

// // Inside block
// if(true){
//     console.log(g + ' ' + '[ inside the block ]');
// }


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Local Scope

// console.log('---- LOCAL SCOPE ----')

// function showLocal(){
//     var l = 'I am Local variable'; // local varibale
//     console.log(l + ' ' + '[ Local variable inside showLocal() function ]');
// }
// showLocal();

// Try to access local varible outside of function
// console.log(l); // output :  ReferenceError: l is not defined


// Accessing local variable inside another function
// function otherLocal(){
//     console.log(l);
// }
// otherLocal()

// Inside block
// if(true){
//     console.log(l);
// }

// Local variable without var
// function showLocal(){
//     l = 'I am Local variable becomes Local variable'; // without var it becomes global varibale
//     console.log(l + ' ' + '[ without var ]');
// }
// showLocal()


// Aceess Outside the function
// console.log(l + ' ' + '[ accessing outside function ]');

// // Inside block
// if(true){
//     console.log(l);
// }

// console.log();

// console.log('---- Local Scope in Nested Functions ----')

// function Outer() {
//     // Local variable
//     var outerVar = 'I am outerVar variable of Outer() function !';
//     console.log(outerVar); // I am outerVar variable of Outer() function !

//     // Inner function
//     function Inner() {
//         // Local variable
//         var innerVar = 'I am innerVar variable of Inner() function !';
//         console.log(innerVar); // I am innerVar variable of Inner() function !
//         console.log(outerVar); // I am outerVar variable of Outer() function !
//     }
//     Inner();
//     console.log(innerVar); // Try to access, innerVar variable of Inner() function !
// }
// Outer();


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Block Scope
console.log();

console.log('---- BLOCK SCOPE ----')

if(true){
    // var b = 10; // local variable
    let b = 10; // local variable
    console.log(b + ' ' + '[ inside of block  ]');
}

// access outside of block
console.log(b + ' ' + '[ access outside of block  ]');
