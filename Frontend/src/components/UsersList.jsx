import { useEffect, useState } from "react";

export default function UsersList() {
  const [userlist, setUserlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchuserlist = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5001/staff/all/list", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        console.log(data);

        setUserlist(data.staffList);
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        setLoading(false);
      }
    };
    fetchuserlist();
  }, []);
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <img alt="user-image" />
        </div>
        <h1 className="text-xl capitalize">gagan</h1>
      </div>
      {userlist.map((user) => (
        <h1>{user.name}</h1>
      ))}
    </div>
  );
}
