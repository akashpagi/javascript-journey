document.write('<b>For Loop :<b> <br>')

/*
Syntax:
    for (initialization; condition; increment/decrement) { 
        // code to be executed 
    }

Use Case : Displaying a Product List
*/

for(i=0; i<5; i++)
    {
        document.write( i + '<br>'); 
    } 
document.write('Outside of the loop ! <br><br>')

// Ex.2 
var i=0;
for(; i<6; i++)
    {
        document.write( i + '<br>'); 
    } 
document.write('Outside of the loop !<br> <br> ')

// Ex.3
var i=0;
for(; i<5; )
    {
       // i++; // result as 1 to 5
        document.write( i + '<br>'); // Here first time i value is 1
        i++; // result as 0 to 4
    } 
document.write('Outside of the loop !<br> <br> ')

// Ex 4
var i = 0;
for(; ; i++) // i increment alway True until condition break
    {
        if(i == 3)
            {
                break;
            }
    document.write( i + '<br>'); 
}
document.write('Outside of the loop !<br> <br> ')

