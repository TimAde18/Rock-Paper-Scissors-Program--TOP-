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

//console.log(getComputerChoice());

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

//choiceComparison test
/*
const playerSelection = "Paper";
const computerSelection = getComputerChoice();
console.log(choiceComparison(playerSelection, computerSelection));
*/