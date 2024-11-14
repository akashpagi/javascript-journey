/*
Syntax:
if (condition) { 
    // code to execute 
}

*/

if (condition) { 
    // code to execute 
}




document.write('<b>If Statement:  </b>' + '<br>');
var a = 10;
// var a = 80; 
if (a == 10) {
    // if the this condition True then you get message otherwise Nothing
    document.write('You entered correct value !');
}

document.write("<br> <br>")

// If statement with logical operator
document.write('<b>If statement with logical operator : </b>' + '<br>');
var first_name = 'rohit';
var last_name = 'sharma';
// var last_name = 'verma'; // try to enter wrong input
if ((first_name == 'rohit') && (last_name == 'sharma')){
    document.write('First & last name found in Database !');
}

document.write("<br> <br>")

// If statement with user input
document.write('<b>If statement with user input : </b>' + '<br>');
var roll = prompt('Enter your roll numner :');
if (roll == 2) {
    document.write('name : Akash');
}

