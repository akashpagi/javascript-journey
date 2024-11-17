document.write('<b>Functions With Parameters:<b> <br>');
// Creating/ Defining a function with parameters
function info(name, age){
    document.write('My name is '+ name + " & I'm is " + age + ' old');
}
// Calling / Invoking a function
info('Akash', 23);


document.write('<br><br><b>Functions With missing argument:<b> <br>');
// function with missing argument

function info(name, age){
    document.write('My name is '+ name + " & I'm is " + age + ' old');
}
info('Akash',);


document.write('<br><br><b>Functions With default parameters:<b> <br>');

// Functions With default parameters
function info(name, age=23){
    document.write('My name is '+ name + " & I'm is " + age + ' old');
}
info('Akash',);


document.write('<br><br><b>Functions With 2 default parameters:<b> <br>');
// Functions With 2 default parameters:
function info(name, age=23, address='Mumbai'){
    document.write('My name is '+ name + " & I'm is " + age + ' old , Live in ' + address);
}
info('Akash'); 

document.write('<br><br><b>In between default parameters:<b> <br>');
// In between default parameters:
function info(name, age=23, address){
    document.write('My name is '+ name + " & I'm is " + age + ' old , Live in ' + address);
}
info('Akash'); 


document.write('<br><br><b>Default Paramenter with Array:<b> <br>');
// Default Paramenter with Array
function add(num, a=['aa', 'ab']){
    document.write('aa : ' + a[0] + '<br>');
    document.write('ab : ' + a[1] + '<br>');
    document.write('num : ' + num + '<br>');
}
add(20, [10, 40])