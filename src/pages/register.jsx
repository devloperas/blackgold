import SignupForm from "components/auth/SignupForm";
import AuthLayout from "components/layouts/AuthLayout";
import React from "react";

const Register = () => {
  return (
    <AuthLayout title="Sign Up">
      <SignupForm />
    </AuthLayout>
  );
};

export default Register;
