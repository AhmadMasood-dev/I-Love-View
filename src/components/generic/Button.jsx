import React from "react";

const Button = ({ children, styles, onClick }) => {
  return (
    <button className={`${styles} `} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;