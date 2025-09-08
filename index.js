let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3 + 1)

    if(num === 1) {
        return "rock"
    } else if(num === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors ?")

    return choice
}

function playRound(humanChoice,computerChoice) {
    humanChoice = humanChoice.toLowerCase()

    if(humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore += 1;
        console.log("You win ! Rock beats Scissors")
    } else if(humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore += 1;
        console.log("You lose ! Paper beats rock")
    } else if(humanChoice === 'rock' && computerChoice === 'rock') {
        console.log("Is a draw !")
    } else if(humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore += 1;
        console.log("You win ! Paper beats Rock")
    } else if(humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore += 1;
        console.log("You lose ! Scissors beats paper")
    } else if(humanChoice === 'paper' && computerChoice === 'paper') {
        console.log("Is a draw !")
    } else if(humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore += 1;
        console.log("You win ! Scissors beats paper")
    } else if(humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore += 1;
        console.log("You lose ! Rock beats scissors")
    } else if(humanChoice === 'scissors' && computerChoice === 'scissors') {
        console.log("Is a draw !")
    }

}


function playGame() {
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection,computerSelection)
        console.log(`Your score: ${humanScore}`)
        console.log(`Computer score: ${computerScore}`)
    }

    if(computerScore > humanScore){
        console.log("You lose !")
    } else if (computerScore < humanScore) {
        console.log("You won !")
    } else {
        console.log("Is a draw !")
    }
    
}

playGame()