import React from "react";
export const Button = ({ children, onClick, ...props }) => {
  return (
    <button className="btn" onClick={onClick} {...props}>
      {children}
    </button>
  );
};
