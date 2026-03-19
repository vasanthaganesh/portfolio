# MASTER_PROMPT.md — Agent Initialisation Prompt
## Paste this at the start of every Antigravity session

---

## How to use this file

1. Open Antigravity
2. Attach or paste the contents of `AGENT.md`, `PRD.md`, and `MVP.md` into context
3. Paste the **Session Starter Prompt** below
4. Replace `[CURRENT PHASE]` and `[TASK]` with the actual phase and task
5. Let the agents work — they will not deviate from the plan

---

## Session Starter Prompt

```
You are working on the Vasanthaganesh R portfolio website (vasanthaganesh.dev).

Before doing anything, read the following project documents completely:
- AGENT.md    → Your rules, roles, approved packages, file structure, and design tokens
- PRD.md      → All content, copy, feature requirements, and visual specifications
- MVP.md      → The phased build plan. Check which phase we are currently on.

Your role assignments:
- Antigravity: Execute shell commands, manage files, run builds and deploys
- Claude: Write all source code (TypeScript, GLSL, CSS)
- Gemini: Visual analysis only — photo lighting, filter values (no code writing)

Current session:
- Phase: [CURRENT PHASE]
- Task: [DESCRIBE THE SPECIFIC FILE OR FEATURE TO BUILD]

Rules you must follow without exception:
1. Do not install any package not listed in AGENT.md section 4
2. Do not create any file outside the structure defined in AGENT.md section 5
3. Do not use hardcoded copy strings — all text must come from lib/constants.ts
4. Do not use TypeScript `any` type anywhere
5. Do not begin a new phase until the current phase "Done when" checklist is fully complete
6. Do not modify AGENT.md, PRD.md, or MVP.md without explicit user approval
7. If something is ambiguous or missing from the documents, ask the user — do not guess

After reading the documents, confirm:
- Which phase we are on
- Which task we are doing
- What files will be created or modified
- Any blockers or questions before starting

Then proceed with the task.
```

---

## Phase-Specific Starter Variants

Copy the appropriate variant when starting a new phase session.

### Phase 1 — Foundation

```
We are starting Phase 1 of the Vasanthaganesh portfolio.

Read AGENT.md, PRD.md, and MVP.md.

Phase 1 goal: Scaffold the Next.js project, install approved packages, create folder structure, and write all foundation files (config, globals, fonts, constants, gsap setup, layout, blank page).

Antigravity: Run the scaffold and install commands from MVP.md Phase 1 in order.
Claude: After scaffold is complete, write files in this order:
  1. next.config.ts
  2. tailwind.config.ts
  3. app/globals.css
  4. lib/fonts.ts
  5. lib/constants.ts
  6. lib/gsap.ts
  7. app/layout.tsx
  8. app/page.tsx (skeleton only)

Phase 1 is done when `npm run dev` runs with zero errors and `npx tsc --noEmit` shows zero type errors.
```

### Phase 2 — Shader Hero

```
We are on Phase 2 of the Vasanthaganesh portfolio. Phase 1 is complete.

Read AGENT.md, PRD.md section 3.1, and MVP.md Phase 2.

Phase 2 goal: Build the full cinematic WebGL2 shader hero with GSAP reveal timeline.

Claude: Write files in this order:
  1. shaders/vertex.vert
  2. shaders/shared.glsl
  3. shaders/nebula.frag
  4. hooks/usePointer.ts
  5. hooks/useShader.ts
  6. components/hero/ShaderCanvas.tsx
  7. components/hero/HeroType.tsx
  8. components/hero/HeroReveal.tsx
  9. components/hero/index.ts
  10. Update app/page.tsx to use <HeroReveal />

The hero animation timeline is specified exactly in PRD.md section 3.1.
The shader source is the cosmic nebula GLSL (see PRD.md and the 21st.dev reference we discussed).
Always check WebGL2 support before initialising — fallback to CSS gradient if unavailable.

Phase 2 is done when the shader animates, mouse movement influences it, and the GSAP reveal sequence plays correctly on load.
```

