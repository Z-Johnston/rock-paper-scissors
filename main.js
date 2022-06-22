const rockPaperScissors = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return rockPaperScissors[parseInt(Math.floor(Math.random()*3))]
}

function playRound() {
    let playerSelection = prompt('Enter rock, paper or scissors').toLocaleLowerCase();
    let computerSelection = computerPlay()
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection ==='paper')) {
            playerScore++;
            return 'you win'
        }   
    if ((playerSelection === 'rock' && computerSelection === 'paper') || 
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection ==='rock')) {
            computerScore++;
            return 'you lose'
        }
    if (playerSelection === computerSelection) {
        return 'it is a tie'
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound())
    }
}

function delcareWinner() {
    if (playerScore > computerScore) {
        return 'you win the game'
    } else if (playerScore < computerScore) {
        return 'you lose the game'
    } else {
        return 'the game is a tie'
    }
}

game();
console.log(delcareWinner());