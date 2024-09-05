import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-red-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* Logo or Brand Name */}
        <h1 className="text-2xl font-bold">SpilleCafeen</h1>
      </div>

      {/* Burger Menu Icon */}
      <button
        onClick={toggleMenu}
        className="text-white focus:outline-none md:hidden"
      >
        {/* Burger icon (three lines) */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Menu Items (hidden by default on small screens) */}
      <nav
        className={`absolute top-16 right-0 bg-white text-black shadow-md p-4 rounded-md w-40 md:w-auto md:static md:bg-transparent md:shadow-none md:flex ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="space-y-2 md:space-y-0 md:flex md:space-x-4">
          <li>
            <Link
              to="/"
              className="block px-4 py-2 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-white"
              onClick={toggleMenu} 
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/add-game"
              className="block px-4 py-2 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-white"
              onClick={toggleMenu}
            >
              Add Game
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
