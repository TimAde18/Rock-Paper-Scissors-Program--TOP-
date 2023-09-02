//function to get computer's choice 
function getComputerChoice() {
    const randomOutcome = Math.floor((Math.random() * 3 + 1)); //the plus one is to insure we can get 1, 2, or 3
    if (randomOutcome == 1) {
        return "Rock";
    } else if (randomOutcome == 2) {
        return "Paper";
    } else {
        return "Scissors";
    };
}

console.log(getComputerChoice());