import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
const players = [{name: 'Player 1', symbol: 'X'}, {name: 'Player 2', symbol: 'O'}];
const [currentPlayer, setCurrentPlayer] = useState(players[0]);

const handleSelectPlayer = () => {
  const nextPlayer = currentPlayer.symbol === "X" ? players[1] : players[0];
  setCurrentPlayer(nextPlayer);
}

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {players.map((player, index) => (
            <Player index={index} player={player} />
          ))}
        </ol>
       <GameBoard currentPlayer={currentPlayer} handleSelectPlayer={handleSelectPlayer} />
      </div>
      LOG
    </main>
  )
}

export default App
