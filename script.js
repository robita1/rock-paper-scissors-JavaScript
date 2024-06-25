humanScore = 0;
computerScore = 0;
function getComputerChoice(){
    const computer_choice = ['rock', 'paper', `scissors`];
    return computer_choice[Math.floor(Math.random() * computer_choice.length)]; 
}
console.log(getComputerChoice());
function getHumanChoice(){
    const user =  prompt("Pick your desired outcome:Rrock, Paper, or Scissors ? ").toLowerCase();
    return user;
}
function playRound(humanChoice, computerChoice){
    
}