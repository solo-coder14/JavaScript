let num = 23021020;
let count = 0;
let arr = []

while(num > 0){
    res = num % 10
    arr.unshift(res)
    num = Math.floor(num / 10);
    
    console.log(num)
    count++
}

// console.log("Number of digits:", count)
console.log(arr.join(""))