import { useState } from "react";

export default function Player({ player, index, isActive, onEditPlayer }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <li key={index} className={isActive ? "active" : ""}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={player.name}
            required
            onChange={(e) => {
              player.name = e.target.value;
              onEditPlayer(player);
            }}
          />
        ) : (
          <span className="player-name">{player.name}</span>
        )}
        <span className="player-symbol">{player.symbol}</span>
      </span>
      <button onClick={() => setIsEditing((value) => !value)}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
