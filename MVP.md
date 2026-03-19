# MVP.md — Build Plan & Phase Tracker
## Vasanthaganesh Portfolio — vasanthaganesh.dev

**Build approach:** Phase-by-phase. Each phase must be complete and working before the next begins.
**Antigravity:** Execute shell commands. Read this file before every session to know current phase.
**Claude:** Write all code. One component at a time. Test before moving to next.

---

## Phase Overview

```
Phase 1 → Foundation & scaffold        (Day 1 morning)
Phase 2 → Shader hero                  (Day 1 afternoon – Day 2)
Phase 3 → Content sections             (Day 3)
Phase 4 → Photo integration & polish   (Day 4 morning)
Phase 5 → Performance & deploy         (Day 4 afternoon)
```

**Current phase: 1** ← Update this as you progress

---

## Phase 1 — Foundation & Scaffold

**Goal:** Running Next.js app with correct structure, packages, config, and design tokens. No content yet.

### Antigravity tasks:
```bash
# 1. Scaffold
npx create-next-app@latest vasanthaganesh-portfolio \
  --typescript \
  --tailwind \
  --app \
  --no-src-dir \
  --import-alias "@/*"

cd vasanthaganesh-portfolio

# 2. Install dependencies
npm install gsap @gsap/react lenis clsx tailwind-merge

# 3. Install dev dependencies
npm install --save-dev raw-loader @types/node

# 4. Create folder structure
mkdir -p components/hero
mkdir -p components/sections
mkdir -p components/ui
mkdir -p hooks
mkdir -p shaders
mkdir -p lib
mkdir -p public/fonts
```

### Claude tasks (files to write):

- [ ] `next.config.ts` — add raw-loader webpack rule for `.glsl/.frag/.vert` files
- [ ] `tailwind.config.ts` — add custom colours, fonts, keyframes from PRD palette
- [ ] `app/globals.css` — CSS custom properties (all `--ink`, `--ember` etc.), base reset, font-face
- [ ] `lib/fonts.ts` — `next/font/google` config: Bebas Neue, DM Serif Display, IBM Plex Mono, Space Grotesk, Libre Baskerville
- [ ] `lib/constants.ts` — ALL copy strings from PRD sections 3.1–3.6 and palette hex values
- [ ] `lib/gsap.ts` — register GSAP plugins: ScrollTrigger, SplitText
- [ ] `app/layout.tsx` — root layout: font variables, Lenis smooth scroll provider, metadata
- [ ] `app/page.tsx` — skeleton: imports all section components (stubbed), renders in order

### Done when:
- `npm run dev` starts without errors
- `localhost:3000` shows blank dark page (`--ink` background)
- All folders exist
- All `lib/` files export correctly
- TypeScript shows zero errors (`npx tsc --noEmit`)

---

## Phase 2 — Shader Hero

**Goal:** The full cinematic hero — WebGL2 shader background + GSAP reveal timeline.
This is the most important phase. Take time. Get it right.

### Claude tasks (files to write):

- [ ] `shaders/vertex.vert` — simple passthrough vertex shader (GLSL 300 es)
- [ ] `shaders/shared.glsl` — `rnd()`, `noise()`, `fbm()`, `clouds()` utility functions
- [ ] `shaders/nebula.frag` — full cosmic fire fragment shader (adapted from 21st.dev component). Uniforms: `resolution`, `time`, `touch`, `move`
- [ ] `hooks/useShader.ts` — WebGL2 lifecycle hook:
  - Accepts canvas ref + fragment shader source string
  - Compiles vertex + fragment shaders
  - Manages render loop with `requestAnimationFrame`
  - Handles pointer events (mouse/touch `move` uniform)
  - Handles window resize (updates `resolution` uniform)
  - Returns `{ canvasRef, isSupported }` — `isSupported: false` if WebGL2 unavailable
