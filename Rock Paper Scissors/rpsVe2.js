let playerScore = 0;
let computerScore = 0;

const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerSelection() {
    const choices=['r','p','s'];
    const result = Math.floor(Math.random()*3);
    return choices[result]
} 

function convertToWord(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    return "Scissors";
}

function win(playerSelection, computerSelection) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;

    if (playerScore < 5){result_p.innerHTML = `${convertToWord(playerSelection)} beats ${convertToWord(computerSelection)}. You win!`;
}else if(playerScore === 5){
  result_p.innerHTML='Game over, you win! <button onclick="endGame()">Click here to play again</button>'

  rock_div.setAttribute("disabled", 1);
  paper_div.setAttribute("disabled", 1);
  scissors_div.setAttribute("disabled", 1);
}; 
}

function lose(playerSelection, computerSelection) {
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    
    if (computerScore<5){result_p.innerHTML = `${convertToWord(computerSelection)} beats ${convertToWord(playerSelection)}. You lose!`;
}else if(computerScore === 5){
  result_p.innerHTML='Game over, you lose! <button onclick="endGame()">Click here to play again</button>'
  rock_div.setAttribute("disabled", 1);
  paper_div.setAttribute("disabled", 1);
  scissors_div.setAttribute("disabled", 1);
};

}

function draw() {
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `It\'s a tie!`;
}

function playRound(playerSelection) {
    const computerSelection = getComputerSelection();
    
    if (playerSelection === computerSelection) {
        draw(playerSelection, computerSelection);
      } else if (playerSelection === 'r' && computerSelection === 's'){
        win(playerSelection, computerSelection);  
      }else if (playerSelection === 'p' && computerSelection === 'r'){
        win(playerSelection, computerSelection);
      }else if (playerSelection === 's' && computerSelection === 'p'){
        win(playerSelection, computerSelection);
      }else{
        lose(playerSelection, computerSelection);
      }   
    }

function endGame() {
  userScore = 0;
  compScore = 0;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = ``;
  rock_div.removeAttribute("disabled");  paper_div.removeAttribute("disabled");  scissors_div.removeAttribute("disabled");
}


function mainEvent() {
    
rock_div.addEventListener('click', () => playRound("r"));

paper_div.addEventListener('click', () => playRound("p"));

scissors_div.addEventListener('click', () => playRound("s"));

}
mainEvent ();