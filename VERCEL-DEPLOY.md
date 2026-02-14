# 🚀 Quick Vercel Deployment Guide

## Step 1: Push to GitHub

```bash
cd pulse-site
git init
git add .
git commit -m "Initial Pulse website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/pulse-website.git
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Automatic Import (Easiest)
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your `pulse-website` repo
4. Click "Deploy"
5. Done! Vercel auto-detects Vite settings ✨

### Option B: Vercel CLI
```bash
npm install -g vercel
cd pulse-site
vercel
```

## What Happens Automatically

Vercel will detect:
- ✅ Framework: Vite
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `dist`
- ✅ Install Command: `npm install`

## After Deployment

- **Live URL:** Vercel gives you `your-project.vercel.app`
- **Custom Domain:** Add your own domain in Vercel settings
- **Auto-deploys:** Every git push = automatic redeploy
- **Preview URLs:** Each PR gets its own preview URL

## Troubleshooting

**Build fails?**
- Make sure Node.js version is 18+ (check Vercel settings)
- Try running `npm run build` locally first

**Blank page?**
- Check browser console for errors
- Verify all dependencies installed correctly

## Environment Variables (if needed later)

If you add API keys or secrets:
1. Go to Vercel project settings
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy

---

That's it! Your Pulse website should be live in ~2 minutes. 🎉
