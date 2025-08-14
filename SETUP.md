# Swan Botanicals - Setup Guide

## Prerequisites

- Node.js 18+ and npm 9+
- Git

## Installation Steps

### 1. Clean Installation

If you're experiencing styling issues, perform a clean installation:

```bash
# Remove existing dependencies
rm -rf node_modules package-lock.json

# Install fresh dependencies
npm install
```

### 2. Development Server

```bash
# Start development server
npm run dev

# Start with host access (for network access)
npm run dev:host
```

### 3. Troubleshooting Styling Issues

If Swan Botanicals colors are not working:

1. **Verify Tailwind CSS v4 Installation:**
   ```bash
   npm list tailwindcss
   npm list @tailwindcss/vite
   npm list @tailwindcss/postcss
   ```

2. **Check CSS Import in main.tsx:**
   Ensure the CSS is imported in `src/main.tsx`:
   ```tsx
   import '../styles/globals.css'
   ```

3. **Verify Browser DevTools:**
   - Check if CSS custom properties are defined in `:root`
   - Look for `--swan-*-rgb` variables
   - Verify that Swan color classes are being generated

4. **Clear Browser Cache:**
   - Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
   - Clear browser cache and reload

### 4. Available Swan Color Classes

The following color utilities should work:

```css
/* Background Colors */
.bg-swan-serene-mint
.bg-swan-warm-ivory
.bg-swan-sage-green
.bg-swan-blush-pink
.bg-swan-golden-sand
.bg-swan-leaf-green
.bg-swan-forest-canopy
.bg-swan-botanical-charcoal

/* With Opacity */
.bg-swan-leaf-green/20
.bg-swan-serene-mint/30
.text-swan-botanical-charcoal/70

/* Text Colors */
.text-swan-forest-canopy
.text-swan-leaf-green

/* Border Colors */
.border-swan-sage-green/20
.border-swan-leaf-green

/* Hover States */
.hover:bg-swan-forest-canopy
.hover:text-swan-leaf-green
```

### 5. Build and Deployment

```bash
# Type check
npm run type-check

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy (if using Vercel CLI)
./deploy.sh
```

## File Structure

```
swan-botanicals/
├── styles/globals.css          # Main CSS with Swan colors
├── tailwind.config.ts          # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── vite.config.ts             # Vite configuration
├── src/main.tsx               # Entry point with CSS import
└── App.tsx                    # Main app component
```

## Common Issues

### Issue: Swan colors not working

**Solution:**
1. Ensure all config files match (see above)
2. Delete `node_modules` and reinstall
3. Clear Vite cache: `npm run clean`
4. Restart development server

### Issue: TypeScript errors

**Solution:**
```bash
npm run type-check
```

### Issue: Build failures

**Solution:**
1. Check ESLint errors: `npm run lint`
2. Ensure all imports are correct
3. Verify all image assets exist

## Support

If you continue to experience issues:

1. Check the browser console for errors
2. Verify network requests in DevTools
3. Ensure all dependencies are correctly installed
4. Try incognito/private browser mode to rule out extensions

## Development Workflow

1. Make changes to components or styles
2. Save files (hot reload should work automatically)
3. Test in browser
4. Run type checking before committing
5. Build and test production version before deployment