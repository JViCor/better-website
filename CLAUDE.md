# CLAUDE.md

## Project overview

Personal portfolio website for Janet Villegas — a software engineer / data engineer based in Chicago. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.

Pages: Home, About Me, Projects, Experience, Resume.

## Tech stack

- **Framework**: Next.js 16 (App Router, file-based routing under `app/`)
- **Language**: TypeScript (`.tsx`) — prefer `.tsx` for new files; legacy `.js`/`.jsx` files exist but don't add more
- **Styling**: Tailwind CSS v4 with custom CSS variables defined in `app/globals.css`
- **Font**: Lora (Google Fonts), loaded in `app/layout.tsx`

## Styling conventions

Custom color tokens — always use these instead of raw hex or generic Tailwind colors:

| Token         | CSS variable          | Use for                     |
|---------------|-----------------------|-----------------------------|
| `bg-ink`      | `--color-ink` `#0A0A0A`  | Page backgrounds            |
| `bg-ivory`    | `--color-ivory` `#F9F9F6`| Light surfaces              |
| `bg-cream`    | `--color-cream` `#F6F0E3`| Navbar, card backgrounds    |
| `bg-sage`     | `--color-sage` `#C7DED7` | Accents, hover states       |
| `bg-moss`     | `--color-moss` `#2A7371` | Primary interactive color   |
| `text-ivory`  | —                     | Body text on dark backgrounds |
| `text-ink`    | —                     | Body text on light backgrounds |
| `text-sage`   | —                     | Accent / hover text         |

Utility classes are defined in `app/globals.css` via `@layer utilities`.

## Project structure

```
app/
  layout.tsx          # Root layout — Navbar + font setup
  page.tsx            # Home / landing page
  globals.css         # Tailwind import + CSS custom properties + utility classes
  about/page.tsx
  experience/page.tsx
  projects/page.tsx
  resume/             # (in progress)
  components/
    Navbar.jsx        # Responsive nav with mobile hamburger overlay
    Experience.tsx
    Project.js / Project.jsx
  data/
    experience.js     # Static experience data
  tailwind.config.js  # Local tailwind config (v4 config lives in postcss.config.mjs)
public/
  bg.jpg              # Background image asset
types/
  routes.d.ts
  validator.ts
```

## Dev commands

```bash
npm run dev     # Start dev server (localhost:3000)
npm run build   # Production build
npm run lint    # ESLint
```

## Key rules

- Use the App Router — no `pages/` directory.
- New components go in `app/components/`. New pages get their own folder under `app/` with a `page.tsx` file.
- Prefer `.tsx` for all new files.
- Do not introduce new color values — extend `globals.css` if a new token is truly needed.
- No test suite exists yet — verify UI changes by running `npm run dev` and checking in a browser.

## Layout & viewport filling

The body/main/page-root chain uses flexbox to stretch page content to the full viewport:
- `body` — `min-h-screen flex flex-col` (set in `layout.tsx`)
- `main` — `flex-1 flex flex-col` (set in `layout.tsx`)
- Every page's root element — must include `flex-1` so it fills `main`

**Never use `min-h-[calc(100vh-var(--navbar-height))]`** — Tailwind arbitrary values can't include unescaped spaces, so the `calc()` is invalid CSS and silently does nothing. Use `min-h-page` instead (defined in `globals.css`).

The navbar height is tracked via `--navbar-height` (set dynamically by `Navbar.jsx`, defaulting to `3.75rem`). The `min-h-page` utility in `globals.css` uses this correctly:
```css
.min-h-page { min-height: calc(100vh - var(--navbar-height, 3.75rem)); }
```

## Navbar constraints

- The navbar uses `bg-cream/95` (semi-transparent). Do **not** set a background color on `html` or `body` — it composites through the transparency and changes the navbar's appearance.
- The overlay menu background is `bg-moss`. Link text in the overlay uses `text-ivory`.
