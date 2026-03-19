# AGENT.md — AI Agent Rules & Behaviour
## Vasanthaganesh Portfolio — vasanthaganesh.dev

> This file governs how every AI agent (Claude, Gemini, Antigravity) must behave on this project.
> Read this file completely before touching any file in this repository.

---

## 1. Project Identity

| Key | Value |
|-----|-------|
| **Owner** | Vasanthaganesh R |
| **Project** | Personal developer portfolio website |
| **Stack** | Next.js 15, TypeScript, Tailwind CSS v4, GSAP, Lenis, WebGL2 |
| **Deployment** | Vercel |
| **Repo root** | `/` (monorepo, single Next.js app) |
| **Design language** | Cinematic dark, ember/amber palette, retro-analog soul |
| **Primary font** | Bebas Neue (display), DM Serif Display (editorial), IBM Plex Mono (code/labels) |

---

## 2. Agent Roles

### Claude (Code Author)
- Writes ALL component code, shader GLSL, GSAP timelines, custom hooks, and CSS
- Produces production-ready TypeScript — no `any`, no untyped props
- Never generates placeholder logic — every function must actually work
- Owns: `components/`, `shaders/`, `hooks/`, `lib/`, `app/`

### Gemini (Visual Analyst)
- Analyses photo assets for lighting treatment and CSS filter values
- Suggests exact colour stops for shader uniforms based on reference images
- Does NOT write code — outputs values/descriptions that Claude implements
- Owns: visual analysis only, no file writes

### Antigravity (Project Operator)
- Runs all CLI commands (scaffold, install, build, deploy)
- Creates/moves/deletes files as directed by the plan in `MVP.md`
- Never modifies source code content — only file operations and shell commands
- Follows the phase order in `MVP.md` exactly — does not skip phases
- Reads `PRD.md` before any ambiguous decision about features

---

## 3. Absolute Rules (all agents, no exceptions)

```
NEVER invent new sections or pages not in PRD.md
NEVER install packages not listed in the approved stack below
NEVER change the colour palette without explicit user approval
NEVER use `any` type in TypeScript
NEVER use inline styles in JSX except for dynamic GSAP-controlled values
NEVER remove 'use client' from components that use hooks or browser APIs
NEVER commit directly to main — all work goes to feature branches
NEVER use placeholder text like "Lorem ipsum" — use real copy from PRD.md
NEVER skip the WebGL capability check before initialising a shader canvas
```

---

## 4. Approved Package List

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "gsap": "^3.12.0",
    "@gsap/react": "^2.1.0",
    "lenis": "^1.1.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.3.0"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "@types/react": "^19.0.0",
    "@types/node": "^20.0.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/postcss": "^4.0.0",
    "raw-loader": "^4.0.2",
    "eslint": "^9.0.0",
    "eslint-config-next": "^15.0.0"
  }
}
```

**To add any package NOT listed above → stop, ask user for approval first.**

---

## 5. File Structure Rules

```
app/
  layout.tsx          ← root layout, Lenis provider, fonts
  page.tsx            ← assembles all sections in order
  globals.css         ← CSS variables, base styles, font-face

components/
  hero/
    ShaderCanvas.tsx  ← WebGL2 canvas, useShader hook consumer
    HeroReveal.tsx    ← GSAP timeline orchestrator
    HeroType.tsx      ← giant background typography
    index.ts          ← re-exports
  sections/
    About.tsx
    Skills.tsx
    Projects.tsx
    Diary.tsx
    Contact.tsx
  ui/
    Nav.tsx
    Cursor.tsx
    SectionLabel.tsx

hooks/
  useShader.ts        ← WebGL2 init, resize, render loop
  useScrollReveal.ts  ← GSAP ScrollTrigger factory
  usePointer.ts       ← normalised pointer position

shaders/
  nebula.frag         ← hero background GLSL (fragment shader)
  vertex.vert         ← shared vertex shader
  shared.glsl         ← shared noise/fbm functions

lib/
  gsap.ts             ← registers ScrollTrigger, SplitText plugins
  fonts.ts            ← next/font configuration
  constants.ts        ← palette hex values, breakpoints, copy strings

public/
  vg-photo.jpg        ← profile photo (drop in before Phase 4)
```

**Do not create files outside this structure without updating this document first.**

---

## 6. CSS / Design Rules

```css
/* Palette — never use any other colours */
--ink:         #0e0c0a;   /* page background */
--paper:       #f4f0e8;   /* primary text */
--ember:       #c8622a;   /* primary accent */
--ember-warm:  #e07a3a;   /* hover state */
--ember-dark:  #8a3d16;   /* borders, subtle accents */
--amber:       #d4924a;   /* secondary accent */
--muted:       #7a7060;   /* body text, subtitles */
--rule:        #c8bfa8;   /* dividers */
```

```
Typography scale:
  Display  → Bebas Neue,    clamp(5rem, 14vw, 13rem)
  Title    → DM Serif Display italic, clamp(2rem, 4vw, 3.5rem)
  Body     → Space Grotesk 300/400, 0.9–1rem, line-height 1.8
  Label    → IBM Plex Mono, 0.65–0.75rem, letter-spacing 0.2em, uppercase
  Code     → IBM Plex Mono, 0.8rem
```

---

## 7. Animation Rules

- All entrance animations use GSAP — no CSS `animation` for content reveals
- Lenis must be initialised in `layout.tsx` as a context provider
- ScrollTrigger `scrub` value: `1` (smooth) for parallax, `true` for snap
- Hero GSAP timeline must be wrapped in `useGSAP()` from `@gsap/react`
- Shader canvas: always check `canvas.getContext('webgl2')` — fallback to gradient if null
- Never animate `width`, `height`, or `margin` — only `transform` and `opacity`
- Reduced motion: wrap all non-essential animations in `matchMedia('(prefers-reduced-motion: no-preference)')`

---

## 8. Component Contract

Every component must:
1. Have a TypeScript interface for its props (even if empty)
2. Be a named export (not default) except for `page.tsx` and `layout.tsx`
3. Include `'use client'` if it uses any hook or browser API
4. Accept a `className?: string` prop and merge it with `clsx()`
5. Not fetch data — all copy lives in `lib/constants.ts`

---

## 9. Git Conventions

```
Branch naming:   feature/hero-shader
                 feature/about-section
                 fix/shader-webgl-fallback
Commit format:   feat(hero): add GSAP reveal timeline
                 fix(shader): handle WebGL2 unavailable
                 style(about): adjust diary paper texture
```

---

## 10. Decision Hierarchy

When agents disagree or face ambiguity:

```
1. User instruction (highest authority)
2. PRD.md (feature & content source of truth)
3. MVP.md (phase & scope gate)
4. AGENT.md (technical rules — this file)
5. Agent's own judgement (lowest — ask user if unsure)
```

---

*Last updated: 2025 | Maintained by Vasanthaganesh R*
