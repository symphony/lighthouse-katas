// dependencies
let prompt = require("prompt-sync")();

const numberGuesser = function() {
  const min = 1;
  const max = 30;
  const answer = Math.floor(Math.random() * (max - min) + min);
  const guesses = [];
  let failsafe = 20;
  let attempts = 0;
  let guess = "";
  let winner = false;

  // Verbal messages for user
  const greeting = "\nWelcome to the Number Guessing game!\n\nCan you guess the random number between " + min + "-" + max + "?";
  const duplicateGuess = "You've already tried that number! Please guess another.";
  const invalidGuess = "You answered.. Now hold on a minute..\nPlease enter a whole number between " + min + "-" + max + ".";
  const inputPrompt = "Guess a number: ";
  const tooLow = "Nice try, but guess a higher one.";
  const tooHigh = "Too high! Too high!! Try lower.";

  // Begin game
  console.log(greeting);
  while (!winner) {
    getInput();

    // exit game
    let lower = guess.toLowerCase();
    if (lower == "quit" || lower == "exit" || lower == "stop") {
      return;
    }

    // win
    if (guess == answer) {
      attempts ++;
      break;
    }

    // timedout
    if (failsafe <= 0 ) {
      const tooMany = "Too many tries! The answer was " + answer + ".\nBetter luck next time.";
      console.log(tooMany);
      return;
    }

    // Guess Invalid
    if (isNaN(guess) || !Number.isInteger(+guess) || guess < min || guess > max) {
      console.log(invalidGuess);
      continue;
    }

    console.log("You answered: " + guess);

    // Guess is duplicate
    if (guesses.includes(guess)) {
      console.log(duplicateGuess);
      continue;
    }

    // Valid guesses but wrong
    guesses.push(guess)
    attempts ++;

    if (guess < answer) {
      console.log(tooLow);
    } else if (guess > answer) {
      console.log(tooHigh);
    }

  }
  // Winner!
  attempts += attempts > 1 ? " attempts" : " attempt";

  const youWin = "The answer was " + answer + "!\nWow! And it only took " + attempts + ". I'm impressed!\nThank you for playing."

  console.log(youWin);
  return;

  function getInput() {
    guess = prompt(inputPrompt);
    failsafe --;
  }
}

numberGuesser();