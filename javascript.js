function getComputerChoice() {
  const decider = Math.random().toFixed(2);

  if (decider < 0.33) {
    return "rock";
  } else if (decider < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Tie! Both players chose ${playerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const resultElement = document.getElementById("result");

function handleButtonClick(playerSelection) {
  const computerSelection = getComputerChoice();
  resultElement.textContent = playRound(playerSelection, computerSelection);
}

document.getElementById("rock-button").addEventListener("click", () => {
  handleButtonClick("rock");
});

document.getElementById("paper-button").addEventListener("click", () => {
  handleButtonClick("paper");
});

document.getElementById("scissors-button").addEventListener("click", () => {
  handleButtonClick("scissors");
});
