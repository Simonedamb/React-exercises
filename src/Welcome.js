import React from "react";
import Age from "./Age";
import Counter from "./Counter";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <p>
          Welcome <strong>{this.props.name}</strong> !
        </p>
        <Age age={10} name="John" />
      </div>
    );
  }
}
Welcome.defaultProps = {
  name: "simone",
};
export default Welcome;
