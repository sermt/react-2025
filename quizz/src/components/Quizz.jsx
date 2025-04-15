import React from "react";
import QUESTIONS from "../questions";
import quizzCompletedImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

export default function Quizz() {
  const [userAswers, setUserAnswers] = React.useState([]);
  const [questions, setQuestions] = React.useState(QUESTIONS);
  const isQuizzCompleted = userAswers.length === questions.length;
  const selectedHandler = (selectedAnswer = null) => {
    setUserAnswers((prev) => [...prev, selectedAnswer]);
  };
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
            {userAswers.map((answer, index) => (
              <li key={index} className="answer">
                {answer}
              </li>
            ))}
          </ul>
        </article>
      </section>
    );
  }

  const activeQuestion = questions[userAswers.length];
  const activeQuestionShuffledAnswers = [...activeQuestion.answers].sort(
    () => Math.random() - 0.5
  );
  return (
    <section id="quiz">
      <article className="question">
        <QuestionTimer timeout={5000} onTimeout={selectedHandler} />
        <header>
          <h2>{activeQuestion.text}</h2>
        </header>
        <ul id="answers">
          {activeQuestionShuffledAnswers.map((answer, index) => (
            <li key={index} className="answer">
              <button onClick={() => selectedHandler(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
