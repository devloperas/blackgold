import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RestrictedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn ? children : <Navigate to="/" />;
};

export default RestrictedRoute;
