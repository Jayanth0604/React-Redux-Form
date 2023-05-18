import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "./userActions";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const handleLogin = () => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      dispatch(loginUser(user));
      navigate("/userDetails");
    } else {
      alert("invalid email and password");
    }
  };

  return (
    <div>
      <div className="regis-form ">
        <h2>SucessFully Created Account</h2>
        <h1>Login</h1>
        <input
          className="reg-inp"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="reg-inp"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="reg-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
