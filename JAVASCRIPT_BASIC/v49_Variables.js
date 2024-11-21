console.log('Variables In JavaScripts:')
 // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log('---- VAR  ----')

// var a = 10; // it becomes window object
// let b = 20;
// const c = 30;
// console.log('a :', a);
// console.log('b :', b);
// console.log('c :', c);

// var scope with function
function myvar(){
    var a = 10;
    if(true){
        var a = 20;
        console.log('a : ', a + ' [ Inside of the function ]'); // output:  a :  20 [ Inside of the function ]
    }
    console.log('a : ', a + ' [ Outside of the function ]'); // output: a :  20 [ Outside of the function ]
}
myvar();


let y = 30;
y = 40;  // Allowed to update
console.log(y);  // Output: 40
// let y = 50;  // Error: Cannot redeclare block-scoped variable

// let scope with function
function mylet(){
    let a = 10;
    if(true){
        let a = 20;
        console.log('a : ', a + ' [ Inside of the function]');  // output:  a :  20 [ Inside of the function ]
    }
    console.log('a : ', a + ' [ Outside of the function ]'); // output: a :  10 [ Outside of the function ]
}
mylet();