const person = {
  name: 'John',
  age: 30,
  email: 'john@example.com'
};

person.address = '123 Main St';
person.phone = '555-1234';

console.log(person); // Output: { name: 'John', age: 30, email: 'john@example.com', address: '123 Main St', phone: '555-1234' }


const person = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
  };
  
  const keys = Object.keys(person);
  
  console.log(keys); // Output: ['name', 'age', 'email']
  

  const person = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
  };
  
  const propName = 'age';
  person[propName] = 35;
  console.log(person[propName]); // Output: 35
  