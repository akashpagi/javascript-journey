
/*
Syntax:
    switch (expression) { 
        case value1: 
            // code1; 
            break; 
        case value2: 
            // code2; 
            break; 
        default: 
            // default code; 
        }
*/



// var day = 50;

// switch(day) {
//     case 1:
//         document.write('Monday');
//         break;
//     case 2:
//         document.write('Tuesday');
//         break;
//     case 3:
//         document.write('Wednesday');
//         break;
//     case 4:
//         document.write('Thursday');
//         break;
//     case 5:
//         document.write('Friday');
//         break;
//     case 6:
//         document.write('Saturday');
//         break;
//     case 7:
//         document.write('Sunday');
//         break;
//     default:
//         document.write('Invalid day');
// }


var fruit = 'carrot';

switch(fruit) {
    case 'apple':
    case 'cherry':
    case 'banna':
        document.write('This is a furit');
        break;
    case 'carrot':
        document.write('This is a vegetable.');
        break;
    default:
        document.write('Unknown item')
}


// var userChoice = 2;

// switch(userChoice) {
//     case 1:
//         document.write("View profile");
//         break;
//     case 2:
//         document.write("Edit settings");
//         break;
//     case 3:
//         document.write("Logout");
//         break;
//     default:
//         document.write("Invalid option");
// }