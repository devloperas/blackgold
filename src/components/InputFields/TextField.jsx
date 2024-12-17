import React from "react";

const TextField = ({
  onChange = () => {},
  name,
  label = "Input",
  id,
  type = "text",
  placeholder = "Input",
  className = "",
  required = false,
}) => {
  return (
    <div className="w-full">
      <label
        for={name}
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        name={name}
        id={id ?? name}
        onChange={onChange}
        type={type}
        className={`focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 ${className}`}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default TextField;
