
const game = () => {
    const gameWords = ['Rock', 'Paper', 'Scissors'];
    let playerScore;
    let computerScore;
    let computerInput;
    let userInput;
    const gameCount = 4;
 
//offer user to play game
function oneRound (){
    function userInputFn (){
    userInput = prompt ('Let\'s play Rock, Paper, Scissors! What you\'ll chose?').toLowerCase();
    }
//call function to check if user's answer is correct
    function userAnswer () {      
        if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
            userInput = userInput[0].toUpperCase() + userInput.substring(1) ;
/*         }else if (userInput === '' || userInput !== NaN){
            alert ('See you!'); 
            clear(); */
        }else { 
            alert('Wrong word! Try again!');
            userAnswer(userInputFn());
                         
    }}
    userAnswer(userInputFn());
//computer randomly choose a word  
    function computerPlay () {
        computerInput = gameWords[Math.floor(Math.random() * gameWords.length)];
    }
    computerPlay ();
//compare answers
function gameBattle (userFirst, pcSecond){
    if ((userFirst === 'rock' && pcSecond === 'scissors') 
        || (userFirst === 'scissors' && pcSecond === 'paper')
        || (userFirst === 'paper' && pcSecond === 'rock')) {
            alert (`You win! ${userFirst} beats ${pcSecond}!`);
            ++playerScore;
    }else if (userFirst === pcSecond) {
        alert (`Hmm... you both choose ${pcSecond}.`);
    }else alert (`You lose! ${pcSecond} beats ${userFirst}!`);
        computerScore++;
}
gameBattle (userInput, computerInput);
}



for (let i=0; i < gameCount; i++){
        //console.log(i);
        oneRound();
} 
//winner function
function winnerFn() {
        if (playerScore > computerScore) {
            alert (`You win ${playerScore} to ${computerScore}!`)
        }else alert(`You lose!`);
    }       

winnerFn();
}


game ();
