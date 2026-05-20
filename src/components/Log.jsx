export default function Log({ playerTurn }) {
  return (
    <ol id="log">
      {playerTurn.map((value) => {
        const {
          player,
          cell: { row, col },
        } = value; // destructuring the object
        return (
          <li key={`${row}-${col}`}>
            {player} clicked in cell {row + 1}
            {","}
            {col + 1}
          </li>
        );
      })}
    </ol>
  );
}
