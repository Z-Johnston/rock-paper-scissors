const rockPaperScissors = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;
let playerScorePhrase = document.getElementById('player-score-phrase');
let computerScorePhrase = document.getElementById('computer-score-phrase');
let finalScoreMessage = document.querySelector('#final-score-message');
let log = document.querySelector('#log');
const buttons = document.querySelectorAll('button');

//function for random computer move selection
function computerPlay() {
    return rockPaperScissors[parseInt(Math.floor(Math.random()*3))]
}

function playRound(playerSelection) {
    const computerSelection = computerPlay()
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection ==='paper')) {
            playerScore++;
            playerScorePhrase.textContent = `Player Score: ${playerScore}`;
            checkForWinner(playerScore, computerScore);
            return 'You win'
    }   
    if ((playerSelection === 'rock' && computerSelection === 'paper') || 
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection ==='rock')) {
            computerScore++;
            computerScorePhrase.textContent = `Computer Score: ${computerScore}`;
            checkForWinner(playerScore, computerScore);
            return 'You lose'
    }
    if (playerSelection === computerSelection) {
        return 'It is a tie'
    }
}

function checkForWinner(playerScore, computerScore) {
    if (playerScore === 5) {
        disableButtons();
        finalScoreMessage.textContent = 'You Win the Round!';
    } if (computerScore === 5) {
        disableButtons();
        finalScoreMessage.textContent = 'You Lose the Round!';
    } 
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

//UI functionality to buttons
buttons.forEach((button) => {
    button.addEventListener('click', function() {
        log.textContent = playRound(button.id);
    });
});