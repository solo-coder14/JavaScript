// const user = {
//   name: "Woafi",
//   greet() {
//     console.log(this.name);
//   }
// };

// user.greet(); // Woafi



const person = {
  name: "Woafi",
  greet: () => {
    console.log(this.name);
  }
};

person.greet(); // undefined


function Car(model) {
  this.model = model;
}

const c1 = new Car("Tesla");
console.log(c1.model); // Tesla
