
//Creating header for program
const h1 = document.createElement("h1");
h1.textContent = "Rock Paper Scissors Game!";
h1.id = "title";
h1.classList.add("h1");
h1.classList.add("text-center");
document.body.appendChild(h1);

//making the div container for the game 
const game = document.createElement("div");
game.id = "rpc-container";
game.classList.add("container");
document.body.appendChild(game);

//Creating div container for the number of rounds
const numberOfRounds = document.createElement("div");
numberOfRounds.id = "number-of-rounds";
numberOfRounds.classList.add("text-center");
numberOfRounds.textContent = `Number of Rounds: 0`;


//Creating div container for the score 
const score = document.createElement("div");
score.id = "score-container";
score.classList.add("d-md-flex");

//Creating Scores that will be in the score container
const userScore = document.createElement("span");
userScore.classList.add("score");
userScore.classList.add("m-auto");
userScore.textContent = "Your Score: 0";
score.appendChild(userScore);

const computerScore = document.createElement("span");
computerScore.classList.add("score");
computerScore.classList.add("m-auto");
computerScore.textContent = "Your Score: 0";
score.appendChild(computerScore);

//Create a div for the users choice and the computers 
const gameDisplay = document.createElement("div");
gameDisplay.id = "gameDisplay-div";
gameDisplay.classList.add("d-md-flex");


// User's Choice and Computer's Choice
const userChoice = document.createElement("span");
userChoice.classList.add("m-auto");
gameDisplay.appendChild(userChoice);

const computerChoice = document.createElement("span");
computerChoice.classList.add("m-auto");
gameDisplay.appendChild(computerChoice);

//Creating the div for the buttons Rock Paper Scissors
const buttonDiv = document.createElement("span");
buttonDiv.id = "button-div";
buttonDiv.classList.add("d-flex");
buttonDiv.classList.add("m-5");


//Creating buttons for player selection
const rock = document.createElement("Button");
rock.textContent = "Rock";
rock.classList.add("m-auto");
buttonDiv.appendChild(rock);

const paper = document.createElement("Button");
paper.textContent = "Paper";
paper.classList.add("m-auto");
buttonDiv.appendChild(paper);

const scissors = document.createElement("Button");
scissors.textContent = "Scissors";
scissors.classList.add("m-auto");
buttonDiv.appendChild(scissors);

//Creating the div for the number of rounds
const roundDiv = document.createElement("div");
roundDiv.id = "round-div";
roundDiv.classList.add("text-center");

game.appendChild(numberOfRounds);
game.appendChild(score);
game.appendChild(gameDisplay);
game.appendChild(buttonDiv);
game.appendChild(roundDiv);



//Creating a way for user to choose how many rounds to play against cpu
const startButton = document.createElement("Button");
startButton.textContent = "Start the Game!"
startButton.classList.add("m-auto");
startButton.addEventListener("click", () => {
    roundNumber = prompt("How Many Rounds would you like to play?");
    roundNumber = parseInt(roundNumber);
    if (!isNaN(roundNumber) && roundNumber > 0) {
        numberOfRounds.textContent = `Number of rounds is ${roundNumber}`;
        startGame(roundNumber);
    } else {
        alert("Please enter a number or, enter a number greater than 0.");
    }
});
roundDiv.appendChild(startButton);

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
//Created variables to be used
let userWins = 0;
let computerWins = 0;
let roundNumber;
let roundsLeft = 0;
let playerSelection;
let halfPoint;

//created event listeners for the buttons for player selection
rock.addEventListener("click",  () => {
    if (roundsLeft > 0) {
        playerSelection = "Rock";
        playRound();
    } else {
        alert("Please Start the Game.");
    }
});
paper.addEventListener("click", () => {
    if (roundsLeft > 0 ) {
        playerSelection = "Paper";
        playRound();
    } else {
        alert("Please Start the Game.");
    }

});
scissors.addEventListener("click", () => {
    if (roundsLeft > 0) {
        playerSelection = "Scissors";
        playRound();
    } else {
        alert("Please Start the Game.");
    }
});


