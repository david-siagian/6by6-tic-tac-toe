export default function GameOver({ endResult, restart }) {
  const handleRestart = () => {
    restart();
  };

  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{endResult}</p>
      <button type="button" onClick={restart}>
        Restart!
      </button>
    </div>
  );
}
