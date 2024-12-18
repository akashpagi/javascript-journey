// console.log('-- Class Inheritance --');

// // Parent class
// class Parent {
//     // Method of Parent class
//     parentDetails() {
//         return 'This is parent method !';
//     }
// }

// // Child Class inheriting from Parent
// class Child extends Parent {
//     // Method of Child class
//     childDetails() {
//         return 'This is child method !';
//     }
// }

// // GrandChild Class inheriting from Child
// class GrandChild extends Child {
//     // Method of GrandChild class
//     grandChildDetails() {
//         return 'This is grand child method !';
//     }
// }

// // Demonstrating Parent class
// console.log('-- Parent --');
// let p = new Parent(); // Creating an instance of Parent
// console.log(p.parentDetails()); // Accessing the parentDetails method

// // Demonstrating Child class
// console.log('-- Child --');
// let c = new Child(); // Creating an instance of Child
// console.log(c.parentDetails()); // Accessing the inherited method from Parent
// console.log(c.childDetails());  // Accessing the childDetails method

// // Demonstrating GrandChild class
// console.log('-- Grand Child --');
// let gc = new GrandChild(); // Creating an instance of GrandChild
// console.log(gc.parentDetails());     // Accessing the inherited method from Parent
// console.log(gc.childDetails());      // Accessing the inherited method from Child
// console.log(gc.grandChildDetails()); // Accessing the grandChildDetails method


// ----------------------------------------------------
// console.log('-- super() method --');

// class Parent {
//     constructor(parent_money) {
//         this.parent_money = parent_money;
//     }    
    
//     parentDetails() {
//         return 'Parent have ' + this.parent_money +' money in constructor & ' + 'This is parent method !';
//     }
// };

// class Child extends Parent { 
//     constructor(child_money) {
//         super(child_money);  
//         this.child_money = child_money;
//     }    
 
//     childDetails() {
//         return 'This is child method! Child has ' + this.child_money + ' money.';
//     }
// };

// let c = new Child(1000000); 
// console.log(c.parentDetails()); 
// console.log(c.childDetails());  


// -------------------------------------

// // Method Overriding
// console.log('-- Method Overriding--');

// class Parent {
//     details() {
//         return 'This is parent method !';
//     }
// };

// class Child extends Parent {   
//     details() {
//         return 'This is child method !';
//     }
// };

// let c = new Child(1000000); 
// console.log(c.details()); 
// // console.log(c.details());  



// -----------------------------

// Static Method
console.log('-- static method--');

// Define a class named Mobile
class Mobile {
    // Define a static method using the `static` keyword
    static details() {
        // Static method that returns a string
        return 'This is static method of Mobile class !';
    }
};

// Call the static method directly on the class without creating an instance
console.log(Mobile.details()); // Output: This is static method of Mobile class !



