// const person = new Object();
// const person = {};

// let person = {
//     name: 'John',
//     "age w": 30,
//     role: "programmer",
//     company: "It Solution"
// }
// person.lastName = "Doe";

// console.log(person["age w"])
// console.log(person.name)
// console.log(person)

// for (const key in person) {
//     const element = person[key];
//     console.log(key, element);
// }

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal;
// console.log(rabbit.eats)






// class Animal {
//     constructor(name) {
//         this.name = name;
//         console.log("Object is created")
//     }
//     eats(){
//         console.log("Animal eats")
//     }
//     jumps(){
//         console.log("Animal jumps")
//     }
// }


// const animal1 = new Animal("Bunny");
// console.log(animal1.name)

// l instanceof Animal;











class Animal {
    constructor(name) {
        this.name = name;
        console.log("Object is created")
    }
    eats(){
        console.log("Animal eats")
    }
    jumps(){
        console.log("Animal jumps")
    }
}

class lion extends Animal {
    constructor(name) {
        super(name)
        console.log("Object is created and it is a lion")
    }
    eats(){
        // super.eats()
        console.log("Animal eats and roar") //method overrading
    }
}
const lion1 = new lion("sher");
console.log(lion1.name)
lion1.eats();




// const obj1 = {
//     name: "Mufaza"
// }
// let obj2 = obj1;
// obj2 = {
//     name: "Simba"
// }
// console.log(obj1)





// const obj1 = {
//     name: "Mufaza"
// }
// let obj2 = obj1;
// obj2.name = "Simba"
// console.log(obj1)

