import React, { useState } from "react";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();

  return (
    <div>
      <h1>
        Add New Transaction
        <p>Text</p>
        <form action="form">
          <input
            type="text"
            className="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Enter text..."
          ></input>
          <p>Amount</p>
          <input
            type="number"
            className="amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            placeholder="Enter amount..."
          />
          <button className="btn">Add Transaction</button>
        </form>
      </h1>
    </div>
  );
}
export default AddTransaction;
