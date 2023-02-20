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
    } else if ((playerOption == "rock") && (computerOption == "scissors")) {
        console.log(`Result: ${playerOption} break ${computerOption}. ${player} wins this round.`);
        return playerScore++;
    } else if ((playerOption == "rock") && (computerOption == "paper")) {
        console.log(`Result: ${computerOption} covers ${playerOption}. ${computer} wins this round.`);
        return computerScore++;
    } else if ((playerOption == "scissors") && (computerOption == "paper")) {
        console.log(`Result: ${playerOption} cut ${computerOption}. ${player} wins this round.`);
        return playerScore++;
    } else if ((playerOption == "scissors") && (computerOption == "rock")) {
        console.log(`Result: ${computerOption} breaks ${playerOption}. ${computer} wins this round.`);
        return computerScore++;
    } else if ((playerOption == "paper") && (computerOption == "scissors")) {
        console.log(`Result: ${computerOption} cut ${playerOption}. ${computer} wins this round.`);
        return playerScore++;
    } else if ((playerOption == "paper") && (computerOption == "rock")) {
        console.log(`Result: ${playerOption} covers ${computerOption}. ${player} wins this round.`);
        return computerScore++;
    } else {
        console.log("another choice.....")
        return;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(`ROUND: ${gameRound}`)
        playRound();
        gameRound++;
        console.log(`Player's score: ${playerScore}. Computer's score: ${computerScore}.`);
    }
    if (playerScore > computerScore) {
        console.log(`${player} won ${playerScore} rounds and WINS the game!`);

    } else if (computerScore > playerScore) {
        console.log(`${computer} won ${computerScore} rounds and WINS the game!`);
    } else if (computerScore = playerScore) {
        console.log("It's a tie. No one wins...");
    }
}

game();