import React from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [isRunning, setIsRunning] = React.useState(false);
  const [isFinished, setIsFinished] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const timerId = React.useRef(null);
  const modalRef = React.useRef(null);

  function handleStartStop() {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(timerId.current);
    } else {
      setIsRunning(true);
      timerId.current = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime + 1;
          if (newTime >= targetTime) {
            clearInterval(timerId.current);
            setIsRunning(false);
            setIsFinished(true);
          }
          return newTime;
        });
      }, 1000);
    }
  }

  React.useEffect(() => {
    if (isFinished && modalRef.current) {
      modalRef.current.showModal();
    }
  }, [isFinished]);
  
  function handleReset() {
    clearInterval(timerId.current);
    setTime(0);
    setIsRunning(false);
    setIsFinished(false);
  }

  const result = time === targetTime ? "won" : "lost";

  return (
    <>
      {isFinished && (
        <ResultModal targetTime={targetTime} ref={modalRef} result={result} />
      )}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenger-time">
          {targetTime} second{targetTime !== 1 ? "s" : ""}
        </p>
        <p className="challenger-time">
          {isFinished
            ? "Challenge completed!"
            : isRunning
            ? "Challenge in progress..."
            : "Ready to start!"}
        </p>
        <p>Elapsed Time: {time}</p>
        <p>
          <button onClick={handleStartStop}>
            {isRunning ? "Stop" : "Start"} Challenge
          </button>
          <button onClick={handleReset}>Reset</button>
        </p>
        <p>{isRunning ? "Timer is running" : "Timer is inactive"}</p>
      </section>
    </>
  );
}
