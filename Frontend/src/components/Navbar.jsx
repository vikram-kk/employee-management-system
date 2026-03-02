import { useContext } from "react";
import { userContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar(name) {
  const navigate = useNavigate();
  const { user, logout, loading } = useContext(userContext);
  const handlelogout = () => {
    logout();
    navigate("/auth/login");
    return;
  };
  if (loading) {
    return <h2>Loading..</h2>;
  }
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>

      <div className="flex items-center gap-4">
        <span className="text-gray-600 text-sm">
          Welcome, {user && user.name ? user.name : "guest"}
        </span>
        <button
          onClick={handlelogout}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
