let choices = ["rock", "scissors", "paper"];

function getComputerChoice(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

let win = 0;
let loose = 0;

function playRound(playerSelection, computerSelection){
    if (playerSelection==="rock"){
        if (computerSelection==="rock"){
            return ("It's a draw");

        }else if (computerSelection==="paper"){
            loose=+1;
            return ("You Loose! Paper beats Rock");

        }else {
            win=+1;
            return ("You Win! Rock beats Scissors");
        }

    }else if (playerSelection==="paper"){
        if (computerSelection==="paper"){
            return ("It's a draw");

        }else if (computerSelection==="rock"){
            win=+1;
            return ("You Win! Paper beats Rock");

        }else {
            loose=+1;
            return ("You Loose! Scissors beats Paper");
        }

    }else {
        if (computerSelection==="scissors"){
            return ("It's a draw");

        }else if (computerSelection==="rock"){
            loose=+1;
            return ("You Loose! Rock beats Scissors");

        }else {
            win=+1;
            return ("You Win! Scissors beats Paper");
        }
    }
}

function score(){
    if (win>loose){
        return("You Won the game!");

    }else {
        return("The computer Won the game!");
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Choose between Rock, Paper or Scissors: ");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice(choices);
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(score());
}

console.log(game());