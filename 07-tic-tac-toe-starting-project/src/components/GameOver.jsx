export default function GameOver({ winner, onReset }) {
    return (
        <div id="game-over">
        <h2>{winner ? `${winner.name} wins!` : "It's a draw!"}</h2>
        <button onClick={onReset}>Play Again</button>
        </div>
    );
}