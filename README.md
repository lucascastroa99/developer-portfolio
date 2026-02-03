# Lucas Castro - Developer Portfolio

A modern, bilingual developer portfolio built with Next.js, React, and Tailwind CSS.

## Overview

This is a static, responsive portfolio website showcasing professional experience, skills, and contact information. It features full internationalization (English and Portuguese), dark/light theme support, cookie consent management, and Google Analytics integration.

## Features

- **Bilingual Support** - Full i18n with English (en-us) and Portuguese (pt-br) locales using next-intl
- **Theme System** - Dark and light mode with smooth transitions via next-themes
- **Typewriter Effect** - Animated typing effect on the homepage hero section
- **Cookie Consent** - GDPR-compliant cookie consent banner with preference management
- **Analytics Integration** - Google Analytics with opt-out support
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **SEO Optimized** - Next.js metadata API for proper page titles and descriptions
- **Accessibility** - Built with shadcn/ui components following best practices

## Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| Framework | Next.js | 16.1.6 |
| React | React | 19.2.4 |
| Language | TypeScript | 5.9.3 |
| Styling | Tailwind CSS | 4.1.18 |
| UI Library | shadcn/ui | New York style |
| i18n | next-intl | 4.8.2 |
| Icons | Lucide React | 0.563.0 |
| Fonts | JetBrains Mono | Google Fonts |

## Project Structure

```
├── public/
│   └── images/          # Static assets
├── src/
│   ├── app/
│   │   ├── legal/
│   │   │   ├── privacy-policy/
│   │   │   └── terms-of-service/
│   │   ├── contact/
│   │   ├── experience/
│   │   ├── about/
│   │   ├── page.tsx      # Home page
│   │   ├── layout.tsx    # Root layout
│   │   ├── not-found.tsx # 404 page
│   │   └── globals.css   # Global styles
│   ├── components/
│   │   ├── HeaderBody/   # Navigation, theme, language selectors
│   │   ├── Footer/       # Footer with legal links
│   │   ├── CookieConsent/# GDPR banner and GA integration
│   │   ├── PageTemplate/ # Layout wrapper
│   │   └── TypeWritter/  # Animated typing component
│   ├── libraries/
│   │   └── shadcn/
│   │       ├── components/  # 12 UI components
│   │       └── utils.ts       # cn() utility
│   ├── locales/
│   │   ├── en-us.json    # English translations
│   │   ├── pt-br.json    # Portuguese translations
│   │   └── i18n.ts       # i18n configuration
│   └── providers/
│       └── ThemeProvider.tsx
├── .env                  # Environment variables
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone <repo-url>

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Edit .env and add your Google Analytics ID:
# NEXT_PUBLIC_GA_TAG=G-XXXXXXXXXX

# Start development server
pnpm dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server (localhost:3000) |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `npx tsc --noEmit` | Type check without emitting |

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_GA_TAG` | No | Google Analytics tracking ID |

## Component Library

Custom shadcn/ui components (12 total):
- **Layout**: Card, Sheet, Dialog, Separator
- **Interactive**: Button, Badge, Tooltip, Dropdown Menu
- **Forms**: Label, Avatar
- **Custom**: Spinner (custom implementation, not from shadcn)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home with typewriter hero |
| `/about` | Personal background and skills |
| `/experience` | Professional timeline |
| `/contact` | Contact information and social links |
| `/legal/privacy-policy` | Privacy policy |
| `/legal/terms-of-service` | Terms of service |

## Custom Components

### TypeWritter
Animated typing effect component using `typewriter-effect` library. Displays dynamic text on the homepage.

### CookieConsent
Full-featured cookie consent system with:
- Essential and Analytics cookie categories
- Preference modal for granular control
- Google Analytics integration that respects user preferences

### HeaderBody
Responsive navigation including:
- Mobile hamburger menu with Sheet component
- Theme toggle (dark/light)
- Language selector (English/Portuguese)
- Resume download button

## Development Guidelines

See [AGENTS.md](./AGENTS.md) for detailed coding standards, component patterns, and architectural decisions.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - see [LICENSE](./LICENSE) for details.

---

Built with Next.js and deployed on Vercel.
