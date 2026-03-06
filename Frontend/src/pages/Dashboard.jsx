import { useContext } from "react";
import { userContext } from "../context/AuthContext";

import TaskList from "../components/TaskList";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const { loading, user } = useContext(userContext);
  if (loading) {
    return <h2 className="flex-center text-2xl h-screen">Loading...</h2>;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar name="Dashboard" />

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
