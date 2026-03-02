import { useState, useEffect } from "react";
import { getTask } from "../services/taskService";

export default function TaskList() {
  const [task, setTask] = useState([]);
  const [totaltask, setTotaltask] = useState();
  const [pending, setPending] = useState();
  const [completed, setCompleted] = useState();
  useEffect(() => {
    const fetchTask = async () => {
      const task = await getTask();
      setTask(task.tasks);

      setTotaltask(task.totaltasks);
      setPending(task.pendingtasks);
      setCompleted(task.completedtask);
    };
    fetchTask();
  }, []);

  return (
    <>
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <p className="text-gray-500 text-sm">Total Tasks</p>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">{totaltask}</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <p className="text-yellow-500 text-sm">Pending</p>
          <h2 className="text-3xl font-bold text-yellow-600 mt-2">{pending}</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <p className="text-green-500 text-sm">Completed</p>
          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {completed}
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {task.map((item, i) => (
          <div key={i} className="space-y-4">
            <div className="bg-white p-5 rounded-2xl shadow-md flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
                <p className="text-xs text-gray-400 mt-2">{item.dueDate}</p>
              </div>

              <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-600">
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
