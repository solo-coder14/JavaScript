// for (var i = 0; i < 4; i++) {
//     setTimeout(() => console.log(i), 1);
// }

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
// }

// let timeout = Math.floor(Math.random() * 5000) + 1000;
// let timeout = (1 + 6 * Math.random()) * 1000;
// let cIn = Math.floor(Math.random() * 3);
let r = Math.floor(Math.random() * 256);
console.log(r)
// console.log(cIn);

// let cpu = ["sad", "fsdf","rt"][0]
// console.log(cpu);
console.log(sum(2, 3));
// const sum = (a, b) => {
//     return a + b;
// }
//let, const won't work because of hoisting
function sum(a, b){
    return a + b;
}
