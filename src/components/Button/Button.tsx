import React from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'success' | 'danger' | 'outline';
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant, label, onClick, disabled, className }) => {
  const baseStyles = `px-4 py-2 font-semibold rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2`;

  const variantStyles: Record<ButtonProps['variant'], string> = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300',
    success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-300',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-300',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-300',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
