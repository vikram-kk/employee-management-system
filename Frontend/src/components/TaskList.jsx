import { useState, useEffect } from "react";
import { getTask } from "../services/taskService";

export default function TaskList() {
  const [task, setTask] = useState([]);
  useEffect(() => {
    const fetchTask = async () => {
      const task = await getTask();
      console.log(task);
      setTask(task);
    };
    fetchTask();
  }, []);

  return <div>{task.map((task) => task.title)}</div>;
}
