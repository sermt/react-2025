import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  let intervaId = useRef(null);

  const handleStart = () => {
    if (isActive) {
      setIsActive(false);
      clearInterval(intervaId.current);
      return;
    }

    setIsActive(true);
    intervaId.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const handleReset = () => {
    setTime(0);
    setIsActive(false);
    clearInterval(intervaId.current);
  };

  return (
    <section>
      <h1>Basic Exercise</h1>
      <p>Elapsed Time {time}</p>
      <div>
        <button onClick={handleStart}>{isActive ? "Stop" : "Start"}</button>
        {time > 0 && <button onClick={handleReset}>Reset</button>}
      </div>
    </section>
  );
}

export default App;
