import React from 'react';
import './Loader.css';

/**
 * Loading spinner component
 * Shows animated spinner while file is being scanned
 */
const Loader = ({ message = "Scanning file..." }) => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p className="loader-message">{message}</p>
    </div>
  );
};

export default Loader;
