import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleLogin = (event) => {
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;
    const value = event.target.value;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleLogin}
          name="username"
          type="username"
          placeholder="whrite your name"
          value={this.state.username}
        ></input>
        <input
          onChange={this.handleLogin}
          name="password"
          type="password"
          placeholder="whrite your password"
          value={this.state.password}
        ></input>
        <input
          onChange={this.handleLogin}
          name="remember"
          type="checkbox"
          checked={this.state.remember}
        ></input>
      </div>
    );
  }
}
