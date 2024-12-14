console.log('-- How Prototype Works --');

// Creating a function
function Mobile() {
    // Constructor function
    // By default, a `prototype` is created for every function.
    // `Mobile.prototype` is an empty object by default, and it is linked to `Object.prototype`
}
console.log('Mobile : ' , Mobile.prototype);  // Logs the prototype object of Mobile

// with new keyword
let m = new Mobile();
console.log('new keyword : ' , m.__proto__);

console.log('-- Verify --');
// verify 
console.log(Mobile.prototype);  // {}
console.log(Mobile.prototype.__proto__); // Object.prototype
console.log(Mobile.prototype.__proto__ === Object.prototype);  // true
console.log(Mobile === m.__proto__.constructor);  // true
console.log(Mobile === Mobile.prototype.constructor);  // true

console.log('-- Try -');

// function Bike() {
//     // Constructor function with no properties added to prototype
//  }
//   let bajaj = new Bike();
//  console.log(bajaj.price);  // Output: undefined



// function Bike() {
//     // Constructor function for Bike
//  }
//   // Adding a property to the Bike prototype
//  Bike.prototype.price = 100000;
 
//  // Creating a new instance of Bike
//  let bajaj = new Bike();
 
//  // Accessing the price property from the instance
//  console.log(bajaj.price);  // Output: 100000 

function Bike() {
    this.price = 12000;  // Sets the price on the instance itself
}

// Adding a property to the Bike prototype
Bike.prototype.price = 100000;  // Sets a default price on the prototype

// Creating a new instance of Bike
let bajaj = new Bike();

// Accessing the price property from the instance
console.log(bajaj.price);  // Output: 12000

// `bajaj.__proto__` points to `Bike.prototype`
console.log(Bike.prototype === bajaj.__proto__); // true