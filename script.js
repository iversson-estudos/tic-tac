//DISPLAY FUNCTION

const display = (function (){

const startScreen = document.getElementById('startscreen');
const score = document.getElementById('score');
const gameboardDisplay = document.getElementById('gameboard');



function showStartScreen(){
  const buttonStart = document.createElement('button');
  buttonStart.textContent = 'PLAY';
  buttonStart.addEventListener('click',showPlayerScreen);
  startScreen.appendChild(buttonStart);
}

function showPlayerScreen(){
  startScreen.innerHTML='';  
  const inputPlayer1 = document.createElement('input');
  const inputPlayer2 = document.createElement('input');
  const labelPlayer1 = document.createElement('label');
  const labelPlayer2 = document.createElement('label');
  labelPlayer1.textContent='PLAYER 1: ';
  labelPlayer2.textContent='PLAYER 2: ';  
  startScreen.appendChild(labelPlayer1);
  startScreen.appendChild(inputPlayer1);
  startScreen.appendChild(labelPlayer2);
  startScreen.appendChild(inputPlayer2);

  const startButton = document.createElement('button');
  startButton.textContent='START GAME';
  startButton.addEventListener('click',startGame);
  startScreen.appendChild(startButton);
}


function startGame(){
const  players = startScreen.getElementsByTagName('input');
const player1Name = players[0].value;
const player2Name = players[1].value;


gameboard.setPlayerName(player1Name,1);
gameboard.setPlayerName(player2Name,2);

console.log(gameboard.getPlayerName(1));
console.log(gameboard.getPlayerName(2));
}









return {showStartScreen};
})();


display.showStartScreen();






























//Store gameboard as an array inside of a gameboard object 
  
const gameboard = (function () {
  //gameboard array and current player marker
  const gameboardCells = new Array(9).fill("");
  let marker='X';
  //players name
  let player1='';
  let player2='';

  //set and get for player names
  function setPlayerName(name, player){
    if (player==1){player1=name;}
    else {player2=name;}
  }

  function getPlayerName(player){
    if (player==1){return player1;}
    else  {return player2;}
  }


  //PUTS THE MARKER WHEN PLAYER PLAYS
  function playRound(place) {
    if(gameboardCells[place-1]==='' )
      {
        gameboardCells[place-1] = marker;      
      }
  }
  //ALTERNATES BETWEEN ROUND
  function changePlayer(){
    if(marker==='X'){marker='O';}
    else {marker='X';}
  }
  //RETURNS GAMEBOARD
  function getGameboard(){
    return gameboardCells;
  }

  //RESETS BOARD
  function resetBoard (){
  gameboardCells.fill("");
  marker='X';    
  }
  
  //CHECKS IF CURRENT PLAYER WON
  function checkWin() {
    const possibleWins = [[1,2,3],[1,4,7],[1,5,9],[2,5,8],[3,5,7],[3,6,9],[4,5,8],[7,8,9]];
    
   for (const element of possibleWins) {
      if (gameboardCells[element[0]-1]===''|| gameboardCells[element[0]-1]=== null)
        {
          continue;
        }

      if(gameboardCells[element[0]-1]===gameboardCells[element[1]-1]&&
         gameboardCells[element[1]-1]===gameboardCells[element[2]-1])
         {
          return true;
         }
      };
      
      return false;
    }

  return {changePlayer,getGameboard, checkWin, playRound,resetBoard,setPlayerName,getPlayerName};
  })();






































