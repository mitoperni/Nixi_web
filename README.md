<div align="center">
  <img src="./public/logo.svg" alt="Nixi Logo" width="300"/>

  # Nixi Website

  **Professional web development in Granada with real code**

  [![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/license-All%20Rights%20Reserved-red?style=flat)](LICENSE)
</div>

---

## ✨ Key Features

- 🚀 **Next.js 15** with App Router and Server Components
- 🎨 **Modern design** with Tailwind CSS and Framer Motion animations
- 🌍 **Multilingual** (Spanish/English) with next-intl
- 📱 **Responsive** - Perfect on mobile, tablet, and desktop
- 🔍 **SEO optimized** - Metadata, Schema.org, Open Graph
- ⚡ **A+ Performance** - Google PageSpeed optimized
- 📧 **Contact form** with validation (React Hook Form + Zod)
- 📝 **Blog** ready for MDX
- 💜 **Professional purple palette** - Distinctive branding
- 🎯 **Kit Digital** - Government grants information

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Internationalization**: next-intl (Spanish/English)
- **Forms**: React Hook Form + Zod
- **Validation**: Zod

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production server
npm start
```

## 📁 Project Structure

```
nixi-website/
├── app/
│   ├── [locale]/              # 🌍 Internationalized routes (ES/EN)
│   │   ├── page.tsx          # Homepage
│   │   ├── servicios/        # Services page
│   │   ├── portfolio/        # Projects
│   │   ├── kit-digital/      # Kit Digital info
│   │   ├── sobre-nixi/       # About page
│   │   ├── blog/             # Blog
│   │   └── contacto/         # Contact form
│   ├── api/contact/          # 📧 Contact form API
│   ├── icon.svg              # 🎨 Auto favicon
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── layout/               # 🧩 Header and Footer
│   ├── home/                 # 🏠 Hero, Services, KitDigital, etc.
│   ├── ui/                   # 🎨 Button, Card, Badge, Logo
│   └── forms/                # 📝 ContactForm
├── i18n/                     # 🌐 next-intl configuration
├── messages/                 # 📖 Translations (es.json, en.json)
├── public/                   # 📦 Static assets (logos, etc.)
└── lib/                      # 🛠 Utilities
```

## 🔧 Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
# Resend API (for contact emails)
RESEND_API_KEY=your_api_key_here

# Site URL
NEXT_PUBLIC_SITE_URL=https://nixi.es
```

## 📧 Email Configuration

To enable contact form email sending:

1. Create an account at [Resend](https://resend.com)
2. Get your API key
3. Add it to `.env.local`
4. Uncomment the code in `app/api/contact/route.ts`

## 🎨 Branding & Logos

The project includes a complete logo system:

- **[Full logo](./public/logo.svg)** - Icon + text (200x60px)
- **[White logo](./public/logo-white.svg)** - For dark backgrounds
- **[Icon logo](./public/logo-icon.svg)** - Hexagon only (60x60px)
- **[Favicon](./app/icon.svg)** - Auto-generated in Next.js

**React Component:**
```tsx
import Logo from '@/components/ui/Logo';

<Logo />                    // Default logo
<Logo variant="white" />    // White logo
<Logo variant="icon" />     // Icon only
```

## 📄 Implemented Pages

- 🏠 `/` - Homepage with all sections
- 💼 `/servicios` - Service packages detail
- 🎨 `/portfolio` - Projects (with placeholders)
- 💰 `/kit-digital` - Government grants information
- 👤 `/sobre-nixi` - About, values, and technologies
- 📝 `/blog` - Articles listing (MDX-ready)
- 📰 `/blog/[slug]` - Individual post template
- 📧 `/contacto` - Contact form

## 🔍 SEO

- Optimized metadata on every page
- Schema.org structured data (LocalBusiness)
- Open Graph tags
- Configured robots.txt
- Automatic sitemap

## 🎯 Development

The project uses:
- TypeScript for type safety
- ESLint for linting
- Prettier (recommended to configure)

## 🚀 Deployment

Recommended on Vercel:

```bash
# Push to GitHub
git push origin main

# Connect repository in Vercel
# Configure environment variables
# Automatic deployment
```

**Domain configuration:**
- Add your custom domain in Vercel
- Configure DNS according to Vercel instructions

## 🎨 Customization

### Colors

Colors are defined in `tailwind.config.ts` and `app/globals.css`:

```css
--primary: #7C3AED;        /* Primary violet */
--primary-dark: #6D28D9;   /* Dark violet */
--primary-light: #A78BFA;  /* Light violet */
```


### Translations

Edit `messages/es.json` and `messages/en.json` to change texts.

## 👨‍💻 Author

**Miguel Toyas Pernichi**
Professional Web Developer in Granada, Spain
[nixi.es](https://nixi.es)

## 📝 License

All rights reserved © 2025 Nixi
