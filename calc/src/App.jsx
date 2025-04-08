import React from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

function App() {
  const initialValues = {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  };
  const [userInput, setUserInput] = React.useState(initialValues);

  const isUserInputValid = Object.values(userInput).every(
    (value) => value !== "" && value > 0
  );

  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange={setUserInput} />
   { isUserInputValid && <Results input={userInput} />}
    </>
  )
}

export default App
