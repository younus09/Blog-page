import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textcolor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rouded-lg ${bgColor} ${textcolor}  ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
