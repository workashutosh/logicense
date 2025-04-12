import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"; 
import { Calendar, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add useEffect to initialize Calendly widget
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
      if (document.head.contains(linkElement)) {
        document.head.removeChild(linkElement);
      }
      if (document.body.contains(scriptElement)) {
        document.body.removeChild(scriptElement);
      }
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

  // Function to scroll to section
  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Offset for navbar height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`
      fixed top-0 w-full z-50 transition-all duration-300
      ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/30 backdrop-blur-md py-3'}
    `}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logisence Logo" className="h-8 w-8" />
          <h1 className="text-2xl font-bold text-blue-600">Logisence</h1>
        </div>

        {/* Navigation links */}
        <ul className={`
          ${isOpen ? 'flex' : 'hidden'} 
          md:flex 
          flex-col md:flex-row 
          absolute md:static 
          top-16 md:top-0 
          left-0 md:left-auto 
          font-semibold
          w-full md:w-auto 
          bg-white md:bg-transparent 
          shadow-lg md:shadow-none
          p-4 md:p-0 
          gap-4 md:gap-8 
          text-blue-900
          md:items-center
          z-40
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
            <button 
              onClick={() => scrollToSection('about-section')}
              className="hover:text-blue-600 transition-colors"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('why-section')}
              className="hover:text-blue-600 transition-colors"
            >
              Why Us
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('services-section')}
              className="hover:text-blue-600 transition-colors"
            >
              Services
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('industry-section')}
              className="hover:text-blue-600 transition-colors"
            >
              Industries
            </button>
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

        {/* Action buttons */}
        <div className="hidden md:block">
          <a 
            href="#" 
            onClick={openCalendly}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-sm transition-colors flex items-center"
          >
            Get Started Today
            <ChevronRight className="ml-1" size={16} />
          </a>
        </div>

        {/* Mobile menu buttons */}
        <div className="md:hidden flex items-center gap-2">
          <a 
            href="#" 
            onClick={openCalendly}
            className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-lg text-xs font-medium transition-colors"
          >
            Get Started
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
      </div>
    </nav>
  );
};

export default Navbar;