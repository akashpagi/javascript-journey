console.log('-- Prototype in JS --');

// Constructor function
let Bikes = function(model) {
    // Instance member
    this.model = model;
    this.base_price = 95000;
}

// Instances
let bajaj = new Bikes('Freedom');
let honda = new Bikes('CBR');

// Adding a property to the prototype
// Syntax : ClassName.prototype.key
// Prototype member
Bikes.prototype.color = 'Red';

console.log(bajaj.color); // Output: Red (accessed from the prototype)
console.log(honda.color); // Output: Red (accessed from the prototype)

console.log(bajaj); // Output: Bikes { model: 'Freedom', base_price: 95000 }

console.log(bajaj.hasOwnProperty('color')); // Output: false (color is not an own property)

console.log('-- Prototype Object --');
console.log(Object.prototype); //{__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}  

let b = {};
console.log(Object.getPrototypeOf(b)); // {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}  
console.log(Object.getPrototypeOf(Object.prototype)); // output: null


console.log('-- Prototype Object using new keyword --');
let a = new Object();
console.log(Object.getPrototypeOf(a)); // return object of object.prototype   

console.log('-- Prototype Object with array --');
let arr = new Array();
console.log(Object.getPrototypeOf(arr)); // [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
console.log(Object.getPrototypeOf(Array.prototype)); // [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
console.log(Object.getPrototypeOf(Object.prototype)); // output: null

