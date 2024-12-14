console.log('-- ES6 class --');

// class decleration
class Mobile{
    constructor(){
        // Instance member
        this.price = 12000;
        this.show = function(){   // Instance method
            return 'This in constructor (Instance method!) !'
        };

    };

    //Prototype member
    display(){
        return 'Prototype member (Method)';
    };
}

let oppo = new Mobile();

console.log('oppo.price :', oppo.price);
console.log('oppo.show (function) :', oppo.show());
console.log('oppo.dispay (method) :', oppo.display());


// Example to Demonstrate Sharing of Prototype Methods:
const oppo1 = new Mobile();
const oppo2 = new Mobile();

console.log(oppo1.display === oppo2.display); // true (both share the same method)
console.log(oppo1.show === oppo2.show); // false (different methods for each instance)


// ----------------------

// class Mobile {
//     constructor(brand) {
//         this.brand = brand; // Instance member
//         this.price = 12000; // Instance member
//     }

//     displayDetails() { // Prototype member
//         return `Brand: ${this.brand}, Price: ${this.price}`;
//     }
// }

// // Create two instances
// const oppo = new Mobile("Oppo");
// const vivo = new Mobile("Vivo");

// // Accessing instance members
// console.log(oppo.brand); // Output: Oppo (instance member)
// console.log(vivo.brand); // Output: Vivo (instance member)

// // Accessing prototype member
// console.log(oppo.displayDetails()); // Output: Brand: Oppo, Price: 12000
// console.log(vivo.displayDetails()); // Output: Brand: Vivo, Price: 12000

// // Checking if properties exist directly on the instance
// console.log(oppo.hasOwnProperty("brand")); // Output: true (instance member)
// console.log(oppo.hasOwnProperty("displayDetails")); // Output: false (prototype member)

// // Checking shared prototype method
// console.log(oppo.displayDetails === vivo.displayDetails); // Output: true (shared)
