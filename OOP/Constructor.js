class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("Woafi", 21);
console.log(person1.name); // Output: Woafi


//copy constructor
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Custom copy method (acts like a copy constructor)
  copy() {
    return new Person(this.name, this.age);
  }
}

const p1 = new Person("Woafi", 21);
const p2 = p1.copy();

console.log(p2); // Person { name: 'Woafi', age: 21 }
