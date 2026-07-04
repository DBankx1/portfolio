# Dami Hundeyin — Deep Space Voyage Portfolio

Personal portfolio for Dami Hundeyin, Senior Software Engineer. A space-themed, animation-heavy single-page site built with **Next.js (App Router) + Tailwind CSS v4 + Motion**, deployed on **Vercel**.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (fully static)
```

## Editing content

All copy lives in typed data files — no component changes needed:

| File | What it holds |
|---|---|
| `content/profile.ts` | Name, tagline, mission narrative, crew manifest, contact links |
| `content/skills.ts` | Skill groups shown in the Skills grid |
| `content/experience.ts` | Work history (Journey planets) + education |
| `content/projects.ts` | Lab projects (add `links` entries for GitHub/live URLs) |
| `content/certs.ts` | Certifications — supports `status: "earned" \| "in-progress"` |
| `lib/site-config.ts` | **SITE_URL** + SEO title/description/keywords |

## Deploying to Vercel

```bash
npx vercel        # first deploy
npx vercel --prod
```

Or push the repo to GitHub and import it at [vercel.com/new](https://vercel.com/new) — zero config needed.

## SEO checklist (do these after buying the domain)

1. **Buy the domain** (e.g. `damihundeyin.com`) and add it to the Vercel project (Settings → Domains).
2. **Update `SITE_URL`** in `lib/site-config.ts` to the new domain and redeploy — canonical URL, sitemap, robots, Open Graph, and JSON-LD all derive from it.
3. **Google Search Console**: add the domain property, verify via DNS, and submit `https://<domain>/sitemap.xml`.
4. **Validate structured data** with the [Rich Results Test](https://search.google.com/test/rich-results) — the site ships a `Person` JSON-LD schema.
5. **Bing Webmaster Tools**: import the site from Search Console (one click).
6. **Link the domain everywhere** — LinkedIn profile website field, GitHub profile, resume header. Inbound links from LinkedIn/GitHub are the strongest signal for name queries.
7. Check `https://<domain>/opengraph-image` renders — it's the link-preview card for LinkedIn/Twitter/Slack.

## Architecture notes

- Content sections are server components (all resume content is SSR'd into the initial HTML for crawlers); animations are client islands.
- `components/effects/` holds the starfield canvas, asteroid cursor, scroll altimeter, and the shared `Reveal` scroll-animation wrapper.
- Motion is configured with `reducedMotion="user"`; the asteroid cursor and starfield drift also disable themselves for `prefers-reduced-motion` and touch devices.
