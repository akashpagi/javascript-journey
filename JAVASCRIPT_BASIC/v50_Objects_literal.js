console.log('-- OBJECTS --')

// Declaration of Object
let fees = {}; // empty object

// Setting a property for object
fees['Rahul'] = 100;
// Set property using dot notation
fees.Sumit = 200; 
fees.Rohan = 300;
// fees['Total'] = function () { return 100 + 200 + 300; };
fees.Total = function () { return 100 + 200 + 300; };

// Accessing the object
console.log('Rahul : ' + fees['Rahul']); // output: Rahul : 100

// asign property with dot (.) operator
console.log('Sumit : ' + fees.Sumit); // output: Sumit : 200
console.log('Rohan : ' + fees.Rohan); // output: Rohan : 300

console.log('Total : ' + fees['Total']()); // output: Total : 600
// console.log(fees.Total());



console.log('-- OBJECTS LITERAL --') 

// Creating an Object literal
let names = {
    Rahul: 100,
    Sumit: 200,
    Rohan: 400,
    'Super Man' : 500,
    Total : function () { return 100 + 200 + 300; },
}; 

// accessing properties with dot (.) operator and []
console.log('Sumit : ' + names.Sumit); // output: Sumit : 200
console.log('Rohan : ' + names.Rohan); // output: Rohan : 400

// Accessing the property and method
console.log('Super Man : ' + names['Super Man']); // output: Super Man : 500
console.log('Total : ' + names['Total']()); // output: Total : 600
console.log('Total : ' + names.Total()); // output: Total : 600

console.log('-- Using an Object literal with new keyword & Built-in Object Constructor --')

// Creating Object literal with new keyword & Built-in Object Constructor
// let bike = new Object();

// bike['Brand'] = 'Bajaj';
// bike['Model'] = 'Freedom CNG';
// bike['CC'] = 125;
// bike['Release Year'] = 2024;

// console.log('Brand : ' + bike['Brand']); // output:  Brand : Bajaj
// // accessing properties with dot (.) operator and []
// console.log('Model : ' + bike.Model); // output:  Model : Freedom CNG
// console.log('CC : ' + bike.CC); // output:  CC : 125
// console.log('Release Year : ' + bike['Release Year']); // output: Release Year : 2024

console.log('-- Adding Property and method in Object --')

// // Adding Property and method
// let bike = new Object();

// bike['Brand'] = 'Bajaj';
// bike['Model'] = 'Freedom CNG';

// // Adding property 
// bike.color = 'White';
// // console.log('Color : ' + bike['color']); // output: Color : White

// // method
// bike.show = function () {};

// console.log(bike);



console.log('-- Deleting Properties of an Object --')

// // Deleting Properties of an Object
// let bike = new Object();

// bike['Brand'] = 'Bajaj';
// bike['Model'] = 'Freedom CNG';
// // Adding property 
// bike.color = 'White';

// // Before delete 
// console.log(bike); // output: { Brand: 'Bajaj', Model: 'Freedom CNG', color: 'White' }

// // Deleting a property
// delete bike.color;
// delete bike.year; // No error, but does nothing

// // After delete
// console.log(bike); // output : { Brand: 'Bajaj', Model: 'Freedom CNG' }


console.log('-- Factory Function in JS --')

// function two_wheeler(){
//     return {
//         brand : 'Bajaj',
//         price : function() {
//             return {
//                 price : 100000,
//             }
//         }
//     };
// }
// // Creating object instance
// let bike =  two_wheeler();
// console.log('Brand : ' + bike.brand);  // output : Brand : Bajaj
// console.log('Price : ' + bike.price().price);  // output : Price : 100000

function bikes_details(model, color, price){
    return {
        model : model,
        color : color,
        price : function() {
            return {
                price : price,
            }
        }
    };
}
// Creating Multiple object instance
let bajaj =  bikes_details('Freedom', 'Red', 100000); // output :  { model: 'Freedom', color: 'Red', price: [Function: price] }
let honda =  bikes_details('CBZ', 'Black', 230000); // output :  { model: 'CBZ', color: 'Black', price: [Function: price] }
console.log(bajaj);
console.log(honda);
console.log('Brand : ' + bajaj.model);  // output : Brand : Bajaj
console.log('Color : ' + bajaj.color);  // output : Color : Red
console.log('Price : ' + bajaj.price().price);  // output : Price : 100000