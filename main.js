const rockPaperScissors = ["rock", "paper", "scissors"];

function computerPlay() {
    return rockPaperScissors[parseInt(Math.floor(Math.random()*3))]
}

console.log(computerPlay());


