// Login.js

import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // handle login logic here
  };

  return (
    <div class="container">
      <form onSubmit={handleLogin}>
        <label class="loginLabel">
          Username:
          <br></br>
          <br></br>
          <input
            class="loginLabel"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <br></br>
        <br></br>
        <br></br>

        <label class="loginLabel">
          Password:
          <br></br>
          <br></br>
          <input
            class="center"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br></br>
        <br></br>
        <button class="defaultButton " type="submit">
          Login
        </button>
      </form>
      <br></br>
    </div>
  );
}

export default Login;
