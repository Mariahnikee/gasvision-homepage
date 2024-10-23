import React, { useState } from 'react';
import logo from '../images/logo1.png';

const Navbar = () => {
  // State to control the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-14 py-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-24" />
      </div>

      {/*Icon for Mobile Menu */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-gray-600 focus:outline-none"
        >
          {/* icon */}
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu for larger screens */}
      <ul className={`flex md:space-x-8 ml-10 ${isOpen ? 'flex ' : 'hidden'} md:flex`}>
        <li><a href="#about" className="text-gray-600 hover:text-green-500">About Us</a></li>
        <li><a href="#about" className="text-gray-600 hover:text-green-500">Features</a></li>
        <li><a href="#products" className="text-gray-600 hover:text-green-500">Products</a></li>
        <li><a href="#resources" className="text-gray-600 hover:text-green-500">Resources</a></li>
        <li><a href="#join" className="text-gray-600 hover:text-green-500">Join Community</a></li>
      </ul>

      <div className="flex space-x-4">
        <button className="border-2 border-solid border-green-700 bg-white text-green-700 px-6 py-2 hover:text-yellow-300  hover:bg-green-700 rounded">Login</button>
        <button className="bg-green-800 text-yellow-200 px-6 py-2 hover:text-yellow-300  hover:bg-green-700 rounded">Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;


