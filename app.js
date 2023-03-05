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
}

const gameContainer = document.querySelector(".container");
const showResults = document.querySelector(".results");
const chooseOneOption = document.querySelector(".choose-one-option");
const gameOptions = document.querySelector(".game-options");
const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");
const buttons = document.querySelectorAll("button");
const whoWon = document.querySelector(".game-win");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        checkWin();

        function checkWin() {
            if (gameRound == 5) {
                if (playerScore == computerScore) {
                    whoWon.textContent = `GAME OVER: Nobody won! :(`;
                    gameContainer.append(whoWon);
                } else if (playerScore > computerScore) {
                    whoWon.textContent = `GAME OVER: ${player} won! Congrats!`;
                    gameContainer.append(whoWon);
                } else if (computerScore > playerScore) {
                    whoWon.textContent = `GAME OVER: ${computer} won! Try again!`;
                    gameContainer.append(whoWon);
                };
                gameContainer.removeChild(chooseOneOption);
                gameOptions.removeChild(btnRock);
                gameOptions.removeChild(btnPaper);
                gameOptions.removeChild(btnScissors);
            } else {
                playRound(button.innerText.toLowerCase());
                const scoreUpdate = document.createElement("div");
                scoreUpdate.textContent = `Player Score: ${playerScore} -- Computer Score: ${computerScore}`;
                showResults.append(scoreUpdate);
                roundNumber++;
            }
        };
    });
});