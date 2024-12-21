console.log('-- Array --');

// // Example of declaring an array using Array Literals
// // let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// // console.log(months);
// // console.log('Array type is' , typeof(months)); 
// // Arrays are of type "object" in JavaScript

// // In Arrays, indexes start from 0 by default
// // Arrays can be declared using Array Literals or Array Constructor

// // Example: Using an Empty Array
// console.log('--- Using Empty Array ---');
// let month_names = []; // Declare an empty array
// // Assign values to specific indexes of the empty array
// month_names[0] = ['JAN']; // Assign a nested array at index 0
// month_names[1] = ['FEB']; // Assign a nested array at index 1
// month_names[2] = ['MAR']; // Assign a nested array at index 2
// console.log(month_names); // Output: [ ['JAN'], ['FEB'], ['MAR'] ]

// // Example: Using Array Literals
// console.log('--- Using Array Literals ---');
// let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']; // Declare and initialize array with values
// let arr = [,,,,]; // Declare an array with 4 empty slots (no values assigned)
// let arr1 = [,23,,30]; // Declare an array with undefined at index 0 and 2, and values at index 1 and 3

// let a = 10, b = 20; // Declare variables to be used in the array
// let arr2 = [a, b]; // Use variables in the array

// // Logging the arrays to observe their structure and contents
// console.log('Months:', months); // Output: [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY' ]
// console.log('Arr :', arr); // Output: [ <4 empty items> ] (empty slots with no values)
// console.log('Arr1 :', arr1); // Output: [ undefined, 23, undefined, 30 ]
// console.log('Arr2 :', arr2); // Output: [ 10, 20 ]


// // Mixed Array 
// let mixedArray = [42, 'Hello', true, { name: 'John' }];
// console.log('mixedArray : ', mixedArray); // Output: mixedArray :  [42, 'Hello', true, { name: 'John' }]


// -------------------------------
// console.log('-- Using Array Constructor --');

// // Using the Array Constructor with multiple elements
// let months = new Array('JAN', 'FEB', 'MAR'); 
// console.log(months); // Output: ['JAN', 'FEB', 'MAR']

// // Using the Array Constructor with a single non-numeric argument
// let arr = new Array('Hello');
// console.log(arr); // Output: ['Hello']

// // Problem arises with a single numeric argument
// let arr1 = new Array(5);
// console.log(arr1);  // Output: [ <5 empty items> ] 
// // This creates an array with a length of 5 but without any initialized values (empty slots).

// let arr2 = new Array(3); // Creates an array with 3 empty slots
// console.log(arr2); // Output: [ <3 empty items> ]
// console.log(arr2[0]); // Output: undefined 
// // Accessing any index of an uninitialized slot in the array returns `undefined`.

// -----------------------

// let fruits = ['Apple', 'Banana', 'Cherry'];
// console.log(fruits[0]); // Output: 'Apple'
// console.log(fruits[1]); // Output: 'Banana'
// console.log(fruits[2]); // Output: 'Cherry'

// // Accessing the Last Element
// console.log(fruits[fruits.length - 1]); // Output: 'Cherry'

// // Accessing Non-Existent Indices
// console.log(fruits[10]); // Output: undefined

// --------------------------------

// Modifying Elements
// let fruits = ['Apple', 'Banana', 'Cherry'];
// console.log('Before Modify :', fruits);
// fruits[1] = 'Blueberry'; // Change 'Banana' to 'Blueberry'
// console.log('After Modify :', fruits); // Output: ['Apple', 'Blueberry', 'Cherry']


// let originalArray = [1, 2, 3, 4];

// // duplicateArray now refers to the same array as originalArray
// let duplicateArray = originalArray; 

// console.log(originalArray); // Output: [1, 2, 3, 4]
// console.log(duplicateArray); // Output: [1, 2, 3, 4]

// duplicateArray[0] = 'One'; // Modify duplicateArray

// console.log(duplicateArray); // Output: ['One', 2, 3, 4] (duplicateArray reflects the change)
// console.log(originalArray); // Output: ['One', 2, 3, 4] (originalArray also reflects the change)


// // --------------------------------

// // Removing Array Elements
// let fruits = ['Apple', 'Banana', 'Cherry'];
// delete fruits[1]; // Deletes 'Banana'

// console.log(fruits); // Output: ['Apple', <1 empty item>, 'Cherry']
// console.log(fruits[1]); // Output: undefined (because it was deleted)




// --------------------------------

// // Example demonstrating the use of the `length` property
// let fruits = ['Apple', 'Banana', 'Cherry'];
// // The length property provides the number of elements in the array
// console.log('Fruits array length is', fruits.length); 
// // Output: Fruits array length is 3

// // ---------------------------

// // Iteration of Array using for Loop
// let fruits = ['Apple', 'Banana', 'Cherry'];

