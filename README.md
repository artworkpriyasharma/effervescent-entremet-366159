# Disha Soni — Personal Portfolio & Professional Website

A premium personal website and portfolio built for senior brand strategy and digital commerce roles in Dubai, UAE. The site presents Disha's 11+ years of experience across fashion, jewellery, luxury home décor, fragrance, and D2C commerce.

## Live Features

- **Home** — Full-viewport editorial hero with career highlights, featured brand work, expertise overview, and industry verticals
- **Work** (`/work`) — Interactive case studies for all brand engagements, plus a media gallery section for campaign videos and static creative assets
- **Resume** (`/resume`) — Full professional timeline with experience, tools, skills sidebar and CV download
- **Contact** (`/contact`) — Netlify Forms-powered contact form with role/opportunity intake fields
- **Perspectives** (`/blog`) — Thought leadership articles on brand strategy, Shopify, and AI marketing

## Key Technologies

- **Framework**: TanStack Start (React, SSR)
- **Styling**: Tailwind CSS v4 with custom design tokens (warm ivory/charcoal/gold palette)
- **Typography**: Cormorant Garamond (display) + Outfit (body) via Google Fonts
- **Content**: Content Collections — markdown-driven blog posts, job experience, projects
- **Forms**: Netlify Forms
- **Hosting**: Netlify

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:3000`.

## Adding Campaign Media

To add campaign videos and static assets:
1. Place video files in `/public/videos/`
2. Place static image files in `/public/images/`
3. Update the `mediaGallery` object in `src/routes/work.tsx` with the file references

## Design System

The palette uses CSS variables defined in `src/styles.css`:
- `--ivory` `#F8F4ED` — main background
- `--charcoal` `#18181A` — primary text and dark sections  
- `--gold` `#C09A5B` — accents, highlights, and interactive states
- `--muted` `#7C776F` — secondary text
