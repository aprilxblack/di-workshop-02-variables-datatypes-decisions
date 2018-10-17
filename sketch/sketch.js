//this is the code for the excercise, ignore this
/*var name = 'Karolina';
var position = 100;
var moving = true;
var direction = 1;
var count = 0;
//this thing draws a square sized 400x200
function setup() {
  createCanvas(400, 200)
}
function mousePressed(){
  moving = !moving;
}
//it draws a rectangle with the background 100(whatever that means)
function draw() {
  background(100)
  if (moving)
  {
    position = position + direction;
  }

  if (position == 390 || position == 0){
    direction = -direction;
    count++;
  }
  
  
  rect(position, 0, 10, 10)
  console.log('The position is ' + position);
  text('My name is ' + name, 10, 30);
  text(count, 20, 50);
}*/

var playerInput;
var computerInput;
var playerWins = 0;
var computerWins = 0;
var draws = 0;

//this is to count how many times in a row player chose each option
var playerPaper = 0;
var playerRock = 0;
var playerScissors = 0;

var didComputerWin;
var didComputerRealizePattern;

//draws the gray box that appears underneath the buttons
function setup() {
  createCanvas(200, 70);
}
function draw(){
  
  background(100);
  text("Player wins: " + playerWins, 10, 20);
  text("Computer wins: " + computerWins, 10, 40);
  text("Draws: " + draws, 10, 60);
}

//player gets assigned one of the options depending on which button they click on
var rock = document.getElementById("rock");
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');

//game starts
rock.onclick = function() {
  playerInput = 'rock';
  playerRock++;
  playGame();
}
paper.onclick = function() {
  playerInput = 'paper';
  playerPaper++;
  playGame();
}
scissors.onclick = function() {
  playerInput = 'scissors';
  playerScissors++;
  playGame();
}

//game logic
function playGame(){
  
  assignRandomInput();
  testThePattern();
  compareInputs();
  redefinePattern();
  resetAllOtherParameters();
  console.log("Did computer win: " + didComputerWin);
  console.log("Player rock: " + playerRock);
  console.log("Player paper: " + playerPaper);
  console.log("Player scissors: " + playerScissors);
  console.log("Computer realized the pattern:" + didComputerRealizePattern);

}

//if the player choses one option, it sets all other options to zero
//(so that it would check how many times in the row was the option chosen, not total count)
function resetAllOtherParameters(){
  if (playerInput == 'rock'){
    playerPaper = 0;
    playerScissors = 0;
  }
  else if(playerInput == 'paper'){
    playerRock = 0;
    playerScissors = 0;
  }
  else if(playerInput == 'scissors'){
    playerRock = 0;
    playerPaper = 0;
  }
}

//checks who won
function compareInputs(){
  if (playerInput == computerInput){
    alert("Computer choice: " + computerInput + ". It's a draw");
    draws++;
    didComputerWin = false;
  }
  else if (playerInput == 'rock' && computerInput == 'paper'){
    alert("Computer choice: " + computerInput + ". Computer wins");
    computerWins++;
    didComputerWin = true;
  }
  else if (playerInput == 'rock' && computerInput == 'scissors'){
    alert("Computer choice: " + computerInput + ". You win");
    playerWins++;
    didComputerWin = false;
  }
  else if (playerInput == 'paper' && computerInput == 'rock'){
    alert("Computer choice: " + computerInput + ". You win");
    playerWins++;
    didComputerWin = false;
  }
  else if (playerInput == 'paper' && computerInput == 'scissors'){
    alert("Computer choice: " + computerInput + ". Computer wins");
    computerWins++;
    didComputerWin = true;
  }
  else if (playerInput == 'scissors' && computerInput == 'rock'){
    alert("Computer choice: " + computerInput + ". Computer wins");
    computerWins++;
    didComputerWin = true;
  }
  else if (playerInput == 'scissors' && computerInput == 'paper'){
    alert("Computer choice: " + computerInput + ". You win");
    playerWins++;
    didComputerWin = false;
  }
}

//assigns computer input based on a random number (if there is no pattern)
function assignRandomInput(){
  var computerInputID = Math.floor(Math.random() * 3);
  if (computerInputID == 0){
    computerInput = 'rock';
  }
  else if(computerInputID == 1){
    computerInput = 'paper';
  }
  else{
    computerInput = 'scissors';
  }
}

//computer thinks it found the pattern and checks if its valid
function testThePattern(){
  if(playerRock >= 3){
    computerInput = 'paper';
  }
  else if(playerPaper >= 3){
    computerInput = 'scissors';
  }
  else if(playerScissors >= 3){
    computerInput = 'rock';
  }
}

//computer checks if the pattern still works or if the player changed it
function redefinePattern(){
  if(playerPaper >=3 || playerRock >= 3 || playerScissors >=3){
    if(didComputerWin){
      didComputerRealizePattern = true;
      }
    else{
      didComputerRealizePattern = false;
      playerPaper = 0;
      playerRock = 0;
      playerScissors = 0;
    }
  }
}






