# Portfolio SPA — Next.js + TailwindCSS + svgl.app
**Date:** 2026-05-17  
**Status:** Approved

---

## Overview

A personal portfolio SPA for **Sunattha Saeheng — QA Engineer × AI Builder**, rebuilt in Next.js 15 with TailwindCSS. Content mirrors the reference HTML at `/Users/yellow-pro/Aoaaae/30Sectofly/index.html`. Design is glassmorphism with a Purple → Blue → Indigo palette, dark base, and subtle CSS-only animations. Tech stack logos are pulled from svgl.app at build time.

---

## Architecture

**Stack:** Next.js 15 App Router, `output: 'export'` (static), TailwindCSS v4, TypeScript

```
portfolio/
├── app/
│   ├── layout.tsx          — root layout, Inter + IBM Plex Mono fonts, metadata
│   ├── page.tsx            — single page, composes all section components
│   └── globals.css         — Tailwind base + glass utility classes + gradient tokens
├── components/
│   ├── Nav.tsx             — fixed glass nav
│   ├── Hero.tsx            — hero with badge, h1, pitch card, CTAs
│   ├── QAForge.tsx         — flagship QA pipeline card + KODA + CrewAI cards
│   ├── Projects.tsx        — Clotilde hero card + project grid (Flight Tracker, AEON, tp-exchanges)
│   ├── Lab.tsx             — 6 experiment cards in 2-col grid
│   ├── Skills.tsx          — skill groups with svgl logos inline
│   ├── Workflow.tsx        — 5-step "How I Build" grid
│   ├── QAForAI.tsx         — 6 QA specialisation cards
│   └── Contact.tsx         — centered glass contact box
└── lib/
    └── svgl.ts             — fetch + type svgl.app API, exported as static data
```

**svgl.app integration:**
- `lib/svgl.ts` calls `https://api.svgl.app` at build time (server component / `generateStaticParams`)
- Returns `Svg[]` typed array; each item has `title`, `route` (SVG URL), `category`
- Skills section matches tech names against `Svg.title` (case-insensitive)
- Matched: renders `<img src={svg.route} />` (white/inverted on dark bg via CSS `filter`)
- Unmatched: renders a 4px dot bullet (same as reference fallback)
- No runtime API calls — all data embedded at build time

**Tailwind config extensions:**
- `backdropBlur` values: `sm(4px)`, `md(12px)`, `lg(20px)`, `xl(40px)`
- Custom `glass` utility: `bg-white/[0.06] backdrop-blur-md border border-white/[0.12] rounded-2xl`
- Gradient tokens: `from-violet-600 via-blue-500 to-indigo-500`

---

## Visual Design System

### Background
```
base: #0a0a1a (near-black)
orb-1: radial-gradient purple (#7c3aed, 60% opacity) — top-left, ~600px
orb-2: radial-gradient indigo (#4338ca, 50% opacity) — bottom-right, ~500px
```
Both orbs use `filter: blur(120px)` and are `position: fixed` so they persist during scroll.

### Glass cards
```css
background: rgba(255, 255, 255, 0.06)
backdrop-filter: blur(16px)
border: 1px solid rgba(255, 255, 255, 0.12)
border-radius: 16px
```
Hover state: `border-color → rgba(255,255,255,0.25)`, `box-shadow: 0 0 24px rgba(167,139,250,0.15)`

### Typography
| Element | Style |
|---|---|
| Body | Inter, 14–15px, `text-white/70` |
| Headings | Inter 800–900, gradient text `from-violet-400 to-blue-400` |
| Labels/eyebrows | IBM Plex Mono, 0.65rem, uppercase, letter-spacing 2px |
| Metrics/numbers | IBM Plex Mono, bold, colored per accent |
| Code snippets | IBM Plex Mono, `text-violet-300`, `bg-white/5` |

