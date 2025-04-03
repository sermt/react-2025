import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import WINNING_COMBINATIONS from "./winning-combinations";

function App() {
  const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const initialPlayers = [
    { id: 1, name: "Player 1", symbol: "X" },
    { id: 2, name: "Player 2", symbol: "O" },
  ];

  const [logs, setLogs] = useState([]);
  const [players, setPlayers] = useState(initialPlayers);
  const [board, setBoard] = useState(initialBoard);
  const [winner, setWinner] = useState(null);

  const currentPlayer = players[logs.length % 2];

  const handleReset = () => {
    setLogs([]);
    setWinner(null);
    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
  };

  const handleCellClick = (rowIndex, cellIndex) => {
    if (board[rowIndex][cellIndex] !== null || winner) return;

    const newBoard = structuredClone(board);
    newBoard[rowIndex][cellIndex] = currentPlayer.symbol;
    setBoard(newBoard);

    const hasWon = WINNING_COMBINATIONS.some((combination) =>
      combination.every(
        ({ row, column }) => newBoard[row][column] === currentPlayer.symbol
      )
    );

    const isDraw = newBoard.every((row) => row.every((cell) => cell !== null));

    if (hasWon) {
      setWinner(currentPlayer);
      handleLogs(rowIndex, cellIndex, true);
    } else {
      handleLogs(rowIndex, cellIndex);
      if (isDraw) alert("It's a draw!");
    }
  };

  const handleLogs = (rowIndex, cellIndex, isWinner = false) => {
    const newLog = {
      message: `${currentPlayer.name} selected cell [${rowIndex}, ${cellIndex}]`,
      player: currentPlayer,
      cell: [rowIndex, cellIndex],
      isWinner,
    };

    setLogs((oldLogs) => [...oldLogs, newLog]);
  };

  const handleEditPlayer = (player) => {
    const newPlayers = [...players];
    newPlayers.find((p) => p.id === player.id).name = player.name;
    setPlayers(newPlayers);
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {players.map((player, index) => (
            <Player
              key={index}
              index={index}
              player={player}
              isActive={currentPlayer.name === player.name}
              onEditPlayer={handleEditPlayer}
            />
          ))}
        </ol>
        <GameBoard
          board={board}
          onSelect={handleCellClick}
        />
      </div>
      {winner && <GameOver winner={winner} onReset={handleReset} />}
      <button onClick={handleReset}>Reset</button>
      <Log logs={logs} />
    </main>
  );
}

export default App;
