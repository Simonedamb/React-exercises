import React from "react";

class Age extends React.Component {
  render() {
    return (
      <div>{this.props.age && <p>"Your age is : 25 {this.props.age}"</p>}</div>
    );
  }
}

export default Age;
