class num {
    value = 0;
    
    increase() {
        this.value = this.value + 1;
        return this.value
    }
}

const obj1 = new num();
const obj2 = new num();
obj1.increase()
obj1.increase()
console.log(obj1.increase()) //3

console.log(obj2.increase())  //1 Not Shared across instance

