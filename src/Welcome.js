import React from "react";
import Age from "./Age";

const Welcome = ({ name }) => {
  return (
    <div className="welcome">
      <p>Welcome! {name}</p>
      <Age age={10} name="John" />
    </div>
  );
};
export default Welcome;
