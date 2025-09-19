let humanScore = 0
let computerScore = 0

const button = document.querySelectorAll('button')
const computerSelection = document.querySelector('#computer-choice')
const currentComputerScore = document.querySelector('#computer-score')
const currentPlayerScore = document.querySelector('#player-score')
const roundResult = document.querySelector('#round-result')

button.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice())
    })
})

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

function displayScore() {
    currentComputerScore.textContent = `Computer: ${computerScore}`
    currentPlayerScore.textContent = `Player: ${humanScore}`
}

function endGame(message) {
    roundResult.textContent = message
    button.forEach(b => b.disabled = true)
}


function playRound(humanChoice,computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    computerSelection.textContent = `${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`

    if(humanScore < 5 && computerScore < 5) {
        if(humanChoice === 'rock' && computerChoice === 'scissors' ) {
            humanScore += 1;
            roundResult.textContent= "You win ! Rock beats Scissors"
        } else if(humanChoice === 'rock' && computerChoice === 'paper') {
            computerScore += 1;
            roundResult.textContent= "You lose ! Paper beats rock"
        } else if(humanChoice === 'rock' && computerChoice === 'rock') {
            roundResult.textContent= "Is a draw !"
        } else if(humanChoice === 'paper' && computerChoice === 'rock') {
            humanScore += 1;
            roundResult.textContent= "You win ! Paper beats Rock"
        } else if(humanChoice === 'paper' && computerChoice === 'scissors') {
            computerScore += 1;
            roundResult.textContent= "You lose ! Scissors beats paper"
        } else if(humanChoice === 'paper' && computerChoice === 'paper') {
            roundResult.textContent= "Is a draw !"
        } else if(humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore += 1;
            roundResult.textContent= "You win ! Scissors beats paper"
        } else if(humanChoice === 'scissors' && computerChoice === 'rock') {
            computerScore += 1;
            roundResult.textContent= "You lose ! Rock beats scissors"
        } else if(humanChoice === 'scissors' && computerChoice === 'scissors') {
            roundResult.textContent= "Is a draw !"
        }
    } 
    
    displayScore()
    
    if( humanScore === 5) {
        endGame("You won !")
    } else if(computerScore === 5){
        endGame("You lost !")
    }

}



