import React from "react";
import Age from "./Age";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>
          Welcome <strong>{this.props.name}</strong> !
        </p>
        {/* {this.props.age > 18 && <Age age={this.props.age} />} */}
        {/* {this.props.age && <Age age={this.props.age} />} */}
        {this.props.age > 18 && this.props.age < 65 ? (
          <Age age={this.props.age} />
        ) : null}
      </div>
    );
  }
}
Welcome.defaultProps = {
  name: "simone",
  age: 28,
};
export default Welcome;
