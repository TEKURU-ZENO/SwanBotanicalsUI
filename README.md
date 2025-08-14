# Swan Botanicals - Luxury Botanical Skincare & Hair Care

A modern, elegant website for Swan Botanicals featuring luxury botanical skincare and hair care products. Built with React, TypeScript, and Tailwind CSS v4.

## 🌿 Features

- **Responsive Design**: Optimized for all devices with mobile-first approach
- **Product Catalog**: Complete shop with filtering, search, and product details
- **Product Gallery**: Individual product pages with image galleries and detailed information
- **Contact System**: Comprehensive contact page with forms and business information
- **Ritual Guides**: Hair care and skincare routine instructions
- **Journal**: Blog-style content for botanical beauty tips
- **Swan Circle**: Loyalty program page
- **Modern UI**: Smooth animations with Framer Motion
- **Botanical Theme**: Custom color palette and design system
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML

## 🚀 Tech Stack

- **Framework**: React 18 with TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd swan-botanicals
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build & Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
The project is configured for automatic deployment to Vercel:

1. Connect your repository to Vercel
2. Vercel will automatically detect the configuration from `vercel.json`
3. Each push to main branch will trigger a new deployment

### Manual Deployment
```bash
npm run build
# Upload the `dist` folder to your hosting provider
```

## 📁 Project Structure

```
swan-botanicals/
├── components/           # Reusable React components
│   ├── ui/              # shadcn/ui components
│   ├── figma/           # Figma-specific components
│   ├── Navigation.tsx   # Main navigation
│   ├── Footer.tsx       # Site footer
│   └── ...             # Feature components
├── pages/               # Route components
│   ├── Home.tsx         # Homepage
│   ├── Shop.tsx         # Product catalog
│   ├── ProductDetail.tsx # Individual product pages
│   ├── Contact.tsx      # Contact page
│   └── ...             # Other pages
├── styles/              # Global styles
│   └── globals.css      # Tailwind CSS with custom variables
├── lib/                 # Utility functions
├── public/              # Static assets
└── App.tsx             # Main application component
```

## 🎨 Design System

### Colors
- **Serene Mint**: `#D9F8F0` - Light accent color
- **Warm Ivory**: `#F8F4E3` - Background and neutral
- **Sage Green**: `#A2B089` - Secondary brand color
- **Blush Pink**: `#F3B8C8` - Accent color
- **Golden Sand**: `#EFD6AC` - Warm accent
- **Leaf Green**: `#74B288` - Primary brand color
- **Forest Canopy**: `#2A4D3A` - Dark brand color
- **Botanical Charcoal**: `#2C2C2A` - Text color

### Typography
- **Primary Font**: Inter (Clean, modern sans-serif)
- **Display Font**: Playfair Display (Elegant serif for headings)

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

### Environment Variables
Create a `.env.local` file for local development:
```env
VITE_API_URL=your_api_url_here
VITE_CONTACT_EMAIL=hello@swanbotanicals.com
```

## 📝 Content Management

### Adding New Products
1. Update the products array in `/pages/Shop.tsx`
2. Add product images to the `figma:asset` imports
3. Create detailed product pages in `/pages/ProductDetail.tsx`

### Adding Blog Posts
1. Add new content to the `/pages/Journal.tsx`
2. Follow the existing content structure and styling

### Updating Contact Information
1. Modify contact details in `/pages/Contact.tsx`
2. Update footer information in `/components/Footer.tsx`

## 🔧 Customization

### Brand Colors
Update colors in `/styles/globals.css` under the `:root` section:
```css
:root {
  --swan-leaf-green: #74B288;
  /* Update other brand colors */
}
```

### Fonts
Update font imports in `/index.html` and modify the font family in `/styles/globals.css`.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌿 About Swan Botanicals

Swan Botanicals is a luxury botanical skincare and hair care brand that believes in the transformative power of nature's finest ingredients. Our products are crafted with botanical extracts, natural proteins, and essential oils to create effective, luxurious beauty rituals.

**Contact**: hello@swanbotanicals.com
**Website**: [swanbotanicals.com](https://swanbotanicals.com)

---

Made with 🌿 by the Swan Botanicals team