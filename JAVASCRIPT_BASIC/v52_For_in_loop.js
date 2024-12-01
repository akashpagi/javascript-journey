console.log('-- For...in Loop in JS --');

function BikesDetails(model, color, price) {
    this.model = model;
    this.color = color;
    this.price = price;
    this.description = function () {
        console.log(
            this.model + ' is a model with ' + this.color + ' color and the price will be Rs.' + this.price
        );
    };
}

// Creating an object instance with constractor
let bajaj = new BikesDetails('Freedom', 'Red', 100000);
let honda = new BikesDetails('CBZ', 'Blue',220000);

// For...in Loop
for(let details in bajaj){
    console.log(bajaj[details]);
} 

// To avoid methods being included in the loop, you can add a check using typeof:
for (let details in bajaj) {
    if (typeof bajaj[details] !== 'function') {
        console.log(bajaj[details]);
    }
}

// for...in lopp with keys value pairs
for (let details in honda) {
    if (typeof honda[details] !== 'function') {
        console.log(details + ':' + honda[details]);
    }
}

// Call method using for...in loop 
for (let details in honda) {
    if (typeof honda[details] === 'function') {
        honda[details](); // Call the function dynamically
    } else{
        console.log(details + ':' + honda[details]); // Log other properties
    }
}


// for...in loop in JavaScript can access, manipulate, and display both instance and prototype members of an object.
console.log(Object.keys(bajaj));
