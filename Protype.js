// Function Constructor
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  return "Hello " + this.name;
};

const p1 = new Person("Alex");

console.log(p1.sayHello()); // Hello Alex








const animal = {
  eats: true,
  walk() {
    console.log("Animal is walking");
  }
};

const dog = Object.create(animal);
dog.barks = true;

console.log(dog.eats); // true (inherited)
dog.walk();            // Animal is walking