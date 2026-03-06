import { useContext } from "react";
import { userContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const { user } = useContext(userContext);
  return (
    <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">
      <h2 className="text-2xl font-bold text-blue-600 mb-8">EMS</h2>
      <nav className="space-y-4 text-gray-700 flex flex-col ">
        <Link to="/dashboard">
          <p className="hover:text-blue-600 cursor-pointer font-medium">
            Dashboard
          </p>
        </Link>
        {user && user.role == "admin" ? (
          <Link to="/auth/register">
            <p className="hover:text-blue-600 cursor-pointer">Create User</p>
          </Link>
        ) : null}
        {user && user.role == "admin" ? (
          <Link to="/task/create">
            <p className="hover:text-blue-600 cursor-pointer">Assign Task</p>
          </Link>
        ) : null}
        <Link to="">
          <p className="hover:text-blue-600 cursor-pointer">Leave</p>
        </Link>
        <Link to="/settings">
          <p className="hover:text-blue-600 cursor-pointer">Settings</p>
        </Link>
      </nav>
    </aside>
  );
}
