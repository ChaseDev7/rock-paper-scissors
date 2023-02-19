const gameArray = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const compChoice = gameArray[Math.floor(Math.random() * gameArray.length)];
    console.log(`The computer chose ${compChoice}. You lose!`);
}

function playRound(playerSelection, computerSelection) {
    console.log
}

playRound("rock", getComputerChoice);