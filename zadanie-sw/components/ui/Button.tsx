import { FC } from "react";

interface ButtonProps {
  size?: "small" | "large" | "card";
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export const Button: FC<ButtonProps> = ({
  size = "large",
  children = "",
  className = "",
  ariaLabel = "",
}) => {
  const sizeClasses = {
    small: "px-6 py-2",
    large: "px-10 py-4",
    card: "w-full py-5",
  };

  return (
    <button
      className={`border-blue-500 rounded-lg mb-2
        ${sizeClasses[size]}
        ${className}
        `}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
