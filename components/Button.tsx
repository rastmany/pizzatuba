
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[#FF6900] text-white hover:bg-[#E55F00] active:scale-95',
    secondary: 'bg-[#F3F3F7] text-[#5C6370] hover:bg-[#E2E2E9] active:scale-95',
    outline: 'border-2 border-[#FF6900] text-[#FF6900] hover:bg-[#FF6900] hover:text-white',
    ghost: 'text-[#5C6370] hover:bg-[#F3F3F7]',
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
