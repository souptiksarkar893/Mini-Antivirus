import React from 'react';
import './Home.css';

/**
 * Home page component
 * Landing page with app description and instructions
 */
const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>🛡️ Mini Antivirus Scanner</h1>
        <p className="hero-description">
          Secure file scanning powered by advanced threat detection technology.
          Upload any file to check for viruses, malware, and suspicious content.
        </p>
      </div>

      <div className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Deep Scanning</h3>
            <p>Advanced algorithms detect threats and suspicious patterns in your files</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast Results</h3>
            <p>Get scan results quickly with real-time threat analysis</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure Upload</h3>
            <p>Your files are processed securely and never stored permanently</p>
          </div>
        </div>
      </div>

      <div className="instructions-section">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Upload File</h3>
              <p>Select or drag & drop any file you want to scan</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Start Scan</h3>
              <p>Click the scan button to begin the virus detection process</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>View Results</h3>
              <p>Get detailed scan results with threat analysis and recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
