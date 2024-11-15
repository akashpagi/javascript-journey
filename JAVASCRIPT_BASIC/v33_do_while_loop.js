document.write('<b>Do while Loop example <b> <br>');

var i = 0;
do 
{
    document.write(i + "<br>");
    i++;
} while(i<5)


document.write('<br><b>Do while Loop with break  & true condition example <b> <br>');
var i = 0;
do
{
    if(i==3)
        {
            break;
        }
    document.write(i + "<br>");
    i++;
} while(true)


/* NESTED DO WHILE LOOP */

document.write('<br><b>Nested Do While Loop <b> <br>');
var i = 0;
do
{
    document.write('Outer Loop :')
    document.write(i + "<br>");
    i++;

    var j = 0;
    do
    {
        document.write('In:')
        document.write(j + '<br>'); 
        j++;
    } while(j<5)
} while(i<3)
