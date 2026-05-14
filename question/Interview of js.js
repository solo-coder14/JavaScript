// // Question 1
// function func1() {
//     return 2
// }
// function func2() {
//     return 4
// }

// let a = (func1(), func2());
// console.log(a) //4
// The comma operator evaluates multiple expressions from left to right, but returns only the value of the last expression.




// Question 2
// const arr = ["one", 'two', "three"];
// const str = "hello";

// const res1 = arr.includes("on")
// const res2 = arr.includes("ontwo")
// const res3 = str.includes("ll")

// console.log(res1, res2, res3)




// Ques 3
// let val = "hello";
// console.log(true == val)

// Ans
// This happens because == does type coercion (automatic type conversion).
// When comparing a boolean with another type using ==:

// true  -> 1
// false -> 0

// So JavaScript converts this to:

// 1 == "hello"

// Now JavaScript compares a number with a string.

// It tries to convert the string into a number:

// Number("hello")

// Result:

// NaN

// So now comparison becomes:

// 1 == NaN

// And anything compared with NaN is false.

// So final result:

// false
// Full conversion chain
// true == "hello"
// ↓
// 1 == "hello"
// ↓
// 1 == NaN
// ↓
// false



// Ques 4
// let a = 10
// let b = new Number(10)

// console.log(a === b) //false



// function carryfunction(a){
//     return function(b){
//         const multi = a * b
//         return function(c){
//             return res = multi * c
//         }
//     }
// }

// console.log(carryfunction(2)(3)(2))

// const str1 = "hello"
// const str2 = "world12323"

// let max;
// if(str1.length > str2.length){
//     max = str1.length
// }else{
//     max = str2.length
// }

// // console.log(max)

// function merge(){
//     let res = "";
//     for(let i=0; i<max; i++){
//         if (i<str1.length){
//         res+= str1[i];
//         }
//         if (i<str2.length){
//         res+= str2[i];
//         }
        
//     }
//     console.log(res)
// }
// merge()


// let a = 10;

// function test() {
//   console.log(a);
//   let a = 20;
// }

// test();


// for (var i = 0; i < 4; i++) {
//     setTimeout(() => console.log(i), 1);
// }

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
// }