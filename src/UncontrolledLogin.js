import React, { createRef } from "react";

export class UcontrolledLogin extends React.Component {
  _formRef = createRef();
  handleFormSubmit = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;
    console.log({
      username,
      password,
      remember,
    });
  };
  handleLogIn = () => {
    this._formRef.current.elements.username.value = "simone";
    this._formRef.current.elements.password.value = "hello123";
    this._formRef.current.elements.remeber.checked = true;
  };
  render() {
    return (
      <div>
        <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
          <input name="username" defaultValue="" />
          <input name="password" type="password" />
          <input name="remember" type="checkbox" />

          <button type="submit">Login</button>
          <button type="reset">Reset</button>
          <button type="button" onClick={this.handleLogIn}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
