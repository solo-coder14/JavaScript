class CoffeeMachine {
  // private field
  #waterAmount = 0;

  // abstraction: user only sees "makeCoffee"
  makeCoffee() {
    this.#boilWater();
    console.log("☕ Coffee is ready!");
  }

  // internal details (hidden from outside)
  #boilWater() {
    console.log("Boiling water...");
  }

  addWater(amount) {
    this.#waterAmount += amount;
    console.log(`Added ${amount}ml water`);
  }
}

// Usage
const machine = new CoffeeMachine();
machine.addWater(200);
machine.makeCoffee();
// Output:
// Added 200ml water
// Boiling water...
// ☕ Coffee is ready!

// ❌ Can't access private method directly
// machine.#boilWater(); // Error
