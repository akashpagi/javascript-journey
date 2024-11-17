document.write('<b>Argument Object:<b> <br>');

// function with argument object

function disp(name, age){
    // document.write(name + "--" + age );
    
    arguments[0] = 'Goku'; // Override the argument object

    document.write(arguments[0] + '<br>');
    document.write(arguments[1] + '<br>');

    // Find argument objects length using length property
    var arg_len = arguments.length
    document.write( 'arguments objects length :' + arg_len + '<br>');

    // callee
    // document.write(arguments.callee); //   callee Deprecated
}

// info('Akash', 23);
disp('Akash', 23, 'Mumbai'); // for number of argumnet object length


document.write('<br><b>For loop on Argument Object:<b> <br>');

function show(){
    var arg_len = arguments.length;
    for(var i=0; i < arg_len; i++ ){
        document.write(arguments[i] + ' ');
    }
}

show('Akash', 23, 'Mumbai'); 


document.write('<br><br><b>Too many arguments :<b> <br>');
// Too many arguments 
function add(a,b){
    document.write('A:' + a + 'B:' + b + 'C:' + arguments[2]);
}
add(10,20,30)