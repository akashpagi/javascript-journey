// console.log('-- ES6 class --');

// // class decleration
// class Mobile{
//     constructor(){
//         // Instance member
//         this.price = 12000;
//         this.show = function(){   // Instance method
//             return 'This in constructor (Instance method!) !'
//         };

//     };

//     //Prototype member
//     display(){
//         return 'Prototype member (Method)';
//     };
// }

// let oppo = new Mobile();

// console.log('oppo.price :', oppo.price);
// console.log('oppo.show (function) :', oppo.show());
// console.log('oppo.dispay (method) :', oppo.display());


// // Example to Demonstrate Sharing of Prototype Methods:
// const oppo1 = new Mobile();
// const oppo2 = new Mobile();

// console.log(oppo1.display === oppo2.display); // true (both share the same method)
// console.log(oppo1.show === oppo2.show); // false (different methods for each instance)

// ----------------------------------------

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



// ---------------------------------------
// console.log('-- Default Consturctor --');

// class Mobile{
//     // Without Default Constructor
//     display(){
//         return 'Prototype member (Method)';
//     };
// }

// let oppo = new Mobile();

// console.log('oppo.dispay (method) :', oppo.display());



// class Mobile{
//     // constructor(){
//     //     // Instance member
//     //     this.price = 12000;
//     //     this.show = function(){   // Instance method
//     //         return 'This in constructor (Instance method!) !'
//     //     };

//     // };

//     //Prototype member
//     display(){
//         return 'Prototype member (Method)';
//     };
// }

// let oppo = new Mobile();

// console.log('oppo.dispay (method) :', oppo.display());

// --------------------- -------------------------

// console.log('-- Consturctor with Paramenters --');

// class Bike{
//     constructor(model, price){
//         this.model = model;
//         this.price = price;
//     }
//     display(){
//         return this.model + ' have price ' + this.price + ' Rs';
//     };
// }
// let honda = new Bike('CBZ', 120000);
// let bajaj = new Bike('Freedom CNG', 100000);
// console.log(honda.display());
// console.log(bajaj.display());

// -------------------------------------

console.log('-- Class expression --');

// Unnamed Class Expression
const MyClass = class {
    constructor(name) {
      this.name = name;
    }
    greet() {
      return 'Hello '+ this.name ;
    }
  };

  const user = new MyClass('Akash')
  console.log(user.greet());
  

// Named Class Expression
const AnotherClass = class Another {
    constructor(age) {
      this.age = age;
    }
    showAge() {
      return `I am ` +  this.age + ` years old.`;
    }
  };
  
  const age = new AnotherClass(23)
  console.log(age.showAge());
  