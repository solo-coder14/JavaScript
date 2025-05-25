let set = new Set();

// Adding values
set.add(1);
set.add(2);
set.add(3);
set.add(1); // Duplicate value, ignored

// console.log(set); // Set { 1, 2, 3 }

// Checking for values
// console.log(set.has(2)); // true
// console.log(set.has(4)); // false

// Deleting a value
set.delete(2);
console.log(set); // Set { 1, 3 }

// Iterating over the set
// set.forEach(value => console.log(value)); // Logs 1, then 3

// Clearing the set
// set.clear();
// console.log(set.size); // 0

// let array = [1, 2, 2, 3, 4, 4, 5];
// let uniqueArray = [...new Set(array)];

// console.log(uniqueArray); // [1, 2, 3, 4, 5]
console.log(set.size); // 2