// // Loop through the array using a for loop
// for (let i = 0; i < fruits.length; i++) {
//     // Access and log the element at index `i`
//     console.log(fruits[i]); 
//     // Uncomment the below line to log the index along with the element
//     // console.log(i + ' : ' + fruits[i]); 
// }
// // Output:
// // Apple
// // Banana
// // Cherry

// // --------------------------------

// // Repeated Example of Iteration of Array using for Loop
// // Note: This section is identical to the one above
// let fruits = ['Apple', 'Banana', 'Cherry'];

// // Loop through the array using a for loop
// for (let i = 0; i < fruits.length; i++) {
//     // Access and log the element at index `i`
//     console.log(fruits[i]); 
//     // Uncomment the below line to log the index along with the element
//     // console.log(i + ' : ' + fruits[i]); 
// }
// // Output:
// // Apple
// // Banana
// // Cherry


// // --------------------------------

// // Iteration of Array using forEach loop
// let fruits = ['Apple', 'Banana', 'Cherry'];

// // Only array elements
// fruits.forEach(function(element) {
//     // Log each element
//     console.log(element);
// });
// // Output:
// // Apple
// // Banana
// // Cherry

// // With index
// fruits.forEach(function(element, index_of_element) {
//     // Log each element with its index
//     console.log(index_of_element + ':' + element);
// });
// // Output:
// // 0:Apple
// // 1:Banana
// // 2:Cherry


// // --------------------------------

// // Iteration of Array using for...Of loop
// let fruits = ['Apple', 'Banana', 'Cherry'];

// for(let elements of fruits){
//     console.log(elements)
// };


// ------------------------------------

// // Get input from user in Array
// let ele = prompt('Enter no. of elements:');
// let months = [];

// //Input
// for(let i=0; i<=ele; i++){
//     months[i] = prompt('Enter name: ');
// }

// for(let value of months){
//     console.log(months);
// }

// --------------------------------------

// // Multidimensional Array

// // 2D Array
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// console.log(matrix); 
// // console.log(matrix.length); // 3

// // Access using for loop
// for(let i = 0; i < matrix.length; i++){
//     for(let j = 0; j < matrix.length; j++){
//         console.log(matrix[i][j]);
//     }
// }

// // // 1st row of matrix
// // console.log(matrix[0][0]);
// // console.log(matrix[0][1]);
// // console.log(matrix[0][2]);

// // // 3rd row of matrix
// // console.log(matrix[1][0]);
// // console.log(matrix[1][1]);
// // console.log(matrix[1][2]);

// // // 3rd row of matrix
// // console.log(matrix[2][0]);
// // console.log(matrix[2][1]);
// // console.log(matrix[2][2]);

// // ----------------------------------------

// // 2D Empty Array
// let matrix = [
//     [],
//     [],
// ];

// console.log(matrix); 
// // console.log(matrix.length); // 3

// // Access using for loop
// for(let i = 0; i < matrix.length; i++){
//     for(let j = 0; j < matrix.length; j++){
//         document.write('[' + i + ' ' + j + ']');
//     }
//     document.write('<br>')
// }

// --------------------------------------------------

// // Better Way to Create a 2D Empty Array

// // Step 1: Matrix Initialization
// let matrix = []; // Initialize an empty array to represent the matrix
// let rows = 3;    // Define the number of rows for the matrix
// let cols = 3;    // Define the number of columns for the matrix

// // Populate the matrix with empty subarrays to represent rows
// for(let i = 0; i < rows; i++) {
//     matrix[i] = []; // Each subarray represents a row in the matrix
// }
// console.log(matrix); // Output: [[], [], []] (matrix with empty rows)

// // console.log(matrix.length); // Uncomment to check the number of rows (3)

// // Step 2: Matrix Traversal with Nested Loops
// for(let i = 0; i < rows; i++) { // Outer loop iterates over rows
//     for(let j = 0; j < cols; j++) { // Inner loop iterates over columns
//         // Print each matrix element (currently undefined since it's uninitialized)
//         document.write('[' + matrix[i][j] + ']');
        
//         // Uncomment the below line for debugging row and column indices
//         // document.write('[' + i + ' ' + j + ']');
//     }
//     document.write('<br>'); // Move to the next line after each row
// }


// // ----------------------------------

// Get Input From user in 2D Empty Array

// Defining 2d empty & Initialization:
let matrix = [];
let rows = 2;
let cols = 2;

for(let i = 0; i < rows; i++){
    matrix[i] = []; 
}

for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
        matrix[i][j] = prompt('Enter Inputs for matrix : ');
    }
   
}

// Matrix Traversal with Nested Loops:
for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
        document.write('[' + matrix[i][j] + ']');
    }
    document.write('<br>')
}