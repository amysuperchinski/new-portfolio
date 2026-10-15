# Amy Superchinski — Portfolio

Personal portfolio of Amanda (Amy) Superchinski, Senior Product Designer.
Audience: recruiters and hiring managers for senior product/UX design roles.

## Stack
- Astro 5 + MDX. Static site, no UI framework, plain CSS.
- Fonts self-hosted via @fontsource: DM Sans (UI/body — all non-serif text) and DM Serif Display (project titles, accents).
- Deploy target: Vercel or Netlify, domain amysuperchinski.com.

## Where things live
- `src/data/site.ts` — all homepage copy: hero, about, services, experience, contact links.
- `src/content/work/*.mdx` — one file per case study (frontmatter schema in `src/content.config.ts`).
- `src/styles/tokens.css` — design tokens. Never hard-code colors, sizes or spacing in components; use or add a token.
- `src/styles/home.css` — homepage styles (kept in a CSS file rather than inside index.astro so edits hot-reload reliably).
- `src/styles/footer.css` — footer styles. Contact section + footer follow Amy's Figma file "Footer".
- `src/components/` — Header, Footer, ProjectCard, Placeholder.
- `public/images/` — images; `public/cv/` — CV PDF. `npm run images` downloads the originals from the old site.

## Rules
- Accessibility is non-negotiable (WCAG 2.2 AA): semantic HTML, exactly one h1 per page, logical heading order,
  meaningful alt text, visible focus states, 44px minimum touch targets, text contrast ≥ 4.5:1 (≥ 3:1 for large text),
  respect prefers-reduced-motion.
- Keep the visual direction: light, airy, DM Sans, serif project titles, rose → teal brand gradient,
  soft rose section backgrounds. Brand colors were darkened from the original site to pass contrast — keep them.
  The hero replicates the original site's layout (58px/31px, hard rose/teal split in `--gradient-hero`), with the
  gradient colors darkened to pass AA. Don't change it without asking.
- No placeholder links (`href="#"`). Every link must go somewhere real.
- Case studies follow: Context → The problem → My role → Process → Outcome. Lead with impact
  (`highlights` in frontmatter). Never invent metrics or facts — use `<Placeholder>` for anything unknown.
- `protected: true` = public teaser plus a "Request access" CTA (for NDA work).
- Headings use Title Case (capitalize each word, e.g. "Work Experience", "Case Studies"). Sentence-style headings
  (the hero, About intro, contact question) stay in sentence case.
- Keep dependencies minimal; ask before adding a library.
- Writing voice: first person, warm, concise, plain English, American spelling (color, prioritize, organize). Content may become bilingual (EN / PT-BR) later.

## Commands
- `npm install` — install dependencies (first time only)
- `npm run images` — download images + CV from the old site (first time only)
- `npm run dev` — local preview at http://localhost:4321
- `npm run build` — production build into `dist/` (run before deploying to catch errors)
