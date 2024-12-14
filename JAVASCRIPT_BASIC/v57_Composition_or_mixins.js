console.log('-- Composition or Mixins in JavaScript --');

// // Function to set up inheritance from parent to child
// function Extend(parent, child) {
//     child.prototype = Object.create(parent.prototype); // Set child prototype to inherit from parent prototype
//     child.prototype.constructor = child; // Set the constructor of child to the child function itself
// }

// // Parent class
// let Human = function() {};

// // Prototype method for the parent class
// Human.prototype.eat = function() {
//     return 'Parent class (eat method)'; 
// };

// Human.prototype.walk = function() {
//     return 'Parent class (walk method)'; 
// };

// Human.prototype.talk = function() {
//     return 'Parent class (talk method)'; 
// };

// // Child class
// let Animal = function() {};

// // Child class (Animal) extending Parent class Human (Human)
// Extend(Animal, Human)

// // Child class (Robot)
// let Robot = function() {};

// // Child class (Robot) extending Parent class Human (Human)
// Extend(Robot, Human);


// --------------------------------------------

// Creating Mixin Function for readability
function Mixin(target, ...sources) {
    // Using Object.assign to copy all properties from source(s) to target
    Object.assign(target, ...sources); // note: inside the function we use spread operator
};

// Define behaviors as separate mixins
const eating = {
    eat: function() {
        return 'I can eat';
    }
};

const walking = {
    walk: function() { 
        return 'I can walk';
    }
};

const talking = {
    talk: function() {
        return 'I can talk';
    }
};

// const starting = {
//     start: function() {
//         return 'I can start';
//     }
// };

// Human class, a basic constructor function
let Human = function() {

};

// Use Mixin to add multiple behaviors (eating, walking, talking) to Human's prototype
Mixin(Human.prototype, eating, talking, walking);

// Create multiple instances of Human
let BobTheBuilder = new Human(); // Instance 1
let Rowlly = new Human(); // Instance 2

// Adding multiple behaviors to a single object using Object.assign
// Here, Robo gets walking and talking abilities but not eating
let Robo = Object.assign({}, walking, talking);

// Testing the behaviors on different instances

// BobTheBuilder instance has eating, walking, and talking behaviors
console.log('BobTheBuilder :', BobTheBuilder.eat()); // Output: 'I can eat'
console.log('BobTheBuilder :', BobTheBuilder.walk()); // Output: 'I can walk'
console.log('BobTheBuilder :', BobTheBuilder.talk()); // Output: 'I can talk'

// Rowlly instance also has eating, walking, and talking behaviors
console.log('Rowlly :', Rowlly.eat()); // Output: 'I can eat'
console.log('Rowlly :', Rowlly.walk()); // Output: 'I can walk'
console.log('Rowlly :', Rowlly.talk()); // Output: 'I can talk'

// Robo object only has walking and talking behaviors, not eating or starting
console.log('Robo :', Robo.walk()); // Output: 'I can walk'
console.log('Robo:', Robo.talk()); // Output: 'I can talk'

// Robo does not have a 'start' behavior, so it would throw an error if you uncomment this
// console.log(Robo.start()); // Uncommenting this would throw an error as Robo doesn't have a 'start' method
