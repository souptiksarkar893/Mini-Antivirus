import React, { useRef } from 'react';
import './FileUpload.css';

/**
 * File upload component
 * Handles file selection and displays file details
 */
const FileUpload = ({ file, onFileSelect, onScan, isScanning }) => {
  const fileInputRef = useRef(null);

  // Handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      onFileSelect(selectedFile);
    }
  };

  // Handle drag and drop
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      onFileSelect(droppedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Format file size for display
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="file-upload-container">
      <div 
        className="file-drop-zone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="drop-zone-content">
          <div className="upload-icon">📁</div>
          <h3>Drop files here or click to browse</h3>
          <p>Select any file to scan for viruses</p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          className="file-input"
          accept="*/*"
        />
      </div>

      {file && (
        <div className="file-details">
          <h3>File Details</h3>
          <div className="file-info">
            <div className="file-info-item">
              <strong>Name:</strong> {file.name}
            </div>
            <div className="file-info-item">
              <strong>Type:</strong> {file.type || 'Unknown'}
            </div>
            <div className="file-info-item">
              <strong>Size:</strong> {formatFileSize(file.size)}
            </div>
          </div>
          
          <button 
            className="scan-button"
            onClick={onScan}
            disabled={isScanning}
          >
            {isScanning ? '🔄 Scanning...' : '🔍 Scan File'}
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
