import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((transaction) => transaction.amount);

  const totalIncome = amount
    .filter((transaction) => transaction > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const totalExpense = amount
    .filter((transaction) => transaction < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  return (
    <div className="income-expense-container">
      <div className="income">${totalIncome}</div>
      <div className="expense">${totalExpense}</div>
    </div>
  );
}
export default IncomeExpense;
