import React from 'react';
import Logo from '../common/Logo/Logo'



function Header() {
  return (
<header className="bg-gray-900 text-white shadow-md">
  <div className="container mx-auto flex items-center justify-between py-3 px-4 space-x-6">
    <div className="flex items-center space-x-3">
      <Logo className="w-48 h-auto" />
      <h1 className="text-2xl uppercase font-medium tracking-wide whitespace-nowrap text-blue-400">Transform • Share • Connect</h1>
    </div>
  </div>
</header>
  );
}

export default Header;