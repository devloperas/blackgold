/* eslint-disable react/button-has-type */
import cn from "classnames";
import Spinner from "components/atoms/loaders/Spinner";
import React from "react";

const classes = {
    root: "rounded border relative",
    normal:
      "inline-flex items-center justify-center rounded bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-500 hover:bg-blue-600 hover:border-transparent",
    outline:
      "inline-flex items-center justify-center text-blue-700 bg-transparent font-semibold py-2 px-4 border border-blue-500 hover:text-white hover:bg-blue-500 hover:border-transparent",
    loading:
      "h-4 w-4 ml-2 rounded-full border-2 border-transparent border-t-2 border-blue-500 animate-spin",
    disabled:
      "bg-gray-100 text-gray-400 border border-gray-300 cursor-not-allowed py-2 px-4 rounded",
    disabledOutline:
      "text-gray-400 bg-transparent border border-gray-300 cursor-not-allowed py-2 px-4 rounded",
    icon: "inline-flex items-center",
  };

const Button = (props) => {
  const {
    className,
    variant = "normal",
    children,
    active,
    loading = false,
    disabled = false,
    icon = false,
    ref,
    ...rest
  } = props;

  const classesName = cn(
    classes.root,
    {
      [classes.normal]: !disabled && variant === "normal",
      [classes.disabled]: (disabled && variant === "normal") || loading,
      [classes.outline]: !disabled && variant === "outline",
      [classes.disabledOutline]: disabled && variant === "outline",
      [classes.icon]: icon === true,
    },
    className
  );

  return <button
      aria-pressed={active}
      data-variant={variant}
      ref={ref}
      className={classesName}
      disabled={disabled || loading}
      {...((disabled && variant === "normal") ||
        (loading && { style: { opacity: 0.75 } }))}
      {...rest}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <Spinner color="text-white w-5 h-5 absolute" />
          {loading === true ? children : loading}
        </div>
      ) : (
        children
      )}
    </button>
};

export default Button;
