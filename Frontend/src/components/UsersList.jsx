import { useEffect, useState } from "react";

export default function UsersList() {
  const [userlist, setUserlist] = useState([]);
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
  return;
  <div>hello</div>;
}
