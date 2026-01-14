function createCounter() {
    let count = 0;
    
    return {
      increment: function() {
        count++;
        return count;
      },
      decrement: function() {
        count--;
        return count;
      },
      getCount: function() {
        return count;
      }
    };
  }
  
  const counter = createCounter();
  console.log(counter.increment()); // 1
  console.log(counter.increment()); // 2
  console.log(counter.decrement()); // 1







  
  // Bank example using closure
  function createBankAccount(initialDeposit) {
  let balance = initialDeposit; // Private variable

  return {
    deposit: function(amount) {
      if (amount > 0) {
        balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${balance}`);
      }
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrew: $${amount}. Remaining: $${balance}`);
      } else {
        console.log("Insufficient funds!");
      }
    },
    getBalance: function() {
      return balance; // Controlled access
    }
  };
}

const myAccount = createBankAccount(100);

myAccount.deposit(50);      // Deposited: $50. New balance: $150
console.log(myAccount.balance); // undefined (cannot access directly)
console.log(myAccount.getBalance()); // 150