// Function to create a guessing game
function guessingGame() {
  // Generate a random number between 0 and 99 as the answer
  const ANSWER = Math.floor(Math.random() * 100);
  // Flag to track if the game is over
  let isOver = false;
  // Counter to track the number of guesses made
  let numGuesses = 0;

  // Return a function to handle guesses
  return function guess(num) {
    // If the game is already over, notify the user
    if (isOver) return "The game is over, you already won!";

    // Increment the number of guesses
    numGuesses++;

    // Check if the guessed number matches the answer
    if (num === ANSWER) {
      // Mark the game as over
      isOver = true;
      // Determine the correct singular/plural form for "guess"
      const guess = numGuesses === 1 ? "guess" : "guesses";
      // Return a success message with the number of guesses
      return `You win! You found ${num} in ${numGuesses} ${guess}.`;
    }

    // Provide feedback if the guess is too low
    if (num < ANSWER) return `${num} is too low!`;

    // Provide feedback if the guess is too high
    if (num > ANSWER) return `${num} is too high!`;
  };
}

// Export the guessingGame function for use in other modules
module.exports = { guessingGame };
