const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const container = document.getElementById('container');
const main = document.getElementById('main-program');
const status = document.getElementById('status');
//display.textContent = "Your Score: ";
const playerScore = document.getElementById('player');
const compScore = document.getElementById('comp');
playerScore.textContent = "Your Score: ";
compScore.textContent = "Computer's Score: ";

rock.addEventListener("click", rockPicked);
rock.addEventListener("click", rockTransform);
paper.addEventListener("click",paperPicked);
paper.addEventListener("click", paperTransform);
scissors.addEventListener("click", scissorsPicked);
scissors.addEventListener("click", scissorsTransform);

function rockPicked() {
    playRound("rock", computerPlay());
}
function paperPicked() {
    playRound("paper", computerPlay());
}
function scissorsPicked() {
    playRound("scissors", computerPlay());
}
function rockTransform() {
    rock.classList.add('transformed');
    setTimeout(function(){
        rock.classList.remove('transformed');},150);
    }
function paperTransform(){
    paper.classList.add('transformed');
    setTimeout(function(){
        paper.classList.remove('transformed');},150);
    }
    function scissorsTransform(){
        scissors.classList.add('transformed');
        setTimeout(function(){
            scissors.classList.remove('transformed');},150);
        }





let playerTotal = 0;
let compTotal = 0;
    function computerPlay() { 
        const words = ["Rock","Paper","Scissors"];
    compWord = words[Math.floor(Math.random()*words.length)];
        return compWord;
            }

            function playRound(playerSelection, computerSelection) {
                
                computerSelection = computerPlay();
                playerSelection = playerSelection.toLowerCase();
                computerSelection = computerSelection.toLowerCase();
                if(playerSelection == computerSelection) {
                    status.textContent = "Tie!"
                    
                }
                else if (playerSelection == 'rock'){
                    if (computerSelection == 'scissors') {
                        status.textContent = "You win!";
                        playerTotal++;
                        playerScore.textContent = "Your Score: " + JSON.stringify(playerTotal);
                    }
                    else{
                        status.textContent = "Computer Wins.";
                        compTotal++;
                        compScore.textContent = "Computer's Score: " + JSON.stringify(compTotal);
                    }
                }
                else if (playerSelection == 'paper') {
                    if (computerSelection == 'rock'){
                        status.textContent = "You win!";
                        playerTotal++;
                        playerScore.textContent = "Your Score: " + JSON.stringify(playerTotal);

                    }
                    else {
                        status.textContent = "Computer Wins.";
                        compTotal++;
                        compScore.textContent = "Computer's Score: " + JSON.stringify(compTotal);
                    }
                }
                else if (playerSelection == 'scissors') {
                    if (computerSelection == 'paper') {
                        status.textContent = "You win! ";
                        playerTotal++;
                        playerScore.textContent = "Your Score: " + JSON.stringify(playerTotal);
                    }
                    else {
                        status.textContent = "Computer Wins. ";
                        compTotal++;
                        compScore.textContent = "Computer's Score: " + JSON.stringify(compTotal);
                    }
                }
                else {
                    status.textContent = "ERROR";
                }
                if (playerTotal >=5 ) {
                    status.textContent = "Player Wins The Game!!! ";
                    playerScore.textContent = "Your Score: ";
                    compScore.textContent = "Computer's Score: ";
                    playerTotal = 0;
                    compTotal = 0;
                }
                if (compTotal >=5 ) {
                    status.textContent = "Computer Wins The Game!!!! ";
                    playerScore.textContent = "Your Score: ";
                    compScore.textContent = "Computer's Score: ";
                    playerTotal= 0;
                    compTotal = 0;
                }
            }
            
            
            



