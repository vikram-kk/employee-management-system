import { useContext } from "react";
import { userContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Roleprotect = ({ children, allowedrole }) => {
  //   const navigate = useNavigate();
  const { user } = useContext(userContext);
  if (user && user.role === allowedrole) {
    return children;
  }
  return <Navigate to="/dashboard" />;
};

export default Roleprotect;
