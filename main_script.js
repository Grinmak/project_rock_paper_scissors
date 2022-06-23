
const game = () => {
    const gameWords = ['Rock', 'Paper', 'Scissors'];
/*     let playerScore;
    let computerScore; */
    let computerInput;
    let userInput;

//button nodes
const body = document.querySelector('body');
const divButton = document.createElement('div');
const btnRock = document.createElement('button');
const btnPaper = document.createElement('button');
const btnScissors = document.createElement('button');
const divResult = document.createElement('div');
divButton.append(btnRock, btnPaper, btnScissors);
body.appendChild(divButton);
btnRock.textContent = 'Rock';
btnPaper.textContent = 'Paper';
btnScissors.textContent ='Scissors';
divButton.setAttribute('style', 'display:flex;  justify-content: center; padding: 50px 0');
divResult.setAttribute('style', 'background-color: #d3d3d3;  height: 20rem' );
body.appendChild(divResult);
const divScore = document.createElement('div');
let playerScore = document.createElement('p');
let computerScore = document.createElement('p');
playerScore.textContent = 0;
computerScore.textContent = 0;
divScore.append(playerScore, computerScore);
body.appendChild(divScore);
divScore.setAttribute('style', 'display:flex; justify-content: space-evenly')
//events
 const allButton = Array.from(document.querySelectorAll('button'));
 allButton.forEach(btn => btn.addEventListener('click', btnSelector));

 function btnSelector (event){
    userInput = event.srcElement.innerText;
    oneRound(userInput); 
    //console.log(userInput);
 }


function oneRound (user){
    const matchResult = document.createElement('h3');
    divResult.appendChild(matchResult); 
    computerInput = gameWords[Math.floor(Math.random() * gameWords.length)];
    if ((user == 'Rock' && computerInput == 'Scissors') 
    || (user == 'Scissors' && computerInput == 'Paper')
    || (user == 'Paper' && computerInput == 'Rock')) {
            matchResult.textContent = `You win! ${user} beats ${computerInput}!`;
            ++playerScore.textContent ;
        }else if (user === computerInput) {
            matchResult.textContent = `Hmm... you both choose ${computerInput}.`;
            
        }else matchResult.textContent =`You lose! ${computerInput} beats ${user}!`;
            ++computerScore.textContent; 
    }                   
}



//winner function
/* function winnerFn() {
        if (playerScore > computerScore) {
            alert (`You win ${playerScore} to ${computerScore}!`)
        }else alert(`You lose!`);
    }       

winnerFn(); */


game ();
