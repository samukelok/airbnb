import React, { useState } from "react";

export default function ExampleIsland({ fieldValues }) {
  const [num1, setNum1] = useState(parseInt(fieldValues.num1, 10));
  const [num2, setNum2] = useState(parseInt(fieldValues.num2, 10));

  const sumTotal = () => num1 + num2;

  const incrementTotal = () => {
    setNum1(prev => prev + 1);
  };

  return (
    <div>
      <h1>Island Sum Tool</h1>

      <p>{num1}</p>
      <p>{num2}</p>

      <button onClick={incrementTotal}>Increment</button>
      <p>Total = {sumTotal()}</p>
    </div>
  );
}
