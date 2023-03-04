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
    
    // btnPaper.addEventListener("click", runPaperCode);
    
    // function runPaperCode() {
    //     const paperClick = document.createElement("div");
    //     const paperButtonText = btnPaper.innerText;
    //     const paperTextLower = paperButtonText.toLowerCase();
    //     paperClick.textContent = `Player chose ${paperTextLower}.`;
    //     showResults.appendChild(paperClick);
    // }
    
    // btnScissors.addEventListener("click", runScissorsCode);
    
    // function runScissorsCode() {
    //     const scissorsClick = document.createElement("div");
    //     const scissorsButtonText = btnScissors.innerText;
    //     const scissorsTextLower = scissorsButtonText.toLowerCase();
    //     scissorsClick.textContent = `Player chose ${scissorsTextLower}.`;
    //     showResults.appendChild(scissorsClick);
    // }
}

function computerSelection() {
    const computerChoice = document.createElement("div");
    const computerChoiceUpdate = getComputerChoice(choicesArray);
    computerChoice.textContent = `${computer} chose ${computerChoiceUpdate}.`;
    showResults.appendChild(computerChoice);
}

function playRound() {
    showResults.textContent = `Round ${gameRound}.`;
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

const showResults = document.querySelector(".results");

const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");
    
btnRock.addEventListener("click", runRockCode);
    
function runRockCode() {
    // Drop's button text to lower case and displays player's choice
    const rockClick = document.createElement("div");
    const btnClickText = btnRock.innerText;
    const buttonTextLower = btnClickText.toLowerCase();
    rockClick.textContent = `Player chose ${buttonTextLower}.`;
    showResults.appendChild(rockClick);
}