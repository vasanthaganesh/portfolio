# PRD.md — Product Requirements Document
## Vasanthaganesh Portfolio — vasanthaganesh.dev

**Version:** 1.0
**Owner:** Vasanthaganesh R
**Status:** Approved — build ready

---

## 1. Product Vision

A cinematic single-page portfolio website that presents Vasanthaganesh R not as a typical developer, but as a creative force — someone who treats code like art, games like philosophy, and every product like a world worth inhabiting.

The experience should feel like walking into a Red Bull athlete reveal video, then discovering the depth of a game director's notebook. Dark, dramatic, warm amber light, retro-analog soul — but fully modern under the hood.

**The single sentence that must guide every design decision:**
> "This portfolio should make a client feel like they're hiring a creative director who also writes flawless code."

---

## 2. Target Audience

| Audience | What they need to feel |
|----------|------------------------|
| Startup founders | "This person will make our product look extraordinary" |
| Tech recruiters | "Strong engineer, exceptional taste" |
| Small business owners | "He gets what I want and builds it beautifully" |
| Fellow developers | "This is someone who cares about craft" |

---

## 3. Core Pages & Sections

This is a **single-page application (SPA)**. No routing. All sections are scroll-based.

### 3.1 Hero Section

**Purpose:** Cinematic reveal that establishes Vasanthaganesh's identity immediately.

**Content:**
- Eyebrow text: `"Puducherry, India — Full-Stack Developer"`
- Name display: `VASANTHAGANESH` split across three lines (VASAN / THA / GANESH), "THA" in ember gradient
- Tagline: `"Vibe-Driven Full-Stack Developer"` in italic DM Serif Display
- Body: `"I build at the intersection of code and craft — treating every product like a world worth inhabiting."`
- CTA buttons: `"See My Work"` (primary) + `"Let's Talk"` (ghost)
- Scroll indicator: animated vertical line

**Animation sequence (GSAP timeline):**
1. `t=0.0s` — WebGL2 shader starts; dark near-black nebula renders
2. `t=0.4s` — Deep crimson-red radial light blooms from bottom centre
3. `t=0.8s` — Profile photo fades in with `clip-path` reveal + scale(1.15 → 1.0), `mix-blend-mode: luminosity`
4. `t=1.4s` — Giant background text "VASANTHAGANESH" slides in from right (`translateX(120px → 0)`), 15% opacity, behind photo
5. `t=2.0s` — Italic tagline sweeps in from left, char-by-char using GSAP SplitText, `skewX(8 → 0)`
6. `t=2.6s` — Cinematic hold. CTA buttons fade up. Scroll indicator pulses.

**Visual reference:** Red Bull Max Verstappen driver reveal video — dark studio, massive background surname, full body reveal, deep red atmospheric lighting.

**Technical requirements:**
- WebGL2 shader: cosmic nebula / fire shader (see `shaders/nebula.frag`)
- Fallback if WebGL2 unavailable: CSS radial-gradient in ember palette
- Profile photo: `/public/vg-photo.jpg` — CSS filter treatment simulating Red Bull lighting
- Photo CSS filter target: `contrast(1.15) brightness(0.9) saturate(0.85)` with red overlay blend

---

### 3.2 About Section

**Purpose:** Establish the philosophy, personality, and the Kojima connection.

**Headline:** `"I make things that feel alive."`
**Sub-headline (italic):** `"alive."` coloured in ember

**Body copy (3 paragraphs):**
> Code is my canvas. Every app I ship is a small world — with its own logic, rhythm, and feel. I don't just deliver features; I craft experiences that make users pause and go "wait, this is actually beautiful."
>
> Hideo Kojima taught me that games are the highest form of art — interactive, emotional, total. Death Stranding isn't about delivering parcels. Metal Gear isn't about stealth. They're about meaning. That's how I think about software too.
>
> I leverage AI tools not as shortcuts, but as force multipliers — letting me do the work of a small studio solo, with taste intact. Modern tech stack, always. But soul first.

