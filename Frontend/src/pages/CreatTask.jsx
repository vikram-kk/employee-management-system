import { useNavigate } from "react-router-dom";
import { createTask } from "../services/taskService";
import { useState } from "react";

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
  return (
    <>
      <div className="bg-[#3B82F6] h-screen w-full col-center">
        <h1 className="font-bold text-3xl mb-6">Create Task</h1>
        <form
          className="flex flex-col gap-4 p-8  bg-[#7ba3ff] "
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
              <h1 className="text-xl capitalize font-semibold">Assigned to:</h1>
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
            <h1 className="text-xl capitalize font-semibold">description:</h1>
            <textarea
              cols={50}
              rows={5}
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
              <h1 className="text-xl capitalize font-semibold">Due Date:</h1>
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
    </>
  );
}
