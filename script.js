//Store gameboard as an array inside of a gameboard object



  
  
  function createGameboard() {
    const gameboardCells = new Array(9).fill("");

    function playRound(marker, place) {
      gameboardCells[place-1] = marker;      
    }

    function checkWin() {
      const possibleWins = [[1,2,3],[1,4,7],[1,5,9],[2,5,8],[3,5,7],[3,6,9],[4,5,8],[7,8,9]];
      
     for (const element of possibleWins) {
        if (gameboardCells[element[0]-1]===''|| gameboardCells[element[0]-1]=== null)
          {
            return false;
          }

        if(gameboardCells[element[0]-1]===gameboardCells[element[1]-1]&&
           gameboardCells[element[1]-1]===gameboardCells[element[2]-1])
           {
            return true;
           }
        };
        
        return false;
      }

    return {gameboardCells, checkWin, playRound};
  }
 