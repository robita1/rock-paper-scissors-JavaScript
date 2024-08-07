
function getComputerChoice(){
    const computer_choice = ['rock', 'paper', `scissors`];
    return computer_choice[Math.floor(Math.random() * computer_choice.length)]; 
}

function getHumanChoice(){
    const user =  prompt("Pick your desired outcome:Rock, Paper, or Scissors ? ").toLowerCase();
    return user;
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    let message ="";

    const result = document.querySelector(".result");

    message += (`Computer has picked: ${computerChoice}<br>`);
    message += (`User has picked: ${humanChoice}<br>`);

    if (humanChoice === computerChoice) {
        message += ("It's a draw!<br>");
    }else if (
(humanChoice === 'rock' && computerChoice === 'scissors') || 
(humanChoice === 'paper' && computerChoice === 'rock') || 
(humanChoice === 'scissors' && computerChoice === 'paper')
){
    message += (`You win!<br> ${humanChoice} beats ${computerChoice}<br>`);
  humanScore++;
}else if(
    (humanChoice === 'scissors' && computerChoice === 'rock') || 
    (humanChoice === 'paper' && computerChoice === 'scissors') ||
    (humanChoice === 'rock' && computerChoice === 'paper')
){
    message += (`You lose!<br> ${computerChoice} beats ${humanChoice}<br>`);
    computerScore++;
}else{
    message =("Please only choice rock, paper, or sicssors")
    }
    message +=(`humanScore: ${humanScore}, computerScore: ${computerScore}<br>`);
    if (humanScore === 5){
        message += 'User is the Winner';
        resetScore();
    }else if(computerScore === 5){
        message += 'Computer is the Winner';
        resetScore();
    }
    result.innerHTML = message;
}
function resetScore(){
    humanScore = 0;
    computerScore = 0;
}
const rockButton = document.querySelector(".rock");
    rockButton.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});
const paperButton = document.querySelector(".paper");
paperButton.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});
const scissorsButton = document.querySelector(".scissors")
scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});
