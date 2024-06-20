// eslint-disable-next-line no-unused-vars
import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import '../styles/Heading.css';

const Heading = () => {
  return (
    <div className="heading-container">
      <HamburgerMenu />
      <h1 className="heading-title"> IIITG Mess Portal</h1>
    </div>
  );
};

export default Heading;
