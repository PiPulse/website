# Pulse Website

Official website for the Pulse series of open-source Raspberry Pi computing devices.

## 🚀 Deploying to Vercel

### Quick Deploy (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/BeaconPro/pulse-website.git
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Done! ✨

### Manual Configuration (if needed)

Vercel should auto-detect everything, but if you need to configure manually:

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   - Navigate to `http://localhost:5173`
   - Site will hot-reload as you edit

### Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
pulse-site/
├── src/
│   ├── App.jsx          # Main website component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles with Tailwind
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS config
└── postcss.config.js    # PostCSS config
```

## 🎨 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Icon library

## 📜 License

This website code is part of the Pulse project and is licensed under **CC BY-NC-SA 4.0**.

See the [main Pulse repository](https://github.com/BeaconPro) for full license details.

## 🤝 Contributing

Found a bug or want to improve the website? 

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Made with ❤️ by the BeaconPro community
