import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"; 
import {  Calendar } from 'lucide-react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Add useEffect to initialize Calendly widget when component mounts
  useEffect(() => {
    // Add Calendly CSS
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(linkElement);

    // Add Calendly script
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://assets.calendly.com/assets/external/widget.js';
    scriptElement.async = true;
    document.body.appendChild(scriptElement);

    // Cleanup function
    return () => {
      document.head.removeChild(linkElement);
      document.body.removeChild(scriptElement);
    };
  }, []);

  // Function to handle Calendly popup
  const openCalendly = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({url: 'https://calendly.com/mashutoshh'});
    }
    return false;
  };

  return (
    <nav className="fixed top-0 bg-white/30 w-full py-3 px-2 md:px-8 flex justify-between items-center text-white z-50">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logisence Logo" className="h-6 w-6" />
        <h1 className="text-2xl font-bold select-none cursor-pointer text-blue-600">Logisence</h1>
      </div>

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
        bg-white/10 md:bg-transparent 
        backdrop-blur-md md:backdrop-blur-none
        p-4 md:p-0 
        gap-6 
        text-blue-900
        md:items-center
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
        <li>
          <NavLink 
            to="/blogs" 
            className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-600 transition-colors"}
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </NavLink>
        </li>
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

      {/* Calendly link button - right aligned on desktop, in menu on mobile */}
      <div className="hidden md:block">
        
        <a 
          href="#" 
          onClick={openCalendly}
          className="bg-blue-600 flex gap-1 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-sm transition-colors"
        >
          Schedule time with us
          <Calendar size={16} />
        </a>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center gap-2">
        <a 
          href="#" 
          onClick={openCalendly}
          className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-2 rounded-lg text-xs font-medium mr-2 transition-colors"
        >
          Schedule
        </a>
        <button 
          className="text-blue-900 focus:outline-none"
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
      </div>
    </nav>
  );
};

export default Navbar;