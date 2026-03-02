import { useNavigate } from "react-router-dom";
import { createTask } from "../services/taskService";
import { useContext } from "react";
import { userContext } from "../context/AuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function CreatTask() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    assignedTo: "",
    dueDate: "",
  });

  const handleInput = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, res } = await createTask(form);
    console.log(data);
    console.log(res);
    if (res && res.status === 201) {
      navigate("/dashboard");
      return data.message;
    }
  };
  const { loading } = useContext(userContext);
  if (loading) {
    return <h2 className="flex-center text-2xl h-screen">Loading...</h2>;
  }

  return (
    <>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">
          <h2 className="text-2xl font-bold text-blue-600 mb-8">EMS</h2>
          <nav className="space-y-4 text-gray-700 flex flex-col ">
            <Link to="/dashboard">
              <p className="hover:text-blue-600 cursor-pointer font-medium">
                Dashboard
              </p>
            </Link>
            <Link>
              <p className="hover:text-blue-600 cursor-pointer">My Tasks</p>
            </Link>
            <Link to="/auth/register">
              <p className="hover:text-blue-600 cursor-pointer">Create User</p>
            </Link>
            <Link to="/task/create">
              <p className="hover:text-blue-600 cursor-pointer">Assign Task</p>
            </Link>
            <Link to="">
              <p className="hover:text-blue-600 cursor-pointer">Settings</p>
            </Link>
          </nav>
        </aside>

        {/* Main Area */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <Navbar />

          {/* Content */}
          <main className=" overflow-y-auto">
            <div className=" h-167 w-full col-center">
              <h1 className="font-bold text-3xl mb-6">Assign Task</h1>
              <form
                className="flex flex-col gap-4 p-8 w-180 shadow-2xl  h-110  overflow-auto"
                onSubmit={(e) => handleSubmit(e)}
              >
                <div className="flex justify-between gap-2">
                  <div className="flex gap-2">
                    <h1 className="text-xl capitalize font-semibold">Title:</h1>
                    <input
                      type="text"
                      className="text-lg p-0.5"
                      placeholder="enter title of task"
                      name="title"
                      value={form.title}
                      onChange={(e) => handleInput(e)}
                    />
                  </div>

                  <div className="flex justify-between gap-2">
                    <h1 className="text-xl capitalize font-semibold">
                      Assigned to:
                    </h1>
                    <input
                      name="assignedTo"
                      className="text-lg p-0.5"
                      type="text"
                      value={form.assignedTo}
                      onChange={(e) => handleInput(e)}
                      placeholder="who's task is this for ?"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-xl capitalize font-semibold">
                    description:
                  </h1>
                  <textarea
                    cols={50}
                    rows={10}
                    className="text-lg p-0.5"
                    name="description"
                    type="text"
                    placeholder="enter description of task"
                    value={form.description}
                    onChange={(e) => handleInput(e)}
                  />
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-0.5 items-center">
                    <h1 className="text-xl capitalize font-semibold">
                      Due Date:
                    </h1>
                    <input
                      className="pt-0.5"
                      name="dueDate"
                      type="date"
                      value={form.dueDate}
                      onChange={(e) => handleInput(e)}
                      placeholder="who's task is this for ?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#0F172A] text-white hover:bg-[#2a437d] rounded px-4"
                  >
                    submit
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
