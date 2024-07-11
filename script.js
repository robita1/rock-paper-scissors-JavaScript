
function getComputerChoice(){
    const computer_choice = ['rock', 'paper', `scissors`];
    return computer_choice[Math.floor(Math.random() * computer_choice.length)]; 
}

function getHumanChoice(){
    const user =  prompt("Pick your desired outcome:Rrock, Paper, or Scissors ? ").toLowerCase();
    return user;
}


    humanScore = 0;
    computerScore = 0;

function playRound(humanChoice, computerChoice){
    console.log(`Computer has picked: ${computerChoice}`);
    console.log(`User has picked: ${humanChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    }else if (
(humanChoice === 'rock' && computerChoice === 'scissors') || 
(humanChoice === 'paper' && computerChoice === 'rock') || 
(humanChoice === 'scissors' && computerChoice === 'paper')
){
  console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  humanScore++;
}else if(
    (humanChoice === 'scissors' && computerChoice === 'rock') || 
    (humanChoice === 'paper' && computerChoice === 'scissors') ||
    (humanChoice === 'rock' && computerChoice === 'paper')
){
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
}else{
    console.log("Please only choice rock, paper, or sicssors")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

        console.log(`humanScore: ${humanScore}`);
        console.log(`computerScore: ${computerScore}`);
