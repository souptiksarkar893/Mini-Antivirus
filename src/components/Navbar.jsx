import React from 'react';
import './Navbar.css';

/**
 * Navigation bar component
 * Displays the app title and branding
 */
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">🛡️ Mini Antivirus</h1>
        <p className="navbar-subtitle">Secure File Scanner</p>
      </div>
    </nav>
  );
};

export default Navbar;
