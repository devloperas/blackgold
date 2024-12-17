import Button from "components/atoms/Button";
import TextField from "components/InputFields/TextField";
import { useAuth } from "context/AuthContext";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("e is: ", e);
    login(formData);
    setFormData({ email: "", password: "" });
    console.log("Login Data Submitted:", formData);
    // Call your login logic from the custom hook here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
      <TextField
        name="email"
        type="email"
        onChange={handleChange}
        label="Email"
        placeholder="blackgold@techathon.com"
        required
      />
      <TextField
        name="password"
        type="password"
        onChange={handleChange}
        label="Password"
        placeholder="••••••••"
        required
      />
      <Button type="submit">Login</Button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Dont have an account yet?{" "}
        <Link
          to="/signup"
          className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
