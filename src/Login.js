import React, { useState } from "react";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleInputChange(event) {
    const { name, type, value, checked } = event.target;
    setData({
      [name]: type === "checkbox" ? checked : value,
    });
  }

  return (
    <form>
      <input
        onChange={handleInputChange}
        value={data.username}
        name="username"
      />
      <input
        onChange={handleInputChange}
        type="password"
        value={data.password}
        name="password"
      />
      <input
        onChange={handleInputChange}
        checked={data.remember}
        type="checkbox"
        name="remember"
      />
    </form>
  );
}
