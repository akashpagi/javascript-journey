// console.log(' --- Anonymous Function  -- ')

// var show = function (){
//     console.log('Akash'); 
// };
// show(); // call with new asign variable


// var add = function (a, b){
//     console.log('addition : ', a + b); 
// };
// add(10, 20); // call with new asign variable


// Passing Anonymous function as argument
// function display(myfun) {
//     return myfun(); // Calling the passed function and returning its result
// }

// console.log(display(function() {
//     return 'Passing the arguments !'; // This anonymous function returns the string
// }));


// Returning Anonymous Function
console.log('--Returning Anonymous Function--');

function display(a)
    {
        return function(b)
            {
                return a+b;
            };
    }
var af = display(10);
console.log( 'addition of a + b:', af(20) ); 