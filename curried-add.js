// Function to create a curried addition function
function curriedAdd(total) {
  // If no initial value is provided, return 0
  if (total === undefined) return 0;

  // Return a function to handle the next number
  return function addNext(num) {
    // If no number is provided, return the current total
    if (num === undefined) return total;

    // Add the provided number to the total
    total += num;

    // Return the same function to allow further chaining
    return addNext;
  };
}

// Export the curriedAdd function for use in other modules
module.exports = { curriedAdd };
