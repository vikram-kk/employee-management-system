import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Protect({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/auth/login");
    }
  }, [token, navigate]);

  return children;
}
