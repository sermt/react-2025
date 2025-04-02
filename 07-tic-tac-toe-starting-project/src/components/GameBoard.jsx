import React, { useState } from "react";

export default function GameBoard({ currentPlayer, handleSelectPlayer }) {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const handleClick = (rowIndex, cellIndex) => {
    handleSelectPosition(rowIndex, cellIndex);
  };

  const handleSelectPosition = (rowIndex, cellIndex) => {
    if (board[rowIndex][cellIndex] !== null) return;

    setBoard((oldBoard) => {
      const newBoard = structuredClone(oldBoard);
        newBoard[rowIndex][cellIndex] = currentPlayer.symbol;

      return newBoard;
    });
    handleSelectPlayer();
  };

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex} className="game-row">
          <ol>
            {row.map((cell, cellIndex) => (
              <li key={cellIndex} className="game-cell">
                <button
                  disabled={!!cell}
                  onClick={() => handleClick(rowIndex, cellIndex)}
                >
                  {cell}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
