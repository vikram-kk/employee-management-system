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
    const data = handleSignup(
      formData.email,
      formData.name,
      formData.password,
      formData.role,
    );
    console.log(data);
  };
  return (
    <>
      <div className="bg-[#0F172A] text-white h-screen w-full col-center ">
        <div className="  p-8 rounded py-10 bg-3d-white">
          <h1 className="text-3xl text-center font-bold mb-4">Create User</h1>
          <form onSubmit={handleCreate}>
            {inputs.map((input, index) => (
              <div
                className="flex gap-4 justify-between items-center"
                key={index}
              >
                <div>
                  <h2 className="capitalize text-xl">{input.name}</h2>
                </div>
                <div>
                  <input
                    className="bg-gray-400 text-black p-2 m-0.5 rounded focus:outline-none"
                    type={input.type}
                    placeholder={`Enter ${input.name}`}
                    name={input.name}
                    onChange={handleform}
                  />
                </div>
              </div>
            ))}

            <button className="bg-3d px-4 py-1 rounded bg-[#3B82F6] mt-4 w-full hover:bg-[#153e80]">
              Create Acc
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
