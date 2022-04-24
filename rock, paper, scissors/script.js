const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const choiceBtn = document.querySelectorAll('.choiceBtn');

let player;
let computer;
let result;

choiceBtn.forEach(button => button.addEventListener("click", () => {
    // console.log("it works hoooray!!!!!!");

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `computer: ${computer}`;
    resultText.textContent = checkWinner();
}))

function computerTurn() {
    const randChoice = Math.floor(Math.random() * 3) + 1;
    // console.log(randChoice);

    switch(randChoice) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

function checkWinner() {
    if(player == computer) {
        return "Draw!";
    }
    else if(computer == "ROCK") {
        return (player == "PAPER")? "You win 🎉": "You lose 😑✌️";
    }
    else if(computer == "PAPER") {
        return (player == "SCISSORS")? "You win 🎉": "You lose 😑✌️";
    }
    else if(computer == "SCISSORS") {
        return (player == "ROCK")? "You win 🎉": "You lose 😑✌️";
    }
}