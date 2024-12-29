console.log(' -- String in JS --');

// // String literal
// let str1 = "Hello Akash";
// console.log(typeof(str1));

// // Using String object
// let str2 = new String("Hello I am String using Consturctor")
// console.log(typeof(str2));

// // Access String 
// console.log("Hello String using double quotes "); // using double quotes 
// console.log('Hello String using single quotes '); // using Single quotes
// console.log(`Hello String using backticks`); // using backticks

// // Proper ways to access using string variable
// console.log(str1);
// console.log(str2);

// // Single qoutes inside double quotes
// let str3 = "Hello , I'm Akash";
// console.log(str3);

// // double qoutes inside Single quotes
// let str4 = '"Akash" is good boy !';
// console.log(str4);


// // // ================================================================

// console.log('String Concatination ')
// let str0 = 'Hello, ';
// let str1 = 'Spider ';
// let str2 = 'Man ';

// // + operator
// console.log(str1 + str2);

// console.log(str1 + ' ' + str2);

// // Assign the variable for str1 & str2 
// let full_name = str1 + ' ' + str2;
// console.log(full_name);

// // Concat() method
// let new_str = 'Hello, '.concat('Spider ', 'Man ');
// console.log(new_str);

// let new_str1 = str1.concat(str2);
// console.log(new_str1);

// let new_str2 = str0.concat(str1, str2, 'Bye !');
// console.log(new_str2);



// //================================================================

// // console.log('Escape Notation')

// // Using escape sequences in strings
// let singleQuote = 'It\'s a sunny day'; // Outputs: It's a sunny day
// console.log(singleQuote);

// let doubleQuote = "She said, \"Hello!\""; // Outputs: She said, "Hello!"
// console.log(doubleQuote);

// let backslash = "This is a backslash: \\"; // Outputs: This is a backslash: \
// console.log(backslash);

// let multiline = "Line 1\nLine 2"; // Outputs:
// // Line 1
// // Line 2
// console.log(multiline);

// let unicode = "Unicode: \u263A"; // Outputs: Unicode: ☺
// console.log(unicode);

// ================================================================

// // Logging a simple string
// console.log('Template Literal'); 

// // Incorrect usage of single quotes for multi-line strings
// // This will throw an error because single or double quotes do not support multi-line strings directly.
// // console.log('Hello 
// // Akash !'); // error

// // Correct usage with backticks for multi-line strings
// console.log(`Hello,
// Akash !`); // Outputs: Hello, Akash !

// // Declaring variables
// let str = 'Hello';  // A simple string variable
// let str1 = 'Akash'; // Another string variable

// // Defining a function that returns its argument
// function show(arg) {
//     return arg; // Returns the argument passed to the function
// }

// // Using template literals for string interpolation

// // Example 1: Concatenating variables
// console.log(`${str}` + str1); // Outputs: HelloAkash (no space between str and str1)

// // Example 2: Embedding variables with a space
// console.log(`${str} ${str1}`); // Outputs: Hello Akash (str and str1 separated by a space)

// // Example 3: Embedding a function call
// console.log(`${show('Wow nicee !')} ${str1}`); 
// // Outputs: Wow nicee ! Akash (result of show() + str1)

// // Example 4: Simple string with interpolation
// console.log(`This is me ! ${str1}`); 
// // Outputs: This is me ! Akash (string + value of str1)



// ================================================================

console.log('--[ Tagged Template ]--'); 

const each_ticket_price = 200;
let no_of_ticket = 5;
let no_of_buy_ticket = 5;
let discounted_price = 50;

//  // tag function
//  function ticket_details(description, no_of_ticket, each_ticket_price, no_of_buy_ticket, discounted_price ){
//      return description;
// // //     // return description[3];
// // //     // return no_of_ticket;
// // //     // return each_ticket_price;
// // //     // return no_of_buy_ticket;
// }

// Tag function
function ticket_details(description, no_of_ticket, each_ticket_price, no_of_buy_ticket, discounted_price) {
    if (no_of_buy_ticket < 5) {
        discounted_price = 0; // Reset discount to 0 if fewer than 5 tickets are bought
        return `${description[0]} ${no_of_ticket} ${description[1]} ${each_ticket_price} ${description[2]} ${no_of_buy_ticket} ${description[3]} ${discounted_price}`;
    } else {
        // Case when tickets bought less than 5 or more
        return `${description[0]} ${no_of_ticket} ${description[1]} ${each_ticket_price} ${description[2]} ${no_of_buy_ticket} ${description[3]} ${discounted_price}`;
    }
}


// // Tag function
// function ticket_details(description, ...rest) {
//     // Check conditions
//     if (rest[2] < 5) {
//         rest[3] = 0; // Reset discount to 0 for less than 5 tickets
//     };
//     return `${description[0]} ${rest[0]} ${description[1]} ${rest[1]} ${description[2]} ${rest[2]} ${description[3]} ${rest[3]}`;
// }


// Call the tag function with the template literal
console.log(ticket_details`There are ${no_of_ticket} movie tickets, Each Rs.${each_ticket_price} & if you buy ${no_of_buy_ticket} tickets Then get discount Rs.${discounted_price} for each ticket.`);


// // ======================================


// length property
// NOTE: Count the space also
let myString = "Hello, World!";
console.log(`length of the myString is ${myString.length}`); // Output: 13







