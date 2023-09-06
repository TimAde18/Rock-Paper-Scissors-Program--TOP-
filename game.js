//function to get computer's choice 
function getComputerChoice() {
    const randomOutcome = Math.floor((Math.random() * 3 + 1)); //the plus one is to insure we can get 1, 2, or 3
    if (randomOutcome == 1) {
        return "Rock";
    } else if (randomOutcome == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
};

//function that will compare the value of user and computer. this is only one round
function choiceComparison(playerSelection, computerSelection) {
    const playerValue = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerValue == "Rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock!"
    } else if (playerValue == "Paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beats Paper!"
    } else if (playerValue == "Scissors" && computerSelection == "Rock") {
        return "You Lose! Rock beats Scissors!"
    } else if (playerValue == "Paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock!"
    } else if (playerValue == "Scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats Paper!"
    } else if (playerValue == "Rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors!"
    } else if (playerValue == "Rock" && computerSelection == "Rock") {
        return "You Tied with the Computer! Try again to win!"
    } else if (playerValue == "Paper" && computerSelection == "Paper") {
        return "You Tied with the Computer! Try again to win!"
    } else if (playerValue == "Scissors" && computerSelection == "Scissors") {
        return "You Tied with the Computer! Try again to win!"
    } else {
        return "That is not a valid input please try again."
    }
};


// function that is a full 5 rounds of Rock Paper Scissors (I will make this a bit harder and make it so you can play for x amount of times)

function game(numGames) {
    let userWins = 0;
    let computerWins = 0;
    for (i=1; i<=numGames; i++) {
        let playerSelection = prompt("Choose Rock, Paper, or Scissors!");
        // optional 
        let computerSelection = getComputerChoice();
        comparisonResult = choiceComparison(playerSelection, computerSelection);

        if (comparisonResult.includes("You Win!")) {
            userWins++;
            console.log("You won! your score is now " + userWins + " keep playing to win more!");
        } else if (comparisonResult.includes("You Lose!")) {
            computerWins++;
            console.log("You lost... The computer's score is now " + computerWins + " keep playing to win more!");
        }   else if (comparisonResult.includes("You Tied")) {
            console.log("You tied with the computer! Keep playing to win more!");
        } else if (comparisonResult.includes("That is not")) {
            console.log("That is not a valid input please try again.");
        }
    };
    if (userWins > computerWins) {
        return "You beat the Computer! You are the Rock, Paper, Scissors Champ!" + "\nYour Score was " + userWins + " And the computers Score was " + computerWins + ".";
    } else if (userWins == computerWins) {
        return "You tied! Hurry commence a new battle and defeat your enemy!" + "\nYour Score was " + userWins + " And the computers Score was " + computerWins + ".";
    } else {
        return "You lost to the Computer... You are not the Rock, Paper, Scissors Champ. Your archnemesis, the computer is..." + "\nYour Score was " + userWins + " And the computers Score was " + computerWins + ".";
    }
};

//Creating buttons for player selection
const rock = document.createElement("Button");
rock.textContent = "Rock";
rock.addEventListener("click", game);
const paper = document.createElement("Button");
paper.textContent = "Paper";
paper.addEventListener("click", game);
const scissors = document.createElement("Button");
scissors.textContent = "Scissors";
scissors.addEventListener("click", game);

const score = document.createElement("div");
