let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let numGen = Math.floor(Math.random() * 3) + 1;
    if (numGen == 1) {
        return "rock";
    }
    else if (numGen == 2) {
        return "paper";
    }
    else if (numGen == 3) {
        return "scissors";
    }
}

function getHumanChoice() {
    let humChoice = prompt("Rock, Paper, or Scissors?");
    humChoice = humChoice.toLowerCase();
    return humChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose! Paper beats rock!");
            computerScore++;
        }
        else if (computerChoice == "scissors") {
            console.log("You win! Rock beats scissors!");
            humanScore++;
        }
        else if (computerChoice == "rock"){
            console.log("Tie! You both chose rock!");
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            console.log("You lose! Scissors beats paper!");
            computerScore++;
        }
        else if (computerChoice == "rock") {
            console.log("You win! Paper beats rock!");
            humanScore++;
        }
        else if (computerChoice == "paper") {
            console.log("Tie! You both chose paper!");
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("You lose! Rock beats scissors!");
            computerScore++;
        }
        else if (computerChoice == "paper") {
            console.log("You win! Scissors beats paper!");
            humanScore++;
        }
        else if (computerChoice == "scissors") {
            console.log("Tie! You both chose scissors!");
        }
    }
    console.log("Score:");
    console.log(`Computer: ${computerScore}`);
    console.log(`Player: ${humanScore}`);
}

function playGame() {
    for (let i = 0; i <= 5; i++) {
        console.log(`Round ${i}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("Game Over!")
    if (computerScore > humanScore) {
        console.log("Computer wins!");
    }
    else if (humanScore > computerScore) {
        console.log("You win!");
    }
    else {
        console.log("Tie! Nobody wins!");
    }
}

playGame();