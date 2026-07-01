# AGENTS.md — Architecture & Conventions

Personal portfolio site for Disha Soni — Brand, Digital Commerce & AI Marketing Strategist targeting senior roles (20,000–24,000 AED) in Dubai, UAE. Built with TanStack Start on Netlify.

## Project Overview

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (React SSR) |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS v4 (custom design tokens) |
| Content | Content Collections (markdown-driven) |
| Forms | Netlify Forms |
| Deployment | Netlify |

## Directory Structure

```
src/
  routes/
    __root.tsx         # Nav + Footer shell (uses shellComponent + {children})
    index.tsx          # Home / portfolio landing page
    work.tsx           # Brand case studies + campaign media gallery
    resume.tsx         # Full professional timeline + CV download
    contact.tsx        # Netlify Forms contact form
    projects.tsx       # Redirect shim to /work
    blog/
      index.tsx        # Blog listing (/blog/)
      $slug.tsx        # Individual post (/blog/:slug)
  styles.css           # Design system: CSS vars, utility classes, animations
  components/ui/       # Shadcn UI primitives (badge, card, etc.)
  lib/utils.ts         # cn() utility

content/
  jobs/*.md            # Work experience (content-collections, 2 files)
  education/*.md       # Education entries (1 file)
  blog/*.md            # Thought leadership articles (3 files)
  projects/*.md        # Brand project summaries (2 files)

public/
  contact.html              # Static form declaration (required by Netlify Forms)
  Disha_Soni_Resume.docx   # Downloadable CV
  videos/                  # Campaign videos (add .mp4 files here)
  images/                  # Static campaign assets (add image files here)
```

## Routing

File-based routing via TanStack Router. The root route uses `shellComponent: RootDocument` — the shell function receives `{ children }` as props (NOT `<Outlet />`). All routes export `Route` via `createFileRoute('...')`.

## Content Collections

`content-collections.ts` defines four collections. The markdown body (after frontmatter) maps automatically to the `content: z.string()` schema field.

- `jobs` / `allJobs` — professional experience timeline
- `education` / `allEducations` — education entries
- `blog` / `allBlogs` — thought leadership articles
- `projects` / `allProjects` — brand project summaries

## Design System

All styling uses **inline styles + custom CSS classes** from `src/styles.css`. Tailwind utility classes are NOT used in JSX components.

### Custom classes
`.font-display`, `.display-xl`, `.display-md`, `.eyebrow`, `.nav-link`, `.btn-dark`, `.btn-ghost`, `.btn-ghost-light`, `.tag`, `.tag-gold`, `.card-lift`, `.anim-fade-up`, `.anim-delay-1..5`, `.availability-dot`

### Palette (CSS variables)
| Variable | Hex | Use |
|----------|-----|-----|
| `--ivory` | `#F8F4ED` | Main background |
| `--charcoal` | `#18181A` | Primary text, dark sections |
| `--gold` | `#C09A5B` | Accents, CTA hover states |
| `--muted` | `#7C776F` | Secondary text |
| `--border` | `#E0DBD2` | Borders |

### Typography
- **Display**: Cormorant Garamond (Google Fonts) — headings, large text
- **Body**: Outfit (Google Fonts) — UI, body text

## Adding Campaign Media

To add campaign videos or static assets to the Work page (`/work`):

1. Place files in `public/videos/` (`.mp4`) or `public/images/`
2. Update the `mediaGallery` object in `src/routes/work.tsx`:

```ts
const mediaGallery = {
  videos: [
    { title: 'Campaign Name', brand: 'Brand Name', src: '/videos/filename.mp4', thumbnail: '/images/thumb.jpg' }
  ],
  statics: [
    { title: 'Creative Title', brand: 'Brand Name', src: '/images/filename.jpg', type: 'Social' }
  ],
}
```

The gallery UI handles rendering automatically — videos show a play button overlay, statics show in a grid.

## Conventions

- Components: named exports (`export default function Name`)
- Responsive: inline `<style>` tags using `.className`-based media queries
- Hover states: `onMouseEnter`/`onMouseLeave` with direct `el.style` mutations
- No animation libraries — all motion via CSS `@keyframes` + utility classes
- Forms: standard Netlify Forms pattern with static HTML in `public/contact.html`
