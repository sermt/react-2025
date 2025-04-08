import React from "react";

export default function UserInput({ userInput, onChange }) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            type="number"
            id="initial-investment"
            placeholder="Amount"
            required
            value={userInput.initialInvestment}
            onChange={(e) =>
              onChange({
                ...userInput,
                initialInvestment: +e.target.value,
              })
            }
          />
        </p>
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            type="number"
            id="expected-return"
            placeholder="Amount"
            required
            value={userInput.expectedReturn}
            onChange={(e) =>
              onChange({ ...userInput, expectedReturn: +e.target.value })
            }
          />
        </p>
        </div>
      <div className="input-group">
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            type="number"
            id="annual-investment"
            placeholder="Annual Investment"
            required
            value={userInput.annualInvestment}
            onChange={(e) =>
              onChange({ ...userInput, annualInvestment: +e.target.value })
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            placeholder="Duration"
            required
            value={userInput.duration}
            onChange={(e) =>
              onChange({ ...userInput, duration: +e.target.value })
            }
          />
        </p>
      </div>
    </section>
  );
}
