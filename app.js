const choicesArray = ["rock", "paper", "scissors"];

function getComputerChoice(choice) {
    const choicePick = Math.floor(Math.random() * choice.length);
    const compChoice = choice[choicePick];
    console.log(`Computer chose ${compChoice}.`);
    return;
}

function playerSelection() {
    const playerOptions = prompt("Choose: rock, paper, scissors");
    const playerChoice = playerOptions.toLowerCase();
    return playerChoice;
}

function computerSelection() {
    
}

function playRound() {
    console.log(`You chose ${playerSelection()}.`);
    getComputerChoice(choicesArray);
}

playRound();