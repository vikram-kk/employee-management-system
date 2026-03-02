import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { userContext } from "../context/AuthContext";

export default function Protect({ children }) {
  const navigate = useNavigate();
  const { user } = useContext(userContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!user && !token) {
      navigate("/auth/login");
      return;
    }
  }, [user]);

  return children;
}
