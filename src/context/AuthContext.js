import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stores authenticated user details.

  const login = (userData) => {
    setUser(userData); // Simulates login and stores user data.
    localStorage.setItem("authToken", userData.token); // Optional: Save token.
    
  };

  const logout = () => {
    setUser(null); // Clears user state.
    localStorage.removeItem("authToken"); // Optional: Clear token.
  };

  const isLoggedIn = !!user; // Determines if user is logged in.

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
