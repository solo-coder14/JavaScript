// Creating a Symbol
const mySymbol1 = Symbol();
const mySymbol2 = Symbol("description"); // Optional description for debugging

console.log(typeof mySymbol1); // "symbol"
console.log(mySymbol1 === mySymbol2); // false (each Symbol is unique)

// Using Symbol as an object property key
const user = {
  name: "Alice",
  age: 25,
  [mySymbol1]: "hiddenValue" // Computed property name
};

console.log(user[mySymbol1]); // "hiddenValue"

// Symbols are not enumerable in for...in loops
for (let key in user) {
  console.log(key); // "name", "age" (Symbol property is skipped)
}

// Accessing Symbol properties
console.log(Object.getOwnPropertySymbols(user)); // [ Symbol() ]