# Portfolio SPA Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a glassmorphism personal portfolio SPA in Next.js 15 (static export) with TailwindCSS v4, pulling all content from the reference HTML and tech logos from svgl.app at build time.

**Architecture:** Next.js 15 App Router with `output: 'export'`. All content is hardcoded from reference. `lib/svgl.ts` fetches the svgl.app API once at build time; `Skills.tsx` matches tech names to SVG logo URLs. One `page.tsx` imports all section components in order.

**Tech Stack:** Next.js 15, TailwindCSS v4, TypeScript, svgl.app REST API (`https://api.svgl.app`)

---

## File Map

| File | Responsibility |
|---|---|
| `app/layout.tsx` | Root HTML, Inter + IBM Plex Mono fonts, metadata |
| `app/page.tsx` | Compose all sections; passes `svgs` prop to `Skills` |
| `app/globals.css` | Tailwind v4 `@import`, `@theme` tokens, glass utilities, animations |
| `lib/svgl.ts` | Fetch svgl API, type definitions, logo resolver helper |
| `components/Nav.tsx` | Fixed glass nav bar |
| `components/Hero.tsx` | Hero section — badge, H1, pitch card, CTAs |
| `components/QAForge.tsx` | QA Forge section — flagship card, KODA, CrewAI, philosophy |
| `components/Projects.tsx` | Projects section — Clotilde, Flight Tracker, AEON, tp-exchanges |
| `components/Lab.tsx` | Lab section — 6 experiment cards |
| `components/Skills.tsx` | Skills section — AI zone + 4 skill cards with svgl logos |
| `components/Workflow.tsx` | Workflow section — 5-step flow grid |
| `components/QAForAI.tsx` | QA for AI section — 6 specialisation cards |
| `components/Contact.tsx` | Contact section + footer |
| `next.config.ts` | `output: 'export'` static config |

---

## Task 1: Scaffold Next.js project + configure static export

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json` (via scaffolding)
- Modify: `next.config.ts`

- [ ] **Step 1: Scaffold into current directory**

```bash
cd /Users/yellow-pro/Documents/Portfolio
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir no --import-alias "@/*" --yes
```

Expected: project scaffolded, `package.json` created, `app/` directory created.

- [ ] **Step 2: Set static export in next.config.ts**

Replace the contents of `next.config.ts` with:

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
```

- [ ] **Step 3: Upgrade to TailwindCSS v4**

```bash
npm install tailwindcss@next @tailwindcss/postcss@next
```

- [ ] **Step 4: Verify build runs cleanly**

```bash
npm run build
```

Expected: `out/` directory created with no errors.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json next.config.ts tsconfig.json .eslintrc.json .gitignore
git commit -m "feat: scaffold Next.js 15 static export with Tailwind v4"
```

---

## Task 2: Global CSS — design tokens, glass utilities, animations

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Replace globals.css with full design system**

```css
@import "tailwindcss";

@theme {
  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", monospace;

  /* Accent palette */
  --color-violet-400: #a78bfa;
  --color-violet-500: #8b5cf6;
  --color-violet-600: #7c3aed;
  --color-blue-400: #60a5fa;
  --color-blue-500: #3b82f6;
  --color-indigo-400: #818cf8;
  --color-indigo-500: #6366f1;
  --color-emerald-400: #34d399;
  --color-emerald-500: #10b981;
  --color-emerald-600: #059669;
  --color-amber-400: #fbbf24;
  --color-amber-500: #f59e0b;
  --color-amber-600: #d97706;
}

/* ─── Base ─── */
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  font-family: var(--font-sans);
  background: #0a0a1a;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  min-height: 100vh;
}

/* ─── Background orbs (fixed) ─── */
.bg-orbs {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}
.bg-orbs::before {
  content: '';
  position: absolute;
  top: -200px;
  left: -200px;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.55) 0%, transparent 70%);
  filter: blur(120px);
}
.bg-orbs::after {
  content: '';
  position: absolute;
  bottom: -200px;
  right: -200px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(67, 56, 202, 0.45) 0%, transparent 70%);
  filter: blur(120px);
}

/* ─── Glass card ─── */
.glass {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
}
.glass:hover {
  border-color: rgba(255, 255, 255, 0.22);
  box-shadow: 0 0 28px rgba(167, 139, 250, 0.12);
}
.glass-sm {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 10px;
}

