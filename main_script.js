
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
divButton.append(btnRock, btnPaper, btnScissors);
body.appendChild(divButton);
btnRock.textContent = 'Rock';
btnPaper.textContent = 'Paper';
btnScissors.textContent ='Scissors';
divButton.setAttribute('style', 'display:flex;  justify-content: center; padding: 50px 0');

//result and score sector
const divResult = document.createElement('div');
divResult.setAttribute('style', 'background-color: #d3d3d3;  min-height: 350px; align-items: center; display: flex; flex-flow:column; border-radius:15px' );
body.appendChild(divResult);
const divScore = document.createElement('div');
let playerScore = document.createElement('p');
let computerScore = document.createElement('p');
divScore.append(playerScore, computerScore);
body.appendChild(divScore);
divScore.setAttribute('style', 'display:flex; justify-content: space-evenly');
playerScore.textContent = 0;
computerScore.textContent = 0;


//events
 const allButton = Array.from(document.querySelectorAll('button'));
 allButton.forEach(btn => btn.addEventListener('click', btnSelector));

 function btnSelector (event){
    userInput = event.srcElement.innerText;
    if(Number(playerScore.textContent) < 5 && Number(computerScore.textContent < 5)){
    oneRound(userInput)
    } else return ;
    //console.log(userInput);
 }


function oneRound (user){   
    const matchResult = document.createElement('h4');
    divResult.appendChild(matchResult); 
    const finalScore = document.createElement('div');
    body.appendChild(finalScore);
   // finalScore.textContent = 'lllllll';
    finalScore.setAttribute('style', 'text-align: center; font-size: 1.5em; font-weight: bold')
    computerInput = gameWords[Math.floor(Math.random() * gameWords.length)];
    

    if ((user == 'Rock' && computerInput == 'Scissors') 
    || (user == 'Scissors' && computerInput == 'Paper')
    || (user == 'Paper' && computerInput == 'Rock')) {
            matchResult.textContent = `You win! ${user} beats ${computerInput}!`;
            ++playerScore.textContent ;
        }else if (user === computerInput) {
            matchResult.textContent = `Hmm... you both choose ${computerInput}.`;
            
        }else {
            matchResult.textContent =`You lose! ${computerInput} beats ${user}!`;
            ++computerScore.textContent; 
        };
        winnerFn();   
        function winnerFn(/* a,b */) {
            /*         let user = Number(a);
                    let pc = Number(b); */
                    if (Number(playerScore.textContent) > Number(computerScore.textContent) &&  Number(playerScore.textContent) == 5) {
                        finalScore.textContent = `You win ${playerScore.textContent} to ${computerScore.textContent}!`;
                        return;
                    }else if(Number(playerScore.textContent) < Number(computerScore.textContent) && Number(computerScore.textContent) == 5){
                         finalScore.textContent = `You lose!`;
                         return;
                    }     
                }


          
    }   
        
    
    //winner function

}



  




game ();
