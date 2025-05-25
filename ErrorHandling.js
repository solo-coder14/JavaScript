let a = prompt("Enter first number:");
let b = prompt("Enter second number:");
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allow")
}
let sum = parseInt(a) + parseInt(b);

function main(){
let x = 1;
try {
    console.log(sum * x)
    return true
} catch (error) {
    console.log("error")
    return false
}
finally {
    console.log("This will run regardless of the result")
}
}

let c = main()