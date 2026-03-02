import { useContext } from "react";
import { userContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import TaskList from "../components/TaskList";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const { loading, logout } = useContext(userContext);
  if (loading) {
    return <h2 className="flex-center text-2xl h-screen">Loading...</h2>;
  }

  return (
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
        <main className="p-6 overflow-y-auto">
          {/* Stats Section */}

          {/* Task List */}
          <TaskList />
        </main>
      </div>
    </div>
  );
}
