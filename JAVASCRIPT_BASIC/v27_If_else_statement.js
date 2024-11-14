document.write('<b>If else Statement:  </b>' + '<br>');
// var a = 10;
var a = 80; 
if (a == 10) {
    document.write('You entered correct value !');
} else { 
    document.write('Entered value is <b> not </b> correct !');}


document.write("<br> <br>")

// If else statement with user input
document.write('<b>If else statement with user input : </b>' + '<br>');
var roll = prompt('Enter your roll number :');
if (roll == 2) {
    document.write('name : Akash' + '<br>roll :' + roll);
} else {
    document.write('Student roll number not found !');
}



document.write("<br> <br>")

// Ternary statement
document.write('<b>Ternary statement:</b>' + '<br>');
var age = 19;
var result = (age >= 18) ? 'Eligible for Vote !' : 'Not Eligible for Vote !';
document.write(result);

