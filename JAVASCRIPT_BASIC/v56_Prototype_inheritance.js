console.log('-- Prototype Inheritance --');

// //super class
// let Mobile = function(){
//     this.a = 10;
// }
// Mobile.prototype.z = 30;

// // Sub class
// let Samsung = function(){
//     Mobile.call(this); // To access parent class property
//     this.b = 20;
// }

// // Prototype Inheritance
// Samsung.prototype = Object.create(Mobile.prototype)
// // ensure that the constructor property of the Samsung prototype correctly refers to the Samsung constructor function after we set up inheritance.
// Samsung.prototype.constructor = Samsung;

// Samsung.prototype.z = 50; // override the z value


// let s = new Samsung();
// // Now accessing properties of `s` (Samsung instance)
// console.log('s.a : ',s.a); // output : s.a : 10
// console.log('s.b : ', s.b); // output : s.b : 50
// console.log('s.z : ', s.z); // output : s.z : 30 


// let m = new Mobile();
// // Here m can't access s object property
// console.log('m.a : ',m.a); // output : m.a : 10
// console.log('m.b : ', m.b); // output : m.b : undefined
// console.log('m.z : ', m.z); // output : m.z : 30 

// ---------------------------------------------------------

// console.log('-- One Super and Two Subclass --');

// function Extend(parent, child){
//     child.prototype = Object.create(parent.prototype);
//     child.prototype.constructor = child;
// }

// // Parent class
// let Mobile = function() {};

// // Prototype method
// Mobile.prototype.getModel = function() {
//     return this.model; // Return the model property
// };

// // Child class Samsung
// let Samsung = function(model, price) {
//     this.model = model;
//     this.price = price;
// };

// // Child class Vivo
// let Vivo = function(model) {
//     this.model = model;
// };

// // Establish inheritance
// // Samsung.prototype = Object.create(Mobile.prototype);
// // Samsung.prototype.constructor = Samsung;

// // Vivo.prototype = Object.create(Mobile.prototype);
// // Vivo.prototype.constructor = Vivo;

// Extend(Mobile, Samsung);
// Extend(Mobile, Vivo)

// // Add method to Samsung 
// Samsung.prototype.getPrice = function() {
//     return this.price;
// }

// // Create an instance of Samsung
// let s = new Samsung('S20', 27000);

// // Create an instance of Vivo
// let v = new Vivo('V25Pro');

// // Access properties and methods of the instance
// console.log('s.getModel() :', s.getModel()); // Output: s.getModel() : S20
// console.log('s.getPrice() :', s.getPrice()); // Output: s.getModel() : S20


// console.log('v.getModel() :', v.getModel());
// console.log(v.getPrice());

// -----------------------------------------------------------

// console.log('-- call() method in Prototype Inheritance --');

// // Parent class Mobile
// let Mobile = function(model) {
//     this.model = model; // Assign the model property
// };
// Mobile.prototype.getModel = function() {
//     return this.model; // Return the model property
// };

// // Child class Samsung
// let Samsung = function(model, price) {
//     Mobile.call(this, model); // Call the parent constructor
//     this.price = price; // Assign the price property
// };

// // Establish inheritance
// Samsung.prototype = Object.create(Mobile.prototype);
// // Reset constructor of Samsung
// Samsung.prototype.constructor = Samsung;

// // Create an instance of Samsung
// let s = new Samsung('S24 5G', 27000);

// // Access properties and methods
// console.log('s.getModel() :', s.getModel()); // Output: s.getModel() : S24 5G
// console.log('s.model :', s.model);           // Output: s.model : S24 5G
// console.log('s.price :', s.price);           // Output: s.price : 27000

// -------------------------------------------------------------------------------------------


// console.log('-- Resetting the constructor --');

// // Define the Parent class (base class)
// let Parent = function() {};

// // Define the Child class (subclass)
// let Child = function() {};

// // Inherit from Parent
// // This makes Child inherit all properties and methods from Parent
// Child.prototype = Object.create(Parent.prototype);

// // Before resetting the constructor
// // After inheritance, Child's prototype's constructor points to Parent (not correct)
// // This happens because of how Object.create() works
// console.log(Child.prototype.constructor === Parent); // True (incorrect)