- [ ] `hooks/usePointer.ts` — normalised pointer coordinates relative to canvas
- [ ] `components/hero/ShaderCanvas.tsx` — canvas element, consumes `useShader`, renders gradient fallback if `!isSupported`
- [ ] `components/hero/HeroType.tsx` — giant background "VASANTHAGANESH" text, positioned absolutely behind photo, Bebas Neue, 15–20% opacity
- [ ] `components/hero/HeroReveal.tsx` — GSAP timeline:
  ```
  tl.to(shaderOverlay, { opacity: 0, duration: 0.5 })        // shader blooms in
  tl.to(lightOverlay, { opacity: 0.6, duration: 0.6 }, 0.4)  // red light bloom
  tl.to(photo, { clipPath: reveal, scale: 1, duration: 0.8 }, 0.8)
  tl.to(bgText, { x: 0, opacity: 0.15, duration: 0.7 }, 1.4)
  tl.to(tagline.chars, { skewX: 0, opacity: 1, stagger: 0.03 }, 2.0)
  tl.to(cta, { opacity: 1, y: 0, duration: 0.5 }, 2.6)
  ```
- [ ] `components/hero/index.ts` — re-exports all hero components
- [ ] Update `app/page.tsx` — replace hero stub with real `<HeroReveal />`

### Done when:
- Shader animates continuously on hero background
- Mouse movement influences shader (touch uniform updates)
- GSAP reveal plays correctly on page load
- Background text visible behind photo layer
- Tagline chars animate in sequence
- CTA buttons appear last
- Fallback gradient shows correctly when WebGL2 is mocked as null

---

## Phase 3 — Content Sections

**Goal:** All sections below the hero fully built and scroll-animated.

### Hook to write first:
- [ ] `hooks/useScrollReveal.ts` — wraps GSAP ScrollTrigger:
  ```typescript
  useScrollReveal(ref, { from, to, trigger: 'top 80%', scrub?: boolean })
  ```

### Claude tasks (one component per session):

- [ ] `components/ui/SectionLabel.tsx` — reusable eyebrow label with right-extending rule line
- [ ] `components/ui/Nav.tsx` — fixed nav, scroll-aware opacity, active link tracking
- [ ] `components/ui/Cursor.tsx` — custom cursor: inner dot + outer ring, hover state expansion
- [ ] `components/sections/About.tsx` — 2-column grid: philosophy text + manifesto block left, vitals right. Scroll reveal.
- [ ] `components/sections/Skills.tsx` — intro + tag chips + 2×3 skill card grid. Scroll reveal with stagger on cards.
- [ ] `components/sections/Projects.tsx` — numbered list of 3 projects. Hover: background tint + arrow translate. Scroll reveal.
- [ ] `components/sections/Diary.tsx` — spiral notebook with 3 tabbed pages. Tab switching. "Turn page" button. SVG doodles. Scroll reveal on notebook appear.
- [ ] `components/sections/Contact.tsx` — 2-column: headline left, 3 contact link cards right. Hover: ember border. Scroll reveal.
- [ ] `app/page.tsx` — assemble all sections in final order with `<main>` wrapper

### Section order in `page.tsx`:
```tsx
<Nav />
<Cursor />
<HeroReveal />        {/* #hero */}
<About />             {/* #about */}
<Skills />            {/* #skills */}
<Projects />          {/* #projects */}
<Diary />             {/* #diary */}
<Contact />           {/* #contact */}
<footer />
```

### Done when:
- All 5 sections render with correct copy from `constants.ts`
- Scroll reveal triggers correctly on each section
- Diary tab switching works (3 tabs × 3 entries each)
- Nav links scroll to correct sections
- Custom cursor works
- Zero TypeScript errors
- No hardcoded copy strings in any component

---

## Phase 4 — Photo Integration & Polish

**Goal:** Drop in the real profile photo and apply cinematic lighting treatment. Fine-tune animations.

