import { useState } from "react";
import { createTask } from "../services/taskService";

export default function CreatTask() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    assignedTo: "",
  });

  const handleInput = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const data = await createTask(form);
  };
  return (
    <>
      <div>
        <h1>Create Task</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1>Title</h1>
          <input
            type="text"
            placeholder="enter title of task"
            name="title"
            value={form.title}
            onChange={(e) => handleInput(e)}
          />
          <h1>description</h1>
          <input
            name="description"
            type="text"
            placeholder="enter description of task"
            value={form.description}
            onChange={(e) => handleInput(e)}
          />
          <h1>Assigned To</h1>
          <input
            name="assignedTo"
            type="text"
            value={form.assignedTo}
            onChange={(e) => handleInput(e)}
            placeholder="who's task is this for ?"
          />
          <h1>Created By</h1>
          {/* <input type="text" /> */}
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}
