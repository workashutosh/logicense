import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"; // Ensure this file exists in src/assets/

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full py-6 px-4 md:px-8 flex justify-between items-center text-white z-10">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logisence Logo" className="h-6 w-6" /> {/* Adjust size as needed */}
        <h1 className="text-2xl font-bold text-blue-600">Logisence</h1>
      </div>
      <ul className="flex gap-6 text-blue-900">
        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-600 transition-colors"}>Home</NavLink></li>
        <li><NavLink to="/services" className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-600 transition-colors"}>Services</NavLink></li>
        <li><NavLink to="/portfolio" className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-600 transition-colors"}>Portfolio</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-600 transition-colors"}>About</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-600 transition-colors"}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;