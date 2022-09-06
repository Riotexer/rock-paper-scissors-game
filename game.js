let choices = ["rock", "scissors", "paper"];

function getComputerChoice(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

let computerSelection = getComputerChoice(choices);
let playerSelection = "rock";
playerSelection = playerSelection.toLowerCase();

function playRound(playerSelection, computerSelection){
    if (playerSelection==="rock"){
        if (computerSelection==="rock"){
            return ("It's a draw");

        }else if (computerSelection==="paper"){
            return ("You Loose! Paper beats Rock");

        }else {
            return ("You Win! Rock beats Scissors");
        }

    }else if (playerSelection==="paper"){
        if (computerSelection==="paper"){
            return ("It's a draw");

        }else if (computerSelection==="rock"){
            return ("You Win! Paper beats Rock");

        }else {
            return ("You Loose! Scissors beats Paper");
        }

    }else {
        if (computerSelection==="scissors"){
            return ("It's a draw");

        }else if (computerSelection==="rock"){
            return ("You Loose! Rock beats Scissors");

        }else {
            return ("You Win! Scissors beats Paper");
        }
    }
}

console.log(playRound(playerSelection, computerSelection));