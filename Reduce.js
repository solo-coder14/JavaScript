// const people = [
//     { name: 'Alice', age: 21 },
//     { name: 'Bob', age: 21 },
//     { name: 'Charlie', age: 25 }
//   ];

//   const grouped = people.reduce((acc, person) => {
//     const age = person.age;
//     if (!acc[age]) acc[age] = [];
//     acc[age].push(person);
//     return acc;
//   }, {});

//   console.log(grouped);


const arr = [1, 2, 3, 4, 5];
const reducer = (acc, currIndex) => {
  return acc = acc + currIndex;
}

let result = arr.reduce(reducer, 5);
console.log(result);