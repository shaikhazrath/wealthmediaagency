'use client'
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="flex items-center justify-between">
        <img src="https://cloud.appwrite.io/v1/storage/buckets/676e52730008a728b0e3/files/676fbe690011531ff3d3/view?project=676fa187002ccfc0d35f&project=676fa187002ccfc0d35f" alt="Brand Logo" className="md:h-32 h-24 w-auto" />


        <div className='hidden md:flex gap-5 text-xl'>
        <a href="/" className="block text-white py-2 ">Home</a>
        <a href="/services" className="block text-white py-2">Services</a>
        <a href="/ourwork" className="block text-white py-2">Ourwork</a>

        <a href="#about" className="block text-white py-2">About</a>
        <a href="#contact" className="block text-white py-2">Contact</a>
        </div>
        <button className="text-white text-4xl md:hidden flex" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className={`mt-2 md:hidden flex flex-col ${isOpen ? 'block' : 'hidden'} `}>
        <a href="/" className="block text-white py-2">Home</a>
        <a href="/services" className="block text-white py-2">Services</a>
        <a href="/ourwork" className="block text-white py-2">Ourwork</a>

        <a href="#about" className="block text-white py-2">About</a>
        <a href="#contact" className="block text-white py-2">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;