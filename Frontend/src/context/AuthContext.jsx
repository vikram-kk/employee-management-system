import { createContext, useState, useEffect } from "react";

export const userContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  const login = (user) => {
    setUser(user);
    console.log(user);
  };

  return (
    <userContext.Provider value={{ user, login }}>
      {children}
    </userContext.Provider>
  );
};
