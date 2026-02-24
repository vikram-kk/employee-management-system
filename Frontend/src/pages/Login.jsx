import { useState } from "react";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await handleLogin(formData.email, formData.password);
    console.log(response);
    console.log(response.status);

    if (response && response.status === 200) {
      navigate("/dashboard");
    }
  };
  return (
    <>
      <div className="bg-[#0F172A] text-white h-screen w-full col-center ">
        <div className="bg-[#1E293B] p-8 pb-18 rounded-2xl">
          <h1 className="text-center p-6 text-3xl font-bold">Login Form</h1>
          <div className="">
            <form
              className="col-center gap-4 "
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <input
                className="text-2xl bg-gray-300 p-2 rounded-2xl text-black"
                type="mail"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => {
                  handleInput(e);
                }}
              />

              <input
                className="text-2xl bg-gray-300 p-2 rounded-2xl text-black"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => {
                  handleInput(e);
                }}
              />

              <button className="bg-3d px-4 py-1 rounded bg-gray-200 text-2xl text-black">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
