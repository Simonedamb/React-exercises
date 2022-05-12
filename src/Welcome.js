import React from "react";
import Age from "./Age";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>
          Welcome <strong>{this.props.name}</strong> !
        </p>
        <Age age={this.props.age ? this.props.age : false} />
      </div>
    );
  }
}
Welcome.defaultProps = {
  name: "simone",
  age: 28,
};
export default Welcome;
