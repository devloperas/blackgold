import React from "react";
import { Link } from "react-router-dom";

const AuthLayout = ({ children, title }) => {
  return (
    <div class="h-screen bg-gray-50 dark:bg-gray-900">
      <div class="mx-auto flex flex-col items-center justify-center px-6 pb-8 md:h-screen lg:py-0">
        <div class="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-gray-800">
          <div class="space-y-4 p-6 md:space-y-6">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {title}
            </h1>
            {children}
          </div>
        </div>
        <img
          className="mt-8"
          src="https://digin.co.in/images/whiteLogoDigin.svg"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
