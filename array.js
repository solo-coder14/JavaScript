// let arr = []
let arr = [1, 9, 2, 3, 5, 6];
// arr[0] = 3213;
// console.log(arr)
// console.log(arr[0])
// console.log(arr.at(1))
// console.log(arr.length)
// console.log(arr.toString())
// console.log(arr.join(" and "))

//Delete the Last elment of an array
// arr.pop();
// arr.shift();
// arr.unshift("new")
// arr.push("asadjk")
// arr.reverse()
// arr.sort((a, b)=> a - b)           //For ascending and for descending b - a
// console.log(arr)



// Insert at a specific index
// let furits = ['apple', 'orange', "mango"];
// furits.splice(1, 0, "grape"); // Insert "grape" at index 1
// console.log(furits); // [ 'apple', 'grape', 'orange', 'mango' ]

// Remove at a specific index
// arr.splice(2, 2); // Remove 2 and 3 element at index 2
// console.log(arr); // [ 1, 9, 5, 6 ]

// Remove by value
// If you need to remove an element by value but only the first instance of it, you can combine indexOf() and splice():

// const items = ['a', 'b', 'c', 'b'];
// const index = items.indexOf('b');

// if (index > -1) {
//   items.splice(index, 1);
// }
// Result: ['a', 'c', 'b']



// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// arr.forEach((value, idex, arr)=>{
//     console.log(value, idex, arr)
// })


// const str = "hello";
// const arr1 = Array.from(str);
// console.log(arr1); // Output: ['h', 'e', 'l', 'l', 'o']

// Html Element Array
// let arrbox = document.body.children[0].children;
// Array.from(arrbox).forEach((e) => {})


// let cpu = ["sad", "fsdf", "rt"][0]
// console.log(cpu);

// Create an array of a specific length and fill it with 0
// const length = 5;
// const array = new Array(length).fill(0);
// console.log(array); // Output: [0, 0, 0, 0, 0]

// const newArr = new Array(5).fill(0).map((_,i)=>{
//     return{
//       index: i,
//       isMagical : i === 3
//     }
//   })

//   console.log(newArr)


//Array Method
// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr)

// let arr = [1, 9, 2, 3, 5, 6];
// let value = arr.slice(1)           //[ 9, 2, 3, 5, 6 ]
// let value = arr.slice(1, 3);       //[ 9, 2 ]
// console.log(value)


// console.log(arr.copyWithin(2, 0, 2))    //[ 1, 9, 1, 9, 5, 6 ]
