class BankAccount {
  #balance; // private field

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  // Public method to access balance safely
  getBalance() {
    return this.#balance;
  }

  // Public method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}`);
    } else {
      console.log("Deposit must be positive");
    }
  }

  // Public method to withdraw money safely
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: ${amount}`);
    } else {
      console.log("Invalid withdraw amount");
    }
  }
}

// Usage
const acc = new BankAccount("Alice", 1000);

console.log(acc.getBalance()); // 1000
acc.deposit(500);             // Deposited: 500
console.log(acc.getBalance()); // 1500
acc.withdraw(2000);           // Invalid withdraw amount

// ❌ Direct access not allowed
// console.log(acc.#balance); // Error: Private field '#balance' must be declared in an enclosing class






//Protected
class Animal {
  constructor(name) {
    this._name = name; // protected-like
  }

  _getName() { // protected-like
    return this._name;
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this._getName()} barks 🐶`);
  }
}

const dog = new Dog("Buddy");
dog.speak();       // Buddy barks 🐶
console.log(dog._name); // ❌ Still accessible (but convention says don't touch it)
