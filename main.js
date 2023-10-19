function getComputerChoice() { 
    const signs = ["rock", "paper", "scissor"];
    let index = Math.floor(Math.random() * 3);
    console.log(signs[index])
    return signs[index];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection)
    if (playerSelection === computerSelection) {
        return 0;
    }
    else if(playerSelection === "rock"){
        if (computerSelection === "paper")
            return -1;
        else
            return 1;
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "scissors"){
            return -1;
        }
        else
            return 1;
    }
    else{
        if(computerSelection === "rock"){
            return -1;
        }
        else{
            return 1;
        }
    }
}

function game(){
    let computerSelection;
    let playerSelection = "Rock";
    let playerScore = 0;
    for(let i = 0; i < 5; i++){
        computerSelection = getComputerChoice();
        playerSelection = prompt("Enter your choice :")

        playerScore += playRound(playerSelection, computerSelection);
       
        if(playerScore > 2){
            console.log(i, playerScore)
            return "You Won!"
        }
        else if(playerScore < -2){
            console.log(i, playerScore)
            return "You Lost"
        }
    }
    if(playerScore > 0){
        return "You Won!"
    }
    else if(playerScore < 0){
        return "You Lost"
    }
    else{
        return "Draw!"
    }
    
}

console.log(game())