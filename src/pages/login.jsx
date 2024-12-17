import React from "react";
import LoginForm from "components/auth/LoginForm";
import AuthLayout from "components/layouts/AuthLayout";

const Login = () => {
  return (
    <AuthLayout title="Login">
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