### Accent tokens
| Token | Hex | Usage |
|---|---|---|
| `violet` | `#7c3aed` / `#a78bfa` | Primary CTA, badges, card stripes |
| `blue` | `#3b82f6` / `#60a5fa` | Links, hover, metrics |
| `indigo` | `#6366f1` / `#818cf8` | Tags, section accents |
| `emerald` | `#059669` / `#34d399` | QA/green accents (preserve semantic meaning from reference) |
| `amber` | `#d97706` / `#fbbf24` | QA Forge / fintech accents |

### Animations (CSS-only, subtle)
- **Scroll fade-in:** `@keyframes fadeUp { from { opacity:0; transform:translateY(12px) } to { opacity:1; transform:translateY(0) } }` — applied to each section with `animation-delay` stagger
- **Hover lift:** `transition: transform 150ms ease, border-color 150ms ease; hover: translateY(-2px)`
- **Blink dot:** `@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.35} }` — on "Open to Work" badge
- No JS animation libraries

---

## Page Sections & Content

### Nav
- Fixed, `backdrop-blur-xl`, `border-b border-white/10`
- Logo: `"Sunattha S."` with violet→blue gradient text
- Links: Projects · QA Forge · Skills · Workflow · Contact
- Mobile: hidden links (no hamburger needed — SPA scroll links)

### Hero
- Blinking badge: `● QA Engineer × AI Builder · Open to Work` (violet border/bg)
- H1: `Sunattha Saeheng` + line 2 gradient span `QA who builds with AI`
- Tagline: `"I don't just test software — I use AI to design, build, and validate real products from the ground up."`
- Glass pitch card (violet top stripe, `⚡ 30-SECOND PITCH` label): full paragraph from reference
- CTAs: `View Projects` (violet filled) + `Contact Me` (glass outline)
- Pill link → `🔬 QA Forge — 59 tests · 20 Claude skills · v3.0 →`

### QA Forge
- Section eye: `QA Forge` (emerald)
- H2: `QA as a Discipline`
- Sub: `Not just running tests — designing the system that runs them. A complete PM → BA → QA pipeline built from scratch with Claude...`
- **Flagship card** (full-width glass, emerald top stripe): Agentic QA Pipeline v3.0
  - Metrics: 20 Claude Skills · 6 Phases · 5 Human Gates · 6 Test Types
  - Pipeline phase table (Phase 0 → Phase 1 → Phase 2) with human gates
  - Tech tags: Claude, 20 Claude Skills, Playwright E2E, POM, TypeScript, GitHub Actions, GitHub MCP
  - Right column: 4 "What makes this different" feature blocks
  - Footer note: `Applied on FinPay — 27 user stories · 100% pass rate`
- **2-col supporting grid:**
  - KODA — QA on Fintech BNPL (amber stripe): 169 tests, 76 E2E, 3 CI gates
  - QA Agent — CrewAI System (emerald stripe): 2 pipelines, 6 agents
- **Full-width philosophy card:** "The QA Forge Approach" + blockquote

### Projects
- Section eye: `Portfolio`
- H2: `Projects`
- **Clotilde hero card** (full-width, violet→blue stripe): ✈️ AI Corporate Travel Assistant
  - Metrics: 4 Role Levels · 17 Notifications · 15 Golden Tests · 5 AI Tools
  - Tech: Claude, Gemini 2.5 Pro/Flash, Node.js, Duffel API, Telegram Bot API
  - Video embed (raw GitHub source)
  - Right: 4 feature blocks (Policy Enforcement, Approval Workflow, Notifications, Admin Console)
  - Links: QA Notion · Slides · GitHub
- **3-col project grid:**
  - Flight Tracker Bot (emerald): 2 agents, 14 QA cases, 3 phases
  - AEON Multi-Agent System (purple): 7 agents, 4 Hermes Skills, 59 tests
- **tp-exchanges card** (full-width, amber→red→purple stripe): professional work

