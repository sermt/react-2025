import React from "react";
import quizzLogo from "../assets/images/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={quizzLogo} alt="Quizz app logo" />
      <h1>React Quizz</h1>
    </header>
  );
}
