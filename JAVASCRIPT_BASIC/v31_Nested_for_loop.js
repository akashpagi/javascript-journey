document.write('<b>Nested For Loop :<b> <br>')

for(i=0; i<3; i++)
    {
        document.write('Outer Loop :')
        document.write( i + '<br>'); 
        for(j=0; j<5; j++)
        {
            document.write('---Inner Loop:')
            document.write( j + '<br>'); 
        }
    } 

