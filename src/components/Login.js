import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import API from "../API";
// Components
import Button from "./Button";
// Styles
import { Wrapper } from "./Login.styles";
// Context
import { Context } from "../context";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [user, setUser] = useContext(Context);
  const history = useHistory();

  const handleSubmit = async () => {
    setError(false);
    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(
        requestToken,
        username,
        password
      );

      console.log(sessionId);

      setUser({ sessionId: sessionId.session_id, username });

      history.push("/");
    } catch (error) {
      setError(true);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.currentTarget;

    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };

  return (
    <Wrapper>
      {error && <div className="error"> There was an error</div>}
      <label>Username:</label>
      <input
        type="text"
        value={username}
        name="username"
        onChange={handleInput}
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        name="password"
        onChange={handleInput}
      />
      <Button text="Login" callback={handleSubmit} />
    </Wrapper>
  );
};

export default Login;
