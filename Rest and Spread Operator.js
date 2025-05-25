// Copying an Array
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1]; // Creates a new copy

// console.log(arr2); // [1, 2, 3]
// arr2.push(4);
// console.log(arr2);

// console.log(arr1); // [1, 2, 3] (unchanged)

// //Merging Array
// const nums1 = [1, 2];
// const nums2 = [3, 4];
// const merged = [...nums1, ...nums2];

// console.log(merged); // [1, 2, 3, 4]


// //Spreading in Function Arguments
// function sum(a, b, c) {
//     return a + b + c;
// }

// const numbers = [1, 2, 3];
// console.log(sum(...numbers)); // 6


// //   Spreading Objects (ES2018+)
const obj1 = { a: 1, b: 2, arr:[{t: 5, y: 3}]}; 
// const obj2 = { ...obj1, arr:[ {o:3, ...obj1.arr[0]}  ] };
const obj2 = { ...obj1, arr:[ ...obj1.arr, {r:5, k:7}  ] };

console.log(obj2); // { a: 1, b: 2, c: 3 } 


// Rest Operator
// Collecting Function Arguments
// function logNames(first, ...rest) {
//     console.log(`First: ${first}`);
//     console.log(`Rest: ${rest}`);
// }

// logNames("Alice", "Bob", "Charlie");
// Output:
// First: Alice
// Rest: ["Bob", "Charlie"]


//   Destructuring Arrays
// const numbers = [1, 2, 3, 4];
// const [first, ...rest] = numbers;

// console.log(first); // 1
// console.log(rest); // [2, 3, 4]

//Destructuring Objects
// const user = { name: "Alice", age: 25, country: "USA" };
// const { name, ...rest } = user;

// console.log(name); // "Alice"
// console.log(rest); // { age: 25, country: "USA" }


//Shallow Copy
// const original = {
//   name: "John",
//   address: {
//     city: "New York"
//   }
// };

// const shallowCopy = { ...original };
// shallowCopy.address.city = "Los Angeles";

// console.log(original.address.city); // "Los Angeles"


//deep copy
// const deepCopy = JSON.parse(JSON.stringify(obj));