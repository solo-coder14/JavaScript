class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  startEngine() {
    console.log(`${this.brand} engine started.`);
  }
}

class Car extends Vehicle {
  constructor(brand, color) {
    // Call parent class constructor
    super(brand);
    this.color = color;
  }

  showDetails() {
    console.log(`This is a ${this.color} ${this.brand}.`);
  }
}

const car1 = new Car("Toyota", "Red");
car1.startEngine();  // Output: Toyota engine started.
car1.showDetails();  // Output: This is a Red Toyota.



class Animal {
  speak() {
    console.log("Animal makes a sound.");
  }
}

class Dog extends Animal {
  speak() {
    super.speak(); // Call parent method
    console.log("Dog barks.");
  }
}

const dog = new Dog();
dog.speak();
// Output:
// Animal makes a sound.
// Dog barks.

