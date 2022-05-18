import React from "react";
const Sum = ({ numbers = [10, 10] }) => {
  const result = numbers.reduce((a, b) => a + b, 0);
  return (
    <div>
      <h1>Il totale è : {result} </h1>
    </div>
  );
};

export default Sum;
