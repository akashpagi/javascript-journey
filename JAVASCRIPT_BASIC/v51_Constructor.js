// console.log('-- Constructor in JS --');

// function BikesDetails() {
//     this.model = 'Freedom';
//     this.color = 'Red';
//     this.price = 100000; // Use a separate property to store the price value
//     this.description = function () {
//         console.log(
//             this.model + ' is a model with ' + this.color + ' color and the price will be Rs.' + this.price
//         );
//     };
// }

// Creating an object instance with constractor
// let bajaj = new BikesDetails();
// bajaj.description(); // Output: Freedom is a model with Red color and the price will be Rs.100000


// console.log('-- Constructor with parameters --');

// function BikesDetails(model, color, price) {
//     this.model = model;
//     this.color = color;
//     this.price = price;
//     this.description = function () {
//         console.log(
//             this.model + ' is a model with ' + this.color + ' color and the price will be Rs.' + this.price
//         );
//     };
// }

// // Creating an object instance with constractor
// let bajaj = new BikesDetails('Freedom', 'Red', 100000);
// let honda = new BikesDetails('CBZ', 'Blue',220000);
// bajaj.description(); // Output: Freedom is a model with Red color and the price will be Rs.100000
// honda.description(); // Output:  CBZ is a model with Blue color and the price will be Rs.220000


console.log('-- Check Properties exists --');
// Check Properties exists
function BikesDetails(model, price) {
    this.model = model;
    this.price = price;
    this.description = function () {
        console.log(
            this.model + ' is a model and the price will be Rs.' + this.price
        );
    };
}

// Creating an object instance with constractor
let bajaj = new BikesDetails('Freedom',100000);
let honda = new BikesDetails('CBZ',220000);
// honda.description();

// Check typeof property
// console.log(typeof honda.color !== 'undefined' ? 'Available' : 'Doesn\'t Exist');

//  let result = (condition) ? 'true' : 'false';

// in operator
// console.log('model' in honda ? 'Available' : 'Doesn\'t Exist');


// Check if 'model' is an own property
console.log(honda.hasOwnProperty('model')); // Output: true

// Add an additional property
honda.color = 'Red';
console.log(honda.hasOwnProperty('color')); // Output: true