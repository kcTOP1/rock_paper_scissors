let winCount = 0;

let compSel = "";
function getComputerChoice() {
    let compChoice = Math.floor(Math.random() *3);
    
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
        
    }
    if (player == "rock" && computer == "paper") {
        
    } else if (player == "rock" && computer == "scissors") {
        
        winCount++;
    }
    if (player == "paper" && computer == "rock") {
        
        winCount++;
    } else if (player == "paper" && computer == "scissors") {
        
    }
    if (player == "scissors" && computer == "rock") {
        
    } else if (player == "scissors" && computer == "paper") {
        
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
            roundPlay(playerSel, getComputerChoice())
            results.textContent = ""; 
            results.textContent = "Player win count: " + winCount;
            choicePlayer.textContent = "";
            choicePlayer.textContent = "Player choice: " + playerSel;
            choiceComp.textContent = "";
            choiceComp.textContent = "Computer Choice: " + compSel;
            if (winCount % 5 == 0 && winCount != 0) {
                alert("Player has won 5 games");
                winCount = 0;
            }
        });
    });

    const results = document.createElement('p');
    results.classList.add('results');
    container.appendChild(results);

    const choicePlayer = document.createElement('p');
    choicePlayer.classList.add("choicePlayer");
    container.appendChild(choicePlayer);

    const choiceComp = document.createElement('p');
    choiceComp.classList.add("choiceComp");
    container.appendChild(choiceComp);



