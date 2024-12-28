import React, { useState } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsMobile(!isMobile);

  return (
    <nav className="bg-blue-800 text-white  w-full top-0 left-0 z-20">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-semibold">Wealth Media</div>
        <ul
          className={`flex gap-6 ${isMobile ? "flex-col absolute bg-gray-800 top-16 left-0 w-full p-6" : "hidden md:flex"}`}
        >
          <li><a href="/" className="hover:text-gray-400">Home</a></li>
          <li><a href="/services" className="hover:text-gray-400">Services</a></li>
          <li><a href="/ourwork" className="hover:text-gray-400">Our Work</a></li>

          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
