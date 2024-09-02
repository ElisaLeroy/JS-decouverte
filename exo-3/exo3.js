// you can write js here
console.log('exo-3');
let playerInput = prompt("Your choice ( rock, paper, scissors) ?").toLowerCase();
let playerChoice = getPlayerchoice(playerInput);
let computerChoice = getComputerChoice();



function getPlayerchoice(playerInput) {
    if (playerInput === 'rock' || 'paper' || 'scissors') {
        return playerInput;
    } else {
        console.log('Error : wrong input')
    }
}

function getComputerChoice() {
    let number = Math.floor(Math.random() * (2 - 0) + 0);
    switch (number) {
        case 0:
            return 'rock';
            break;

        case 1:
            return 'paper';
            break;

        case 2:
            return 'scissors';
            break;
    }
}

function findWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice){
        return 'Tied';
    }
    if (playerChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'lost'
        }
    }
}