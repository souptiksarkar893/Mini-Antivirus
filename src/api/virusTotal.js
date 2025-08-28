// Note: axios import kept for potential future backend implementation
// import axios from 'axios';

// VirusTotal API configuration from environment variables
const VIRUSTOTAL_API_URL = import.meta.env.VITE_VIRUSTOTAL_API_URL || 'https://www.virustotal.com/api/v3/files';
const API_KEY = import.meta.env.VITE_VIRUSTOTAL_API_KEY || 'YOUR_VIRUSTOTAL_API_KEY';
const ENABLE_MOCK_FALLBACK = import.meta.env.VITE_ENABLE_MOCK_FALLBACK !== 'false';
const MOCK_SCAN_DELAY = parseInt(import.meta.env.VITE_MOCK_SCAN_DELAY) || 2000;

/**
 * Get file type from filename extension if MIME type is not available
 * @param {File} file - The file object
 * @returns {string} - File type or extension
 */
const getFileType = (file) => {
  // If browser provides MIME type, use it
  if (file.type && file.type !== '') {
    return file.type;
  }
  
  // Otherwise, try to determine from file extension
  const fileName = file.name.toLowerCase();
  const extensionMap = {
    '.txt': 'text/plain',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    '.xls': 'application/vnd.ms-excel',
    '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.mp4': 'video/mp4',
    '.mp3': 'audio/mpeg',
    '.zip': 'application/zip',
    '.exe': 'application/x-msdownload',
    '.bat': 'application/x-bat',
    '.js': 'application/javascript',
    '.html': 'text/html',
    '.css': 'text/css',
  };
  
  for (const [ext, mimeType] of Object.entries(extensionMap)) {
    if (fileName.endsWith(ext)) {
      return mimeType;
    }
  }
  
  // Return file extension if no MIME type found
  const lastDot = fileName.lastIndexOf('.');
  return lastDot !== -1 ? fileName.substring(lastDot) : 'Unknown';
};

/**
 * Upload file to VirusTotal API for scanning
 * @param {File} file - The file to be scanned
 * @returns {Promise} - Promise containing scan result or mock result
 */
export const uploadFileToVirusTotal = async (file) => {
  try {
    // Check if API key is configured
    if (!API_KEY || API_KEY === 'YOUR_VIRUSTOTAL_API_KEY') {
      console.log('VirusTotal API key not configured, using mock response');
      return getMockScanResult(file);
    }

    // Note: VirusTotal API has CORS restrictions and cannot be called directly from browser
    // In a production app, you would need a backend server to proxy the requests
    console.log('Browser-based VirusTotal API calls are blocked by CORS policy. Using mock response.');
    return getMockScanResult(file);

    // This code would work in a backend/server environment:
    /*
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(VIRUSTOTAL_API_URL, formData, {
      headers: {
        'x-apikey': API_KEY,
        'Content-Type': 'multipart/form-data',
      },
    });

    return {
      success: true,
      result: 'clean',
      source: 'api',
      fileName: file.name,
      fileSize: file.size,
      fileType: getFileType(file),
      data: response.data,
      timestamp: new Date().toISOString(),
      details: {
        engines: 70,
        detections: 0,
      }
    };
    */
  } catch (error) {
    console.log('VirusTotal API failed, using mock response:', error.message);
    
    // Return mock response when API fails (if enabled)
    if (ENABLE_MOCK_FALLBACK) {
      return getMockScanResult(file);
    } else {
      throw error;
    }
  }
};

/**
 * Generate mock scan result for testing purposes
 * @param {File} file - The file being scanned
 * @returns {Object} - Mock scan result
 */
export const getMockScanResult = (file) => {
  // Simple logic to determine mock result based on file extension
  const fileName = file.name.toLowerCase();
  const suspiciousExtensions = ['.exe', '.bat', '.scr', '.vbs', '.jar'];
  const isSuspicious = suspiciousExtensions.some(ext => fileName.endsWith(ext));
  
  // Random element for more realistic mock behavior
  const randomFactor = Math.random();
  
  let result;
  if (isSuspicious && randomFactor > 0.7) {
    result = 'infected';
  } else if (isSuspicious && randomFactor > 0.4) {
    result = 'suspicious';
  } else {
    result = 'clean';
  }

  return {
    success: true,
    result: result,
    source: 'mock',
    fileName: file.name,
    fileSize: file.size,
    fileType: getFileType(file),
    timestamp: new Date().toISOString(),
    details: {
      engines: Math.floor(Math.random() * 70) + 50,
      detections: result === 'clean' ? 0 : Math.floor(Math.random() * 5) + 1,
    }
  };
};
