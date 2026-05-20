export const INITIAL_GAME_BOARD = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
];

export const PLAYERS = {
  X: "PLAYER 1",
  O: "PLAYER 2",
};

export const WINNING_COMBINATIONS = [
  // Horizontal wins (4 in a row, left to right)
  // Row 0
  [
    { row: 0, col: 0 },
    { row: 0, col: 1 },
    { row: 0, col: 2 },
    { row: 0, col: 3 },
  ],
  [
    { row: 0, col: 1 },
    { row: 0, col: 2 },
    { row: 0, col: 3 },
    { row: 0, col: 4 },
  ],
  [
    { row: 0, col: 2 },
    { row: 0, col: 3 },
    { row: 0, col: 4 },
    { row: 0, col: 5 },
  ],
  // Row 1
  [
    { row: 1, col: 0 },
    { row: 1, col: 1 },
    { row: 1, col: 2 },
    { row: 1, col: 3 },
  ],
  [
    { row: 1, col: 1 },
    { row: 1, col: 2 },
    { row: 1, col: 3 },
    { row: 1, col: 4 },
  ],
  [
    { row: 1, col: 2 },
    { row: 1, col: 3 },
    { row: 1, col: 4 },
    { row: 1, col: 5 },
  ],
  // Row 2
  [
    { row: 2, col: 0 },
    { row: 2, col: 1 },
    { row: 2, col: 2 },
    { row: 2, col: 3 },
  ],
  [
    { row: 2, col: 1 },
    { row: 2, col: 2 },
    { row: 2, col: 3 },
    { row: 2, col: 4 },
  ],
  [
    { row: 2, col: 2 },
    { row: 2, col: 3 },
    { row: 2, col: 4 },
    { row: 2, col: 5 },
  ],
  // Row 3
  [
    { row: 3, col: 0 },
    { row: 3, col: 1 },
    { row: 3, col: 2 },
    { row: 3, col: 3 },
  ],
  [
    { row: 3, col: 1 },
    { row: 3, col: 2 },
    { row: 3, col: 3 },
    { row: 3, col: 4 },
  ],
  [
    { row: 3, col: 2 },
    { row: 3, col: 3 },
    { row: 3, col: 4 },
    { row: 3, col: 5 },
  ],
  // Row 4
  [
    { row: 4, col: 0 },
    { row: 4, col: 1 },
    { row: 4, col: 2 },
    { row: 4, col: 3 },
  ],
  [
    { row: 4, col: 1 },
    { row: 4, col: 2 },
    { row: 4, col: 3 },
    { row: 4, col: 4 },
  ],
  [
    { row: 4, col: 2 },
    { row: 4, col: 3 },
    { row: 4, col: 4 },
    { row: 4, col: 5 },
  ],
  // Row 5
  [
    { row: 5, col: 0 },
    { row: 5, col: 1 },
    { row: 5, col: 2 },
    { row: 5, col: 3 },
  ],
  [
    { row: 5, col: 1 },
    { row: 5, col: 2 },
    { row: 5, col: 3 },
    { row: 5, col: 4 },
  ],
  [
    { row: 5, col: 2 },
    { row: 5, col: 3 },
    { row: 5, col: 4 },
    { row: 5, col: 5 },
  ],

  // Vertical wins (4 in a row, top to bottom)
  // Col 0
  [
    { row: 0, col: 0 },
    { row: 1, col: 0 },
    { row: 2, col: 0 },
    { row: 3, col: 0 },
  ],
  [
    { row: 1, col: 0 },
    { row: 2, col: 0 },
    { row: 3, col: 0 },
    { row: 4, col: 0 },
  ],
  [
    { row: 2, col: 0 },
    { row: 3, col: 0 },
    { row: 4, col: 0 },
    { row: 5, col: 0 },
  ],
  // Col 1
  [
    { row: 0, col: 1 },
    { row: 1, col: 1 },
    { row: 2, col: 1 },
    { row: 3, col: 1 },
  ],
  [
    { row: 1, col: 1 },
    { row: 2, col: 1 },
    { row: 3, col: 1 },
    { row: 4, col: 1 },
  ],
  [
    { row: 2, col: 1 },
    { row: 3, col: 1 },
    { row: 4, col: 1 },
    { row: 5, col: 1 },
  ],
  // Col 2
  [
    { row: 0, col: 2 },
    { row: 1, col: 2 },
    { row: 2, col: 2 },
    { row: 3, col: 2 },
  ],
  [
    { row: 1, col: 2 },
    { row: 2, col: 2 },
    { row: 3, col: 2 },
    { row: 4, col: 2 },
  ],
  [
    { row: 2, col: 2 },
    { row: 3, col: 2 },
    { row: 4, col: 2 },
    { row: 5, col: 2 },
  ],
  // Col 3
  [
    { row: 0, col: 3 },
    { row: 1, col: 3 },
    { row: 2, col: 3 },
    { row: 3, col: 3 },
  ],
  [
    { row: 1, col: 3 },
    { row: 2, col: 3 },
    { row: 3, col: 3 },
    { row: 4, col: 3 },
  ],
  [
    { row: 2, col: 3 },
    { row: 3, col: 3 },
    { row: 4, col: 3 },
    { row: 5, col: 3 },
  ],
  // Col 4
  [
    { row: 0, col: 4 },
    { row: 1, col: 4 },
    { row: 2, col: 4 },
    { row: 3, col: 4 },
  ],
  [
    { row: 1, col: 4 },
    { row: 2, col: 4 },
    { row: 3, col: 4 },
    { row: 4, col: 4 },
  ],
  [
    { row: 2, col: 4 },
    { row: 3, col: 4 },
    { row: 4, col: 4 },
    { row: 5, col: 4 },
  ],
  // Col 5
  [
    { row: 0, col: 5 },
    { row: 1, col: 5 },
    { row: 2, col: 5 },
    { row: 3, col: 5 },
  ],
  [
    { row: 1, col: 5 },
    { row: 2, col: 5 },
    { row: 3, col: 5 },
    { row: 4, col: 5 },
  ],
  [
    { row: 2, col: 5 },
    { row: 3, col: 5 },
    { row: 4, col: 5 },
    { row: 5, col: 5 },
  ],

  // Diagonal wins (top-left to bottom-right ↘)
  [
    { row: 0, col: 0 },
    { row: 1, col: 1 },
    { row: 2, col: 2 },
    { row: 3, col: 3 },
  ],
  [
    { row: 0, col: 1 },
    { row: 1, col: 2 },
    { row: 2, col: 3 },
    { row: 3, col: 4 },
  ],
  [
    { row: 0, col: 2 },
    { row: 1, col: 3 },
    { row: 2, col: 4 },
    { row: 3, col: 5 },
  ],
  [
    { row: 1, col: 0 },
    { row: 2, col: 1 },
    { row: 3, col: 2 },
    { row: 4, col: 3 },
  ],
  [
    { row: 1, col: 1 },
    { row: 2, col: 2 },
    { row: 3, col: 3 },
    { row: 4, col: 4 },
  ],
  [
    { row: 1, col: 2 },
    { row: 2, col: 3 },
    { row: 3, col: 4 },
    { row: 4, col: 5 },
  ],
  [
    { row: 2, col: 0 },
    { row: 3, col: 1 },
    { row: 4, col: 2 },
    { row: 5, col: 3 },
  ],
  [
    { row: 2, col: 1 },
    { row: 3, col: 2 },
    { row: 4, col: 3 },
    { row: 5, col: 4 },
  ],
  [
    { row: 2, col: 2 },
    { row: 3, col: 3 },
    { row: 4, col: 4 },
    { row: 5, col: 5 },
  ],

  // Diagonal wins (top-right to bottom-left ↙)
  [
    { row: 0, col: 3 },
    { row: 1, col: 2 },
    { row: 2, col: 1 },
    { row: 3, col: 0 },
  ],
  [
    { row: 0, col: 4 },
    { row: 1, col: 3 },
    { row: 2, col: 2 },
    { row: 3, col: 1 },
  ],
  [
    { row: 0, col: 5 },
    { row: 1, col: 4 },
    { row: 2, col: 3 },
    { row: 3, col: 2 },
  ],
  [
    { row: 1, col: 3 },
    { row: 2, col: 2 },
    { row: 3, col: 1 },
    { row: 4, col: 0 },
  ],
  [
    { row: 1, col: 4 },
    { row: 2, col: 3 },
    { row: 3, col: 2 },
    { row: 4, col: 1 },
  ],
  [
    { row: 1, col: 5 },
    { row: 2, col: 4 },
    { row: 3, col: 3 },
    { row: 4, col: 2 },
  ],
  [
    { row: 2, col: 3 },
    { row: 3, col: 2 },
    { row: 4, col: 1 },
    { row: 5, col: 0 },
  ],
  [
    { row: 2, col: 4 },
    { row: 3, col: 3 },
    { row: 4, col: 2 },
    { row: 5, col: 1 },
  ],
  [
    { row: 2, col: 5 },
    { row: 3, col: 4 },
    { row: 4, col: 3 },
    { row: 5, col: 2 },
  ],
];
