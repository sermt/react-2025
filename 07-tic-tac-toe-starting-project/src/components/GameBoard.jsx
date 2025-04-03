import React from "react";

export default function GameBoard({ board, onSelect }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex} className="game-row">
          <ol>
            {row.map((cell, cellIndex) => (
              <li key={cellIndex} className="game-cell">
                <button
                  disabled={!!cell}
                  onClick={() => onSelect(rowIndex, cellIndex)}
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
