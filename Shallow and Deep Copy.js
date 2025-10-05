// Original object with nested object
// const original = {
//   name: "Alice",
//   details: { age: 25, city: "New York" }
// };

// // Shallow copy using spread operator
// const shallowCopy = { ...original };

// // Modify top-level property
// shallowCopy.name = "Bob";

// // Modify nested object
// shallowCopy.details.age = 30;

// console.log(original);
// // Output: { name: "Alice", details: { age: 30, city: "New York" } }
// console.log(shallowCopy);
// // Output: { name: "Bob", details: { age: 30, city: "New York" } }




// Original object with nested object
const original = {
  name: "Alice",
  details: { age: 25, city: "New York" }
};

// Deep copy using JSON.parse(JSON.stringify())
const deepCopy = JSON.parse(JSON.stringify(original));

// Modify top-level property
deepCopy.name = "Bob";

// Modify nested object
deepCopy.details.age = 30;

console.log(original);
// Output: { name: "Alice", details: { age: 25, city: "New York" } }
console.log(deepCopy);
// Output: { name: "Bob", details: { age: 30, city: "New York" } }