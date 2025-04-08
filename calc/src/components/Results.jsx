import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const results = calculateInvestmentResults(input);
  const initialInvestment =
    results[0].valueEndOfYear - results[0].year - results[0].annualInvestment;

  return (
    <section id="results">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>
                {formatter.format(
                  result.valueEndOfYear -
                    result.annualInvestment * result.year -
                    initialInvestment
                )}
              </td>
              <td>
                {formatter.format(
                  result.valueEndOfYear -
                    (result.valueEndOfYear -
                      result.annualInvestment * result.year -
                      initialInvestment)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
