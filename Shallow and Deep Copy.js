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


// In JavaScript, the spread operator creates a shallow copy of an object, not a deep copy. Primitive values like strings, numbers, and booleans are copied by value, so changing shallowCopy.name does not affect original.name. However, nested objects are copied by reference. In this example, both original.details and shallowCopy.details point to the same object in memory. Therefore, when I change shallowCopy.details.age, the change is also reflected in the original object. To avoid this problem, we need to create a deep copy of nested objects using another spread operator or methods like structuredClone().



// Original object with nested object
// const original = {
//   name: "Alice",
//   details: { age: 25, city: "New York" }
// };

// // Deep copy using JSON.parse(JSON.stringify())
// const deepCopy = JSON.parse(JSON.stringify(original));

// // Modify top-level property
// deepCopy.name = "Bob";

// // Modify nested object
// deepCopy.details.age = 30;

// console.log(original);
// // Output: { name: "Alice", details: { age: 25, city: "New York" } }
// console.log(deepCopy);
// // Output: { name: "Bob", details: { age: 30, city: "New York" } }





// JSON.stringify() and JSON.parse() are used to convert data between JavaScript objects and JSON strings.
// JSON.parse() converts a JSON string back into a JavaScript object.