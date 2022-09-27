
let choiceArray = ["Rock","Paper","Scissors"]

function getComputerChoice() { 
let choice = choiceArray[~~(Math.random() * choiceArray.length)] 
console.log(choice)
return choice
}

getComputerChoice()

function playRound(computerChoice, playerChoice) { 
    if (computerChoice === playerChoice) {
        console.log("It was a draw.")
    }
    else if ( computerChoice === "ROCK" && playerChoice === "PAPER") {
        console.log("You won!")
    } else if ( computerChoice === "ROCK" && playerChoice === "SCISSORS") {
        console.log("Computer won!") }
        else if ( computerChoice === "PAPER" && playerChoice === "SCISSORS") {
            console.log("You won!") }
    

}

const playerSelection = "PAPer".toUpperCase()
const computerChoice = "rOCK".toUpperCase()
playRound(computerChoice,playerSelection)