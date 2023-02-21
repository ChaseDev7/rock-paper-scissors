player = "Player";
computer = "Computer";
playerScore = 0;
computerScore = 0;
gameRound = 1;

const choicesArray = ["rock", "paper", "scissors"];

function getComputerChoice(choice) {
    const choicePick = Math.floor(Math.random() * choice.length);
    const compChoice = choice[choicePick];
    return compChoice;
}

function playerSelection() {
    const playerOptions = prompt("Round : " + gameRound + " Choose: rock, paper, scissors");
    const playerChoice = playerOptions.toLowerCase();
    console.log(`${player} chose ${playerChoice}.`);
    return playerChoice;
}

function computerSelection() {
    const computerChoice = getComputerChoice(choicesArray);
    console.log(`${computer} chose ${computerChoice}.`);
    return computerChoice;
}

function playRound() {
    const playerOption = playerSelection();
    const computerOption = computerSelection();

    if (playerOption == computerOption) {
        console.log("Result: It's a tie!");
        result = "Nobody";
        return result;
    } else if ((playerOption == "rock") && (computerOption == "scissors")) {
        console.log(`Result: ${playerOption} breaks ${computerOption}.`);
        let result = player;
        playerScore++;
        return result;
    } else if ((playerOption == "rock") && (computerOption == "paper")) {
        console.log(`Result: ${computerOption} covers ${playerOption}.`);
        let result = computer;
        computerScore++;
        return result;
    } else if ((playerOption == "scissors") && (computerOption == "paper")) {
        console.log(`Result: ${playerOption} cut ${computerOption}.`);
        let result = player;
        playerScore++;
        return result;
    } else if ((playerOption == "scissors") && (computerOption == "rock")) {
        console.log(`Result: ${computerOption} breaks ${playerOption}.`);
        let result = computer;
        computerScore++;
        return result;
    } else if ((playerOption == "paper") && (computerOption == "scissors")) {
        console.log(`Result: ${computerOption} cut ${playerOption}.`);
        let result = computer;
        computerScore++;
        return result;
    } else if ((playerOption == "paper") && (computerOption == "rock")) {
        console.log(`Result: ${playerOption} covers ${computerOption}.`);
        let result = player;
        playerScore++;
        return result;
    } else {
        console.log(`${playerOption} doesn't match any of the options.`);
        result = "Nobody";
        return result;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(`ROUND: ${gameRound}`);
        console.log(`${playRound()} wins round ${gameRound}!`);
        console.log(`Player's score: ${playerScore}. Computer's score: ${computerScore}.`);
        gameRound++;
    }
    if (playerScore > computerScore) {
        console.log(`${player} won ${playerScore} round(s) and WINS the game!`);
    } else if (computerScore > playerScore) {
        console.log(`${computer} won ${computerScore} round(s) and WINS the game!`);
    } else if (computerScore = playerScore) {
        console.log("The game ends in a draw!");
    }
}

game();