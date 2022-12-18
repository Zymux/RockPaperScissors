function getComputerChoice() {
    var choices = [
        "Rock",
        "Paper",
        "Scissors"
    ];

    var choice = choices[Math.floor(Math.random() * choices.length)];
    // console.log(choice);
    return choice;
}

// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
        if (computerSelection == playerSelection) {
            console.log("You Tied.");
        }
        else if (computerSelection == "Scissors" && playerSelection == "Paper") {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        }
        else if (computerSelection == "Rock" && playerSelection == "Scissors") {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        }
        else if (computerSelection == "Paper" && playerSelection == "Rock") {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        }
        else if (computerSelection == "Scissors" && playerSelection == "Rock") {
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
        }
        else if (computerSelection == "Paper" && playerSelection == "Scissors") {
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
        }
        else if (computerSelection == "Rock" && playerSelection == "Paper") {
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
        }
}

for (let i = 1; i < 6; i++) {
    const playerSelection = String(window.prompt("Rock, Paper, or Scissors?", ""));
    const computerSelection = getComputerChoice();
    console.log("Game: " + i);
    console.log(playRound(playerSelection, computerSelection));
    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);
}

//Can also create function game() and then add the for loop to it, but only make it run
//the function playRound 5x. Then outside of the function do console.log(game)

// const playerSelection = String(window.prompt("Rock, Paper, or Scissors?", ""));
// const computerSelection = getComputerChoice();
// console.log(computerSelection);
// console.log(playerSelection);
// console.log(playRound(playerSelection, computerSelection));