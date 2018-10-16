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

function setup() {
  createCanvas(200, 70);
}
function draw(){
  
  background(100);
  text("Player wins: " + playerWins, 10, 20);
  text("Computer wins: " + computerWins, 10, 40);
  text("Draws: " + draws, 10, 60);
}


window.onload = function(){
var rock = document.getElementById("rock");
rock.onclick = function(){
  playerInput = 'rock';
  playGame();
}
var paper = document.getElementById('paper');
paper.onclick = function(){
  playerInput = 'paper';
  playGame();
}
var scissors = document.getElementById('scissors');
scissors.onclick = function(){
  playerInput = 'scissors';
  playGame();
}
console.log(playerInput);
}

function playGame(){
  computerInputID = Math.floor(Math.random() * 3);
  if (computerInputID == 0){
    computerInput = 'rock';
  }
  else if(computerInputID == 1){
    computerInput = 'paper';
  }
  else{
    computerInput = 'scissors';
  }
if (playerInput == computerInput){
  alert("Computer choice: " + computerInput + ". It's a draw");
  draws++;
}
else if (playerInput == 'rock' && computerInput == 'paper'){
  alert("Computer choice: " + computerInput + ". Computer wins");
  computerWins++;
}
else if (playerInput == 'rock' && computerInput == 'scissors'){
  alert("Computer choice: " + computerInput + ". You win");
  playerWins++;
}
else if (playerInput == 'paper' && computerInput == 'rock'){
  alert("Computer choice: " + computerInput + ". You win");
  playerWins++;
}
else if (playerInput == 'paper' && computerInput == 'scissors'){
  alert("Computer choice: " + computerInput + ". Computer wins");
  computerWins++;
}
else if (playerInput == 'scissors' && computerInput == 'rock'){
  alert("Computer choice: " + computerInput + ". Computer wins");
  computerWins++;
}
else if (playerInput == 'scissors' && computerInput == 'paper'){
  alert("Computer choice: " + computerInput + ". You win");
  playerWins++;
}
}




