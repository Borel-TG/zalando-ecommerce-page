import React from "react";

interface ButtonProps {
  label: string; // The text for the button
  icon?: React.ReactNode; // Optional icon component
  onClick?: () => void; // Optional click handler
  className?: string; // Optional additional styles
}

const AppButton: React.FC<ButtonProps> = ({
  label,
  icon,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-6 py-3 space-x-2 transition-colors ${className}`}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

export default AppButton;
