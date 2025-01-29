import React, { useState } from 'react';
import './Header.css'; 
import { Menu } from 'lucide-react';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-container">
      <div className="menu-icon" onClick={toggleMenu}>
        <Menu size={24} color="white" />
      </div>
      <div className={`header-items ${menuOpen ? 'show' : ''}`}>
        <div className="header-item">HOME</div>
        <div className="header-item">MENU</div>
        <div className="header-item">MAKE A RESERVATION</div>
        <div className="header-item">CONTACT US</div>
      </div>
    </div>
  );
};

export default Header;
