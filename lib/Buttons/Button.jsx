import React from "react";
export const Button = ({ children, onClick, ...props }) => {
  return (
    <button onClick={onClick} style={{ background: "#fff" }} {...props}>
      {children}
    </button>
  );
};
