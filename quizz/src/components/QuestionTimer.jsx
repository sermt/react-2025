import React from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = React.useState(timeout);

  const intervalId = React.useRef(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      onTimeout();
    }, timeout);

    return () => clearTimeout(timer);
  }, [timeout, onTimeout]);

  React.useEffect(() => {
    intervalId.current = setInterval(() => {
      setRemainingTime((prev) => prev - 100);
    }, 100);

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);
  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
