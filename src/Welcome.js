import React from "react";
import Age from "./Age";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>
          Welcome <strong>{this.props.name}</strong> !
        </p>
        <Age age={15} />
      </div>
    );
  }
}
Welcome.defaultProps = {
  name: "simone",
};
export default Welcome;
