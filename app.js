const player = "PLAYER";
const computer = "COMPUTER";
let playerScore = 0;
let computerScore = 0;
let gameRound = 0;
let roundNumber = 1;

const choicesArray = ["rock", "paper", "scissors"];

function getComputerChoice(choice) {
    const choicePick = Math.floor(Math.random() * choice.length);
    const compChoice = choice[choicePick];
    return compChoice;
}

function playRound(playerSelection) {
    gameRound++;
    showResults.textContent = `Round ${roundNumber}.`;
    const playerPick = document.createElement("div");
    playerPick.textContent = `${player} chose ${playerSelection}.`
    showResults.appendChild(playerPick);
    const computerOption = document.createElement("div");
    const computerChoiceUpdate = getComputerChoice(choicesArray);
    computerOption.textContent = `${computer} chose ${computerChoiceUpdate}.`;
    showResults.appendChild(computerOption);
    whoWon.textContent = "";

    if (playerSelection == computerChoiceUpdate) {
        whoWon.append("RESULT: It's a tie!");
    } else if ((playerSelection == "rock") && (computerChoiceUpdate == "scissors")) {
        whoWon.append(`RESULT: ${playerSelection} breaks ${computerChoiceUpdate}.`);
        playerScore++;
    } else if ((playerSelection == "rock") && (computerChoiceUpdate == "paper")) {
        whoWon.append(`RESULT: ${computerChoiceUpdate} covers ${playerSelection}.`);
        computerScore++;
    } else if ((playerSelection == "scissors") && (computerChoiceUpdate == "paper")) {
        whoWon.append(`RESULT: ${playerSelection} cut ${computerChoiceUpdate}.`);
        playerScore++;
    } else if ((playerSelection == "scissors") && (computerChoiceUpdate == "rock")) {
        whoWon.append(`RESULT: ${computerChoiceUpdate} breaks ${playerSelection}.`);
        computerScore++;
    } else if ((playerSelection == "paper") && (computerChoiceUpdate == "scissors")) {
        whoWon.append(`RESULT: ${computerChoiceUpdate} cut ${playerSelection}.`);
        computerScore++;
    } else if ((playerSelection == "paper") && (computerChoiceUpdate == "rock")) {
        whoWon.append(`RESULT: ${playerSelection} covers ${computerChoiceUpdate}.`);
        playerScore++;
    }
    roundNumber++;
    const scoreCount = document.createElement("div");
    scoreCount.textContent = "SCORES:"
    whoWon.append(scoreCount);
    const playerScoreUpdate = document.createElement("div");
    playerScoreUpdate.textContent = `PLAYER  ${playerScore}`;
    whoWon.append(playerScoreUpdate);
    const computerScoreUpdate = document.createElement("div");
    computerScoreUpdate.textContent = `COMPUTER  ${computerScore}`;
    whoWon.append(computerScoreUpdate);
    checkWin();
}

const gameContainer = document.querySelector(".container");
const showResults = document.querySelector(".results");
const buttons = document.querySelectorAll("button");
const whoWon = document.querySelector(".game-win");
const textInfo = document.querySelector(".text-info");
const gameOptionsContainer = document.querySelector(".game-options");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        checkWin();
        playRound(button.innerText.toLowerCase());
    });
});

function checkWin() {
    if (playerScore == 5) {
        showResults.textContent = `Game ended at ${gameRound} rounds.`;
        whoWon.textContent = "";
        whoWon.textContent = `GAME OVER: ${player} won 5 rounds! Congrats!`;
        gameContainer.append(whoWon);
        whoWon.style.backgroundColor = "rgb(6, 173, 25)";
        buttons.removeEventListener();
    
        
    } else if (computerScore == 5)  {
        showResults.textContent = `Game ended at ${gameRound} rounds.`;
        whoWon.textContent = "";
        whoWon.textContent = `GAME OVER: ${computer} won 5 rounds! Try again!`;
        gameContainer.append(whoWon);
        whoWon.style.backgroundColor = "rgb(128, 9, 9)";
        buttons.removeEventListener();
    }
};

const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", resetGame);

function resetGame() {
    showResults.textContent = "";
    whoWon.textContent = "";
    gameRound = 0;
    roundNumber = 1;
    playerScore = 0;
    computerScore = 0;
    whoWon.style.backgroundColor = "rgb(43, 57, 104)";
    textInfo.textContent = "First to score 5 wins the game. Click a button below to start game:";
}

resetButton.removeEventListener;