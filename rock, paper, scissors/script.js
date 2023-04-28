const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const choiceBtns = document.querySelectorAll('.choiceBtn');

let player;
let computer;
let result;

function computerTurn() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerChoice) {
  player = playerChoice;
  computer = computerTurn();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computer}`;
  result = checkWinner();
  resultText.textContent = result;
}

function checkWinner() {
  if (player === computer) {
    return "Draw!";
  } else if (
    (player === "ROCK" && computer === "SCISSORS") ||
    (player === "PAPER" && computer === "ROCK") ||
    (player === "SCISSORS" && computer === "PAPER")
  ) {
    return "You win 🎉";
  } else {
    return "You lose 😑✌️";
  }
}

choiceBtns.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.textContent);
  });
});
