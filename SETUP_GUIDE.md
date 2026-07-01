# JobShield AI - Complete Setup Guide

## 📦 Project Structure
```
jobshield-ai/
├── public/
│   ├── main.js              (Electron main process)
│   ├── preload.js           (Electron preload script)
│   ├── index.html           (HTML entry point)
│   └── icon.ico             (App icon - Windows)
├── src/
│   ├── App.jsx              (Combined app - Login + Detector)
│   └── index.js             (React entry point)
├── package.json             (Dependencies and scripts)
└── README.md
```

---

## 🚀 Quick Start (5 Steps)

### Step 1: Install Node.js
Download and install from https://nodejs.org/ (LTS version recommended)

### Step 2: Create Project Folder
```bash
mkdir jobshield-ai
cd jobshield-ai
```

### Step 3: Create Folder Structure
```bash
mkdir public src
```

### Step 4: Copy Files
- Copy `package.json` to root folder
- Copy `main.js` and `preload.js` to `public/` folder
- Copy `index.html` to `public/` folder
- Copy `App.jsx` to `src/` folder
- Copy `index.js` to `src/` folder

### Step 5: Install Dependencies
```bash
npm install
```

---

## 🔨 Building the EXE File

### Option A: Quick Development Build
```bash
npm start
```
This runs the app in development mode for testing.

### Option B: Create EXE Installer (Final Build)
```bash
npm run build-exe
```

This will:
1. Build the React production bundle
2. Package with Electron
3. Create `jobshield-ai-1.0.0.exe` installer in the `dist/` folder
4. Create a portable version `JobShield AI.exe`

### Output Files
After building, you'll find:
- `dist/JobShield AI.exe` - Portable standalone executable
- `dist/jobshield-ai-1.0.0.exe` - Full installer
- `dist/installer` - Installation files

---

## 📋 System Requirements
- **OS**: Windows 7 or later
- **RAM**: 512 MB minimum
- **Disk Space**: ~200 MB for installation
- **Internet**: Required for AI analysis (Anthropic API)

---

## 🔑 API Setup

The app requires an Anthropic API key for the AI analysis feature.

### Getting an API Key:
1. Visit https://console.anthropic.com
2. Sign up or log in
3. Create an API key
4. The app will use this key automatically via the fetch API

### Note:
The current implementation sends requests directly to Anthropic's API. For production:
- Consider backend relay to hide the API key
- Implement rate limiting
- Add usage tracking

---

## 🎨 Default Login Credentials
```
Email: demo@jobshield.ai
Password: demo123
```

You can create a new account by clicking "Sign Up" on the login page.

---

## 🛠️ Customization

### Change App Name
Edit `package.json`:
```json
{
  "name": "your-app-name",
  "productName": "Your App Name"
}
```

### Change App Icon
Replace `public/icon.ico` with your own icon (256x256 minimum)

### Modify Colors/Theme
Edit the Tailwind classes in `src/App.jsx`:
- Change gradient colors
- Modify button styles
- Update color scheme throughout

### Adjust Window Size
Edit `public/main.js`:
```javascript
mainWindow = new BrowserWindow({
  width: 1400,  // Change width
  height: 900,  // Change height
  // ...
});
```

---

## 🐛 Troubleshooting

### "npm not found"
- Install Node.js from https://nodejs.org/
- Restart your terminal

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails
```bash
npm cache clean --force
npm install
npm run build-exe
```

### App won't start
- Ensure internet connection (API calls required)
- Check Anthropic API key access
- Try development mode first: `npm start`

---

## 📝 Additional Notes

### Features Included:
✅ Beautiful login/signup interface
✅ AI-powered job posting analysis
✅ Search history with timestamps
✅ Risk scoring system
✅ Red flag and green flag detection
✅ Persistent data storage
✅ User authentication

### Technologies Used:
- React 18
- Electron 27
- Tailwind CSS
- Lucide Icons
- Claude AI (Anthropic)

### File Sizes:
- Installer: ~180 MB
- Portable EXE: ~150 MB
- After Installation: ~350 MB

---

## 🔐 Security Notes

1. API keys are sent via HTTPS
2. User data stored locally in browser storage
3. No data is logged to external servers
4. Preload script ensures security isolation

For production deployment:
- Implement backend authentication
- Use environment variables for API keys
- Add CSRF protection
- Implement rate limiting

---

## 📞 Support

If you encounter issues:

1. Check that Node.js and npm are installed
2. Ensure all files are in correct folders
3. Try `npm cache clean --force` and reinstall
4. Check internet connection
5. Verify Anthropic API access

---

## 🎉 You're Ready!

Once the build completes, you can:
1. Share the `.exe` file with others
2. Run it on any Windows computer
3. Users don't need Node.js or npm installed
4. It works as a standalone application

---

## Next Steps

1. **Test Thoroughly**: Try the app with various job postings
2. **Customize**: Change colors, icons, branding
3. **Deploy**: Share the EXE file with users
4. **Maintain**: Keep dependencies updated

Enjoy your JobShield AI app! 🚀