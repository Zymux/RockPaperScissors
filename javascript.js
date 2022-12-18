let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')

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

function disableButtons () {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

// console.log(getComputerChoice());

function playRound(playerSelection) {
    let computerSelection = getComputerChoice()
    let result = ""

        if (computerSelection == playerSelection) {
            result = ("Tie. Both players chose " + playerSelection + 
            "<br>Player Score: " + playerScore + "<br>Computer Score: " + computerScore);
            if(computerScore == 5) {
                result += "<br><br> The computer has defeated the weak human brain"
                disableButtons();
            }
        }
        else if (computerSelection == "Scissors" && playerSelection == "Paper") {
            computerScore += 1;
            result = ("You Lose! " + computerSelection + " beats " + playerSelection +
            "<br>Player Score: " + playerScore + "<br>Computer Score: " + computerScore);
            if(computerScore == 5) {
                result += "<br><br> The computer has defeated the weak human brain"
                disableButtons();
            }
        }
        else if (computerSelection == "Rock" && playerSelection == "Scissors") {
            computerScore += 1;
            result = ("You Lose! " + computerSelection + " beats " + playerSelection +
            "<br>Player Score: " + playerScore + "<br>Computer Score: " + computerScore);
            if(computerScore == 5) {
                result += "<br><br> The computer has defeated the weak human brain"
                disableButtons();
            }
        }
        else if (computerSelection == "Paper" && playerSelection == "Rock") {
            computerScore += 1;
            result = ("You Lose! " + computerSelection + " beats " + playerSelection +
            "<br>Player Score: " + playerScore + "<br>Computer Score: " + computerScore);
            if(computerScore == 5) {
                result += "<br><br> The computer has defeated the weak human brain"
                disableButtons();
            }
        }

        else if (computerSelection == "Scissors" && playerSelection == "Rock") {
            playerScore += 1
            result = ("You Win! " + playerSelection + " beats " + computerSelection +
            "<br>Player Score: " + playerScore + "<br>Computer Score: " + computerScore);
            if(playerScore == 5) {
                result += "<br><br> The human brain has defeated the weak computer"
                disableButtons();
            }
        }
        else if (computerSelection == "Paper" && playerSelection == "Scissors") {
            playerScore += 1
            result = ("You Win! " + playerSelection + " beats " + computerSelection) +
            "<br>Player Score: " + playerScore + "<br>Computer Score: " + computerScore;
            if(playerScore == 5) {
                result += "<br><br> The human brain has defeated the weak computer"
                disableButtons();
            }
        }
        else if (computerSelection == "Rock" && playerSelection == "Paper") {
            playerScore += 1
            result = ("You Win! " + playerSelection + " beats " + computerSelection +
            "<br>Player Score: " + playerScore + "<br>Computer Score: " + computerScore);
            if(playerScore == 5) {
                result += "<br><br> The human brain has defeated the weak computer"
                disableButtons();
            }
        }
        
        document.getElementById('result').innerHTML = result
        return;
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value);
    })
})

// for (let i = 1; i < 6; i++) {
//     const playerSelection = String(window.prompt("Rock, Paper, or Scissors?", ""));
//     const computerSelection = getComputerChoice();
//     console.log("Game: " + i);
//     console.log(playRound(playerSelection, computerSelection));
//     console.log("Player: " + playerSelection);
//     console.log("Computer: " + computerSelection);
// }

//Can also create function game() and then add the for loop to it, but only make it run
//the function playRound 5x. Then outside of the function do console.log(game)

// const playerSelection = String(window.prompt("Rock, Paper, or Scissors?", ""));
// const computerSelection = getComputerChoice();
// console.log(computerSelection);
// console.log(playerSelection);
// console.log(playRound(playerSelection, computerSelection));