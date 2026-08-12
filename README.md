# Yumna Hammad — Portfolio

Personal portfolio site. Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · GSAP/ScrollTrigger.

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

---

## What you need to fill in

Everything below was left blank rather than invented. The UI degrades gracefully
in each case — nothing renders as a broken or dead control while a value is
missing — so you can add them one at a time.

### 1. Your portrait — done

`public/assets/yumna.png` (960×1280, 3:4) is wired up in `data/site.ts`:

```ts
portrait: "/assets/yumna.png",
```

That file is the background-removed cut-out, produced once locally with an
ONNX background-removal model. The tooling was uninstalled afterwards rather
than left as a 181MB dependency — to redo it, install
`@imgly/background-removal-node`, run it against the source photo, and remove it
again. Keep the filename lowercase: Linux hosts are case-sensitive, so
`/assets/Yumna.png` would 404 on Vercel even though it works on Windows.

The hero frame and the About card are both **3:4**, matching the source exactly,
so it fills edge to edge with no letterboxing. It is rendered with
`object-contain` — swapping in a different ratio later letterboxes it rather than
cropping the subject or stretching it. A colour grade and edge falloff sit it in
the dark palette; the subject itself is unaltered.

To replace it, drop a new file in `public/assets/` and update that one line.

### 2. Contact channels — done

Phone, WhatsApp, LinkedIn and GitHub are all wired up in `data/site.ts`. Any
value left as an empty string is simply omitted from the contact list, footer
and structured data rather than rendering a dead link.

Contact channels are ordered by directness (WhatsApp → phone → email →
LinkedIn) and appear in the hero, the contact section, the footer and the mobile
menu. `phone` is what's displayed; `phoneHref` and `whatsapp` carry the E.164
number (`+923216774884`) that `tel:` and `wa.me` require.

### 3. Project screenshots — `data/projects.ts`

All 13 live URLs are attached. What's still missing is screenshots:

```ts
image:     "/projects/tools4pdf.jpg" // put screenshots in public/projects/
githubUrl: "https://…",              // per-repo link, if you want one per project
```

`liveUrl` is set on every project that has a public URL (the Funsol AI Editor
has none, so its card simply shows no live link). `demoNote` carries a short
line for demos that need sign-in — **never credentials**; this file ships to the
browser.

Without `image`, the card renders a **generated cover** — an abstract wireframe
of that interface type, driven by the project's `motif`. It never pretends to be
a screenshot. Screenshots are rendered at their natural scale (`object-cover`,
top-anchored) and never zoomed in.

Never put credentials in this file, or anywhere else in the repo — demo logins
belong in a private note to the client, not in frontend code.

### 4. Contact form delivery

The form is fully built and validated. Delivery works two ways:

- **No backend configured (current state)** — it composes a structured email and
  opens the visitor's mail client, and says exactly that in the success state.
  It never claims to have sent something it didn't.
- **With a backend** — set `NEXT_PUBLIC_CONTACT_ENDPOINT` to any URL accepting a
  JSON POST (Formspree, a Next route handler, etc.). The form switches to
  `fetch` automatically; no component changes needed.

```bash
# .env.local
NEXT_PUBLIC_CONTACT_ENDPOINT=https://formspree.io/f/xxxxxxx
```

### 5. Canonical URL — `data/site.ts`

`url` currently points at `https://yumnahammad.com`. Update it before deploying;
it drives canonical, Open Graph and Twitter metadata.

---

## Structure

```
app/
  layout.tsx            metadata, fonts, Person structured data
  page.tsx              section order — the scroll narrative
  icon.tsx              generated monogram favicon
  opengraph-image.tsx   generated social card
  globals.css           design tokens, type & atmosphere utilities

data/                   all content — no copy lives in components
  site.ts               identity, contact, nav, stats
  projects.ts           project inventory + case studies
  experience.ts         roles, education
  skills.ts             skill clusters
  services.ts           services, value props, AI capabilities

components/
  layout/               Navbar, Footer, CustomCursor, MotionProvider
  hero/                 Hero, PortraitFrame
  sections/             Statement, Stats, About, Experience, Skills, AILab, Services
  projects/             Work, ProjectCards, ProjectRail, ProjectModal, ProjectPlate
  contact/              Contact, ContactForm
  ui/                   Reveal, TextReveal, SectionHeading, MagneticButton, Counter, Marquee

lib/                    cn, ordinal, useMediaQuery, useReducedMotionSafe
```

**Adding a project** is a single object in `data/projects.ts`. `layout` picks the
card treatment (`feature` / `split` / `visual` / `stacked` / `rail`), and the case
study renders only the sections that actually have content.

## Theming

Dark is the default identity; light is a full re-grade rather than an inversion.

- Every colour is a token in `app/globals.css`. `:root` holds dark,
  `[data-theme="light"]` overrides the same names — components never branch on
  theme.
- An inline script in `app/layout.tsx` stamps `data-theme` on `<html>` before
  first paint (saved choice → system preference → dark), so there is no flash.
  `<html>` carries `suppressHydrationWarning` because that divergence is
  deliberate.
- Atmospheric gradients are utilities (`wash-top`, `vignette`, `frame-falloff`…)
  rather than inline styles, so both themes are graded in one place. The
  generated project covers read `--plate-*` variables for the same reason.
- The toggle sits in the navbar and reads the attribute through
  `useSyncExternalStore`, so it can never disagree with the painted page.

## Notes on the implementation

- **Motion split** — Framer Motion handles component entrance, scroll-linked
  transforms and gestures. GSAP + ScrollTrigger handles only the pinned
  horizontal project rail, where it earns the extra bundle; it's loaded through
  `next/dynamic` so it stays out of the initial payload.
- **Reduced motion** — read through `useReducedMotionSafe` (a
  `useSyncExternalStore` wrapper), so the server and hydration renders always
  agree. `MotionConfig reducedMotion="never"` hands the decision entirely to that
  hook rather than letting Framer apply a second, client-only policy. With the
  preference on, animations simplify — content never stays hidden.
- **Custom cursor** — desktop only, gated on `(hover: hover) and (pointer: fine)`.
  Elements opt in with `data-cursor="view" | "button"`.
- **Accessibility** — semantic landmarks, skip link, focus-visible rings, focus
  trapping and Escape handling in the case-study dialog, `aria-label` on
  word-animated headings so screen readers get sentences, and text colours that
  meet 4.5:1 on the near-black ground.
- **Responsive** — layouts are recomposed per breakpoint, not scaled down. On
  phones the portrait becomes compact so the headline still lands in the first
  viewport, and the pinned rail degrades to a native swipe scroller.
