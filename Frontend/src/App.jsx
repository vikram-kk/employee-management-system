import { Routes, Route } from "react-router-dom";
import CreatTask from "./pages/CreatTask";
import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";
import Dashboard from "./pages/Dashboard";
import Protect from "./pages/Protect";
import Roleprotect from "./pages/Roleprotect";
import Settings from "./pages/Settings";
import Profile from "./components/Profile";
import UsersList from "./components/UsersList";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route
          path="/task/create"
          element={
            <Protect>
              <Roleprotect allowedrole="admin">
                <CreatTask />
              </Roleprotect>
            </Protect>
          }
        />
        <Route
          path="/settings"
          element={
            <Protect>
              <Settings />
            </Protect>
          }
        >
          <Route path="profile" element={<Profile />} />
          <Route path="users" element={<UsersList />} />
        </Route>
        <Route
          path="/auth/register"
          element={
            <Protect>
              <Roleprotect allowedrole="admin">
                <CreateUser />
              </Roleprotect>
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
