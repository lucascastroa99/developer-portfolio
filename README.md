<h1 align="center">👨‍💻 Lucas Castro - Developer Portfolio</h1>

<p align="center">
  <strong>A modern, bilingual developer portfolio built with Next.js 16, React 19, and Tailwind CSS 4</strong>
</p>

<p align="center">
  <a href="https://lucascastroa99.vercel.app/">
    <img src="https://img.shields.io/badge/🔗_Live_Demo-Visit_Site-00FF00?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.1.18-06B6D4?logo=tailwind-css" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/shadcn%2Fui-New_York-orange" alt="shadcn/ui">
</p>

---

## 📋 Overview

This is a **static, responsive portfolio website** showcasing professional experience, skills, and contact information. Built with cutting-edge web technologies, it features full internationalization, dark/light theme support, GDPR-compliant cookie consent, and seamless Google Analytics integration.

### ✨ Key Highlights

- 🌐 **Bilingual Support** - Full i18n with English (🇺🇸) and Portuguese (🇧🇷) using `next-intl`
- 🎨 **Theme System** - Dark 🌙 & light ☀️ modes with smooth transitions via `next-themes`
- ⌨️ **Typewriter Effect** - Animated typing effect on the homepage hero section
- 🍪 **Cookie Consent** - GDPR-compliant banner with granular preference management
- 📊 **Analytics** - Google Analytics with opt-out support
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS v4
- ⚡ **Static Export** - Ultra-fast loading with Next.js static export
- 🔍 **SEO Optimized** - Complete metadata API implementation
- ♿ **Accessibility** - WCAG-compliant shadcn/ui components

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/lucascastroa99/developer-portfolio.git

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Edit .env and add your Google Analytics ID:
# NEXT_PUBLIC_GA_TAG=G-XXXXXXXXXX

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| 🏗️ Framework | Next.js | 16.1.6 |
| ⚛️ React | React | 19.2.4 |
| 📘 Language | TypeScript | 5.9.3 |
| 🎨 Styling | Tailwind CSS | 4.1.18 |
| 🧩 UI Library | shadcn/ui | New York |
| 🌍 i18n | next-intl | 4.8.2 |
| 🎭 Themes | next-themes | 0.4.6 |
| 🔄 Animation | nextjs-toploader | 3.9.17 |
| ⌨️ Effects | typewriter-effect | 2.22.0 |
| 🖼️ Icons | Lucide React | 0.563.0 |
| 🎯 Fonts | JetBrains Mono | Google Fonts |

---

## 📁 Project Structure

```
📦 developer-portfolio
├── 📂 public/
│   └── 🖼️ images/              # Static assets & screenshots
├── 📂 src/
│   ├── 📂 app/                # Next.js App Router
│   │   ├── 📂 legal/          # Privacy & Terms pages
│   │   ├── 📂 contact/        # Contact page
│   │   ├── 📂 experience/     # Experience timeline
│   │   ├── 📂 about/          # About page
│   │   ├── 📄 page.tsx        # 🏠 Home page
│   │   ├── 📄 layout.tsx      # 🎨 Root layout
│   │   └── 📄 globals.css     # 🎨 Global styles
│   ├── 📂 components/         # React components
│   │   ├── 📂 HeaderBody/     # 🧭 Navigation & controls
│   │   ├── 📂 Footer/         # 🦶 Footer
│   │   ├── 📂 CookieConsent/  # 🍪 GDPR compliance
│   │   ├── 📂 PageTemplate/   # 📄 Layout wrapper
│   │   ├── 📂 TypeWritter/    # ⌨️ Animated typing
│   │   └── 📂 TallyLink/      # 🔗 Contact links
│   ├── 📂 libraries/
│   │   └── 📂 shadcn/         # 🧩 UI components
│   ├── 📂 locales/            # 🌍 i18n translations
│   ├── 📂 providers/          # 🔄 React providers
│   ├── 📂 constants/          # 📊 Static data
│   └── 📂 types/              # 📘 TypeScript types
├── 📄 next.config.ts          # ⚙️ Next.js config
├── 📄 tailwind.config.ts      # 🎨 Tailwind v4 config
└── 📄 AGENTS.md               # 🤖 AI agent guidelines
```

---

## 🎯 Available Scripts

