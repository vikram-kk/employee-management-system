import { useState } from "react";
import { handleSignup } from "../services/authServices";
import { useNavigate } from "react-router-dom";

const inputs = [
  {
    name: "name",
    type: "text",
  },
  {
    name: "email",
    type: "email",
  },
  {
    name: "role",
    type: "text",
  },
  {
    name: "password",
    type: "password",
  },
];

export default function CreateUser() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    password: "",
  });

  const handleform = () => {
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreate = () => {
    event.preventDefault();
    handleSignup(
      formData.email,
      formData.name,
      formData.password,
      formData.role,
    );
    navigate("/dashboard");
  };
  return (
    <>
      <div>
        <h1>Create User</h1>
        <form onSubmit={handleCreate}>
          {inputs.map((input, index) => (
            <div key={index}>
              <label htmlFor={input.name}>{input.name}</label>
              <input
                type={input.type}
                placeholder={`Enter ${input.name}`}
                name={input.name}
                onChange={handleform}
              />
            </div>
          ))}

          <button className="bg-3d px-4 py-1 rounded">Create Acc</button>
        </form>
      </div>
    </>
  );
}
