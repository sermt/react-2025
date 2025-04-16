import React, { useCallback, useRef, useState } from "react";
import QUESTIONS from "../questions";
import quizzCompletedImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

export default function Quizz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [userAnswer, setUserAnswer] = useState({
    selectedAnswer: null,
    isCorrect: false,
    isSelected: false,
  });

  const isQuizzCompleted = userAnswers.length === QUESTIONS.length;
  const activeQuestion = QUESTIONS[userAnswers.length];

  const selectedHandler = useCallback(
    (selectedAnswer = null) => {
      const isCorrect = selectedAnswer === activeQuestion.answers[0];
      const updatedAnswer = {
        selectedAnswer,
        isCorrect,
        isSelected: selectedAnswer !== null,
      };

      setUserAnswer(updatedAnswer);

      setTimeout(() => {
        setUserAnswers((prev) => [...prev, updatedAnswer]);
        setUserAnswer({
          selectedAnswer: null,
          isCorrect: false,
          isSelected: false,
        });
      }, 1000);
    },
    [userAnswers.length]
  );

  if (isQuizzCompleted) {
    return (
      <section>
        <header>
          <h2>Quizz completed</h2>
          <img src={quizzCompletedImg} alt="Quizz completed" />
        </header>
        <article>
          <h3>Your answers:</h3>
          <ul>
            {userAnswers.map((answer, index) => (
              <li key={index} className="answer">
                {answer.selectedAnswer}
              </li>
            ))}
          </ul>
        </article>
      </section>
    );
  }

  return (
    <section id="quiz">
      <article className="question">
        <QuestionTimer
          key={userAnswers.length}
          timeout={5000}
          onTimeout={selectedHandler}
        />
        <header>
          <h2>{activeQuestion.text}</h2>
        </header>
        <Answers
          answers={activeQuestion.answers}
          userAnswer={userAnswer}
          onSelected={selectedHandler}
          key={userAnswers.length + "keyId"}
        />
      </article>
    </section>
  );
}
