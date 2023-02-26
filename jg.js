
function getComputerChoice() {
    let compChoice = Math.floor(Math.random() *3);
    let compSel = "";
    if (compChoice == 0) {
        
        compSel = "rock";
    } else if (compChoice == 1) {
        
        compSel = "paper";
    } else if (compChoice == 2) {
        
        compSel = "scissors";
    }
    return compSel;
}



function roundPlay(player, computer) {
    if (player == computer) {
        console.log("the same");
    }
    if (player == "rock" && computer == "paper") {
        console.log("Player loses. Paper Wins");
    } else if (player == "rock" && computer == "scissors") {
        console.log("Player wins, rock beats scissors")
    }
    if (player == "paper" && computer == "rock") {
        console.log("Player wins with paper");
    } else if (player == "paper" && computer == "scissors") {
        console.log("Player loses, scissors beat paper");
    }
    if (player == "scissors" && computer == "rock") {
        console.log("player loses, rock beats scissors");
    } else if (player == "scissors" && computer == "paper") {
        console.log("Player wins, scissors beat paper");
    }

    
}

const playerSel = prompt("Enter rock, paper, or scissor: ");
const computerSel = getComputerChoice();
roundPlay(playerSel, computerSel);
console.log("This is the player selection: " + playerSel);
console.log("This is the computer selection: " + computerSel);