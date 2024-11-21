console.log('-- IIFE --');

// Basic IIFE
( function () {
        console.log("I'm an IIFE !");
    }
)();

// IIFE scope;
console.log('IIFE Scope:');
( function () {
    var a = 10;
    console.log("a :", a);
}
)();
// console.log("a (outside) :", a); // Here scope inside the function only


// IIFE  with paramenter;
console.log('IIFE with paramenter :');
( function (a, b) {
    console.log("a :", a + " & " +  "b :", b);
}
)(10, 20);