### Prerequisites (user must complete):
- [ ] Generate profile photo using Midjourney prompt in portfolio (see "AI Image Prompt" section)
- [ ] Save as `/public/vg-photo.jpg` (at least 1200px wide, JPG or WebP)
- [ ] Optional: Feed photo to Gemini with prompt: *"Analyse this portrait. What CSS filter values — contrast, brightness, saturate, hue-rotate — would give it a cinematic deep-red rim light look matching Red Bull athlete photography? Give me exact values."*

### Claude tasks:
- [ ] `HeroReveal.tsx` — replace `<img>` placeholder with `<Image>` from `next/image`, apply Gemini-suggested CSS filter values
- [ ] `HeroReveal.tsx` — add `mix-blend-mode: luminosity` and red overlay `::before` pseudo-element on photo container
- [ ] Global: audit all scroll reveal timings — adjust `stagger`, `duration`, `ease` for cohesion
- [ ] `Nav.tsx` — test and fix scroll spy active link detection
- [ ] `Diary.tsx` — verify all 9 journal entries render with correct dates and SVG doodles
- [ ] Mobile responsive: add breakpoint styles for all sections (collapse 2-col grids to 1-col at 768px)

### Done when:
- Real photo renders in hero with cinematic colour treatment
- Red atmospheric light overlay blends correctly with photo
- All animations feel cohesive and intentional
- Responsive layout works on 375px mobile viewport
- No layout shifts on page load (CLS < 0.1)

---

## Phase 5 — Performance, SEO & Deploy

**Goal:** Production-ready. Passes Lighthouse. Live on Vercel.

### Claude tasks:
- [ ] `app/layout.tsx` — add full OG meta tags, Twitter card, favicon, canonical URL
- [ ] `app/layout.tsx` — add JSON-LD structured data for Person schema
- [ ] `app/globals.css` — add `skip-to-content` link styles
- [ ] All interactive elements — audit `aria-label` on icon buttons, `alt` on images
- [ ] `lib/gsap.ts` — wrap GSAP dynamic import in `typeof window !== 'undefined'` guard
- [ ] Run `next build` and fix any build errors
- [ ] Run Lighthouse — fix any issues below target (see PRD section 5)

### Antigravity tasks:
```bash
# Production build test
npm run build
npm run start

# Deploy to Vercel
npx vercel --prod

# Set environment (if needed)
vercel env add NEXT_PUBLIC_SITE_URL production
```

### Done when:
- `npm run build` completes without errors or warnings
- Lighthouse Performance ≥ 90
- Site live at Vercel URL
- OG image previews correctly on Twitter/LinkedIn link share
- Custom domain pointed (if available)

---

## Quick Reference — Ask Claude For

When starting a session, tell Claude exactly which file to build:

```
"Claude, we are on Phase [X]. Build [filename].
Read AGENT.md and PRD.md first. Here is the current state: [paste any relevant context]."
```

Example prompts for each phase:

```
Phase 1: "Build lib/constants.ts — all copy from PRD sections 3.1–3.6"
Phase 1: "Build app/globals.css — CSS variables and base reset from AGENT.md palette"
Phase 2: "Build hooks/useShader.ts — WebGL2 lifecycle hook as specified in MVP Phase 2"
Phase 2: "Build components/hero/HeroReveal.tsx — GSAP timeline from PRD section 3.1"
Phase 3: "Build components/sections/Diary.tsx — spiral notebook from PRD section 3.5"
Phase 4: "Update HeroReveal.tsx — integrate /public/vg-photo.jpg with filter: [values]"
```

---

## Blocked? Decision tree

```
Something isn't in PRD.md?
  → Check AGENT.md rules
  → If still unclear → ASK USER, do not guess

Package not in approved list?
  → ASK USER before installing

Animation feels off?
  → Adjust timing values only — do not change animation approach without user approval

TypeScript error?
  → Fix the type, never use `any` or `@ts-ignore`

WebGL not working?
  → Verify canvas.getContext('webgl2') check exists
  → Verify 'use client' directive on ShaderCanvas.tsx
  → Verify raw-loader is configured for .frag files in next.config.ts
```

---

*MVP v1.0 — Phase 1 ready to begin.*