//created function that runs when player chooses from the options
function playRound() {
    if (!playerSelection) {
        alert("Please choose Rock, Paper, or Scissors.");
        return;
    }
    if (roundsLeft > 0) {
        const computerSelection = getComputerChoice();


        const result = choiceComparison(playerSelection, computerSelection);
        userChoice.textContent = `Your Choice: ${playerSelection}`;
        computerChoice.textContent = `Computer Choice: ${computerSelection}`;
        if (result.includes("You Win!")) {
            userWins++;
            userScore.textContent = `Your Score: ${userWins}`;
            alert("You won! your score is now " + userWins + " keep playing to win more!");
        } else if (result.includes("You Lose!")) {
            computerWins++;
            computerScore.textContent = `Computer Score: ${computerWins}`;
            alert("You lost... The computer's score is now " + computerWins + " keep playing to win more!");
        }   else if (result.includes("You Tied")) {
            roundsLeft++;
            userScore.textContent = `Your Score: ${userWins}`;
            computerScore.textContent = `Computer Score: ${computerWins}`;
            alert("You tied with the computer! Keep playing to win more!");
        } else if (result.includes("That is not")) {
            userScore.textContent = `Your Score: ${userWins}`;
            computerScore.textContent = `Computer Score: ${computerWins}`;
            console.log("That is not a valid input please try again.");
        }
    };

    roundsLeft--;

    numberOfRounds.textContent = `Remaining rounds: ${roundsLeft}`;

    if (userWins == Math.ceil(roundNumber / 2)) {
        numberOfRounds.textContent = `Remaining rounds: 0`;
        userScore.textContent = "Your Score: 0";
        computerScore.textContent = "Computer Score: 0";
        disableButtons();
        alert(`You beat the Computer! You are the Rock, Paper, Scissors Champ! \nYour Score was ${userWins} and the computer's score was ${computerWins}.`);
    } else if (computerWins == Math.ceil(roundNumber / 2)) {
        numberOfRounds.textContent = `Remaining rounds: 0`;
        userScore.textContent = "Your Score: 0";
        computerScore.textContent = "Computer Score: 0";
        disableButtons();
        alert(`You lost to the Computer... You are not the Rock, Paper, Scissors Champ. Your archnemesis, the computer is... 
            \nYour Score was ${userWins} And the computers Score was ${computerWins}.`);
    }

    if (roundsLeft == 0) {
        userScore.textContent = "Your Score: 0";
        computerScore.textContent = "Computer Score: 0";
        disableButtons();
        if (userWins > computerWins) {
            alert(`You beat the Computer! You are the Rock, Paper, Scissors Champ! \nYour Score was ${userWins} and the computer's score was ${computerWins}.`);
        } else if (userWins == computerWins) {
            alert(`You tied! Hurry commence a new battle and defeat your enemy! \nYour Score was ${userWins} and the computer's score was ${computerWins}.`);
        } else {
            alert(`You lost to the Computer... You are not the Rock, Paper, Scissors Champ. Your archnemesis, the computer is... 
            \nYour Score was ${userWins} And the computers Score was ${computerWins}.`);
        }
    }
    playerSelection = null;
}

//function to start the game and start first round
function startGame (roundNumber) {
    roundsLeft = roundNumber;
    enableButtons();
    numberOfRounds.textContent = `Number of Rounds: ${roundsLeft}`;
    userWins = 0;
    computerWins = 0;
    playRound();
}

//functions to enable and disable the buttons
function enableButtons () {
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}

function disableButtons () {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

//function that will compare the value of user and computer. this is only one round
function choiceComparison(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock!"
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beats Paper!"
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You Lose! Rock beats Scissors!"
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock!"
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats Paper!"
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors!"
    } else if (playerSelection == "Rock" && computerSelection == "Rock") {
        return "You Tied with the Computer! Try again to win!"
    } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        return "You Tied with the Computer! Try again to win!"
    } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        return "You Tied with the Computer! Try again to win!"
    } else {
        return "That is not a valid input please try again."
    }
};