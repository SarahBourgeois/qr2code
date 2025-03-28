// src/components/common/Logo.jsx
import React from 'react';
import logo from '../../../assets/qr2code.svg';
 

const Logo = ({ width = 100, height = 100 }) => {
  return (
    <img 
    src={logo} 
    alt="Qr2code Logo" 
    className="h-full w-full object-contain transition-all duration-500 hover:scale-105 hover:translate-y-[-5px]"
    width={width}
    height={height}
  />
  ) 
}
    

export default Logo;