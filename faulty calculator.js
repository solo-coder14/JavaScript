let random = Math.random();
console.log(random+"\n")
let a = prompt("Enter first number");
let c = prompt("Enter operation");
let b = prompt("Enter second number");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if(random > 0.8){
    console.log(`The result is ${a} ${c} ${b}`);
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    console.log(`The result is ${eval(`${a} ${c} ${b}`)}`)
} else {
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    console.log(`The result is ${eval(`${a} ${c} ${b}`)}`)
}