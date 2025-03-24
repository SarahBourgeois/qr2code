// src/components/common/Logo.jsx
import React from 'react';
import logo from '../../../assets/qr2code.svg';
 

const AnimatedLogo = ({ width = 200, height = 200 }) => {
  return (
    <img 
    src={logo} 
    alt="Qr2code Logo" 
    className="h-full w-full object-contain" 
    width={width}
    height={height}
  />
  ) 
}
    

export default AnimatedLogo;