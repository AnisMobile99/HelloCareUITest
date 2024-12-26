import React from "react";

interface FloatingButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
  animation?: string;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({
  icon,
  onClick,
  className = "",
  animation = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-md ${animation} ${className}`}
    >
      {icon}
    </button>
  );
};
