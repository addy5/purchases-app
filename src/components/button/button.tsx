import "./button.scss";

type ButtonProps = {
  type?: "button" | "submit" | "reset"; // Restricts to valid button types
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
};

export function Button({ type = "button", onClick, children, className }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${className || ""}`.trim()}
    >
      {children}
    </button>
  );
}

