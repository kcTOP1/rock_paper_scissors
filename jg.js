let winCount = 0;


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
        winCount++;
    }
    if (player == "paper" && computer == "rock") {
        console.log("Player wins with paper");
        winCount++;
    } else if (player == "paper" && computer == "scissors") {
        console.log("Player loses, scissors beat paper");
    }
    if (player == "scissors" && computer == "rock") {
        console.log("player loses, rock beats scissors");
    } else if (player == "scissors" && computer == "paper") {
        console.log("Player wins, scissors beat paper");
        winCount++;
    }
    console.log("Player win count: " + winCount);

    
}



let playerSel = '';

const container = document.querySelector('#container');
//This is the general container/parent of all the text on the page
//similar to how in flexBox you have to have a maic container to format everything

const buttons = document.querySelectorAll('button');
// buttons is a node list. It looks and acts much like an array.

//Use the .forEach method to iterate thorugh each button 
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        playerSel = button.id;
        console.log(playerSel);
        roundPlay(playerSel, getComputerChoice())
        
    });
});

