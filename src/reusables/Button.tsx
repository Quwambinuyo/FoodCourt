interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({ label, onClick, className, type }: ButtonProps) => {
  return (
    <button
      type={type || "button"}
      className={`bg-blue-600 ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
