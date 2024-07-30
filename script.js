//Store gameboard as an array inside of a gameboard object


function tttGame() {
  
  
  function createGameboard() {
    const gameboardCells = new Array(9).fill("");
    let turnToPlay = 'X';

    function playRound(marker, place) {
      gameboardCells[place] = marker;
      
    }

    function checkWin() {
      const possibleWins = [[1,2,3],[1,4,7],[1,5,9],[2,5,8],[3,5,7],[3,6,9],[4,5,8],[7,8,9]];
      
      possibleWins.forEach((element) => {
        if (gameboardCells[element[0]]===''|| gameboardCells[element[0]]=== null)
          {
            return false;
          }

        if(gameboardCells[element[0]]===gameboardCells[element[1]]&&
           gameboardCells[element[1]]===gameboardCells[element[2]])
           {
            return true;
           }


      
      
      });



    }

    return gameboardCells;
  }
}