| Command | Description | Status |
|---------|-------------|--------|
| `pnpm dev` | 🚀 Start dev server (localhost:3000) | ✅ Active |
| `pnpm build` | 📦 Build for production | ✅ Active |
| `pnpm start` | ▶️ Start production server | ✅ Active |
| `pnpm lint` | 🔍 Run ESLint | ✅ Active |
| `npx tsc --noEmit` | 📝 Type check only | ✅ Active |

---

## 🧩 Component Library

### shadcn/ui Components (12)

| Category | Components |
|----------|-----------|
| 🏗️ Layout | Card, Sheet, Dialog, Separator |
| 🎯 Interactive | Button, Badge, Tooltip, Dropdown Menu |
| 📝 Forms | Label, Avatar |
| ⏳ Feedback | Skeleton, Spinner (custom) |

### 🎨 Custom Components

#### ⌨️ TypeWriter
Animated typing effect using `typewriter-effect` library. Displays dynamic role descriptions on the homepage with smooth character-by-character animation.

#### 🍪 CookieConsent
Full-featured cookie consent system featuring:
- ✅ Essential & Analytics cookie categories
- ⚙️ Preference modal for granular control  
- 📊 Google Analytics integration respecting user preferences
- 🔔 GDPR compliance

#### 🧭 HeaderBody
Responsive navigation with:
- 📱 Mobile hamburger menu (Sheet component)
- 🌙☀️ Theme toggle (dark/light)
- 🌐 Language selector (EN/PT)
- 📄 Resume download button

---

## 🌍 Internationalization (i18n)

The portfolio supports two locales with full translation coverage:

| Locale | Code | Status |
|--------|------|--------|
| 🇺🇸 English | `en-us` | ✅ Complete |
| 🇧🇷 Portuguese | `pt-br` | ✅ Complete |

All user-facing text is managed via `next-intl` with translations stored in `src/locales/`.

---

## 🔧 Environment Variables

| Variable | Required | Description | Default |
|----------|----------|-------------|---------|
| `NEXT_PUBLIC_GA_TAG` | ❌ No | Google Analytics tracking ID | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_APP_URL` | ✅ Yes | Site URL for metadata | `https://lucascastroa99.vercel.app` |

---

## 🎨 Design System

### Color Palette
- **Primary**: Dynamic based on theme (light/dark)
- **Background**: Adaptive with backdrop blur
- **Border**: Semi-transparent for depth
- **Typography**: JetBrains Mono for code aesthetic

### Typography
- **Font Family**: JetBrains Mono
- **Sizes**: Responsive scaling (mobile → desktop → 4K)
- **Weights**: 400 (normal), 500 (medium), 700 (bold)

---

## 📄 Pages

| Route | Description | Features |
|-------|-------------|----------|
| `/` | 🏠 Home | Typewriter hero, animated intro, CTAs |
| `/about` | 👤 About | Personal background, skills grid |
| `/experience` | 💼 Experience | Professional timeline with details |
| `/contact` | 📧 Contact | Social links, contact form via Tally |
| `/legal/privacy-policy` | 🔒 Privacy | GDPR-compliant privacy policy |
| `/legal/terms-of-service` | 📜 Terms | Terms of service page |

---

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Supported |
| Firefox | 88+ | ✅ Supported |
| Safari | 14+ | ✅ Supported |
| Edge | 90+ | ✅ Supported |

---

## 📚 Development Guidelines

See [AGENTS.md](./AGENTS.md) for detailed coding standards, component patterns, and architectural decisions for AI agents and contributors.

---

## 🔐 Security

- ✅ **CSP Headers** - Content Security Policy configured
- ✅ **X-Frame-Options** - Clickjacking protection
- ✅ **HSTS** - HTTPS enforcement
- ✅ **Cookie Consent** - GDPR compliance
- ✅ **Secure Headers** - Comprehensive security headers in `next.config.ts`

---

## ⚡ Performance

- **Static Export**: Pre-rendered HTML for instant loading
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based splitting
- **Font Optimization**: Next.js font optimization
- **CSS Optimization**: Tailwind CSS purge for minimal bundle

---

## 🤝 Contributing

This is a personal portfolio project. While not actively seeking contributions, feel free to:

- ⭐ Star the repository
- 🍴 Fork for learning purposes
- 📧 Reach out for collaboration

---

## 📜 License

MIT License - see [LICENSE](./LICENSE) for details.

---

<p align="center">
  <strong>Built with ❤️ using Next.js and deployed on Vercel</strong>
</p>

<p align="center">
  <a href="https://lucascastroa99.vercel.app/">🌐 lucascastroa99.vercel.app</a>
</p>
