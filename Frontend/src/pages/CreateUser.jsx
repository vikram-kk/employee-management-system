import { useState } from "react";
import { handleSignup } from "../services/authServices";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

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
  const { loading } = useContext(userContext);
  if (loading) {
    return <h2 className="flex-center text-2xl h-screen">Loading...</h2>;
  }
  return (
    <>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Area */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <Navbar />

          {/* Content */}
          <main className=" overflow-y-auto">
            <div className="h-167 w-full col-center ">
              <div className=" rounded w-full col-center">
                <h1 className="text-3xl text-center text-black font-bold mb-4">
                  Create User
                </h1>
                <form
                  onSubmit={handleCreate}
                  className="shadow-2xl p-8 w-1/2 rounded"
                >
                  {inputs.map((input, index) => (
                    <div
                      className="flex gap-4 justify-between items-center"
                      key={index}
                    >
                      <div>
                        <h2 className="capitalize text-xl text-black">
                          {input.name}:
                        </h2>
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
          </main>
        </div>
      </div>
    </>
  );
}
