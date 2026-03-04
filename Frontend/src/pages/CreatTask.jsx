import { useNavigate } from "react-router-dom";
import { createTask } from "../services/taskService";

import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function CreatTask() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    assignedTo: "",
    dueDate: "",
  });
  const [userList, setUserList] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchuserlist = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5001/staff/all/list", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        console.log(data);

        setUserList(data.staffList);
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        setLoading(false);
      }
    };
    fetchuserlist();
  }, []);
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
  if (loading) {
    return (
      <h2 className="font-bold text-2xl flex-center h-screen">Loading...</h2>
    );
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
                    <select
                      name="assignedTo"
                      className="border px-6 p-2 rounded focus:none overflow-x-scroll"
                      value={form.assignedTo}
                      onChange={handleInput}
                    >
                      <option value="">Select a user</option>
                      {userList.map((user, i) => (
                        <option key={user._id || i} value={user._id}>
                          {user.name}
                        </option>
                      ))}
                    </select>
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
