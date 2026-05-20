import { useState } from "react";
import GameBoard from "./components/GameBoard";
import PlayerDetail from "./components/PlayerDetail";
import Log from "./components/Log";
import { INITIAL_GAME_BOARD, PLAYERS } from "./data";
import GameOver from "./components/GameOver";
import { checkWinOrDraw } from "./checkingFunction";

function getPlayerTurn(playerTurn) {
  let currentPlayer = "X";
  if (playerTurn.length !== 0 && playerTurn[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [playersName, setPlayersName] = useState(PLAYERS);
  const [playerTurn, setPlayerTurn] = useState([]);

  const gameBoard = [...INITIAL_GAME_BOARD.map((rows) => [...rows])];
  const endResult = checkWinOrDraw(playerTurn, gameBoard, playersName);

  const handlePlayerMove = (rowIdx, colIdx) => {
    setPlayerTurn((prevValue) => {
      const newValue = [
        {
          player: getPlayerTurn(playerTurn),
          cell: { row: rowIdx, col: colIdx },
        },
        ...prevValue,
      ];
      return newValue;
    });
  };

  const handleRestart = () => {
    setPlayerTurn((prev) => []);
    endResult;
  };

  const handlePlayerEdit = (symbol, newName) => {
    setPlayersName((prevName) => {
      const newPlayersName = { ...prevName };
      newPlayersName[symbol] = newName.toUpperCase();
      return newPlayersName;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerDetail
            name={playersName.X}
            symbol="X"
            isActive={getPlayerTurn(playerTurn) === "X"}
            editName={handlePlayerEdit}
          />
          <PlayerDetail
            name={playersName.O}
            symbol="O"
            isActive={getPlayerTurn(playerTurn) === "O"}
            editName={handlePlayerEdit}
          />
        </ol>
        <GameBoard
          playerTurn={playerTurn}
          playerMove={handlePlayerMove}
          gameBoard={gameBoard}
        />
        {endResult && (
          <GameOver endResult={endResult} restart={handleRestart}></GameOver>
        )}
      </div>
      <Log playerTurn={playerTurn}></Log>
    </main>
  );
}

export default App;
