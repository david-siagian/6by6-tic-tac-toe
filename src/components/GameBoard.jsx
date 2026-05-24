import { useState } from "react";

export default function GameBoard({ playerMove, gameBoard, updateCell }) {
  const handleClickedCell = (rowIndex, colIndex) => {
    playerMove(rowIndex, colIndex);
  };

  return (
    <div id="game-board">
      {gameBoard.map((value, idxValue) => (
        <div key={idxValue} style={{ display: "flex", gap: "0" }}>
          {value.map((item, idxItem) => (
            <button
              key={`${idxValue}-${idxItem}`}
              onClick={() => handleClickedCell(idxValue, idxItem)}
              disabled={item !== null}
            >
              {item}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
