const prompt = require("prompt-sync")();

let arr = [3, 2, 4, 5, 1, 1, 5, 3]
let n = arr.length;
let k = 4;
let prefix = new Array(n).fill(0)
for (let i = 1; i <= arr.length; i++) {
    prefix[i] = prefix[i-1] + arr[i-1]
}

console.log(prefix)

for (let i = 0; i < k; i++) {
    let a = prompt("num");
    let b = prompt("num");
    let res = prefix[b] - prefix[a-1];
    console.log(res)
}

// https://cses.fi/problemset/task/1646