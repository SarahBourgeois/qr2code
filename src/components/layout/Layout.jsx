import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-800 text-white">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <Footer/>
    </div>
  );
}

export default Layout;