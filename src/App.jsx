import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FileUpload from './components/FileUpload';
import ScanResult from './components/ScanResult';
import Loader from './components/Loader';
import { uploadFileToVirusTotal } from './api/virusTotal';
import './App.css';

/**
 * Main App component
 * Manages the application state and flow between upload, scanning, and results
 */
function App() {
  // Application state
  const [currentView, setCurrentView] = useState('home'); // 'home', 'upload', 'scanning', 'result'
  const [selectedFile, setSelectedFile] = useState(null);
  const [scanResult, setScanResult] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  // Handle file selection
  const handleFileSelect = (file) => {
    setSelectedFile(file);
    setCurrentView('upload');
  };

  // Handle file scanning
  const handleScan = async () => {
    if (!selectedFile) return;

    setIsScanning(true);
    setCurrentView('scanning');

    try {
      // Simulate scanning delay for better UX
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Call the VirusTotal API or get mock result
      const result = await uploadFileToVirusTotal(selectedFile);
      
      setScanResult(result);
      setCurrentView('result');
    } catch (error) {
      console.error('Scanning failed:', error);
      // Handle error case with mock result
      setScanResult({
        success: false,
        result: 'error',
        message: 'Scan failed. Please try again.',
        timestamp: new Date().toISOString()
      });
      setCurrentView('result');
    } finally {
      setIsScanning(false);
    }
  };

  // Handle new scan request
  const handleNewScan = () => {
    setSelectedFile(null);
    setScanResult(null);
    setCurrentView('home');
  };

  // Handle navigation to upload view
  const handleStartScan = () => {
    setCurrentView('upload');
  };

  // Render different views based on current state
  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return (
          <div>
            <Home />
            <div className="start-scan-container">
              <button className="start-scan-button" onClick={handleStartScan}>
                🚀 Start Scanning
              </button>
            </div>
          </div>
        );
      
      case 'upload':
        return (
          <FileUpload
            file={selectedFile}
            onFileSelect={handleFileSelect}
            onScan={handleScan}
            isScanning={isScanning}
          />
        );
      
      case 'scanning':
        return <Loader message="Analyzing file for threats..." />;
      
      case 'result':
        return (
          <ScanResult
            result={scanResult}
            onNewScan={handleNewScan}
          />
        );
      
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        {renderCurrentView()}
      </main>
    </div>
  );
}

export default App;
