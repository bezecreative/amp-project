# MCP Landing Page

A Next.js landing page for an MCP-powered business analytics product — helping businesses query their data with AI using the Model Context Protocol.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui + Radix UI
- **Package Manager**: pnpm

## Getting Started

Install dependencies and run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
  layout.tsx        # Root layout
  page.tsx          # Home page
  globals.css       # Global styles
components/
  sections/         # Page sections (hero, FAQ, CTA, etc.)
  ui/               # shadcn/ui component library
  navbar.tsx
  footer.tsx
  request-access-modal.tsx
hooks/              # Custom React hooks
lib/
  utils.ts          # Utility functions
```

## Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # Run ESLint
```
