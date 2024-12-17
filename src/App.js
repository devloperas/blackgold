import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { getFirebaseToken, onMessageListener } from "./firebase-messaging";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "context/AuthContext";
import AppRoutes from "routes/AppRoutes";
import NavBar from "components/molecules/Navbar";

const App = () => {
  const [isTokenFound, setTokenFound] = useState(false);

  React.useEffect(() => {
    getFirebaseToken(setTokenFound, setTestToken);
  }, []);

  const [testToken, setTestToken] = useState("Loading...");

  onMessageListener()
    .then((payload) => {
      console.log("Message received: ", payload);
      const {
        notification: { title, body },
      } = payload;
      new Notification(title, { body: body });
    })
    .catch((err) => console.log("Error in receiving message: ", err));

  return (
    <AuthProvider>
      <div className="h-screen bg-gray-50 dark:bg-gray-900">
        <NavBar />
        <Router>
          <AppRoutes />
        </Router>
        <ToastContainer />
      </div>
  </AuthProvider>
  );
};

export default App;