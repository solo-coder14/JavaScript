//Protected
class Animal {
  constructor(name) {
    this._name = name; // protected-like
  }

  _getName() { // protected-like
    return this._name;
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this._getName()} barks 🐶`);
  }
}

const dog = new Dog("Buddy");
dog.speak();       // Buddy barks 🐶
console.log(dog._name); // ❌ Still accessible (but convention says don't touch it)
