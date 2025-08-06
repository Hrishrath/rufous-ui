import React from "react";

export const FloatingInput = ({
  label,
  name,
  id,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder,
  className = "",
  ...props
}) => {
  return (
    <div className={`form__group field ${className}`} {...props}>
      <input
        type={type}
        className="form__field"
        placeholder={placeholder || label}
        name={name}
        id={id || name}
        value={value}
        onChange={onChange}
        required={required}
      />
      <label htmlFor={id || name} className="form__label">
        {label}
      </label>
    </div>
  );
};
