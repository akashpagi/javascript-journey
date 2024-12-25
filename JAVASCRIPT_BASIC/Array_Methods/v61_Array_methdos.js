console.log('-- Array Methods--');

// // concat method 
// // merge more that two array & return new array

// let nums = [1, 2, 3];
// let latest_nums = nums.concat(4, 5);
// console.log('nums :', nums);
// console.log('latest_nums :', latest_nums);

// // merge two arrays
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5];
// let arr3 = ['Hi', 'Hello'];
// // let new_arr = arr1.concat(arr2);
// let new_arr = arr1.concat(arr3, arr2);
// console.log(new_arr);

// // // ----------------------------------

// // join() method
// let arr1 = [1, 2, 3];
// console.log(arr1);
// // join
// let new_arr = arr1.join(' : ');
// console.log(new_arr);

// console.log('typeof :', typeof(new_arr));

// // ----------------------------------

// // reverse() method
// let arr1 = [1, 2, 3, 4, 5];
// console.log('Before Reverse :', arr1);
// // reverse
// arr1.reverse()
// console.log('After Reverse :', arr1);


// // ----------------------------------

// // slice() method
// // Parameters:
// // start: The index at which to start extraction (inclusive). Defaults to 0 if not provided.
// // end: The index before which to end extraction (exclusive). Defaults to the array's length if not provided.
// // Negative Indices: Can be used to count from the end of the array.
// let arr1 = [1, 2, 3, 4, 5];
// console.log('Before slice :', arr1);
// // slice
// // let new_arr1 = arr1.slice(0, 3)
// // let new_arr1 = arr1.slice(-4, -1)
// // let new_arr1 = arr1.slice(0, 9)
// let new_arr1 = arr1.slice(undefined, 5)
// console.log('After slice :', new_arr1);


// // ----------------------------------

// // toString() method
// // Retrun comma seperated string of array
// // By default invoked toString() method
// let months = ['JAN', 'FEB', 'MAR'];
// months.toString();
// console.log(months);


// // ----------------------------------

// // Array.isArray() method
// // Retrun boolean statement
// let months = ['JAN', 'FEB', 'MAR'];
// let day = 'Monday';
// months_result = Array.isArray(months)
// day_result = Array.isArray(day);
// console.log(months_result); // True
// console.log(day_result); 

// -------------------------------------

// // splice() method
// // Removing existing elements or add new elements
// // Change in Existing array
// // syntax: arrry_name.splice(StaticRange, deletecount, replacevalue)

// // let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// // months.splice(3);
// // months.splice(2, 2); // starting point is 2nd elements and 2 means  2 elements is remove after 2nd elements 
// // months.splice(5, 0, 'JUN', 'JUL'); // Elements add after 5th positions
// // months.splice(2, 3, 'JUN', 'JUL'); // Add and Insert elements
// months.splice(2, 3, 'JUN'); 
// console.log(months); 



// // -------------------------------------

// // IndexOf() method
// let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

// // let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAR','MAY'];
// // let index_position = months.indexOf('DEC'); // if element not found than returns -1
// // let index_position = months.indexOf('APR'); 
// let index_position = months.indexOf('APR', 2); // with specific location
// console.log(index_position);


// // -------------------------------------

// // Fill() method
// // Syntax : array_name.fill(value, start, end)
// // array ennding excluded 
// let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// // // months.fill('O'); // fill all array
// // // months.fill('O', 1); // fill start with index position 1 
// months.fill('O', 1, 4); // start with index position 1 & end at 4 (excluding 4 )
// console.log(months); 

// let arr = new Array(3).fill('A');
// console.log(arr);

// // -------------------------------------

// // unshift() method
// // Adds one or more elements to the beginning of the array
// // syntax: array.unshift(element1, element2, ...)
// let months = ['MAR', 'APR',];
// months.unshift('JAN','FEB'); 
// console.log(months); 

// -------------------------------------

// // push() method
// //Adds one or more elements to the end of the array.
// // syntax: array.push(element1, element2, ...)
// let months = ['JAN','FEB'];
// console.log('Before Push :', months); 
// months.push('MAR', 'APR',); 
// console.log('After Push :', months); 

// // -------------------------------------

// // shift() method
// // Removes the first element of the array and returns it.
// // syntax: array.shift()
// let months = ['JAN','FEB','MAR','APR'];
// // months.shift(); 
// // console.log(months); 

// // return remove element
// let remove_element = months.shift(); 
// console.log(remove_element); 

// // -------------------------------------
 
// pop() method
// Removes the last element of the array and returns it.
// syntax: array.pop()
let months = ['JAN','FEB','MAR','APR'];
// months.pop(); 
// console.log(months); 

// return remove element
let pop_element = months.pop(); 
console.log(pop_element); 

concat() 
join()
reverse()
slice()
fill()
toString()
Array.isArray()
splice()
unshift()
push()
shift()
IndexOf()
pop()