### Lab
- Section eye: `Lab`
- H2: `Experiments`
- 2-col grid of 6 glass cards:
  1. AgentViz — Agentic Economy Dashboard
  2. AgentSim — Agent-vs-Agent Economy
  3. TrustlessSim — Cryptographic Settlement Layer
  4. Paperclip Trading Bot (131 tests, 96% coverage)
  5. Prompt Compiler CLI
  6. AkiClaw Agent Framework

### Skills
- Section eye: `Stack`
- H2: `Skills & Tools`
- **Zone 1 (AI & LLMs) — full-width glass card** with internal 4-col + 3-col subgrid:
  - Claude · Anthropic (blue tint)
  - Gemini · Google (purple tint)
  - Codex · OpenAI (orange tint)
  - Research Tools (cyan tint)
  - AI Frameworks (amber tint)
  - Prompt Engineering (emerald tint)
  - AI for Planning (red tint) — numbered PRD→QA plan list
  - Cross-check callout strip
- **Zone 2 — 4-col skill card grid** (colored left accent):
  - QA & Testing (emerald): Playwright, Vitest/Jest, POM, test plan, risk-based, CI/CD
  - Development (blue): JS/TS, Node.js, Python 3.13, React 19, Next.js, REST APIs, Docker
  - APIs & Integrations (purple): Telegram, Duffel, Travelpayouts, Tavily, Google Sheets, Binance
  - MCP (cyan): GitHub MCP, Notion MCP, Playwright MCP
- **svgl logos:** each `sg-item` in Zone 2 shows matching svgl logo (16px, `filter: invert(1) opacity(0.7)`) before the label. Matched names: TypeScript, React, Next.js, Node.js, Python, Docker, GitHub, Playwright, Notion, Telegram, SQLite, Anthropic, Google

### Workflow
- Section eye: `Process`
- H2: `How I Build with AI`
- Sub: `Not a vibe-coder. AI is in every step — including the testing.`
- 5-card flow grid (glass cards), large ghost number (opacity 15%):
  1. Define & Plan
  2. Golden Dataset First
  3. Build with Claude
  4. Test Everything
  5. Self-Audit Loop

### QA for AI
- Section eye: `Specialisation`
- H2: `QA Thinking Applied to AI`
- 3×2 grid of glass cards (emerald hover glow):
  1. Intent Regression Testing
  2. Confidence Boundary Testing
  3. Policy Enforcement Testing
  4. Fallback & Escalation Testing
  5. QA Audit Loops
  6. Negation & Anaphora Tests

### Contact
- Centered glass box (violet top stripe)
- H2: `Let's Talk`
- Sub: `Looking for a QA engineer who builds AI products and tests them rigorously...`
- Icon links: ✉️ sunattha.saeh@gmail.com · 🐙 GitHub · 💼 LinkedIn · 📄 Notion

### Footer
- `Built with Claude · Tested end-to-end · © 2026 Sunattha Saeheng`
- `border-t border-white/10`, `text-white/30`

---

## Data Flow

```
Build time:
  lib/svgl.ts → fetch('https://api.svgl.app')
              → Svg[] typed array
              → passed as prop to Skills component

Skills.tsx:
  techName → find svgl where title.toLowerCase() === name.toLowerCase()
  → match found: <img src={svg.route} width={16} className="invert opacity-70" />
  → no match: <span className="w-1 h-1 rounded-full bg-white/40" />
```

---

## Constraints & Non-Goals

- No JS animation libraries (Framer Motion, GSAP) — CSS only
- No dark/light toggle — dark only
- No CMS or database — all content is hardcoded from the reference
- No hamburger/mobile nav — portfolio use case, desktop-first acceptable
- No contact form — links only (mailto, GitHub, LinkedIn)
- Static export means no API routes

---

## Success Criteria

1. Exact same content as the reference HTML — no information dropped
2. svgl.app logos render correctly for all matched tech names
3. Glassmorphism visible: frosted glass cards, gradient orb background
4. Subtle animations: fade-in on scroll, hover lift, blink dot
5. `next build` produces static export with no errors
6. Passes Vercel deployment (optional but target)
