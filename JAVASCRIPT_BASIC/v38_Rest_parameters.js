document.write('<b>Rest Parameters:<b> <br>');

// Rest parameters
function nums(...all_nums){
    document.write(all_nums);
}
nums(34, 23, 45);

document.write('<br><br><b>Rest Parameters:<b> <br>');
// Rest parameters
function info(name, ...args){
    var age = args[0]; // Extract the first element of args as age
    document.write('My name is '+ name + " & I'm is " + age + ' old');
}
info('Akash', 23);

document.write('<br><br><b>Rest Parameters with multiple additional arguments:<b> <br>');
// multiple additional arguments
function new_info(name, ...args) {
    const age = args[0];
    const city = args[1]; // Additional argument
    document.write('My name is ' + name + ", I'm " + age + ' years old, and I live in ' + city);
}
new_info('Akash', 23, 'Mumbai'); 
// Output: My name is Akash, I'm 23 years old, and I live in Mumbai
