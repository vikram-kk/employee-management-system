import { Routes, Route } from "react-router-dom";
import CreatTask from "./pages/CreatTask";
import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";
import Dashboard from "./pages/Dashboard";
import Protect from "./pages/Protect";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route
          path="/task/create"
          element={
            <Protect>
              <CreatTask />
            </Protect>
          }
        />
        <Route
          path="/auth/register"
          element={
            <Protect>
              <CreateUser />
            </Protect>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Protect>
              <Dashboard />
            </Protect>
          }
        />
      </Routes>
    </>
  );
}
