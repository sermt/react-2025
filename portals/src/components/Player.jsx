import { useRef, useState } from "react";

export default function Player() {
  const playerNameInput = useRef(null);
  const [playerName, setPlayerName] = useState("unknown entity");
  const [isSaved, setIsSaved] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [playerLevel, setPlayerLevel] = useState(1);

  const handleChangeName = () => {
    if (isSaved) setIsSaved(false);
  };

  const handleSubmit = () => {
    const name = playerNameInput.current.value;
    if (name.trim()) {
      setPlayerName(name.trim());
      setIsSaved(true);
    } else {
      alert("Please enter a name");
    }
  };

  return (
    <section id="player">
      <h2>Welcome {isSaved ? playerName : "unknown entity"}</h2>
      <p>
        <input
          ref={playerNameInput}
          type="text"
          onChange={handleChangeName}
        />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
