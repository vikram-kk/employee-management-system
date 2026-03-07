import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { SquareUserRound, UsersRound } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
// import Profile from "../components/Profile";

export default function Settings({ children }) {
  const setitems = [
    {
      name: "Profile",
      icname: "SquareUserRound",
      path: "profile",
    },
    {
      name: "Users",
      icname: "UsersRound ",
      path: "users",
    },
    {
      name: "Leaves",
      icname: "",
    },
    {
      name: "Block",
      icname: "",
    },
  ];
  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1 h-full">
        <Navbar name={"Settings"} />
        <main className="grid grid-cols-4 h-full ">
          <div>
            <div className="p-2 flex flex-col gap-4 ">
              {setitems.map((items, i) => (
                <NavLink to="">
                  <div
                    key={i}
                    className="font-semibold bg-gray-50 py-4 rounded-2xl shadow-sm pl-4 hover:bg-blue-100 hover:text-blue-600"
                  >
                    <div key={i} className="flex gap-2">
                      <SquareUserRound />
                      <h1>{items.name}</h1>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
          <div className="col-span-3 p-2">
            <div className="bg-white shadow-lg h-full p-4 rounded-2xl">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
