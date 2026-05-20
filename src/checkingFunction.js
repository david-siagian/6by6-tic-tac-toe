import { WINNING_COMBINATIONS } from "./data";

export function checkWinOrDraw(playerTurn, gameBoard, playersName) {
  deriveGameBoard(playerTurn, gameBoard);

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];
    const fourthSquareSymbol =
      gameBoard[combination[3].row][combination[3].col];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol &&
      firstSquareSymbol === fourthSquareSymbol
    ) {
      return `${playersName[firstSquareSymbol]} won!`;
    }
  }
  // checking draw condition
  if (playerTurn.length === 36) {
    return "Game Draw";
  }
}

function deriveGameBoard(playerTurn, gameBoard) {
  for (const result of playerTurn) {
    const {
      player,
      cell: { row, col },
    } = result;
    gameBoard[row][col] = player;
  }
}
