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

//MAKES STARTSCREEN BLANK AND WE START USING SCORE AND GAMEBOARD DIVS
startScreen.parentNode.removeChild(startScreen);
const divScore = document.createElement('div');
const playerName = document.createElement('p');
const playerScore = document.createElement('p');
playerName.textContent = gameboard.getPlayerName(1);
playerScore.textContent = gameboard.getScore(1);
divScore.appendChild(playerName);
divScore.appendChild(playerScore);
score.appendChild(divScore);
}









return {showStartScreen};
})();


display.showStartScreen();






























//Store gameboard as an array inside of a gameboard object 
  
const gameboard = (function () {
  //gameboard array and current player marker
  const gameboardCells = new Array(9).fill("");
  let marker='X';
  let currentPlayer = 1;
  //players name
  let player1='Player 1';
  let player2='Player 2';
  //SCORE FOR BOTH PLAYERS, 0 FOR P1 1 FOR P2
  let score = new Array(2).fill(0);

  //set and get for player names
  function setPlayerName(name, player){
    if(name==''){name='Player '+player;}
    if (player==1){player1=name;}
    else {player2=name;}
  }

  function getPlayerName(player){
    if (player==1){return player1;}
    else  {return player2;}
  }

  //set and get for players scores
  function addPoint(player){
    if (player==1){score[0]++;}
    else if(player==2){score[1]++;}
  }

  function getScore(player){
    return score[player-1];
  }




 


  //PUTS THE MARKER WHEN PLAYER PLAYS
  function playRound(place) {
    if(gameboardCells[place-1]==='' )
      {
        gameboardCells[place-1] = marker;  
        if(checkWin()){
          addPoint(currentPlayer);
          resetBoard();
          currentPlayer=1;
          marker='X';     
          console.log('Player '+getPlayerName(currentPlayer)+' WON!!!');     
        }
        else if(!gameboardCells.includes('')){
          resetBoard();
          currentPlayer=1;
          marker='X';
        }        
        else {changePlayer();}
      }
  }
  //ALTERNATES BETWEEN ROUND
  function changePlayer(){
    if(marker==='X'){
      marker='O';
      currentPlayer=2;
    }
    else {
      marker='X';
      currentPlayer=1;
    }
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

  return {addPoint,getScore,getGameboard,playRound,resetBoard,setPlayerName,getPlayerName};
  })();






































