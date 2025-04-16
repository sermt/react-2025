import React, { useRef } from "react";

export default function Answers({ userAnswer, answers, onSelected }) {
  const shuffledAnswers = useRef(null);
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers].sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer, index) => {
        let className = "";
        if (userAnswer.isSelected && userAnswer.selectedAnswer === answer) {
          className = userAnswer.isCorrect ? "correct" : "wrong";
        }
        return (
          <li key={index} className="answer">
            <button className={className} onClick={() => onSelected(answer)}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
