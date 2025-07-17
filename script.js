let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const restartBtn = document.getElementById("restartBtn");

submitBtn.addEventListener("click", () => {
  const userGuess = Number(guessInput.value);
  attempts++;

  if (userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a number between 1 and 100.";
  } else if (userGuess < randomNumber) {
    message.textContent = "Too low! Try a higher number.";
  } else if (userGuess > randomNumber) {
    message.textContent = "Too high! Try a lower number.";
  } else {
    message.textContent = `🎉 Congratulations! You guessed it in ${attempts} attempts.`;
    guessInput.disabled = true;
    submitBtn.disabled = true;
    restartBtn.style.display = "inline-block";
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
  guessInput.value = "";
});

restartBtn.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  message.textContent = "";
  guessInput.disabled = false;
  submitBtn.disabled = false;
  guessInput.value = "";
  restartBtn.style.display = "none";
  attemptsDisplay.textContent = "Attempts: 0";
});
