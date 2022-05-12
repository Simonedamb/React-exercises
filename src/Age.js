import React from "react";

class Age extends React.Component {
  render() {
    return (
      <div>
        {this.props.age > 18 &&
        this.props.age < 65 &&
        this.props.name === "John" ? (
          <div>
            <p>"Your age is : {this.props.age} "</p>
            <p>"Your name is: {this.props.name} "</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Age;
