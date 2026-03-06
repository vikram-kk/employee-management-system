import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { SquareUserRound } from "lucide-react";

export default function Settings() {
  const setitems = [
    {
      name: "Profile",
      icname: "",
    },
    {
      name: "Users",
      icname: "",
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
              {setitems.map((items) => (
                <div className="font-semibold bg-gray-50 py-4 rounded-2xl shadow-sm pl-4 hover:bg-blue-100 hover:text-blue-600">
                  <div className="flex gap-2">
                    <SquareUserRound />
                    <h1>{items.name}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-3 bg-amber-500">ge</div>
        </main>
      </div>
    </div>
  );
}