**Terminal manifesto block (monospace, ember accent):**
```
> build beautiful things
> make the code feel like a game
> every product is a world
> art through function
> ship or it didn't happen_
```

**Vital statistics (right column):**
| Label | Value | Sub |
|-------|-------|-----|
| Based in | PUDUCHERRY | India — available globally |
| Experience | 2+ YEARS | Virtusa — Full-Stack Java Developer (CITI) |
| Education | B.TECH IT | Manakula Vinayagar Institute of Technology — CGPA 8.34 |
| Currently obsessed with | AI × CRAFT | Using AI tools to build things that feel handmade |
| Favourite game director | KOJIMA | MGS, Death Stranding — art as interactive emotion |

**Animation:** Fade-up on scroll enter (GSAP ScrollTrigger, `start: "top 80%"`)

---

### 3.3 Skills Section

**Purpose:** Communicate the tech stack without feeling like a boring skills list.

**Section headline:** `"VIBE CODER MODE."` — Bebas Neue, oversized

**Intro copy:**
> I use the full potential of AI-driven tooling — Cursor, Claude, Copilot — and combine it with solid engineering to ship fast and ship well. Safe, modern, proven tech for clients. Zero bloat.

**Technology tags (pill chips):**
React, React Native, Java, Spring Boot, Node.js, Python, TypeScript, Blender, Unity, Unreal Engine, Figma, Adobe Suite, Flutter, IoT

**Skill cards (6 cards, 2-column grid):**

| Icon glyph | Title | Description |
|-----------|-------|-------------|
| ⬡ | FULL STACK WEB | React frontends with Spring Boot / Node.js backends. RESTful APIs, clean architecture, pixel-perfect UI. |
| ◈ | MOBILE DEV | React Native and Flutter apps. Cross-platform, native feel. From concept to Play Store. |
| ◭ | 3D & GAME TOOLS | Blender modelling, Unity/Unreal integration. Dimensional thinking for flat-screen products. |
| ⬙ | AI-AUGMENTED | LLM-driven workflows, AI tooling, automation. Doing the work of a team with the taste of an individual. |
| ◎ | VISUAL / BRAND | Adobe Illustrator, Premiere, Animate. Digital illustration. Making it look like someone cared — because they did. |
| ◉ | IoT SYSTEMS | Hardware-to-cloud integrations. Real-world sensor data pipelines. Making physical things smart. |

---

### 3.4 Projects Section

**Purpose:** Show the three proudest builds with context and honesty.

**Section headline:** `"PROUDEST BUILDS."` — Bebas Neue

**Projects list (3 items):**

**Project 01 — Precision Tools QC & Report Manager**
- Description: A full quality-check and report management application for a precision tools manufacturing company. Real-time inspection logs, defect tracking, and PDF report generation — built for the shop floor.
- Tags: `React Native` `Mobile` `Manufacturing` `Report Gen`

**Project 02 — Precision Tools Company Website**
- Description: The public-facing website for the same manufacturer. Clean, professional, product-showcase-first. Built in React with a focus on performance and clarity for B2B clients.
- Tags: `React` `Web` `B2B` `Manufacturing`

**Project 03 — Daily Vegetable Price Tracker**
- Description: A local market app showing day-to-day vegetable prices for everyday people. Useful, honest, immediate. Sometimes the most meaningful product is the most human one.
- Tags: `Mobile App` `Local` `Community` `Live Data`

**Layout:** Numbered list with hover state (background tint + arrow translate on hover)

---

### 3.5 Diary / Journal Section

**Purpose:** The "soul" section — handwritten notebook aesthetic that reveals personality, Kojima love, and philosophy.

**Visual design:** Physical spiral-bound notebook with:
- Dark background context, notebook floats as a card with layered shadow
- Paper colour: `#f5f0e4` (aged cream)
- Lined paper: CSS `repeating-linear-gradient` at 28px intervals
- Spiral binding: SVG circles on left edge
- Cover page with italic Libre Baskerville title
- 3 tabbed pages, switchable
- "Turn page →" button navigates between tabs

**Three tabs:**

