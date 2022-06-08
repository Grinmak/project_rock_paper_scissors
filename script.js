const gameItems = ['rock', 'paper', 'scissors'];

// user input
const userInput = () => prompt('Let\'s play Rock, Paper, Scissors! Type in your choice:');
let userAnswer = userInput();
let userLowCaseAnswer = userAnswer.toLowerCase();

// check if user type in right words
function checkUserInput ()  {
    if (userLowCaseAnswer === 'rock' || userLowCaseAnswer === 'paper' || userLowCaseAnswer === 'scissors') {
        return userLowCaseAnswer;
    } else {
        alert ('You can use only rock, paper or scissors! Try again!');
        userInput();
}}
let playerSelection = checkUserInput();

// create function computerPlay that will randomly shoose one of the values like rock, paper or scissors
const computerPlay = () => gameItems[Math.floor(Math.random() * gameItems.length)];
let computerSelection  = computerPlay ();

//compare user and computer and show who is the winner
function playRound (userSel, compSel){
    return userSel === 'rock' && compSel === 'scissors' ?  `You win! Rock beats Scissors!`
    :  userSel === 'scissors' && compSel === 'paper' ? `You win! Scissors beats Paper!`
    :  userSel === 'paper' && compSel === 'rock' ? `You win! Paper beats Rock!` 
    :  userSel === compSel ? `Hmm... you both choose ${compSel}.`
    : `You lose! ${compSel} beats ${userSel}!`
   }
alert (playRound(playerSelection,computerSelection ))

//function to choose winner after five rounds
