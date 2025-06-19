function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable

  return {
    deposit: function (amount) {
      if (amount <= 0) {
        console.log("Deposit amount must be positive.");
        return balance;
      }
      balance += amount;
      console.log("Deposited:", amount);
      return balance;
    },

    withdraw: function (amount) {
      if (amount <= 0) {
        console.log("Withdrawal amount must be positive.");
        return balance;
      }
      if (amount > balance) {
        console.log("Insufficient funds.");
        return balance;
      }
      balance -= amount;
      console.log("Withdrew:", amount);
      return balance;
    },

    getBalance: function () {
      console.log("Current Balance:", balance);
      return balance;
    }
  };
}

// ✅ Create the account
const account = createBankAccount(100);

// ✅ Function calls that print output
console.log("Balance after deposit:", account.deposit(50)); 
console.log("Balance after withdraw:", account.withdraw(30)); 
console.log("Final Balance:", account.getBalance());           
