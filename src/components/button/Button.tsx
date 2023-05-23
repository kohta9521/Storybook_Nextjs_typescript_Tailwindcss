// components/button/Button.jsx
import React from 'react';

export type ButtonProps = {
  children?: React.ReactNode
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', onClick = () => {} }) => {
  return (
    <button
      className={`${className} rounded`.trim()} onClick={onClick}
    >
      {children}
    </button>
  )
}