### Phase 3 — Content Sections

```
We are on Phase 3 of the Vasanthaganesh portfolio. Phases 1 and 2 are complete.

Read AGENT.md, PRD.md sections 3.2–3.8, and MVP.md Phase 3.

Phase 3 goal: Build all content sections with correct copy and scroll animations.

Claude: Write in this order:
  1. hooks/useScrollReveal.ts
  2. components/ui/SectionLabel.tsx
  3. components/ui/Nav.tsx
  4. components/ui/Cursor.tsx
  5. components/sections/About.tsx
  6. components/sections/Skills.tsx
  7. components/sections/Projects.tsx
  8. components/sections/Diary.tsx
  9. components/sections/Contact.tsx
  10. Update app/page.tsx with all sections in final order

All copy must come from lib/constants.ts — zero hardcoded strings in components.
Diary requires 3 tabs × 3 entries each. See PRD.md section 3.5 for all entry text.
Scroll reveal on every section using useScrollReveal hook.

Phase 3 is done when all sections render, scroll reveals trigger, diary tabs work, and zero TypeScript errors remain.
```

### Phase 4 — Photo & Polish

```
We are on Phase 4 of the Vasanthaganesh portfolio. Phases 1–3 are complete.

The profile photo has been placed at /public/vg-photo.jpg.

Read AGENT.md and MVP.md Phase 4.

Phase 4 tasks for Claude:
  1. Update HeroReveal.tsx — replace photo placeholder with next/image, apply CSS filter treatment
  2. Add red atmospheric overlay blend to hero photo container
  3. Audit and fine-tune all GSAP animation timings for cohesion
  4. Fix Nav.tsx scroll spy if broken
  5. Verify all 9 Diary entries render correctly
  6. Add responsive styles for 768px and 375px breakpoints

CSS filter for photo: [PASTE GEMINI'S SUGGESTED VALUES HERE]
If no Gemini values yet, use: contrast(1.15) brightness(0.88) saturate(0.8)

Phase 4 is done when the real photo renders with cinematic treatment and responsive layout works on mobile.
```

### Phase 5 — Deploy

```
We are on Phase 5 of the Vasanthaganesh portfolio. Phases 1–4 are complete.

Read MVP.md Phase 5.

Claude: Write/update:
  1. app/layout.tsx — full OG meta, Twitter card, JSON-LD Person schema, favicon
  2. app/globals.css — skip-to-content link
  3. Audit all aria-labels and image alt attributes
  4. Fix any remaining TypeScript or build errors

Antigravity:
  1. Run npm run build — report any errors to Claude
  2. Run npx vercel --prod
  3. Share the deployment URL

Target: Lighthouse Performance ≥ 90, zero build warnings.
```

---

## Debugging Prompt (use when something breaks)

```
Something is broken in the Vasanthaganesh portfolio.

Error / symptom: [DESCRIBE THE PROBLEM]

File(s) involved: [LIST FILES]

Read AGENT.md for rules. Read PRD.md for intended behaviour. Read MVP.md for the expected state.

Debug only within the approved stack (AGENT.md section 4).
Do not add new packages to fix this issue.
Do not change architecture — fix the existing implementation.

Show me what is wrong and the corrected file.
```

---

## Mid-Session Context Refresh (use when conversation gets long)

```
We are mid-session on the Vasanthaganesh portfolio.

Project documents are in AGENT.md, PRD.md, MVP.md.
Current phase: [X]
Last completed file: [filename]
Next file to build: [filename]

Continue from where we left off. Do not re-explain what was done — just build the next file.
Rules: AGENT.md. Content: PRD.md. Scope: MVP.md.
```

---

*MASTER_PROMPT.md — Save this file. Use it every session. Never start a session without it.*
