import { useState } from "react";

export default function GameBoard({ playerMove, gameBoard, updateCell }) {
  const handleClickedCell = (rowIndex, colIndex) => {
    playerMove(rowIndex, colIndex);
  };

  return (
    <ol id="game-board">
      {gameBoard.map((value, idxValue) => (
        <ol key={idxValue}>
          {value.map((item, idxItem) => (
            <li key={`${idxValue}-${idxItem}`}>
              <button
                onClick={() => handleClickedCell(idxValue, idxItem)}
                disabled={item !== null}
              >
                {item}
              </button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
}
