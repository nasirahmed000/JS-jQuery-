// .includes 

let stro = 'Welcome to the world of programming';

console.log(stro.includes('Welcome'));   // Output: true
console.log(stro.includes('world'));     // Output: true
console.log(stro.includes('Programming'));// Output: false
console.log(stro.includes('of'));        // Output: true

// array example 
let arr = ['apple', 'banana', 'orange', 'grape'];

console.log(arr.includes('apple'));    // Output: true
console.log(arr.includes('mango'));    // Output: false
console.log(arr.includes('grape', 2)); // Output: false

// index of
let string = 'Hello, world!';

console.log(string.indexOf('o'));           // Output: 4
console.log(string.indexOf('world'));       // Output: 7
console.log(string.indexOf('JavaScript'));  // Output: -1
console.log(string.indexOf('l', 3));        // Output: 3

// start with 
let stri = 'Hello, world!';
console.log(stri.startsWith('Hello'));   // Output: true
console.log(stri.startsWith('world'));   // Output: false
console.log(stri.startsWith('Hello', 1)); // Output: false

// ends with 
let strf = 'Hello, world!';
console.log(strf.endsWith('world!'));     // Output: true
console.log(strf.endsWith('Hello'));      // Output: false
console.log(strf.endsWith('world!', 13)); // Output: true
