# AGENTS.md

Guidelines for AI agents working on this Next.js developer portfolio project.

## Build, Lint, and Test Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint with ESLint (Next.js config with TypeScript)
npm run lint

# Type checking (via Next.js/TSC)
npx tsc --noEmit
```

**Note:** This project does not have a test runner configured. If adding tests, use Vitest or Jest with React Testing Library.

## Technology Stack

- **Framework:** Next.js 16.1.6 (App Router, RSC)
- **React:** 19.2.4
- **TypeScript:** 5.9.3 (strict mode enabled)
- **Styling:** Tailwind CSS 4.1.18 with CSS-based configuration
- **UI Components:** shadcn/ui (New York style)
- **Icons:** Lucide React + Iconify
- **Internationalization:** next-intl
- **Package Manager:** pnpm (lockfile present)

## Code Style Guidelines

### File Organization
- Source code in `src/` directory
- Path alias `@/*` maps to `src/*`
- Components in `src/components/` or `src/libraries/shadcn/components/`
- Page components in `src/app/` (Next.js App Router)
- Types in `src/types/`
- Utility functions in `src/libraries/`

### Naming Conventions
- **Components:** PascalCase (e.g., `Button`, `HeaderBody`)
- **Component files:** kebab-case (e.g., `dropdown-menu.tsx`)
- **Hooks:** camelCase with `use` prefix (e.g., `useTheme`)
- **Utilities:** camelCase (e.g., `cn` for class merging)
- **Types/Interfaces:** PascalCase (e.g., `GenerateMetadataProps`)
- **Directories:** lowercase (e.g., `components/`, `libraries/`)

### Import Order
1. React/Next.js imports
2. External library imports (lucide-react, next-intl, etc.)
3. Internal absolute imports (`@/components/`, `@/libraries/`)
4. Relative imports (for closely related files)
5. Type imports where applicable

Example:
```typescript
import { ReactNode } from "react";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/libraries/shadcn/components/button";
import { cn } from "@/libraries/shadcn/utils";
import LocalComponent from "./LocalComponent";
```

### TypeScript Conventions
- Use strict TypeScript configuration
- Prefer `interface` for object shapes, `type` for unions/complex types
- Explicit return types for exported functions where helpful
- Use `React.ComponentProps<"element">` for component prop types
- Server components default; mark client components with `"use client"`

### Styling with Tailwind CSS
- Use `cn()` utility from `@/libraries/shadcn/utils` for class merging
- Prefer CSS variables from `globals.css` theme
- Follow shadcn/ui component patterns (cva for variants)
- Support dark mode via `.dark` class and CSS variables
- Primary color: green accent (`--primary: oklch(0.866 0.294 142.5)`)

### Component Patterns
- Function components with destructured props
- Spread remaining props to root element
- Use `asChild` pattern from Radix for polymorphic components
- Data attributes for component identification (`data-slot="button"`)
- Re-export component and related utilities from same file

Example:
```typescript
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
```

### Error Handling
- TypeScript strict mode for compile-time safety
- ESLint with Next.js recommended rules
- Environment variables prefixed with `NEXT_PUBLIC_` for client access
- Validate environment variables at runtime where needed

### Formatting (from .editorconfig)
- Indent: 2 spaces
- Line endings: LF
- Charset: UTF-8
- Insert final newline: true
- Trim trailing whitespace: true

## shadcn/ui Conventions

Components follow shadcn/ui New York style:
- Located in `src/libraries/shadcn/components/`
- Utilities in `src/libraries/shadcn/utils.ts` (cn function)
- Use Radix UI primitives as base
- Variants via `class-variance-authority` (cva)
- Tailwind-merge for class deduplication

## Internationalization (next-intl)

- Locale determined by cookie `locale` (default: "en-us")
- Translations in `src/locales/*.json`
- Use `useTranslations()` hook in client components
- Use `getTranslations()` in server components/async functions
- Generate metadata with localized strings

## Environment Variables

- `NEXT_PUBLIC_GA_TAG` - Google Analytics tracking ID
- Check existence before use: `const gaId = process.env.NEXT_PUBLIC_GA_TAG;`

## Important Notes

- This is a static portfolio site (no database/API)
- Uses Next.js Image optimization
- Cookie consent and Google Analytics integration
- Theme provider with dark mode support
- Mobile-first responsive design
- No explicit test framework - add tests if modifying logic
