// Factory function to create a secure account object
function createAccount(pin, amount = 0) {
  return {
    // Method to check the account balance
    checkBalance(inputPin) {
      // Verify the provided PIN
      if (inputPin !== pin) return "Invalid PIN";
      // Return the current balance if the PIN is correct
      return `$${amount}`;
    },

    // Method to deposit money into the account
    deposit(inputPin, newAmount) {
      // Verify the provided PIN
      if (inputPin !== pin) return "Invalid PIN";
      // Add the deposit amount to the current balance
      amount += newAmount;
      // Return a success message with the updated balance
      return `Successfully deposited $${newAmount}. Current balance: $${amount}`;
    },

    // Method to withdraw money from the account
    withdraw(inputPin, withdrawalAmount) {
      // Verify the provided PIN
      if (inputPin !== pin) return "Invalid PIN";
      // Check if the withdrawal amount exceeds the current balance
      if (withdrawalAmount > amount)
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      // Deduct the withdrawal amount from the current balance
      amount -= withdrawalAmount;
      // Return a success message with the updated balance
      return `Successfully withdrew $${withdrawalAmount}. Current balance: $${amount}`;
    },

    // Method to change the account PIN
    changePin(oldPin, newPin) {
      // Verify the old PIN
      if (oldPin !== pin) return "Invalid PIN";
      // Update the PIN to the new value
      pin = newPin;
      // Return a success message
      return "PIN successfully changed!";
    },
  };
}

// Export the createAccount function for use in other modules
module.exports = { createAccount };
