console.log("This is the output of console.log")

var x = 3;
var y = 2;
var z = "woafi";
console.log(x ** y +" "+ z)
console.log(typeof x, typeof z)

const a = 89;
console.log(a)

let q = 10;
{
    let q = 15;
    console.log(q)
}
console.log(q)

const o = {
    name: "Alice",
    true: { required: 2, isTrue: true }
};
console.log(o.true.required)


// Null 
let value = null;

// Correct ways:
value === null             // true
value == null              // true (but also true for undefined)
Object.prototype.toString.call(value)  // "[object Null]"

// Array 
let arr = [];

// Correct ways:
Array.isArray(arr)        // true (modern, recommended)
arr instanceof Array      // true (works in most cases)
Object.prototype.toString.call(arr)  // "[object Array]"

// Don't use:
typeof arr === "array"    // false - typeof never returns "array"