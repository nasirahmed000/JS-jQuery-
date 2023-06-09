const myObject = { 
  a: 1,
   b: 2,
    c: 3
   };

for (const property in myObject) {
  console.log(`${property}: ${myObject[property]}`);
}
