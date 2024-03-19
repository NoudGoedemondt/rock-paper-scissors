function getComputerChoice() {
    const decider = Math.random().toFixed(2);

    if (decider < 0.33) {
        return "rock";
    } 
    else if (decider < 0.66) {
        return "paper";
    } 
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Tie! Both players chose ${playerSelection}`
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}
  
const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));