import Button from "components/atoms/Button";
import TextField from "components/InputFields/TextField";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data Submitted:", formData);
    // Call your signup logic from the custom hook here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
      <div className="flex justify-between gap-4">
        <TextField
          name="first_name"
          onChange={handleChange}
          label="First Name"
          placeholder="Aditya"
          required
        />
        <TextField
          name="last_name"
          onChange={handleChange}
          label="Last Name"
          placeholder="Birla"
          required
        />
      </div>
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
      <Button type="submit">Sign Up</Button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
        >
          Login
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
