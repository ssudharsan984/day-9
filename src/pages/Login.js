import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={submit}>Login</button>
    </div>
  );
}

export default Login;