const person = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
  };
  console.log(person.name);
  person.age=50;
  console.log(person);

  const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2018,
    features: ['backup camera', 'Bluetooth', 'keyless entry'],
    getInfo: function() {
      return `${this.make} ${this.model} (${this.year})`;
    }
  };
  
  console.log(car.make); // Output: 'Toyota'
  console.log(car.features[1]); // Output: 'Bluetooth'
  console.log(car.getInfo()); // Output: 'Toyota Camry (2018)'
  