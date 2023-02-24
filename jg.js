function getComputerChoice() {
    var compChoice = Math.floor(Math.random() *4);
    if (compChoice == 1) {
        console.log("Rock");
    } else if (compChoice == 2) {
        console.log("Paper");
    } else if (compChoice == 3) {
        console.log("Scissor");
    }
    return;
}
getComputerChoice();

