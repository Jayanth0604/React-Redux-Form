import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "./userActions";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = () => {
    const userData = {
      email: email,
      name: name,
      password: password
    };
    if (email === "" || name === "" || password === "") {
      alert("Fill all the Fields");
    } else {
      navigate("/LoginPage");
    }

    dispatch(registerUser(userData));
  };

  return (
    <div className="regis-form">
      <h1>Register Form</h1>
      <input
        className="reg-inp"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="reg-inp"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="reg-inp"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="reg-btn" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default RegisterPage;
