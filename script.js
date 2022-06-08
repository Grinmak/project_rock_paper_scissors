const gameItems = ['rock', 'paper', 'scissors'];

// user input

const userInput = () => prompt('Let\'s play Rock, Paper, Scissors! Type in your choice:');

let userAnswer = userInput();
let userLowCaseAnswer = userAnswer.toLowerCase();
/* let userInput = prompt('Let\'s play Rock, Paper, Scissors! Type in your choice:'); */ //function more useful
// it can be only rock or paper or scissors
// chech if input is not an integer or empty string
// alert if input integer or empty
function checkUserInput ()  {
    if (userLowCaseAnswer === 'rock' || userLowCaseAnswer === 'paper' || userLowCaseAnswer === 'scissors') {
        return userLowCaseAnswer;
    } else {
        alert ('You can use only rock, paper or scissors! Try again!');
        userInput();
}}

let userChoise = checkUserInput();

// create function computerPlay that will randomly shoose one of the values like rock, paper or scissors
const computerPlay = () => gameItems[Math.floor(Math.random() * gameItems.length)];
computerPlay ();
let computerChoice = computerPlay ();

// compare user input and computerPlay function
// make few conditions that return true if user beats computer and false overwise. 
// conditions should be: rock>scissors; paper>rock; scissors>paper
// if user win, alert: "You win! 'here should be user input' beat 'here computer choice'"
// if user lose, alert: "You Lose! here computer choice' beat 'here should be user input'"
// alert 'even score' if user input and computerPlay has equal values
// use capital first letter in result alert