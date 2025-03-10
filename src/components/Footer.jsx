import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 px-4 md:px-8 bg-white/5 backdrop-blur-md text-center text-blue-900">
      <p>
        © 2025 Logisence – Mumbai | {" "}
        <a href="/contact" className="text-blue-600 hover:underline">Contact Us</a>
      </p>
      {/* <p className="mt-2 text-sm text-blue-900">
        Keywords: Mumbai web development, app development agency Mumbai, custom software Mumbai, affordable website design
      </p> */}
    </footer>
  );
};

export default Footer;