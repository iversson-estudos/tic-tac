//DISPLAY FUNCTION


const display = (function (){

const startScreen = document.getElementById('startscreen');
const score = document.getElementById('score');
const gameboard = document.getElementById('gameboard');



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
  labelPlayer1.textContent='Player 1: ';
  labelPlayer2.textContent='Player 2: ';  
  startScreen.appendChild(labelPlayer1);
  startScreen.appendChild(inputPlayer1);
  startScreen.appendChild(labelPlayer2);
  startScreen.appendChild(inputPlayer2);
}









return {showStartScreen};
})();


display.showStartScreen();










































//Store gameboard as an array inside of a gameboard object 
  
  const gameboard = (function () {
    const gameboardCells = new Array(9).fill("");
    let marker='X';


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

    return {changePlayer,getGameboard, checkWin, playRound,resetBoard};
  })();
 