/* ─── Gradient text ─── */
.grad-text {
  background: linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.grad-text-emerald {
  background: linear-gradient(135deg, #34d399 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ─── Section divider ─── */
.section-hr {
  border: none;
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 0;
}

/* ─── Animations ─── */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
.blink { animation: blink 2s infinite; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}
.fade-up { animation: fadeUp 0.6s ease both; }
.fade-up-2 { animation: fadeUp 0.6s 0.1s ease both; }
.fade-up-3 { animation: fadeUp 0.6s 0.2s ease both; }
.fade-up-4 { animation: fadeUp 0.6s 0.3s ease both; }

/* ─── Hover lift ─── */
.hover-lift {
  transition: transform 150ms ease, border-color 150ms ease, box-shadow 150ms ease;
}
.hover-lift:hover {
  transform: translateY(-2px);
}

/* ─── Buttons ─── */
.btn-violet {
  background: #7c3aed;
  color: #fff;
  padding: 0.6rem 1.6rem;
  border-radius: 10px;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background 150ms ease, transform 150ms ease;
  box-shadow: 0 2px 12px rgba(124, 58, 237, 0.35);
  display: inline-block;
}
.btn-violet:hover {
  background: #6d28d9;
  transform: translateY(-1px);
}
.btn-glass {
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.8);
  padding: 0.6rem 1.6rem;
  border-radius: 10px;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 150ms ease;
  display: inline-block;
}
.btn-glass:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
}

/* ─── Tag chips ─── */
.tag-ai   { background: rgba(167,139,250,0.12); color: #c4b5fd; border: 1px solid rgba(167,139,250,0.25); border-radius: 6px; padding: 0.15rem 0.5rem; font-size: 0.65rem; font-weight: 600; display: inline-block; }
.tag-qa   { background: rgba(52,211,153,0.1);   color: #6ee7b7; border: 1px solid rgba(52,211,153,0.2);  border-radius: 6px; padding: 0.15rem 0.5rem; font-size: 0.65rem; font-weight: 600; display: inline-block; }
.tag-tech { background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.55); border: 1px solid rgba(255,255,255,0.12); border-radius: 6px; padding: 0.15rem 0.5rem; font-size: 0.65rem; font-weight: 600; display: inline-block; }

/* ─── Metric box ─── */
.metric-box {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  padding: 0.55rem 0.9rem;
  text-align: center;
  min-width: 64px;
}

/* ─── Section wrapper ─── */
.wrap { max-width: 1080px; margin: 0 auto; padding: 4rem 1.5rem; position: relative; z-index: 1; }

/* ─── Section eyebrow ─── */
.section-eye {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #a78bfa;
  margin-bottom: 0.4rem;
}
.section-eye-emerald { color: #34d399; }

.section-h {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1.15;
  margin-bottom: 0.5rem;
  color: #fff;
}
.section-sub {
  color: rgba(255,255,255,0.5);
  font-size: 0.92rem;
  max-width: 520px;
  margin-bottom: 2rem;
  line-height: 1.7;
}

/* ─── Feature block ─── */
.feature-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  flex-shrink: 0;
  background: rgba(255,255,255,0.06);
}

/* ─── Eyebrow badge ─── */
.star-badge {
  background: rgba(167,139,250,0.12);
  border: 1px solid rgba(167,139,250,0.3);
  border-radius: 6px;
  padding: 0.2rem 0.6rem;
  font-family: var(--font-mono);
  font-size: 0.62rem;
  font-weight: 700;
  color: #c4b5fd;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

/* ─── Card stripe ─── */
.stripe-violet  { background: linear-gradient(90deg, #7c3aed, #6366f1); height: 3px; }
.stripe-emerald { background: linear-gradient(90deg, #059669, #10b981); height: 3px; }
.stripe-amber   { background: linear-gradient(90deg, #d97706, #f59e0b); height: 3px; }
.stripe-purple  { background: linear-gradient(90deg, #7c3aed, #8b5cf6); height: 3px; }
.stripe-multi   { background: linear-gradient(90deg, #f59e0b, #ef4444, #8b5cf6); height: 3px; }
.stripe-green   { background: linear-gradient(90deg, #059669, #34d399); height: 3px; }
.stripe-slate   { background: linear-gradient(90deg, #475569, #64748b); height: 3px; }

/* ─── Card footer bar ─── */
.card-footer {
  border-top: 1px solid rgba(255,255,255,0.08);
  padding: 0.9rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  background: rgba(255,255,255,0.02);
  border-radius: 0 0 16px 16px;
}

/* ─── Chip link ─── */
.chip {
  font-size: 0.7rem;
  color: rgba(255,255,255,0.45);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 6px;
  padding: 0.2rem 0.6rem;
  text-decoration: none;
  transition: all 150ms ease;
  font-weight: 500;
  white-space: nowrap;
}
.chip:hover {
  color: rgba(255,255,255,0.8);
  border-color: rgba(255,255,255,0.3);
  background: rgba(255,255,255,0.06);
}

/* ─── Demo slot ─── */
.demo-slot {
  border: 1.5px dashed rgba(255,255,255,0.15);
  border-radius: 10px;
  padding: 0.85rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  font-size: 0.73rem;
  color: rgba(255,255,255,0.3);
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 1rem;
  min-height: 60px;
}
.demo-slot:hover {
  border-color: rgba(167,139,250,0.4);
  color: rgba(167,139,250,0.7);
  background: rgba(167,139,250,0.05);
}

/* ─── Lab card ─── */
.lab-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 1.25rem 1.3rem;
  transition: border-color 200ms ease, box-shadow 200ms ease;
  display: flex;
  flex-direction: column;
}
.lab-card:hover {
  border-color: rgba(255,255,255,0.2);
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}
.lab-tag {
  font-size: 0.63rem;
  font-weight: 600;
  color: rgba(255,255,255,0.4);
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 5px;
  padding: 0.15rem 0.45rem;
}

/* ─── Flow step ─── */
.flow-num {
  font-family: var(--font-mono);
  font-size: 3rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 0.5rem;
  letter-spacing: -3px;
  color: rgba(255,255,255,0.08);
}

/* ─── QA card hover ─── */
.qa-card:hover {
  border-color: rgba(52,211,153,0.35) !important;
  box-shadow: 0 4px 16px rgba(52,211,153,0.1);
}

/* ─── Contact link ─── */
.clink {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  color: rgba(255,255,255,0.6);
  text-decoration: none;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 10px;
  padding: 0.55rem 1.1rem;
  font-size: 0.82rem;
  font-weight: 500;
  transition: all 150ms ease;
}
.clink:hover {
  color: rgba(255,255,255,0.9);
  border-color: rgba(255,255,255,0.25);
  background: rgba(255,255,255,0.09);
}

/* ─── Scrollbar ─── */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #0a0a1a; }
::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 3px; }
```

- [ ] **Step 2: Verify CSS is valid (build check)**

```bash
npm run build
```

Expected: build succeeds, no CSS errors.

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat: add glassmorphism design system — tokens, glass, animations"
```

---

## Task 3: lib/svgl.ts — build-time svgl data + logo resolver

**Files:**
- Create: `lib/svgl.ts`

- [ ] **Step 1: Create lib/svgl.ts**

```typescript
export type SvgRoute = string | { light: string; dark: string }

export type Svg = {
  id: number
  title: string
  category: string | string[]
  route: SvgRoute
  wordmark?: SvgRoute
  url?: string
}

/**
 * Fetches all SVGs from svgl.app at build time.
 * Call this only from async server components.
 */
export async function fetchSvgs(): Promise<Svg[]> {
  const res = await fetch('https://api.svgl.app', {
    next: { revalidate: false }, // build-time only
  })
  if (!res.ok) return []
  return res.json()
}

/**
 * Given the svgs list and a tech name, returns the dark-mode SVG URL or null.
 */
export function resolveLogo(svgs: Svg[], name: string): string | null {
  const match = svgs.find(
    (s) => s.title.toLowerCase() === name.toLowerCase()
  )
  if (!match) return null
  const route = match.route
  if (typeof route === 'string') return route
  return route.dark ?? route.light
}
```

- [ ] **Step 2: Test resolveLogo logic**

Create `lib/svgl.test.ts`:

```typescript
import { resolveLogo } from './svgl'
import type { Svg } from './svgl'

const mockSvgs: Svg[] = [
  { id: 1, title: 'TypeScript', category: 'Language', route: 'https://svgl.app/library/typescript.svg' },
  { id: 2, title: 'React', category: 'Library', route: { light: 'https://svgl.app/library/react.svg', dark: 'https://svgl.app/library/react_dark.svg' } },
  { id: 3, title: 'Next.js', category: 'Framework', route: { light: 'https://svgl.app/library/nextjs.svg', dark: 'https://svgl.app/library/nextjs_dark.svg' } },
]

test('resolves exact match (string route)', () => {
  expect(resolveLogo(mockSvgs, 'TypeScript')).toBe('https://svgl.app/library/typescript.svg')
})

test('resolves case-insensitive match', () => {
  expect(resolveLogo(mockSvgs, 'typescript')).toBe('https://svgl.app/library/typescript.svg')
})

test('prefers dark route for object routes', () => {
  expect(resolveLogo(mockSvgs, 'React')).toBe('https://svgl.app/library/react_dark.svg')
})

test('returns null for no match', () => {
  expect(resolveLogo(mockSvgs, 'UnknownLib')).toBeNull()
})
```

- [ ] **Step 3: Install and run tests**

```bash
npm install -D vitest
npx vitest run lib/svgl.test.ts
```

Expected: 4 tests pass.

- [ ] **Step 4: Add vitest config to package.json**

Add to `package.json`:
```json
"scripts": {
  "test": "vitest run"
}
```

- [ ] **Step 5: Commit**

```bash
git add lib/svgl.ts lib/svgl.test.ts package.json
git commit -m "feat: add svgl.ts build-time logo fetcher + resolver with tests"
```

---

## Task 4: layout.tsx + Nav.tsx

**Files:**
- Modify: `app/layout.tsx`
- Create: `components/Nav.tsx`

- [ ] **Step 1: Update app/layout.tsx**

```typescript
import type { Metadata } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sunattha Saeheng — QA Engineer × AI Builder',
  description: 'QA engineer who builds AI products and tests them rigorously. Open to AI product teams, travel tech, and B2B SaaS.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable}`}>
      <body>
        <div className="bg-orbs" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Create components/Nav.tsx**

```typescript
export default function Nav() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2.5rem',
        background: 'rgba(10, 10, 26, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="grad-text" style={{ fontSize: '0.88rem', fontWeight: 800, letterSpacing: '-0.3px' }}>
        Sunattha S.
      </div>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
        {[
          ['Projects', '#projects'],
          ['QA Forge', '#qa-forge'],
          ['Skills', '#skills'],
          ['Workflow', '#workflow'],
          ['Contact', '#contact'],
        ].map(([label, href]) => (
          <li key={href}>
            <a
              href={href}
              style={{
                fontSize: '0.8rem',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                transition: 'color 150ms ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
```

- [ ] **Step 3: Build check**

```bash
npm run build
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx components/Nav.tsx
git commit -m "feat: add layout with fonts and glass Nav"
```

---

## Task 5: Hero.tsx

**Files:**
- Create: `components/Hero.tsx`

- [ ] **Step 1: Create components/Hero.tsx**

```typescript
export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '7rem 1.5rem 5rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Badge */}
      <div
        className="fade-up"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(124,58,237,0.12)',
          border: '1px solid rgba(124,58,237,0.35)',
          borderRadius: '100px',
          padding: '0.3rem 1rem',
          fontSize: '0.72rem',
          fontWeight: 600,
          color: '#c4b5fd',
          letterSpacing: '0.5px',
          marginBottom: '2rem',
        }}
      >
        <span
          className="blink"
          style={{ width: 6, height: 6, background: '#a78bfa', borderRadius: '50%' }}
        />
        QA Engineer × AI Builder &nbsp;·&nbsp; Open to Work
      </div>

      {/* H1 */}
      <h1
        className="fade-up-2"
        style={{
          fontSize: 'clamp(2.8rem, 7vw, 5rem)',
          fontWeight: 900,
          letterSpacing: '-2px',
          lineHeight: 1.05,
          color: '#fff',
          margin: '0 0 0.5rem',
        }}
      >
        Sunattha Saeheng
        <br />
        <span className="grad-text">QA who builds with AI</span>
      </h1>

      {/* Tagline */}
      <p
        className="fade-up-3"
        style={{
          fontSize: '1.05rem',
          color: 'rgba(255,255,255,0.5)',
          margin: '1.5rem auto 2.5rem',
          maxWidth: '480px',
          lineHeight: 1.75,
        }}
      >
        I don&apos;t just test software — I use AI to design, build, and validate real products from the ground up.
      </p>

      {/* Pitch card */}
      <div
        className="glass fade-up-4"
        style={{
          maxWidth: '640px',
          width: '100%',
          textAlign: 'left',
          marginBottom: '2.5rem',
          overflow: 'hidden',
        }}
      >
        <div className="stripe-violet" />
        <div style={{ padding: '1.75rem 2.25rem' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '1.5px',
              color: '#fbbf24',
              textTransform: 'uppercase',
              marginBottom: '0.8rem',
            }}
          >
            ⚡ 30-Second Pitch
          </div>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.82, margin: 0 }}>
            I&apos;m a QA engineer who got curious about AI and started building things to understand how it actually works.
            Along the way I built <strong style={{ color: 'rgba(255,255,255,0.9)' }}>Clotilde</strong> — a small AI travel assistant experiment that taught me
            how intent classification, policy enforcement, and approval workflows fit together in a real product.
            Seeing what <strong style={{ color: 'rgba(255,255,255,0.9)' }}>Claire</strong> is building in the B2B travel space genuinely excited me —
            it&apos;s the kind of problem I&apos;ve been learning toward.
            I test everything I build, and I don&apos;t stop until I understand <em>why</em> something works.
          </p>
        </div>
      </div>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="#projects" className="btn-violet">View Projects</a>
        <a href="#contact" className="btn-glass">Contact Me</a>
      </div>

      {/* QA Forge pill */}
      <a
        href="#qa-forge"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginTop: '1.25rem',
          fontSize: '0.82rem',
          color: '#34d399',
          textDecoration: 'none',
          border: '1px solid rgba(52,211,153,0.3)',
          background: 'rgba(52,211,153,0.07)',
          padding: '0.35rem 0.85rem',
          borderRadius: '99px',
          transition: 'background 200ms ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(52,211,153,0.14)')}
        onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(52,211,153,0.07)')}
      >
        🔬 QA Forge — 59 tests · 20 Claude skills · v3.0 →
      </a>
    </section>
  )
}
```

- [ ] **Step 2: Wire into page.tsx temporarily and build**

Replace `app/page.tsx` with:

```typescript
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'

export default async function Home() {
  return (
    <main>
      <Nav />
      <Hero />
    </main>
  )
}
```

```bash
npm run build
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/Hero.tsx app/page.tsx
git commit -m "feat: add Hero section with glassmorphism pitch card"
```

---

## Task 6: QAForge.tsx

**Files:**
- Create: `components/QAForge.tsx`

- [ ] **Step 1: Create components/QAForge.tsx**

```typescript
export default function QAForge() {
  return (
    <section id="qa-forge" className="wrap">
      <hr className="section-hr" style={{ marginBottom: '4rem' }} />
      <div className="section-eye section-eye-emerald">QA Forge</div>
      <h2 className="section-h">QA as a Discipline</h2>
      <p className="section-sub">
        Not just running tests — designing the system that runs them. A complete PM → BA → QA pipeline
        built from scratch with Claude, with templates, prompts, skills, and guardrails at every step.
      </p>

      {/* ── Flagship card ── */}
      <div className="glass hover-lift" style={{ marginBottom: '1.5rem', overflow: 'hidden' }}>
        <div className="stripe-emerald" />
        <div
          style={{
            padding: '2.25rem 2.5rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2.25rem',
          }}
        >
          {/* Left */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem', flexWrap: 'wrap' }}>
              <span className="star-badge" style={{ background: 'rgba(52,211,153,0.12)', borderColor: 'rgba(52,211,153,0.3)', color: '#34d399' }}>
                ⚙️ QA Forge · Flagship
              </span>
              <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>Built with Claude · 20 Claude skills · v3.0</span>
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '0.35rem', color: '#fff' }}>
              🔨 Agentic QA Pipeline
            </div>
            <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', marginBottom: '1.25rem' }}>
              CEO brief → Business Goals → PM Stories → BA Review → QA Plan → Manual Tests → Playwright → SHIP/HOLD
            </div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.78, marginBottom: '1.5rem' }}>
              20 Claude skills run automatically across 4 phases — the QA engineer holds 5 human gates and owns every quality decision.
              Each step produces a named file that feeds the next. Nothing is skipped. Nothing is silently passed.
            </p>

            {/* Metrics */}
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {[
                ['20', 'Claude Skills'],
                ['6', 'Phases'],
                ['5', 'Human Gates'],
                ['6', 'Test Types'],
              ].map(([num, label]) => (
                <div key={label} className="metric-box">
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1, color: '#34d399', fontFamily: 'var(--font-mono)' }}>{num}</div>
                  <div style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.25rem', letterSpacing: '0.5px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Pipeline table */}
            <div style={{ border: '1px solid rgba(52,211,153,0.15)', borderRadius: '8px', overflow: 'hidden', marginBottom: '1rem' }}>
              {/* Phase 0 */}
              <div style={{ padding: '0.35rem 0.85rem', background: 'rgba(52,211,153,0.1)', borderBottom: '1px solid rgba(52,211,153,0.15)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#34d399', fontFamily: 'var(--font-mono)' }}>Phase 0</span>
                <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)' }}>CEO-BA-Dev — Discovery & Requirements</span>
              </div>
              <div style={{ padding: '0.5rem 0.85rem', display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  ['CEO brief', 'Raw business intent — the starting point'],
                  ['BG-IDs', 'Goals decomposed into traceable IDs'],
                  ['PM stories', 'User stories written from each goal'],
                  ['BA review (GWT)', 'Acceptance criteria added as Given/When/Then'],
                ].map(([key, val]) => (
                  <div key={key} style={{ display: 'grid', gridTemplateColumns: '148px 1fr', gap: '0.5rem 0.75rem', alignItems: 'baseline', padding: '0.28rem 0', fontSize: '0.72rem' }}>
                    <span style={{ color: '#34d399', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{key}</span>
                    <span style={{ color: 'rgba(255,255,255,0.45)' }}>{val}</span>
                  </div>
                ))}
              </div>

              {/* Human gate */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.3rem 0.85rem', background: 'rgba(245,158,11,0.06)', borderTop: '1px solid rgba(245,158,11,0.15)', borderBottom: '1px solid rgba(245,158,11,0.15)', fontSize: '0.68rem', color: '#f59e0b' }}>
                <span>⛔</span><span style={{ fontWeight: 600 }}>Human gate —</span><span style={{ color: 'rgba(255,255,255,0.4)' }}>QA confirms stories are QA-ready before continuing</span>
              </div>

              {/* Phase 2 */}
              <div style={{ padding: '0.35rem 0.85rem', background: 'rgba(139,92,246,0.08)', borderBottom: '1px solid rgba(139,92,246,0.15)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#c4b5fd', fontFamily: 'var(--font-mono)' }}>Phase 2</span>
                <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)' }}>Execution — Test & Deliver</span>
              </div>
              <div style={{ padding: '0.5rem 0.85rem', display: 'flex', flexDirection: 'column' }}>
                {[
                  ['Manual test cases', 'Human-authored cases per story and AC'],
                  ['Playwright .spec.ts', 'Automated E2E scripts generated from manual cases'],
                  ['SHIP / HOLD', 'Final verdict with evidence — never a guess'],
                ].map(([key, val]) => (
                  <div key={key} style={{ display: 'grid', gridTemplateColumns: '148px 1fr', gap: '0.5rem 0.75rem', alignItems: 'baseline', padding: '0.28rem 0', fontSize: '0.72rem' }}>
                    <span style={{ color: '#c4b5fd', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{key}</span>
                    <span style={{ color: 'rgba(255,255,255,0.45)' }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {['Claude (orchestrator)', '20 Claude Skills', 'Playwright E2E', 'Page Object Model', 'TypeScript', 'GitHub Actions', 'GitHub MCP'].map((tag) => (
                <span key={tag} className={tag.includes('Claude') || tag.includes('Skills') ? 'tag-ai' : tag.includes('Playwright') || tag.includes('Object') ? 'tag-qa' : 'tag-tech'}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Right — features */}
          <div>
            <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '2px', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
              What makes this different
            </div>

            {[
              { icon: '📋', title: 'Covers PM → BA → QA — not just QA', desc: 'Business goals decomposed into traceable BG-IDs. Every test case must map to a BG-ID — no orphan tests. QA doesn\'t start until the story is QA-ready.' },
              { icon: '📊', title: 'Live Project Analysis Widget — Skill 06', desc: 'Before any test is written, the pipeline generates a live 5-tab widget. Maps every component to a skill, rates every QA gap (Critical → Low), flags missing skills.', highlight: true },
              { icon: '🛡️', title: '5 hard-stop human gates', desc: 'Business goals → stories → QA widget → QA plan → manifest. Each gate requires explicit QA sign-off. No gate = no next step, no exceptions.' },
              { icon: '⚡', title: 'Smart test healer — 4 failure types', desc: 'Type A: selector drift → auto-fix. Type B/C: timing or data issue → reported to dev. Type D: real bug → failing test preserved as defect report.' },
            ].map(({ icon, title, desc, highlight }) => (
              <div
                key={title}
                style={{
                  display: 'flex',
                  gap: '0.8rem',
                  marginBottom: '1.1rem',
                  alignItems: 'flex-start',
                  ...(highlight ? { background: 'rgba(6,182,212,0.06)', border: '1px solid rgba(6,182,212,0.25)', borderRadius: '8px', padding: '0.75rem' } : {}),
                }}
              >
                <div className="feature-icon">{icon}</div>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.15rem', color: highlight ? '#22d3ee' : '#fff' }}>{title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="card-footer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', flexShrink: 0, display: 'inline-block' }} />
            Applied on FinPay — 27 user stories · 100% pass rate on active QA · SHIP/HOLD verdict delivered
          </div>
        </div>
      </div>

      {/* ── Supporting 2-col grid ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
        {/* KODA */}
        <div className="glass hover-lift" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div className="stripe-amber" />
          <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <div style={{ fontSize: '1.5rem', flexShrink: 0 }}>🧪</div>
              <div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, lineHeight: 1.25, color: '#fff' }}>KODA — QA on a Fintech BNPL Product</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.15rem' }}>Built the product. Then tested every edge case that matters in fintech.</div>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.72 }}>
              Built a full BNPL app from scratch, then applied a complete QA lifecycle on real fintech business logic. 8 test personas, atomic E2E tests, unit test suite, and 3-gate CI pipeline. Every test case maps to a real business risk.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {[['169', 'Automated Tests'], ['76', 'E2E Specs'], ['3', 'CI Gates']].map(([num, label]) => (
                <div key={label} className="metric-box">
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fbbf24', fontFamily: 'var(--font-mono)' }}>{num}</div>
                  <div style={{ fontSize: '0.57rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'var(--font-mono)' }}>{label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {['Playwright E2E', 'Vitest Unit', 'Page Object Model', 'React 19 + TypeScript', 'GitHub Actions'].map((t) => (
                <span key={t} className={t.includes('Playwright') || t.includes('Vitest') || t.includes('Object') ? 'tag-qa' : 'tag-tech'}>{t}</span>
              ))}
            </div>
            <div className="demo-slot">▶ Demo clip placeholder</div>
          </div>
          <div className="card-footer">
            <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)' }}>QA: <strong style={{ color: '#34d399' }}>Risk-based priority · 8 test personas · 3-gate CI</strong></div>
            <a href="https://github.com/aoaaae-sunattha" className="chip" target="_blank" rel="noopener noreferrer">GitHub →</a>
          </div>
        </div>

        {/* CrewAI QA Agent */}
        <div className="glass hover-lift" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div className="stripe-green" />
          <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <div style={{ fontSize: '1.5rem', flexShrink: 0 }}>🤖</div>
              <div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, lineHeight: 1.25, color: '#fff' }}>QA Agent — CrewAI System</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.15rem' }}>2 pipelines · 6 agents · Feature testing + Bug verification</div>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.72 }}>
              Two independent CrewAI pipelines. <strong style={{ color: '#fff' }}>qa-challenger</strong> takes a vague feature ticket and produces a user story, test plan, manual cases, and Playwright scripts. <strong style={{ color: '#fff' }}>qa-retest</strong> reads a real GitHub PR diff and generates targeted retest cases for the exact code that changed.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {[['2', 'Pipelines'], ['6', 'Agents'], ['PR', 'Diff Reader']].map(([num, label]) => (
                <div key={label} className="metric-box">
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#34d399', fontFamily: 'var(--font-mono)' }}>{num}</div>
                  <div style={{ fontSize: '0.57rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'var(--font-mono)' }}>{label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {['CrewAI', 'Gemini 2.5 Pro', 'Playwright (generated)', 'Python', 'GitHub PR diff'].map((t) => (
                <span key={t} className={t === 'CrewAI' || t === 'Gemini 2.5 Pro' ? 'tag-ai' : t.includes('Playwright') ? 'tag-qa' : 'tag-tech'}>{t}</span>
              ))}
            </div>
            <div className="demo-slot">▶ Demo clip placeholder</div>
          </div>
          <div className="card-footer">
            <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)' }}>
              <strong style={{ color: '#34d399' }}>qa-challenger:</strong> ticket → story → plan → cases → .spec.ts
            </div>
            <a href="https://github.com/aoaaae-sunattha" className="chip" target="_blank" rel="noopener noreferrer">GitHub →</a>
          </div>
        </div>
      </div>

      {/* ── Philosophy card ── */}
      <div className="glass hover-lift" style={{ overflow: 'hidden' }}>
        <div className="stripe-slate" />
        <div style={{ padding: '1.5rem 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.85rem' }}>
              <div style={{ fontSize: '1.5rem' }}>🎯</div>
              <div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#fff' }}>The QA Forge Approach</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>Why I build the process, not just run it</div>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.72 }}>
              Most QA engineers inherit a process. I&apos;m designing one — a repeatable, AI-augmented system that any QA engineer can run. The pipeline writes the test plan. The healer fixes broken selectors. The report writes itself. The QA engineer owns the quality strategy, the edge cases, and the acceptance criteria. That part doesn&apos;t automate.
            </p>
          </div>
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
              {['Process design', 'Prompt engineering', 'Agentic orchestration', 'QA strategy'].map((t) => (
                <span key={t} className={t === 'Agentic orchestration' ? 'tag-ai' : 'tag-qa'}>{t}</span>
              ))}
            </div>
            <blockquote style={{ padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.04)', borderLeft: '3px solid rgba(255,255,255,0.12)', borderRadius: '0 8px 8px 0', fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, margin: 0, fontStyle: 'italic' }}>
              &ldquo;You haven&apos;t been replaced — you&apos;ve been promoted to the architect seat. The AI runs the repetitive parts; you own the quality strategy.&rdquo;
              <div style={{ marginTop: '0.5rem', color: 'rgba(255,255,255,0.25)', fontSize: '0.72rem', fontStyle: 'normal' }}>— from the QA Forge pipeline docs</div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add to page.tsx and build**

```typescript
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import QAForge from '@/components/QAForge'

export default async function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <QAForge />
    </main>
  )
}
```

```bash
npm run build
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/QAForge.tsx app/page.tsx
git commit -m "feat: add QA Forge section — pipeline card, KODA, CrewAI, philosophy"
```

---

## Task 7: Projects.tsx

**Files:**
- Create: `components/Projects.tsx`

- [ ] **Step 1: Create components/Projects.tsx**

```typescript
export default function Projects() {
  return (
    <section id="projects" className="wrap">
      <hr className="section-hr" style={{ marginBottom: '4rem' }} />
      <div className="section-eye">Portfolio</div>
      <h2 className="section-h">Projects</h2>
      <p className="section-sub">Built from scratch. Tested end-to-end. Each one is a full PM → Design → Dev → QA cycle driven by AI.</p>

      {/* ── Clotilde hero card ── */}
      <div className="glass hover-lift" style={{ marginBottom: '1.5rem', overflow: 'hidden' }}>
        <div className="stripe-violet" />
        <div style={{ padding: '2.25rem 2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.25rem' }}>
          {/* Left */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <span className="star-badge">⭐ Star Project</span>
              <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>Built with Claude</span>
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '0.35rem', color: '#fff' }}>✈️ Clotilde</div>
            <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', marginBottom: '1.25rem' }}>AI Corporate Travel Assistant · Telegram Bot · v3.0</div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.78, marginBottom: '1.5rem' }}>
              A natural-language corporate travel assistant that searches live flights, enforces role-based company policy, routes out-of-policy bookings through a real approval workflow, and keeps travelers notified across every step of their trip.
            </p>
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {[['4', 'Role Levels', '#60a5fa'], ['17', 'Notifications', '#a78bfa'], ['15', 'Golden Tests', '#34d399'], ['5', 'AI Tools', '#fbbf24']].map(([num, label, color]) => (
                <div key={label} className="metric-box">
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1, color, fontFamily: 'var(--font-mono)' }}>{num}</div>
                  <div style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.25rem', letterSpacing: '0.5px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>{label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
              {['Built with Claude', 'Gemini 2.5 Pro', 'Gemini 2.5 Flash', 'Node.js', 'Duffel API (live)', 'Telegram Bot API', 'Golden Dataset', 'Regression Tests'].map((t) => (
                <span key={t} className={t.includes('Claude') || t.includes('Gemini') ? 'tag-ai' : t.includes('Dataset') || t.includes('Regression') ? 'tag-qa' : 'tag-tech'}>{t}</span>
              ))}
            </div>
            <video controls style={{ width: '100%', borderRadius: '10px', marginTop: '0.5rem' }} preload="none">
              <source src="https://raw.githubusercontent.com/aoaaae-sunattha/Portfolio/main/Clotilde_presentation.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Right — features */}
          <div>
            <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '2px', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>Key Features</div>
            {[
              { icon: '🛡️', title: 'Role-Based Policy Enforcement', desc: 'Cabin class and hotel budget caps enforced per employee level. Operations/Staff → Economy only. Directors and VP → up to Business Class.' },
              { icon: '📋', title: 'Full Out-of-Policy Approval Workflow', desc: 'Traveler submits a business justification → manager gets Telegram message with Approve/Reject buttons → approval issues a PNR.' },
              { icon: '🔔', title: '17 Real-Time Traveler Notifications', desc: 'Covers the full travel lifecycle — booking confirmed, flight delayed/rescheduled/cancelled, no seats, hotel overbooked, policy approved/rejected.' },
              { icon: '🖥️', title: 'Natural Language Admin Console', desc: 'Travel managers type plain English and Gemini 2.5 Flash resolves it to the right action and notification automatically.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ display: 'flex', gap: '0.8rem', marginBottom: '1.1rem', alignItems: 'flex-start' }}>
                <div className="feature-icon">{icon}</div>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.15rem', color: '#fff' }}>{title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{desc}</div>
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1rem', flexWrap: 'wrap' }}>
              <a href="https://www.notion.so/Clotilde-v3-0-360dee0fbb3e806b9fe0f677169a2e26" target="_blank" rel="noopener noreferrer" className="btn-glass" style={{ flex: 1, justifyContent: 'center', textAlign: 'center', whiteSpace: 'nowrap' }}>📋 QA Notion</a>
              <a href="https://docs.google.com/presentation/d/1ZlNVMXSrT9uLDg-hExS_xZXgZrdCuot8XqvaqCFgCEQ/edit" target="_blank" rel="noopener noreferrer" className="btn-glass" style={{ flex: 1, justifyContent: 'center', textAlign: 'center', whiteSpace: 'nowrap' }}>🎞️ Slides</a>
              <a href="https://github.com/aoaaae-sunattha/Clotilde_AI" target="_blank" rel="noopener noreferrer" className="btn-glass" style={{ flex: 1, justifyContent: 'center', textAlign: 'center', whiteSpace: 'nowrap' }}>🐙 GitHub</a>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', flexShrink: 0, display: 'inline-block' }} />
            Live Duffel API · Mock GDS fallback · PNR generation · 4 traveler profiles from YAML
          </div>
        </div>
      </div>

      {/* ── 2-col project grid ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
        {/* Flight Tracker */}
        <div className="glass hover-lift" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div className="stripe-green" />
          <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <div style={{ fontSize: '1.5rem' }}>🛫</div>
              <div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#fff' }}>Flight Tracker Bot</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>BKK → CDG · Built on OpenClaw · Python</div>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.72 }}>
              Two-agent pipeline that finds cheapest Bangkok→Paris flights within strict 81–89 day return windows, delivers a formatted Telegram report daily. Agent 1 queries Travelpayouts API; Agent 2 filters, ranks, and formats output.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {[['2', 'Agents', '#60a5fa'], ['14', 'QA Cases', '#34d399'], ['3', 'Phases', '#fbbf24']].map(([num, label, color]) => (
                <div key={label} className="metric-box">
                  <div style={{ fontSize: '1rem', fontWeight: 700, color, fontFamily: 'var(--font-mono)' }}>{num}</div>
                  <div style={{ fontSize: '0.57rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'var(--font-mono)' }}>{label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {['OpenClaw', 'Multi-Agent Pipeline', 'Python 3.13', 'Travelpayouts API', '14 QA Test Cases'].map((t) => (
                <span key={t} className={t === 'OpenClaw' || t.includes('Multi') ? 'tag-ai' : t.includes('QA') ? 'tag-qa' : 'tag-tech'}>{t}</span>
              ))}
            </div>
            <div className="demo-slot">▶ Demo clip placeholder</div>
          </div>
          <div className="card-footer">
            <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)' }}>QA: <strong style={{ color: '#34d399' }}>TC-01→TC-14 · API retry · date safety</strong></div>
            <a href="https://github.com/aoaaae-sunattha" className="chip" target="_blank" rel="noopener noreferrer">GitHub →</a>
          </div>
        </div>

        {/* AEON */}
        <div className="glass hover-lift" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div className="stripe-purple" />
          <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <div style={{ fontSize: '1.5rem' }}>🧠</div>
              <div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#fff' }}>AEON — Multi-Agent AI System</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>Hermes orchestration · Obsidian memory · Claude + Gemini</div>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.72 }}>
              7 specialised AI agents orchestrated by Hermes. Uses Tavily API for real-time market context. The Obsidian vault acts as a persistent AI brain. A QA Auditor agent evaluates each prediction against real Binance data 6 hours later.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {[['7', 'Agents', '#a78bfa'], ['4', 'Hermes Skills', '#60a5fa'], ['59', 'Tests Pass', '#34d399']].map(([num, label, color]) => (
                <div key={label} className="metric-box">
                  <div style={{ fontSize: '1rem', fontWeight: 700, color, fontFamily: 'var(--font-mono)' }}>{num}</div>
                  <div style={{ fontSize: '0.57rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'var(--font-mono)' }}>{label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {['Hermes (orchestrator)', 'Claude 3.5 Sonnet', 'Gemini 2.5 Flash', 'Tavily API', 'SQLite', 'Self-Auditing Agent'].map((t) => (
                <span key={t} className={t.includes('Hermes') || t.includes('Claude') || t.includes('Gemini') ? 'tag-ai' : t.includes('Audit') ? 'tag-qa' : 'tag-tech'}>{t}</span>
              ))}
            </div>
            <div className="demo-slot">▶ Demo clip placeholder</div>
          </div>
          <div className="card-footer">
            <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)' }}>QA: <strong style={{ color: '#34d399' }}>Built-in QA Auditor · WIN/LOSS eval · Root Cause Analysis</strong></div>
            <a href="https://github.com/aoaaae-sunattha" className="chip" target="_blank" rel="noopener noreferrer">GitHub →</a>
          </div>
        </div>
      </div>

      {/* ── tp-exchanges professional card ── */}
      <div className="glass hover-lift" style={{ overflow: 'hidden' }}>
        <div className="stripe-multi" />
        <div style={{ padding: '2.25rem 2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.25rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <span className="star-badge" style={{ background: 'rgba(245,158,11,0.12)', borderColor: 'rgba(245,158,11,0.3)', color: '#fbbf24' }}>🏢 Professional · Current Employer</span>
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '0.35rem', color: '#fff' }}>tp-exchanges — Multi-Exchange Integration Library</div>
            <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', marginBottom: '1rem' }}>Unified API abstraction layer across CEX + DEX · Binance as canonical template</div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.78, marginBottom: '1.5rem' }}>
              A production monorepo library that normalises the APIs of 20–30 active crypto exchanges into a single unified interface. Binance is the canonical template; every exchange inherits the base class and implements the same public and private API contract.
            </p>
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
              {[['20–30', 'Exchanges'], ['REST', 'Protocol'], ['CEX+DEX', 'Coverage'], ['v0.48', 'Production']].map(([num, label]) => (
                <div key={label} className="metric-box">
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, lineHeight: 1, color: '#fbbf24', fontFamily: 'var(--font-mono)' }}>{num}</div>
                  <div style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.25rem', letterSpacing: '0.5px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>{label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {['Node.js', 'REST API', 'Lerna Monorepo', 'Integration Tests', 'Schema Validation', 'GitHub Actions CI'].map((t) => (
                <span key={t} className={t.includes('Tests') || t.includes('Validation') ? 'tag-qa' : 'tag-tech'}>{t}</span>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '2px', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>What the API layer covers</div>
            {[
              { icon: '📊', title: 'Public Market Data (REST)', desc: 'Order Book, 24h Exchange Volume, Latest Trades, Last Rate, Trading Pairs list. Same method signature across every exchange.' },
              { icon: '🔐', title: 'Private Account API (Authenticated)', desc: 'Account Balances, Open Orders, Place/Cancel Order, Trade History, Deposits & Withdrawals, Deposit Address. All authenticated via API key + secret.' },
              { icon: '🧪', title: 'QA Approach — Node Scripts → Postman', desc: 'Each exchange validated through Node.js integration scripts. Tests create-and-cancel-order flows, schema contract parity, and edge cases per trading pair.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                <div className="feature-icon">{icon}</div>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.15rem', color: '#fff' }}>{title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card-footer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', flexShrink: 0, display: 'inline-block' }} />
            Production library · v0.48.0 · 20–30 active exchange integrations
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add to page.tsx and build**

```typescript
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import QAForge from '@/components/QAForge'
import Projects from '@/components/Projects'

export default async function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <QAForge />
      <Projects />
    </main>
  )
}
```

```bash
npm run build
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/Projects.tsx app/page.tsx
git commit -m "feat: add Projects section — Clotilde, Flight Tracker, AEON, tp-exchanges"
```

---

## Task 8: Lab.tsx

**Files:**
- Create: `components/Lab.tsx`

- [ ] **Step 1: Create components/Lab.tsx**

```typescript
const experiments = [
  {
    title: 'AgentViz — Agentic Economy Dashboard',
    badge: 'Visualisation Layer',
    badgeColor: 'rgba(245,158,11,0.3)',
    badgeText: '#fbbf24',
    desc: 'Three autonomous agents (Alpha, Beta, Gamma) transact in real-time through a live visual dashboard — SVG curved arcs trace every fund flow. Simulates micropayments, bidirectional transfers, and conditional transactions. Built as a pure Vanilla JS prototype with 55 manual test cases documented.',
    tags: ['Micropayments', 'Bidirectional Transfers', 'Conditional Transactions', 'Real-time Ledger', 'SVG Arcs', '55 Test Cases', 'Vanilla JS'],
  },
  {
    title: 'AgentSim — Agent-vs-Agent Economy',
    badge: 'Decision Layer',
    badgeColor: 'rgba(99,102,246,0.3)',
    badgeText: '#a78bfa',
    desc: 'Two autonomous Gemini 2.0 agents operate as economic actors. Each evaluates counterpart offers using persona logic and decides autonomously to ACCEPT / REJECT / COUNTER. Covers 5 real-world scenarios: direct asset purchase, micropayment, price haggling, atomic swap, competitive auction.',
    tags: ['Gemini 2.0 Flash', 'React 18 + TypeScript', 'Atomic Swap', 'Micropayments', 'Bid / Ask / Counter-offer', 'Agentic QA Pipeline'],
  },
  {
    title: 'TrustlessSim — Cryptographic Settlement Layer',
    badge: 'Settlement Layer',
    badgeColor: 'rgba(6,182,212,0.3)',
    badgeText: '#22d3ee',
    desc: 'Proves AI agents can negotiate safely in a trustless environment. Implements a Commit-Reveal Protocol using SHA-256 cryptography. Simulates 5 attack vectors: honest deal, cheating agent, data corruption, ghost agent, replay attack.',
    tags: ['Commit-Reveal Protocol', 'SHA-256 Cryptography', 'Front-running Prevention', 'Off-chain Settlement', 'Web Crypto API', 'React 18 + TypeScript'],
  },
  {
    title: 'Paperclip Trading Bot',
    badge: null,
    badgeColor: '',
    badgeText: '',
    desc: 'A deterministic BTC/USDT paper-trading bot built on rule-based signal logic — no AI, no ML, no black box. Uses EMA crossover, RSI, and configurable stop-loss. Built primarily as a QA exercise: 131/131 tests passing, 96% coverage.',
    tags: ['Node.js', 'EMA Crossover', 'RSI', 'Stop-Loss', 'Paper Trading', '131 Tests', '96% Coverage'],
  },
  {
    title: 'Prompt Compiler CLI',
    badge: null,
    badgeColor: '',
    badgeText: '',
    desc: 'A Node.js ESM CLI that assembles, validates, and outputs system prompts for multiple LLM targets from a single source. Reads modular prompt blocks and assembles them per target. Validates required fields, flags missing sections, warns on token budget overruns.',
    tags: ['Node.js ESM', 'CLI', 'Prompt Engineering', 'Multi-LLM', 'Token Validation', 'Claude', 'Gemini', 'OpenRouter'],
  },
  {
    title: 'AkiClaw Agent Framework',
    badge: null,
    badgeColor: '',
    badgeText: '',
    desc: 'A fork and personal extension of SubZeroClaw — a persistent background agent. Identity, personality, skills, and behavioral rules defined in plain .md files. Runs in Docker with a credential proxy. Telegram interface is the primary interaction layer.',
    tags: ['SubZeroClaw', 'Python', 'Docker', 'Claude API', 'OpenRouter', 'Telegram', 'Markdown Memory'],
  },
]

export default function Lab() {
  return (
    <section className="wrap">
      <hr className="section-hr" style={{ marginBottom: '4rem' }} />
      <div className="section-eye">Lab</div>
      <h2 className="section-h">Experiments</h2>
      <p className="section-sub">Self-directed projects exploring AI agent patterns, fintech logic, and automation.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
        {experiments.map((exp) => (
          <div key={exp.title} className="lab-card hover-lift">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{exp.title}</div>
              {exp.badge && (
                <span style={{ fontSize: '0.6rem', padding: '0.15rem 0.45rem', background: exp.badgeColor.replace('0.3', '0.12'), border: `1px solid ${exp.badgeColor}`, borderRadius: '4px', color: exp.badgeText, letterSpacing: '0.4px', whiteSpace: 'nowrap' }}>
                  {exp.badge.toUpperCase()}
                </span>
              )}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, flex: 1 }}>{exp.desc}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.75rem' }}>
              {exp.tags.map((tag) => (
                <span key={tag} className="lab-tag">{tag}</span>
              ))}
            </div>
            <div style={{ marginTop: 'auto', paddingTop: '0.65rem' }}>
              <a href="#" className="chip">Explore more →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add to page.tsx and build**

```bash
npm run build
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/Lab.tsx app/page.tsx
git commit -m "feat: add Lab section — 6 experiment cards"
```

---

## Task 9: Skills.tsx (with svgl logos)

**Files:**
- Create: `components/Skills.tsx`
- Modify: `app/page.tsx` (pass svgs prop)

- [ ] **Step 1: Create components/Skills.tsx**

```typescript
import { resolveLogo } from '@/lib/svgl'
import type { Svg } from '@/lib/svgl'

function SkillItem({ name, svgs }: { name: string; svgs: Svg[] }) {
  const logoUrl = resolveLogo(svgs, name)
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.4 }}>
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={name}
          width={16}
          height={16}
          style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.65, flexShrink: 0 }}
        />
      ) : (
        <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.3)', flexShrink: 0, display: 'inline-block' }} />
      )}
      {name}
    </div>
  )
}

type Props = { svgs: Svg[] }

export default function Skills({ svgs }: Props) {
  return (
    <section id="skills" className="wrap">
      <hr className="section-hr" style={{ marginBottom: '4rem' }} />
      <div className="section-eye">Stack</div>
      <h2 className="section-h">Skills & Tools</h2>
      <p className="section-sub">
        Every tool here starts the same way — use AI to digest the docs, understand the architecture, plan the approach, then build with intention.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* ── Zone 1: AI & LLMs ── */}
        <div className="glass" style={{ padding: '1.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1rem' }}>AI & LLMs</div>

          {/* Row A: 4-col */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.6rem' }}>
            {[
              { color: '#60a5fa', bg: 'rgba(59,130,246,0.06)', border: 'rgba(59,130,246,0.18)', title: 'Claude · Anthropic', items: ['Chat — reasoning & planning', 'Code — CLI coding agent', 'Cowork — file automation', 'API — LLM for AkiClaw + AEON'] },
              { color: '#a78bfa', bg: 'rgba(139,92,246,0.06)', border: 'rgba(139,92,246,0.18)', title: 'Gemini · Google', items: ['2.5 Pro — Clotilde + CrewAI', '2.5 Flash — admin tasks', '3 Preview — latest model', 'API — LLM for Clotilde + AEON'] },
              { color: '#fb923c', bg: 'rgba(251,146,60,0.06)', border: 'rgba(251,146,60,0.18)', title: 'Codex · OpenAI', items: ['GPT-5.4 — daily builds & POC', 'GPT-5.5 — agentic, long-context', 'Prompt Compiler adapter'] },
              { color: '#22d3ee', bg: 'rgba(6,182,212,0.06)', border: 'rgba(6,182,212,0.18)', title: 'Research Tools', items: ['NotebookLM — doc analysis', 'Perplexity — live research'] },
            ].map(({ color, bg, border, title, items }) => (
              <div key={title} style={{ background: bg, border: `1px solid ${border}`, borderRadius: '9px', padding: '0.8rem' }}>
                <div style={{ fontSize: '0.67rem', fontWeight: 700, color, letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '0.55rem', fontFamily: 'var(--font-mono)' }}>{title}</div>
                {items.map((item) => (
                  <div key={item} style={{ fontSize: '0.77rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.25rem' }}>{item}</div>
                ))}
              </div>
            ))}
          </div>

          {/* Row B: 3-col */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.6rem', marginTop: '0.6rem' }}>
            {[
              { color: '#fbbf24', bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.18)', title: 'AI Frameworks', items: ['CrewAI — multi-agent (QA Agent)', 'OpenClaw — agent platform', 'Hermes — skill orchestration', 'Paperclip — self-built trading bot'] },
              { color: '#34d399', bg: 'rgba(16,185,129,0.06)', border: 'rgba(16,185,129,0.18)', title: 'Prompt Engineering', items: ['Claude Code Skills — built with Claude + Gemini', 'System prompts — structured with Claude + Gemini 2.5 Pro'] },
              { color: '#f87171', bg: 'rgba(239,68,68,0.06)', border: 'rgba(239,68,68,0.18)', title: 'AI for Planning', items: ['01 PRD', '02 Business plan, goals & rules', '03 User stories', '04 Acceptance criteria', '05 QA test plan'] },
            ].map(({ color, bg, border, title, items }) => (
              <div key={title} style={{ background: bg, border: `1px solid ${border}`, borderRadius: '9px', padding: '0.8rem' }}>
                <div style={{ fontSize: '0.67rem', fontWeight: 700, color, letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '0.55rem', fontFamily: 'var(--font-mono)' }}>{title}</div>
                {items.map((item, i) => (
                  <div key={item} style={{ fontSize: '0.77rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.25rem' }}>
                    {title === 'AI for Planning' ? <><span style={{ color, fontSize: '0.62rem', fontWeight: 700, marginRight: '0.4rem', fontFamily: 'var(--font-mono)' }}>{String(i + 1).padStart(2, '0')}</span>{item.replace(/^\d+\s/, '')}</> : item}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Cross-check callout */}
          <div style={{ marginTop: '0.65rem', padding: '0.6rem 0.9rem', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '0.76rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.55 }}>
            <span style={{ color: '#fff', fontWeight: 600 }}>How I use them together —</span> Cross-check across Claude and Gemini before committing to any decision. Use NotebookLM and Perplexity to verify. If all sources agree, it&apos;s solid. If they diverge, dig deeper.
          </div>
        </div>

        {/* ── Zone 2: 4-col skill cards ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 1fr))', gap: '0.85rem' }}>
          {[
            {
              title: 'QA & Testing',
              accent: '#10b981',
              items: ['Playwright (E2E)', 'Vitest / Jest (Unit)', 'Page Object Model', 'Test plan & strategy', 'Risk-based prioritisation', 'CI/CD (GitHub Actions)'],
            },
            {
              title: 'Development',
              accent: '#3b82f6',
              items: ['JavaScript / TypeScript', 'Node.js', 'Python 3.13', 'React 19', 'Next.js', 'REST APIs / Docker'],
            },
            {
              title: 'APIs & Integrations',
              accent: '#8b5cf6',
              items: ['Telegram Bot API', 'Duffel (live flights)', 'Travelpayouts / Aviationstack', 'Tavily API (real-time research)', 'Google Sheets API', 'Binance (CCXT)'],
            },
            {
              title: 'MCP',
              accent: '#06b6d4',
              items: ['GitHub MCP', 'Notion MCP', 'Playwright MCP'],
            },
          ].map(({ title, accent, items }) => (
            <div
              key={title}
              className="glass-sm"
              style={{ padding: '1.25rem', borderLeft: `3px solid ${accent}` }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '2px', color: accent, textTransform: 'uppercase', marginBottom: '0.9rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem' }}>
                {title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {items.map((item) => (
                  <SkillItem key={item} name={item} svgs={svgs} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Fetch svgs in page.tsx and pass as prop**

```typescript
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import QAForge from '@/components/QAForge'
import Projects from '@/components/Projects'
import Lab from '@/components/Lab'
import Skills from '@/components/Skills'
import { fetchSvgs } from '@/lib/svgl'

export default async function Home() {
  const svgs = await fetchSvgs()

  return (
    <main>
      <Nav />
      <Hero />
      <QAForge />
      <Projects />
      <Lab />
      <Skills svgs={svgs} />
    </main>
  )
}
```

- [ ] **Step 3: Build**

```bash
npm run build
```

Expected: no errors. svgl.app fetch occurs at build time.

- [ ] **Step 4: Commit**

```bash
git add components/Skills.tsx lib/svgl.ts app/page.tsx
git commit -m "feat: add Skills section with svgl.app logo resolution"
```

---

## Task 10: Workflow.tsx + QAForAI.tsx

**Files:**
- Create: `components/Workflow.tsx`
- Create: `components/QAForAI.tsx`

- [ ] **Step 1: Create components/Workflow.tsx**

```typescript
const steps = [
  { num: '01', title: 'Define & Plan', desc: 'Map user stories, identify intents, draft the test plan before any code. Quality starts at requirements.' },
  { num: '02', title: 'Golden Dataset First', desc: 'Write expected inputs/outputs as a dataset. This becomes the contract the system must satisfy.' },
  { num: '03', title: 'Build with Claude', desc: 'Claude as co-pilot for architecture, code generation, prompt design, and agent role definition.' },
  { num: '04', title: 'Test Everything', desc: 'Manual cases → automate P1 flows → CI gates. For AI systems: regression on golden dataset, edge case validation.' },
  { num: '05', title: 'Self-Audit Loop', desc: 'Evaluate outputs, run Root Cause Analysis on failures, feed lessons back. Inspired by AEON\'s built-in QA Auditor agent.' },
]

export default function Workflow() {
  return (
    <section id="workflow" className="wrap">
      <hr className="section-hr" style={{ marginBottom: '4rem' }} />
      <div className="section-eye">Process</div>
      <h2 className="section-h">How I Build with AI</h2>
      <p className="section-sub">Not a vibe-coder. AI is in every step — including the testing.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(175px, 1fr))', gap: '1rem' }}>
        {steps.map(({ num, title, desc }) => (
          <div key={num} className="glass hover-lift" style={{ padding: '1.4rem' }}>
            <div className="flow-num">{num}</div>
            <div style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.3rem', color: '#fff' }}>{title}</div>
            <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create components/QAForAI.tsx**

```typescript
const cards = [
  { icon: '🎯', title: 'Intent Regression Testing', desc: 'From Clotilde\'s golden_dataset.js — 15 regression cases mapping real traveller inputs to expected agent actions. Run after every prompt or model change to catch regressions before they reach users.' },
  { icon: '🚦', title: 'Confidence Boundary Testing', desc: 'From Clotilde\'s agent routing logic — verify the agent knows when to act, when to ask for clarification, and when to escalate. Ambiguous input must never silently produce a wrong booking.' },
  { icon: '🛡️', title: 'Policy Enforcement Testing', desc: 'From Clotilde\'s Policy.js — verify business rules hold under adversarial inputs. Hotel budget caps per city, cabin class per role level, advance booking minimums, and out-of-policy approval triggers.' },
  { icon: '🔄', title: 'Fallback & Escalation Testing', desc: 'From Clotilde\'s escalate_to_human tool and approval.js — every failure mode must have a graceful path: clarification request, manager approval flow, or safe hold. No raw errors reach the traveller.' },
  { icon: '📊', title: 'QA Audit Loops', desc: 'From AEON\'s self-evaluator agent — compares forecast outputs to real Binance market data 6 hours later, runs Root Cause Analysis on wrong predictions, and writes lessons back into the Obsidian vault.' },
  { icon: '🔍', title: 'Negation & Anaphora Tests', desc: 'From Clotilde\'s golden dataset. "I do NOT want to fly to London" — London must not become a destination. "Book it for Friday" — "it" must resolve to the flight discussed earlier. The hard cases that standard QA misses.' },
]

export default function QAForAI() {
  return (
    <section className="wrap">
      <hr className="section-hr" style={{ marginBottom: '4rem' }} />
      <div className="section-eye">Specialisation</div>
      <h2 className="section-h">QA Thinking Applied to AI</h2>
      <p className="section-sub">Testing AI systems is different from testing regular software. Here&apos;s how I approach it.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '1rem' }}>
        {cards.map(({ icon, title, desc }) => (
          <div key={title} className="glass qa-card hover-lift" style={{ padding: '1.35rem' }}>
            <div style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{icon}</div>
            <div style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.3rem', color: '#fff' }}>{title}</div>
            <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Add both to page.tsx and build**

```typescript
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import QAForge from '@/components/QAForge'
import Projects from '@/components/Projects'
import Lab from '@/components/Lab'
import Skills from '@/components/Skills'
import Workflow from '@/components/Workflow'
import QAForAI from '@/components/QAForAI'
import { fetchSvgs } from '@/lib/svgl'

export default async function Home() {
  const svgs = await fetchSvgs()

  return (
    <main>
      <Nav />
      <Hero />
      <QAForge />
      <Projects />
      <Lab />
      <Skills svgs={svgs} />
      <Workflow />
      <QAForAI />
    </main>
  )
}
```

```bash
npm run build
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/Workflow.tsx components/QAForAI.tsx app/page.tsx
git commit -m "feat: add Workflow (5 steps) and QA for AI (6 cards) sections"
```

---

## Task 11: Contact.tsx + final page.tsx

**Files:**
- Create: `components/Contact.tsx`
- Modify: `app/page.tsx` (add Contact)

- [ ] **Step 1: Create components/Contact.tsx**

```typescript
export default function Contact() {
  return (
    <>
      <section id="contact" style={{ textAlign: 'center', padding: '5rem 1.5rem', position: 'relative', zIndex: 1 }}>
        <div
          className="glass"
          style={{ maxWidth: '560px', margin: '0 auto', overflow: 'hidden' }}
        >
          <div className="stripe-violet" />
          <div style={{ padding: '3.5rem 2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-1px', color: '#fff' }}>
              Let&apos;s Talk
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.92rem', marginBottom: '2.25rem', lineHeight: 1.7 }}>
              Looking for a QA engineer who builds AI products and tests them rigorously. Open to AI product teams, travel tech, and B2B SaaS.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href="mailto:sunattha.saeh@gmail.com" className="clink">✉️ sunattha.saeh@gmail.com</a>
              <a href="https://github.com/aoaaae-sunattha" className="clink" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
              <a href="#" className="clink">💼 LinkedIn</a>
              <a href="#" className="clink">📄 Notion</a>
            </div>
          </div>
        </div>
      </section>

      <footer
        style={{
          textAlign: 'center',
          padding: '1.75rem',
          color: 'rgba(255,255,255,0.2)',
          fontSize: '0.75rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(0,0,0,0.2)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        Built with Claude · Tested end-to-end · © 2026 Sunattha Saeheng
      </footer>
    </>
  )
}
```

- [ ] **Step 2: Complete page.tsx**

```typescript
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import QAForge from '@/components/QAForge'
import Projects from '@/components/Projects'
import Lab from '@/components/Lab'
import Skills from '@/components/Skills'
import Workflow from '@/components/Workflow'
import QAForAI from '@/components/QAForAI'
import Contact from '@/components/Contact'
import { fetchSvgs } from '@/lib/svgl'

export default async function Home() {
  const svgs = await fetchSvgs()

  return (
    <main>
      <Nav />
      <Hero />
      <QAForge />
      <Projects />
      <Lab />
      <Skills svgs={svgs} />
      <Workflow />
      <QAForAI />
      <Contact />
    </main>
  )
}
```

- [ ] **Step 3: Final build + verify out/ directory**

```bash
npm run build && ls out/
```

Expected: `out/` contains `index.html`, `_next/` directory. No errors.

- [ ] **Step 4: Run tests one final time**

```bash
npm test
```

Expected: 4 tests pass (svgl.ts tests).

- [ ] **Step 5: Final commit**

```bash
git add components/Contact.tsx app/page.tsx
git commit -m "feat: add Contact section + footer, complete SPA"
```

---

## Self-Review

**Spec coverage check:**
- [x] Next.js 15 static export → Task 1
- [x] TailwindCSS v4 + glass utilities → Task 2
- [x] svgl.app build-time fetch + logo resolver → Task 3 (with tests)
- [x] Nav with glass blur → Task 4
- [x] Hero — badge, H1, pitch card, CTAs, pill → Task 5
- [x] QA Forge — flagship pipeline, KODA, CrewAI, philosophy → Task 6
- [x] Projects — Clotilde, Flight Tracker, AEON, tp-exchanges → Task 7
- [x] Lab — 6 experiment cards → Task 8
- [x] Skills — AI zone + 4 skill cards with svgl logos → Task 9
- [x] Workflow — 5 steps → Task 10
- [x] QA for AI — 6 cards → Task 10
- [x] Contact + footer → Task 11
- [x] All content matches reference HTML (names, metrics, descriptions, links)
- [x] Purple→Blue→Indigo palette applied throughout
- [x] Background gradient orbs in globals.css
- [x] CSS-only animations (fadeUp, blink, hover-lift)

**Placeholder scan:** No TBDs or TODOs in any task. All code blocks are complete. ✓

**Type consistency:**
- `Svg` type defined in `lib/svgl.ts` Task 3, imported correctly in `Skills.tsx` Task 9 ✓
- `fetchSvgs()` defined in Task 3, called in `page.tsx` Task 9 ✓
- `resolveLogo(svgs, name)` defined in Task 3, used in `SkillItem` in Task 9 ✓
- `Props = { svgs: Svg[] }` in `Skills.tsx` matches `fetchSvgs()` return type ✓
