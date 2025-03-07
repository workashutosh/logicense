import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"; // Ensure this file exists in src/assets/

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 bg-white/30 w-full py-3 px-2 md:px-8 flex justify-between items-center text-white z-50">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logisence Logo" className="h-6 w-6" />
        <h1 className="text-2xl font-bold text-blue-600">Logisence</h1>
      </div>

      {/* Hamburger menu button for mobile */}
      <button 
        className="md:hidden text-blue-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Navigation links */}
      <ul className={`
        ${isOpen ? 'flex' : 'hidden'} 
        md:flex 
        flex-col md:flex-row 
        absolute md:static 
        top-20 md:top-0 
        left-0 md:left-auto 
        font-semibold
        w-full md:w-auto 
        bg-white/30 md:bg-transparent 
        backdrop-blur-md md:backdrop-blur-none
        p-4 md:p-0 
        gap-6 
        text-blue-900
        md:justify-center md:items-center md:flex-1
      `}>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-600 transition-colors"}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
        </li>
        {/* <li>
          <NavLink 
            to="/services" 
            className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-600 transition-colors"}
            onClick={() => setIsOpen(false)}
          >
            Services
          </NavLink>
        </li> */}
        <li>
          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-600 transition-colors"}
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </NavLink>
        </li>
        {/* <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-600 transition-colors"}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
        </li> */}
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-600 transition-colors"}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;