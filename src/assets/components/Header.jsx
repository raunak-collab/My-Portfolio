import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <header className="bg-opacity-90 backdrop-blur-md py-4 fixed w-full z-20">
      <nav className="container mx-auto flex justify-between md:px-11 px-7 items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-[#f316b0]">
          Raunak's Portfolio
        </h1>
        
        {/* Hamburger and Close Icon Toggle */}
        <div className="md:hidden text-[#f316b0]" onClick={toggleMenu}>
          {show ? <IoClose className="text-3xl" /> : <GiHamburgerMenu className="text-3xl" />}
        </div>
        
        {/* Mobile Menu */}
        <ul className={`md:hidden absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-4 py-4 transition-all duration-300 ${show ? 'block' : 'hidden'}`}>
          <li>
            <a href="#home" className="text-[#f316b0] transition-colors duration-300 hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-[#f316b0] transition-colors duration-300 hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-[#f316b0] transition-colors duration-300 hover:text-gray-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-[#f316b0] transition-colors duration-300 hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 mr-1">
          <li>
            <a href="#home" className="text-[#f316b0] transition-colors duration-300 hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-[#f316b0] transition-colors duration-300 hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-[#f316b0] transition-colors duration-300 hover:text-gray-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-[#f316b0] transition-colors duration-300 hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
