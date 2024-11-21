
console.log('-- Arrow Function --');

// Arrow Function
console.log('Arrow Function with without parameters:')
var myfun = () => {
    console.log('Akash'); 
 };
myfun();

// Arrow Function with one parameters
console.log('Arrow Function with one parameters:')
// NOTE: if 1 parameter is pass then you can write without ()
var myfun1 = a => {
    console.log('a :', a); 
 };
 myfun1(10);

// Arrow Function with multiple parameters
console.log('Arrow Function with multiple parameters:')
var myfun2 = (a, b) => {
    console.log('a :', a); 
    console.log('b :', b); 
 };
 myfun2(10, 20);


// Arrow Function with default parameters
console.log('Arrow Function with default parameters:')
var defualt_parameter = (a, b=80) => {
    console.log('a :', a); 
    console.log('b :', b); 
 };
defualt_parameter(20);


// Arrow Function with rest parameters
console.log('Arrow Function with rest parameters:')
var rest_parameter = (a, ...args) => {
    console.log('a :', a); 
    console.log('rest paramenters :', args); 
 };
rest_parameter(20, 40, 60);


// Arrow Function without curly brackets
// curly braces are optional when the function body contains a single statement or expression. 
// If the function contains multiple statements, curly braces {} are mandatory.
console.log('Arrow Function without curly brackets:');
var singleStatement = a => console.log('a:', a);
singleStatement(10); // Output: a: 10

// Multiple Statements:
// Use {} to group multiple statements and explicitly include the return keyword if needed.
console.log('Arrow Function with curly brackets:');
var my = a => {
    console.log('a:', a);
    console.log('Akash');
};
my(10);


// Arrow Function with return
console.log('Arrow Function with return :');
var show = a => { return 'a : ' + a; };  // output: a : 10
console.log(show(10)); 

// Arrow Function (to shorter )
console.log('Arrow Function :');
var show = a => a;  // output: 10
// When an arrow function does not use curly braces {}, it automatically returns the value of the single expression.
// When you use curly braces {} in an arrow function, you must explicitly use the return keyword to return a value. Otherwise, the function will return undefined.
// If you use {} without the return keyword, the function will always return undefined
// var show = a => { a };  // Undefined 
console.log(show(10)); 



