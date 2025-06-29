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
    large: "w-25 h-9.5",
    card: "w-64 h-9.5",
  };

  return (
    <button
      className={`bg-[#4460F7] rounded-sm leading-4
        ${sizeClasses[size]}
        ${className}
        `}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
