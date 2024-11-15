document.write('<b>While Loop example <b> <br>');

var i = 0;
while(i<5){
    document.write(i + "<br>")
    i++;
}

document.write('<br><b>While Loop with break example <b> <br>');
var i = 0;
while(true)
    {
        if(i==3)
            {
                break;
            }
        document.write(i + "<br>")
        i++;
}

// var password = "";
// while (password !== "1234") {
//     password = prompt("Enter the correct password:");
// }
// document.write("Access granted.");

// -------------------------------------------------------------------------------------

/* NESTED WHILE LOOP */

document.write('<br><b>Nested While Loop <b> <br>');
var i = 0;
while(i<3)
    {
        document.write('Outer Loop :')
        document.write(i + "<br>");
        i++;

        var j = 0;
        while(j<5)
        {
            document.write('---Inner Loop :')
            document.write(j + '<br>'); 
            j++;
        }

    }
