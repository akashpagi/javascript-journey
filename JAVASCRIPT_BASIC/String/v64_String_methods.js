console.log(`-- String Methods --`);

// charAt() method
let str = `AkaSh`;
console.log('CharAt :', str.charAt(3));

// ========================================

//charCodeAt()
// Return unicode
console.log('charCodeAt:', str.charCodeAt(3));

// 0-Based Index: The method starts counting characters from 0.
let str1 = "ABC";
console.log(`A: ${str1.charCodeAt(0)}`); // Output: A: 65 ('A')
console.log(`B: ${str1.charCodeAt(1)}`); // Output: B: 66 ('B')
console.log(`C: ${str1.charCodeAt(2)}`); // Output: C: 67 ('C')

// ========================================

// toUpperCase() method : 
// convert into capital chars...
console.log('toUpperCase :', str.toUpperCase());

// ========================================

// toLowerCase() method : 
// convert into lower char..
console.log('toLowerCase :', str.toLowerCase());

// ========================================

// trim() method
// Remove the both side string space not in between
let language = `     Python v3.12      `;
console.log('Before trim :', language);
console.log('After trim :', language.trim());

// ========================================

// replace() method
// replace(old, new)
// Repalce string or specific char...
// case-sensitive
let intro = `Hello World !`;
console.log('Before replace :',intro);
console.log('After replace :',intro.replace(`World`,`Akash`));

// =======================-===================

// split() method
// Divide a string into an array of substrings based on a specified separator.
let q = 'Hello*Akash,*How*are*you*?*!';
console.log('Before split :',q);
console.log('After split :', q.split('*'));

// ===========================================

// indexOf() method
// default is -1
let str2 = 'Hey Hello Akash !';
console.log(str2);
console.log( str2.indexOf('Hey')); // 0
console.log( str2.indexOf('A'));
console.log( str2.indexOf('h', 5)); // search start from 5 position but index position remain same


// ===========================================

// search() method
let search_str = 'Hey Hello Akash !';
console.log(search_str);
console.log(search_str.search('Hey')); // 0
console.log(search_str.search('A'));


// ===========================================

// slice() method
let slice_str = 'Hey Hello Akash !';
console.log(slice_str);
console.log(slice_str.slice(4, 15)); // 
console.log(slice_str.slice(-7, -2)); // 
// console.log(slice_str.search('A'));

// ===========================================

// substring() method
// not accepts negative index
// string end exclued
let sub_str = 'Hey Hello Akash !';
console.log(sub_str);
console.log(`substring : ${sub_str.substring(4, 15)}`); // 




// charAt()
// charCodeAt()
// trim()
// toUpperCase()
// toLowerCase()
// replace()
// split()
// indexOf()
// search()
// slice()
// substring()
