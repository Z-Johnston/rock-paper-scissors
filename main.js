const rockPaperScissors = ["rock", "paper", "scissors"];

function computerPlay() {
    return rockPaperScissors[parseInt(Math.floor(Math.random()*3))]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        return "you lose, paper beats rock"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "you win, rock beats scissors"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "you win, paper beats rock"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "you lose, scissors beats paper"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "you win, scissors beats paper"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "you lose, rock beats scissors"
    } else {
        return "it is a tie"
    }
}


playerSelection = prompt("Enter rock, paper or scissors").toLocaleLowerCase();
computerSelection = computerPlay()

console.log(playRound(playerSelection, computerSelection))


