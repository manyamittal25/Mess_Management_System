// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../styles/HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`menu-content ${isOpen ? 'show' : ''}`}>
        <a href="#">Sign In</a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
