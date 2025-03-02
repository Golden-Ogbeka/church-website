import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const ReusableButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="bg-orange-500 text-white px-6 py-2 rounded-sm hover:bg-orange-600 transition w-[160px] sm:w-[240px]"
    >
      {children}
    </button>
  );
}

export default ReusableButton;
