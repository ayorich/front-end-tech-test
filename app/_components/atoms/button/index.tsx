import React, { FC } from 'react';
import ButtonProps from './types';

const Button: FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <button className={`py-2 px-4 text-white ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
