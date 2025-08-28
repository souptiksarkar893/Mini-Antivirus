# 🛡️ Mini Antivirus Scanner

A modern, responsive web-based antivirus scanner built with React and Vite. Upload files to scan for viruses, malware, and suspicious content using the VirusTotal API with intelligent mock fallback.

## ✨ Features

- **🔍 File Scanning**: Upload any file type for comprehensive virus scanning
- **⚡ Fast Results**: Quick scan results with real-time threat analysis
- **🔒 Secure Processing**: Files are processed securely without permanent storage
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **🎯 Multiple Result Types**: Clean, Suspicious, or Infected status with detailed information
- **🔄 Mock Fallback**: Intelligent mock responses when API is unavailable
- **💫 Modern UI**: Clean, intuitive interface with smooth animations

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd antivirus-scanner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit .env file with your actual VirusTotal API key
   # VITE_VIRUSTOTAL_API_KEY=your_actual_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Modules
- **HTTP Client**: Axios
- **State Management**: React Hooks (useState, useEffect)
- **Language**: JavaScript (ES6+)

## 📁 Project Structure

```
src/
├── api/
│   └── virusTotal.js      # VirusTotal API integration & mock fallback
├── components/
│   ├── Navbar.jsx         # Navigation header
│   ├── FileUpload.jsx     # File upload with drag & drop
│   ├── ScanResult.jsx     # Scan results display
│   └── Loader.jsx         # Loading spinner
├── pages/
│   └── Home.jsx           # Landing page with features
├── App.jsx                # Main application component
├── main.jsx               # Application entry point
└── index.css              # Global styles
```

## 🔧 Configuration

### Environment Variables

The application uses environment variables for configuration. Create a `.env` file in the root directory:

```env
# VirusTotal API Configuration
VITE_VIRUSTOTAL_API_URL=https://www.virustotal.com/api/v3/files
VITE_VIRUSTOTAL_API_KEY=your_actual_virustotal_api_key_here

# App Configuration
VITE_APP_NAME=Mini Antivirus Scanner
VITE_APP_VERSION=1.0.0

# Mock Configuration
VITE_ENABLE_MOCK_FALLBACK=true
VITE_MOCK_SCAN_DELAY=2000
```

### VirusTotal API Setup

1. **Get API Key**: Sign up at [VirusTotal](https://www.virustotal.com/) for a free API key
2. **Configure**: Copy `.env.example` to `.env` and add your API key
3. **Fallback**: The app automatically falls back to mock responses if the API key is not configured

### Environment Variables Reference

| Variable | Description | Default Value |
|----------|-------------|---------------|
| `VITE_VIRUSTOTAL_API_URL` | VirusTotal API endpoint | `https://www.virustotal.com/api/v3/files` |
| `VITE_VIRUSTOTAL_API_KEY` | Your VirusTotal API key | `YOUR_VIRUSTOTAL_API_KEY` |
| `VITE_ENABLE_MOCK_FALLBACK` | Enable mock responses when API fails | `true` |
| `VITE_MOCK_SCAN_DELAY` | Delay for mock scanning (ms) | `2000` |

### Mock Response Behavior

The mock scanner simulates real antivirus behavior:
- **Executable files** (.exe, .bat, .scr) have higher chance of being flagged
- **Common files** (.txt, .pdf, .jpg) are usually marked as clean
- **Random factors** simulate real-world scanner variations

## 🎯 How It Works

1. **Upload**: Drag & drop or click to select any file
2. **Scan**: Click the scan button to analyze the file
3. **Results**: View detailed scan results with recommendations
4. **Repeat**: Scan additional files as needed

## 📊 Scan Results

- **✅ Clean**: No threats detected
- **⚠️ Suspicious**: Potentially harmful content found
- **❌ Infected**: Malware or virus detected

Each result includes:
- File details (name, size, type)
- Scan timestamp
- Detection statistics
- Data source (API or Mock)

## 🔒 Security & Privacy

- Files are processed client-side when possible
- No permanent file storage
- Secure API communication
- Privacy-focused design

## 🎨 Customization

### Styling
- Modify CSS files in component directories
- Update global styles in `src/index.css`
- Colors and themes can be adjusted in CSS custom properties

### API Integration
- Extend `src/api/virusTotal.js` for additional API providers
- Customize mock response logic
- Add error handling and retry mechanisms

## 📱 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## 🛡️ Future Enhancements

- [ ] File scan history with local storage
- [ ] Dark/Light mode toggle
- [ ] Batch file scanning
- [ ] Advanced threat analysis
- [ ] File quarantine simulation
- [ ] Real-time scanning status updates

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**⚠️ Disclaimer**: This is a demonstration project. For production use, ensure proper security measures and API rate limiting.
