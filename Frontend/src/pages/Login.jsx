import React, { useState } from "react";
import { handleLogin } from "../services/authServices";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formData.email, formData.password);
    navigate("/dashboard");
  };
  return (
    <>
      <div>
        <h1>Login Form</h1>
        <div>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <label htmlFor="">Email:</label>
            <input
              type="mail"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => {
                handleInput(e);
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => {
                handleInput(e);
              }}
            />

            <button className="bg-3d px-4 py-1 rounded">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
