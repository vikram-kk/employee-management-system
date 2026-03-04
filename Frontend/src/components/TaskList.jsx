import { useState, useEffect } from "react";
import { getTask, updateStatus } from "../services/taskService";
import { useNavigate } from "react-router-dom";

export default function TaskList() {
  const navigate = useNavigate();
  const [task, setTask] = useState([]);
  const [totaltask, setTotaltask] = useState();
  const [pending, setPending] = useState();
  const [completed, setCompleted] = useState();
  const [loading, setLoading] = useState(false);
  const handleStatus = async (e) => {
    const { value } = e.target;
    console.log(value);
    const data = await updateStatus(value);
    setLoading(!loading);
    alert(data.message);
  };
  useEffect(() => {
    const fetchTask = async () => {
      const task = await getTask();
      console.log(task.tasks);
      setTask(task.tasks);

      setTotaltask(task.totaltasks);
      setPending(task.pendingtasks);
      setCompleted(task.completedtask);
      console.log("again render");
    };
    fetchTask();
  }, [loading]);

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

              <div>
                {" "}
                Status:
                <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-600">
                  {item.status}
                </span>
                <button
                  value={item._id}
                  onClick={(e) => handleStatus(e)}
                  className="py-2 block w-full capitalize text-center text-sm rounded bg-green-100 transition-colors duration-300 ease-in-out text-green-600 mt-2 hover:bg-green-800 hover:text-white"
                >
                  complete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
