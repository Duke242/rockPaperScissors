
let choiceArray = ["Rock","Paper","Scissors"]

function getComputerChoice() { 
let choice = choiceArray[~~(Math.random() * choiceArray.length)].toUpperCase()
return choice
}

var playerScore = 0 
var computerScore  = 0 


function playRound(computerChoice, playerChoice) { 
    if (computerChoice === playerChoice) {
        console.log("It was a draw.")
    }
    else if ( computerChoice === "ROCK" && playerChoice === "PAPER") {
        console.log("You won!"); ++playerScore
    } else if ( computerChoice === "ROCK" && playerChoice === "SCISSORS") {
        console.log("Computer won!"); ++computerScore }
    else if ( computerChoice === "PAPER" && playerChoice === "SCISSORS") {
            console.log("You won!"); ++playerScore }
    else if ( computerChoice === "SCISSORS" && playerChoice === "ROCK") {
                console.log("You won!"); ++playerScore }
    else if ( computerChoice === "SCISSORS" && playerChoice === "PAPER") {
                    console.log("Computer won!"); ++computerScore }
     else if ( computerChoice === "PAPER" && playerChoice === "ROCK") {
             console.log("Computer won!"); ++computerScore }
     }



for (let i = 0; i < 5; i++) {
const playerSelection = getComputerChoice()
const computerChoice = getComputerChoice()
    playRound(computerChoice,playerSelection)
    console.log(computerScore)
    console.log(playerScore)
    

} 