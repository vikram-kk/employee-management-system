import { useContext, useState, useEffect } from "react";
import { userContext } from "../context/AuthContext";
import { handleLogin } from "../services/authServices";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const { login, user, loading } = useContext(userContext);

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
    const { res, data } = await handleLogin(formData.email, formData.password);
    console.log(data);
    console.log(res);
    login(data.user);
    if (res && res.status === 200) {
      navigate("/dashboard");
    }
  };
  if (loading) {
    return (
      <h2 className="text-2xl font-bold flex-center h-screen">Loading...</h2>
    );
  }
  const token = localStorage.getItem("token");
  if (user && token) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <>
      <div className="bg-white h-screen w-full col-center ">
        <div className="shadow-2xl p-8 pb-18 rounded-2xl">
          <h1 className="text-center p-6 text-3xl font-bold">Login Form</h1>
          <div className="">
            <form
              className="col-center gap-4 "
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <input
                className="text-xl bg-gray-300 pl-4 p-2 rounded-2xl text-black"
                type="mail"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => {
                  handleInput(e);
                }}
              />

              <input
                className="text-xl bg-gray-300 pl-4 p-2 rounded-2xl text-black"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => {
                  handleInput(e);
                }}
              />

              <button className="shadow-lg px-4 py-1 w-full rounded bg-gray-200 hover:bg-gray-500 text-lg text-black">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
