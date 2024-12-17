// routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import Login from "pages/login";
import Register from "pages/register";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Restricted Routes */}
      <Route
        path="/login"
        element={
          <RestrictedRoute>
            <Login />
          </RestrictedRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <RestrictedRoute>
            <Register />
          </RestrictedRoute>
        }
      />

      {/* Private Routes */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <h1>Dashboard</h1>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
