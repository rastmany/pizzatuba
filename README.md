# 🍕 Pizzatuba

A modern, animated pizza ordering web application built with React, TypeScript, and Framer Motion.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rastmany/pizzatuba)

## ✨ Features

- 🎨 **Modern UI/UX** - Smooth animations and responsive design
- 🛒 **Shopping Cart** - Add, remove, and manage pizza orders
- 📱 **Mobile-First** - Optimized for all screen sizes
- 🎯 **Category Navigation** - Animated sticky navigation that integrates into header on scroll
- 🌟 **Instagram-style Stories** - Promotional content carousel
- 🔒 **Secure API Integration** - Environment-based configuration for API keys

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/rastmany/pizzatuba.git
   cd pizzatuba
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```
   
   Get your API key from: https://ai.google.dev/

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📦 Build for Production

```bash
npm run build
npm run preview
```

## 🌐 Deploy to Vercel

### Option 1: One-Click Deploy
Click the "Deploy with Vercel" button above

### Option 2: Manual Deploy via GitHub

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/rastmany/pizzatuba.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure build settings (auto-detected)

3. **Add Environment Variables in Vercel**
   - Go to Project Settings → Environment Variables
   - Add `GEMINI_API_KEY` with your API key
   - Click "Save"

4. **Deploy**
   - Vercel will automatically deploy on every push to `main`

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📁 Project Structure

```
pizzatuba/
├── components/          # React components
│   ├── Header.tsx       # Top navigation with cart
│   ├── StickyNav.tsx    # Category navigation
│   ├── ProductCard.tsx  # Menu item cards
│   ├── CartSidebar.tsx  # Shopping cart sidebar
│   └── ...
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── constants.ts        # Menu data and configuration
├── types.ts           # TypeScript type definitions
└── App.tsx            # Main application component
```

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Google Gemini API key for AI features | Yes (for AI assistant) |

## 📝 License

© 2026 Pizzatuba OÜ • All rights reserved

## 🤝 Contributing

This is a private project. For inquiries, please contact the development team.
