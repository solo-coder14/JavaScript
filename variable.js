function example() {
    const x = 10;
    // x = 20; // Error: Assignment to constant variable
    if (true) {
        const x = 20; // Different variable, block-scoped
        console.log(x); // 20
    }
    console.log(x); // 10 (value unchanged due to block scope)
}

const obj = {
    name: "Alice",
};
obj.name = "Bob";
// obj = { name: "Charlie" }; // Error: Reassignment not allowed
example()
console.log(obj)
