# AGENTS.md - Developer Portfolio

Guidelines for AI agents working on this Next.js 16 developer portfolio.

## Build Commands

```bash
# Development
pnpm dev              # Start dev server on localhost:3000

# Build & Production
pnpm build            # Build for production (static export)
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint
npx tsc --noEmit      # Type check without emitting
```

**Note:** No test framework is currently configured.

## Adding shadcn/ui Components

```bash
pnpm dlx shadcn@latest add button card input
```

Components are installed to `src/libraries/shadcn/components/`.

## Tech Stack

- **Framework:** Next.js 16.1.6 with App Router (static export)
- **React:** 19.2.4
- **TypeScript:** 5.9.3 (strict mode)
- **Styling:** Tailwind CSS 4.1.18 (CSS-based config)
- **UI:** shadcn/ui (New York style)
- **i18n:** next-intl 4.8.2 (English/Portuguese)
- **Icons:** Lucide React + Iconify
- **Package Manager:** pnpm

## Code Style

### Formatting
- **Indent:** 2 spaces (EditorConfig enforced)
- **Line endings:** LF
- **Charset:** UTF-8
- **No trailing whitespace**
- **Final newline required**
- No Prettier - use ESLint only

### Imports (Order Matters)
1. React/Next built-ins
2. Third-party libraries (next-intl, lucide-react, etc.)
3. Internal `@/*` aliases (e.g., `@/components`, `@/libraries`)
4. Relative imports (e.g., `./MobileMenu`)
5. CSS imports last

```tsx
import { ReactNode } from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import PageTemplate from "@/components/PageTemplate";
import { ThemeProvider } from "@/providers/ThemeProvider";
import MobileMenu from "./MobileMenu";
import "./globals.css";
```

### Naming Conventions
- **Components:** PascalCase (e.g., `HeaderBody.tsx`)
- **Files:** PascalCase for components, camelCase for utilities
- **Functions:** camelCase
- **Constants:** UPPER_SNAKE_CASE or PascalCase for objects
- **Types/Interfaces:** PascalCase
- **CSS classes:** Use `cn()` utility for conditional classes

### Component Patterns
- Use function declarations for components, not arrow functions
- Export components as default when there's one per file
- Use shadcn/ui components from `@/libraries/shadcn/components/`
- Use `cn()` utility for Tailwind class merging

```tsx
// Good
export default function HeaderBody() {
  return <header>...</header>;
}

// Bad
const HeaderBody = () => <header>...</header>;
```

### TypeScript Guidelines
- Enable strict mode - all types must be explicit
- Use `type` for object shapes, `interface` for component props
- Prefer `React.ComponentProps<"element">` for HTML props
- Use `@/*` path alias for all imports from `src/`

### Error Handling
- Use Next.js error boundaries (`error.tsx`, `global-error.tsx`)
- Components should handle their own loading states (`loading.tsx`)

### i18n Guidelines
- All user-facing text must support both locales (`en-us`, `pt-br`)
- Store translations in `src/locales/{locale}.json`
- Use `next-intl` hooks: `useTranslations()`, `useLocale()`
- Keep translation keys descriptive and organized by page/component

### Tailwind CSS
- Uses Tailwind v4 with CSS-based theme configuration
- Colors use OKLCH format in `globals.css`
- Custom theme variables: `--color-*` for theming
- Use semantic color names: `bg-primary`, `text-foreground`

### File Structure
```
src/
  app/               # Next.js App Router pages
  components/        # React components (PascalCase folders)
  libraries/shadcn/  # shadcn/ui components
  locales/           # Translation files (i18n)
  providers/         # React context providers
  constants/         # Static data/constants
  types/             # Shared TypeScript types
```

### ESLint
- Flat config format (`eslint.config.mjs`)
- Extends Next.js core-web-vitals and typescript presets
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Environment Variables

```bash
NEXT_PUBLIC_GA_TAG      # Google Analytics ID (optional)
NEXT_PUBLIC_APP_URL     # Site URL for metadata
```

## Security
- Security headers configured in `next.config.ts`
- CSP, X-Frame-Options, HSTS implemented
- Cookie consent required for analytics

## Notes
- Static export configured (`output: 'export'`)
- No database or API routes - pure static site
- Images served from `public/images/`
