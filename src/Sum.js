import React from "react";
const Sum = (props) => {
  const result = props.numbers.reduce((a, b) => a + b, 0);
  return (
    <div>
      <h1>Il totale è : {result} </h1>
    </div>
  );
};

export default Sum;
