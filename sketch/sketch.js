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

//simpler way to do this:
/*
new Array([rock, paper, scissors]).forEach(element => {
  element.onclick = function(ev) {
    playerInput = ev.target.innerHTML;
    playGame();
  };
});*/

//game logic
function playGame(){
  var computerInputID = Math.floor(Math.random() * 3);

  //computer gets an input according to random number
  if (computerInputID == 0){
    computerInput = 'rock';
  }
  else if(computerInputID == 1){
    computerInput = 'paper';
  }
  else{
    computerInput = 'scissors';
  }

  //the game checks if player has been chosing single option multiple times in a row
  //computer is smart and wants to win
  if(playerRock >= 3){
    computerInput = 'paper';

    if(didComputerRealizePattern){
      if (didComputerWin){
        playerPaper = 0;
        playerScissors = 0;
      }
      else if (!didComputerWin){
        didComputerRealizePattern = false;
        playerRock = 0;
        playerPaper = 0;
        playerScissors = 0;
      }
    }
  }
  else if(playerPaper >= 3){
    computerInput = 'scissors';

    if(didComputerRealizePattern){

    if(didComputerWin){
      playerRock = 0;
      playerScissors = 0;
    }
    else if(!didComputerWin){
      didComputerRealizePattern = false;
      playerPaper = 0;
      playerRock = 0;
      playerScissors = 0;
    }

    }
  }
  else if(playerScissors >= 3){
    computerInput = 'rock';

    if(didComputerRealizePattern){
      if(didComputerWin){
        playerRock = 0;
        playerPaper = 0;
      }
      else if(!didComputerWin){
        didComputerRealizePattern = false;
        playerScissors = 0;
        playerRock = 0;
        playerPaper = 0;
      }
    }
  }

  //game compares two inputs and decides who lost
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
  console.log("Did computer win: " + didComputerWin);
  console.log("Player rock: " + playerRock);
  console.log("Player paper: " + playerPaper);
  console.log("Player scissors: " + playerScissors);
  console.log("Computer realized the pattern:" + didComputerRealizePattern);
}






