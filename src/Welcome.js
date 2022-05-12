import React from "react";
import Age from "./Age";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>
          Welcome <strong>{this.props.name}</strong> !
        </p>
        <Age age={60} name="John" />
      </div>
    );
  }
}
Welcome.defaultProps = {
  name: "simone",
};
export default Welcome;