// // Reset the constructor to point to Child
// // This ensures instances of Child identify Child as their constructor
// Child.prototype.constructor = Child;

// // Create an instance of Child
// let c = new Child();

// // After resetting constructor
// // Now the instance `c` correctly recognizes Child as its constructor
// console.log(c.constructor === Child); // True (correct)


// -------------------------------------------------------------

// console.log('-- Method Overriding --');

// // Utility function to set up inheritance
// // This function makes child inherit from parent class
// function Extend(parent, child) {
//     // Set child prototype to inherit from parent prototype
//     child.prototype = Object.create(parent.prototype);
//     // Reset constructor to point to child class
//     child.prototype.constructor = child;
// }

// // Parent class constructor function (Mobile)
// let Mobile = function() {};

// // Prototype method for Mobile class
// Mobile.prototype.display = function() {
//     return 'Parent class Method (Mobile)';
// };

// // Child class constructor function (Samsung)
// let Samsung = function() {};

// // Use the Extend function to set up inheritance
// Extend(Mobile, Samsung);

// // Overriding the display method in the Samsung class (Method Overriding)
// Samsung.prototype.display = function() {
//     return 'Child class Method (Samsung)';
// };

// // Create an instance of Samsung (child class)
// let s = new Samsung();

// // Create an instance of Mobile (parent class)
// let m = new Mobile();

// // Calling display method on Samsung instance, which calls the overridden method in the child class
// console.log(s.display());  // Output: 'Child class Method (Samsung)'

// // Calling display method on Mobile instance, which calls the method in the parent class
// console.log(m.display());  // Output: 'Parent class Method (Mobile)'

// --------------------------------------
console.log('-- Multilevel Inheritance --');

// Function to set up inheritance from parent to child
function Extend(parent, child) {
    child.prototype = Object.create(parent.prototype); // Set child prototype to inherit from parent prototype
    child.prototype.constructor = child; // Set the constructor of child to the child function itself
}

// Parent class
let Mobile = function() {};

// Prototype method for the parent class
Mobile.prototype.getModel = function() {
    return this.model; // Return the model property from the instance
};

// First level child class Samsung (inherits from Mobile)
let Samsung = function(model, price) {
    Mobile.call(this); // Call parent constructor (Mobile) to initialize the properties
    this.model = model; // Set the model property
    this.price = price; // Set the price property
    this.ram = '8GB'; // Set a default RAM property for Samsung
};

// Second level child class Vivo (inherits from Samsung, and indirectly from Mobile)
let Vivo = function(model, price) {
    Samsung.call(this, model, price); // Call Samsung's constructor (which already calls Mobile's constructor)
};

// Establish inheritance chain between Mobile and Samsung, and Samsung and Vivo
Extend(Mobile, Samsung);  // Samsung inherits from Mobile
Extend(Samsung, Vivo);    // Vivo inherits from Samsung (and indirectly from Mobile)

// Add a method to the Samsung prototype
Samsung.prototype.getPrice = function() {
    return this.price; // Return the price property of the Samsung object
}

// Create an instance of Samsung with model 'S20' and price 27000
let s = new Samsung('S20', 27000);

// Create an instance of Vivo with model 'V25Pro' and price 35000
let v = new Vivo('V25Pro', 35000);

// Access properties and methods of the Samsung instance
console.log('s.getModel() :', s.getModel()); // Output: S20 (Samsung instance calling getModel from Mobile)
console.log('s.getPrice() :', s.getPrice()); // Output: 27000 (Samsung instance calling getPrice from Samsung)

// Accessing the 'ram' property, which was set in the Samsung constructor, using the Vivo object
console.log('v.ram :', v.ram); // Output: 8GB (Vivo instance inherits ram property from Samsung)

// Access the methods of the Vivo instance
console.log('v.getModel() :', v.getModel()); // Output: V25Pro (Vivo instance calling getModel from Mobile)
console.log('v.getPrice() :', v.getPrice()); // Output: 35000 (Vivo instance calling getPrice from Samsung)


