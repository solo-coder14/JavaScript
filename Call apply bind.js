const person1 = { name: "Woafi" };
const person2 = { name: "Alex" };

function greet(age) {
  console.log(`Hello, I am ${this.name} and I am ${age}`);
}

greet.call(person1, 21); // Hello, I am Woafi and I am 21
greet.call(person2, 25); // Hello, I am Alex and I am 25

greet.apply(person1, [21]);

const greetWoafi = greet.bind(person1, 21);
greetWoafi(); // Hello, I am Woafi and I am 21
