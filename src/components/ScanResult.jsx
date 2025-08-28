import React from 'react';
import './ScanResult.css';

/**
 * Scan result display component
 * Shows the result of the virus scan
 */
const ScanResult = ({ result, onNewScan }) => {
  // Get result styling based on scan result
  const getResultStatus = () => {
    switch (result.result) {
      case 'clean':
        return {
          icon: '✅',
          status: 'Clean',
          message: 'No threats detected',
          className: 'result-clean'
        };
      case 'suspicious':
        return {
          icon: '⚠️',
          status: 'Suspicious',
          message: 'Potentially harmful content detected',
          className: 'result-suspicious'
        };
      case 'infected':
        return {
          icon: '❌',
          status: 'Infected',
          message: 'Malware detected - Handle with caution',
          className: 'result-infected'
        };
      default:
        return {
          icon: '❓',
          status: 'Unknown',
          message: 'Unable to determine file status',
          className: 'result-unknown'
        };
    }
  };

  const status = getResultStatus();

  // Format timestamp for display
  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="scan-result-container">
      <div className={`result-card ${status.className}`}>
        <div className="result-header">
          <div className="result-icon">{status.icon}</div>
          <div className="result-status">
            <h2>{status.status}</h2>
            <p>{status.message}</p>
          </div>
        </div>

        <div className="result-details">
          <h3>Scan Details</h3>
          <div className="detail-grid">
            <div className="detail-item">
              <strong>File Name:</strong>
              <span>{result.fileName}</span>
            </div>
            <div className="detail-item">
              <strong>File Size:</strong>
              <span>{result.fileSize ? `${(result.fileSize / 1024).toFixed(2)} KB` : 'Unknown'}</span>
            </div>
            <div className="detail-item">
              <strong>File Type:</strong>
              <span>{result.fileType && result.fileType !== '' ? result.fileType : 'Unknown'}</span>
            </div>
            <div className="detail-item">
              <strong>Scan Time:</strong>
              <span>{formatTimestamp(result.timestamp)}</span>
            </div>
            <div className="detail-item">
              <strong>Source:</strong>
              <span>{result.source === 'api' ? 'VirusTotal API' : 'Mock Scanner'}</span>
            </div>
          </div>

          {result.details && (
            <div className="scan-stats">
              <div className="stat-item">
                <strong>Engines:</strong>
                <span>{result.details.engines}</span>
              </div>
              <div className="stat-item">
                <strong>Detections:</strong>
                <span>{result.details.detections}</span>
              </div>
            </div>
          )}
        </div>

        <div className="result-actions">
          <button className="new-scan-button" onClick={onNewScan}>
            📁 Scan Another File
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScanResult;
