const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// output: "fox"

const chars = str.split('');
console.log(chars[8]);
//  output: "k"

const strCopy = str.split();
console.log(strCopy);
// output: Array ["The quick brown fox jumps over the lazy dog."]


const stri = 'The quick brown fox jumps over the lazy dog.';

console.log(stri.slice(31));
// output: "the lazy dog."

console.log(stri.slice(4, 19));
// output: "quick brown fox"

console.log(stri.slice(-4));
//  output: "dog."

console.log(stri.slice(-9, -5));
//  output: "lazy"

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
//  output: "Hello World"

console.log(str2.concat(', ', str1));
// output: "World, Hello"



const stry = 'Mozilla';

console.log(stry.substring(1, 3));
// output: "oz"

console.log(stry.substring(2));
//  output: "zilla"
const greeting = '   Hello world!   ';

console.log(greeting);
//  output: "   Hello world!   ";

console.log(greeting.trim());
// output: "Hello world!";
