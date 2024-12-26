import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`border border-black rounded-xl px-6 py-2 text-black font-medium hover:bg-gray-100 transition ${className}`}
    >
      {label}
    </button>
  );
};
