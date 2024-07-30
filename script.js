//Store gameboard as an array inside of a gameboard object
//GAMERBOARD OBJECTO

function tttGame() {
  function createGameboard() {
    const gameboardCells = new Array(9).fill("");

    function playRound(marker, place) {
      gameboardCells[place] = marker;
    }

    function checkWin() {}

    return gameboardCells;
  }
}
