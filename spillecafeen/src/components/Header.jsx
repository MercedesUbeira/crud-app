import React from 'react';

const Header = () => (
  <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
    <div className="text-2xl font-bold">Spillecafeen</div>
    <button className="lg:hidden p-2">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
  </header>
);

export default Header;
