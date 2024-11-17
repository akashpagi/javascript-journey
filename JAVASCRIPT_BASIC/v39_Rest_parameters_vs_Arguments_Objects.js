// document.write('<b>Rest Parameters Vs Arguments Objects:<b> <br>');

// Rest parameters
function rest_parameters(a,...args) {
    console.log('a:', a); // Access the first argument
    console.log(args);          // Logs all arguments as an array
}
rest_parameters(1, 2, 3, 4);

// Arguments Objects
function arguments_objects(a) {
    console.log('a:', a); // Access the first argument
    console.log(arguments);          // Logs all arguments as an array-like object
}
arguments_objects(1, 2, 3, 4);
