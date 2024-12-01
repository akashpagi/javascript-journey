console.log('-- Constructor as Class in JS --');

// // Constructor as Class
// let Bikes = function(model, extra_price) {
//     this.model = model;
//     this.base_price = 95000;
//     this.extra_price = extra_price;
//     this.on_road_price = function () {
//         return this.base_price + this.extra_price;
//     };
//     this.description = function () {
//         console.log(
//             this.model + ' is a model and the price will be Rs.' + this.on_road_price()
//         );
//     };
// }

// // Creating an object instance with constructor
// let bajaj = new Bikes('Freedom', 15000);
// let honda = new Bikes('CBZ', 30000);

// bajaj.description();
// honda.description();

// // Try to access Private Property and method from Outside
// let Bikes = function(model, extra_price) {
//     var model = model; // Local (private) variable
//     var base_price = 95000; // Local (private) variable
//     this.extra_price = extra_price; // Public property
//     this.on_road_price = function () {
//         return this.base_price + this.extra_price; // Error: this.base_price is undefined
//     };
//     this.description = function () {
//         console.log(
//             this.model + ' is a model and the price will be Rs.' + this.on_road_price()
//         ); // Error: this.model is undefined
//     };
// };

// // model and base_price variables are not accessible because they are declared as local variables using the var keyword.
// let bajaj = new Bikes('Freedom', 15000);

// bajaj.description();



// Access Private Property from Outside
let Bikes = function(model, extra_price) {
    var base_price = 95000; // Private variable
    var model = model; // Private variable
    this.extra_price = extra_price; // Public property

    this.on_road_price = function () {
        return base_price + this.extra_price; // Access private variable
    };
    this.description = function () {
        return ( model + ' is a model and the price will be Rs.' + this.on_road_price());   // Access private variable
    };
};

let bajaj = new Bikes('Freedom', 15000);
console.log(bajaj.description()); // "Freedom is a model and the price will be Rs. 110000"

