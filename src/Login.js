import React, { useState } from "react";

function useLogin() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function inputChange(event) {
    const { name, type, value, checked } = event.target;

    setData({
      [name]: type === "checkbox" ? checked : value,
    });
  }
  return {
    data: data,
    onInputChange: inputChange,
  };
}

export const Login = ({ username, password }) => {
  const { data, onInputChange } = useLogin(username, password);

  return (
    <form>
      <input onChange={onInputChange} value={data.username} name="username" />
      <input
        onChange={onInputChange}
        type="password"
        value={data.password}
        name="password"
      />
      <input
        onChange={onInputChange}
        checked={data.remember}
        type="checkbox"
        name="remember"
      />
    </form>
  );
};
