import React from "react";
import "./input.scss";

type InputProps = {
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
  disabled?: boolean;
};

export function Input({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className,
  name,
  disabled = false,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className={`input ${className || ""}`.trim()}
      disabled={disabled}
    />
  );
}