**Tab 1 — "On Craft"**
- March 2025: Thoughts on intention vs decoration in UI
- January 2025: Code as sculpting — Blender taught me subtraction
- November 2024: Slipping soul into a "corporate" client project

**Tab 2 — "On Games & Art"**
- February 2025: Death Stranding replay — connection as game mechanic
- October 2024: MGS2 predicted post-truth media in 2001
- August 2024: A 3D personal project no one will ever see

**Tab 3 — "On Work"**
- April 2025: QC app goes live — watching the machinist use it
- December 2024: How AI tools compress the distance between idea and artifact
- September 2024: The vegetable price app and quiet significance

**Decorative SVG doodles:** Small geometric/mechanical sketches embedded in entries (compass rose, game controller, crosshair)

---

### 3.6 Contact Section

**Purpose:** Clear, beautiful call to action.

**Headline:** `"LET'S BUILD SOMETHING."` — "THING." in ember colour

**Body copy:**
> Got a project that needs a developer who treats it like a creative work? Let's talk. I'm always up for building something that matters — whether it's a tool, a product, or something we haven't named yet.

**Contact links:**
| Icon | Label | Value | Link |
|------|-------|-------|------|
| ✉ | Email | vasanthaganeshraja@gmail.com | `mailto:vasanthaganeshraja@gmail.com` |
| ✈ | Telegram | t.me/VasanthaganeshRaja | `https://t.me/VasanthaganeshRaja` |
| in | LinkedIn | vasanthaganesh-raja | `https://www.linkedin.com/in/vasanthaganesh-raja-085124231` |

**Hover state:** Border colour transitions to ember, right arrow icon reveals

---

### 3.7 Navigation

**Fixed top nav:**
- Logo: `VG` in Bebas Neue, ember colour, links to `#hero`
- Nav links: About / Stack / Work / Journal / Contact — uppercase, 0.72rem, Space Grotesk
- Active link: ember colour
- Behaviour: transparent initially, becomes slightly opaque on scroll

---

### 3.8 Global UI

**Custom cursor:**
- Inner dot: 10px ember circle
- Outer ring: 36px ember border, 50% opacity
- Hover state on links: inner dot grows to 18px, ring grows to 52px

**Footer:**
- Left: `VG — 2025` in Bebas Neue, ember-dark colour
- Right: `Built with taste. Deployed with intent.` — uppercase label

---

## 4. Content — All Copy Strings

All copy lives in `lib/constants.ts`. Agents must not hardcode strings in components.

Key exports required:
```typescript
export const HERO_COPY = { eyebrow, name, tagline, body }
export const ABOUT_COPY = { headline, paragraphs, manifesto, vitals }
export const SKILLS_COPY = { headline, intro, tags, cards }
export const PROJECTS = [ { id, number, title, description, tags }[] ]
export const DIARY_ENTRIES = { craft[], games[], work[] }
export const CONTACT_COPY = { headline, body, links[] }
export const NAV_LINKS = [ { label, href }[] ]
```

---

## 5. Performance Requirements

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| WebGL initialisation | < 200ms |
| Bundle size (gzipped) | < 200KB JS initial |

**Strategies:**
- GSAP loaded via dynamic import with `ssr: false`
- Shader canvas only initialised on client (`useEffect`)
- Images: `next/image` with `priority` on hero photo
- Fonts: `next/font/google` with `display: swap`
- No unused Tailwind classes (purge enabled by default in v4)

---

## 6. Accessibility

- All animations respect `prefers-reduced-motion`
- All interactive elements keyboard-navigable
- Colour contrast ratio ≥ 4.5:1 for body text on dark background
- `aria-label` on icon-only buttons
- `alt` text on all images
- Skip-to-content link at top of DOM

---

## 7. Non-Goals (explicitly out of scope for v1)

- Blog / writing section
- Dark/light mode toggle (dark is the only mode)
- CMS or admin panel
- Contact form with backend (links only)
- Multi-language support
- Three.js 3D elements (WebGL2 shaders only)
- Page routing or multi-page architecture

---

*PRD v1.0 — Approved for build. Do not modify without owner sign-off.*
