import React from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  console.log("timer");
  const [remainingTime, setRemainingTime] = React.useState(timeout);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      onTimeout();
    }, timeout);

    return () => clearTimeout(timer);
  }, [timeout, onTimeout]);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prev) => prev - 100);
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
