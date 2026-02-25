<div align="center">
  <img src="./public/logo.svg" alt="Nixi Logo" width="300"/>

  # Nixi Website

  **Professional web development in Granada with real code**

  [![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
  [![next-intl](https://img.shields.io/badge/next--intl-4.8-purple?style=flat)](https://next-intl-docs.vercel.app/)
  [![License](https://img.shields.io/badge/license-All%20Rights%20Reserved-red?style=flat)](LICENSE)
</div>

---

## ✨ Key Features

- 🚀 **Next.js 16** with App Router and Server Components
- 🎨 **Modern design** with Tailwind CSS v4 and Framer Motion animations
- 🌍 **Multilingual** (Spanish/English) with next-intl
- 📱 **Responsive** - Perfect on mobile, tablet, and desktop
- 🔍 **SEO optimized** - Metadata, Schema.org, Open Graph
- ⚡ **A+ Performance** - Google PageSpeed optimized
- 📧 **Contact form** with validation (React Hook Form + Zod)
- 📝 **Active blog** with 5 bilingual articles (ES/EN) powered by MDX
- 💜 **Professional purple palette** - Distinctive branding

## 🛠 Tech Stack

### Core
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion

### Internationalization
- **i18n**: next-intl (Spanish/English, locale-prefixed routes)

### Blog & Content
- **Content**: MDX files via `next-mdx-remote`
- **Frontmatter parsing**: `gray-matter`
- **Markdown extensions**: `remark-gfm` (tables, strikethrough, etc.)
- **Typography**: `@tailwindcss/typography`

### Forms & Validation
- **Forms**: React Hook Form
- **Validation**: Zod

### UI Components & Icons
- **Primitives**: Radix UI (Label, Switch, Slot)
- **Icons**: Lucide React
- **Class utilities**: clsx, tailwind-merge, class-variance-authority

### Extras
- **canvas-confetti** - Celebration animations
- **@number-flow/react** - Animated number counters

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
│   │   ├── page.tsx           # Homepage
│   │   ├── services/          # Services page (ES alias: /servicios)
│   │   ├── portfolio/         # Projects
│   │   ├── about/             # About page (ES alias: /sobre-nixi)
│   │   ├── blog/              # Blog listing
│   │   │   └── [slug]/        # Individual blog post
│   │   └── contact/           # Contact form (ES alias: /contacto)
│   ├── api/contact/           # 📧 Contact form API
│   ├── icon.svg               # 🎨 Auto favicon
│   ├── layout.tsx             # Root layout
│   └── globals.css            # Global styles + Tailwind v4 config
├── components/
│   ├── layout/                # 🧩 Header, Footer, LanguageModal
│   ├── home/                  # 🏠 Hero, Services, WhyCodeReal, Process, CTA
│   ├── services-pricing/      # 💼 ServiceCard, ServicesSection, Marquee, Starfield
│   ├── ui/                    # 🎨 Button, Card, Badge, Logo, Pricing, etc.
│   └── forms/                 # 📝 ContactForm
├── content/
│   └── blog/
│       ├── es/                # 🇪🇸 Spanish MDX posts
│       └── en/                # 🇬🇧 English MDX posts
├── hooks/                     # ⚙️ Custom React hooks
├── i18n/                      # 🌐 next-intl configuration & routing
├── messages/                  # 📖 Translations (es.json, en.json)
├── lib/                       # 🛠 Utilities (mdx.ts, utils.ts, server-utils.ts)
└── public/                    # 📦 Static assets (logos, etc.)
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
4. Uncomment the email-sending code in `app/api/contact/route.ts`

## 📝 Blog

The blog is powered by MDX files stored in `content/blog/`.

### Adding a new post

1. Create the MDX file in **both** language folders using an English filename:
   - `content/blog/es/your-post-slug.mdx`
   - `content/blog/en/your-post-slug.mdx`

2. Add the required frontmatter at the top of each file:

```mdx
---
title: "Post title"
excerpt: "Short description for listing and SEO"
date: "YYYY-MM-DD"
category: "Desarrollo Web"
readTime: "7 min lectura"
---

Your content here...
```

3. The filename (without `.mdx`) becomes the URL slug, which is the same for both locales:
   - `https://nixi.es/es/blog/your-post-slug`
   - `https://nixi.es/en/blog/your-post-slug`

> **Note**: If an English version doesn't exist, the system falls back to the Spanish content automatically.

### Current posts (5 published)

| Slug | Published |
|------|-----------|
| `wordpress-real-cost-vs-professional-development` | 2026-02-10 |
| `web-speed-seo-core-web-vitals-2026` | 2026-02-03 |
| `wordpress-security-vulnerabilities-2025-2026` | 2026-01-27 |
| `wordpress-limits-when-business-grows` | 2026-01-20 |
| `what-professional-web-developer-includes` | 2026-01-13 |

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

| Route | ES alias | Description |
|-------|----------|-------------|
| `/` | — | Homepage with all sections |
| `/services` | `/servicios` | Service packages and pricing |
| `/portfolio` | — | Projects showcase (with placeholders) |
| `/about` | `/sobre-nixi` | About, values, and technologies |
| `/blog` | — | Articles listing |
| `/blog/[slug]` | — | Individual blog post |
| `/contact` | `/contacto` | Contact form |

## 🔍 SEO

- Optimized metadata on every page
- Schema.org structured data (LocalBusiness on homepage)
- Open Graph tags (article type on blog posts)
- Language alternates (`hreflang`)
- Configured robots.txt
- Automatic sitemap

## 🎯 Development

The project uses:
- TypeScript for type safety
- ESLint for linting

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

Colors are defined in `app/globals.css` using Tailwind v4 CSS variable syntax:

```css
--color-primary: #7C3AED;        /* Primary violet */
--color-primary-dark: #6D28D9;   /* Dark violet */
--color-primary-light: #A78BFA;  /* Light violet */
--color-secondary: #1F2937;      /* Dark gray */
--color-accent: #EC4899;         /* Pink accent */
```

### Translations

Edit `messages/es.json` and `messages/en.json` to change texts.

## 👨‍💻 Author

**Miguel Toyas Pernichi**
Professional Web Developer in Granada, Spain
[nixi.es](https://nixi.es)

## 📝 License

All rights reserved © 2026 Nixi
