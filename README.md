# Canada EV Infrastructure Entry Playbook

Static research site for an internal study of Chinese new-energy expansion into the Canadian market. The thesis is **infrastructure-first**: charging, storage, software, and service before vehicles.

The site is intentionally suitable for three audiences:

- Internal planning and research management.
- Investor pitch / executive briefing.
- Partner conversations (utilities, fleets, capital partners).

It is built as a fully static site with [Astro](https://astro.build), TypeScript, [Tailwind CSS](https://tailwindcss.com), and MDX, and is deployable to GitHub Pages.

## Tech stack

- **Astro 4** — static site generator with content collections.
- **TypeScript** (strict mode).
- **Tailwind CSS** — design system (navy / white / muted green accent).
- **MDX** — long-form research memos.
- **GitHub Pages** — deployment target via `actions/deploy-pages`.

No backend, no database, no authentication.

## Project structure

```
.
├── .github/workflows/deploy.yml   # GitHub Pages deploy workflow
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── components/                # Hero, MetricGrid, StrategyCards, FundingTable,
    │                              # RiskMatrix, RoadmapTimeline, SourceList,
    │                              # SectionHeader, CTA, Header, Footer
    ├── content/
    │   ├── config.ts              # Content collection schemas (reports)
    │   └── reports/               # Markdown / MDX research memos
    ├── data/                      # JSON data files
    │   ├── assumptions.json
    │   ├── market-metrics.json
    │   ├── funding-programs.json
    │   ├── competitors.json
    │   ├── risks.json
    │   ├── roadmap.json
    │   └── sources.json
    ├── layouts/Base.astro
    ├── lib/url.ts                 # base-aware URL helper for GitHub Pages
    ├── pages/
    │   ├── index.astro            # Home / executive briefing
    │   ├── strategy.astro         # Three options + funding stack + risks
    │   ├── research.astro         # Research library
    │   ├── research/[...slug].astro
    │   ├── financials.astro       # Capital plan + scenarios
    │   ├── roadmap.astro          # Phased timeline + decision gates
    │   ├── pitch.astro            # One-page investor pitch
    │   └── sources.astro          # Source register
    └── styles/global.css
```

## Pages

| Path           | Purpose                                                                 |
| -------------- | ----------------------------------------------------------------------- |
| `/`            | Executive home: thesis, metrics, strategy, capital, risks, roadmap, CTA |
| `/strategy`    | Three options (A / B / C), comparison table, funding stack, risks       |
| `/research`    | List of memos from the `reports` content collection                     |
| `/research/[slug]` | Individual memo                                                     |
| `/financials`  | Phased capital plan + 3 scenarios (conservative / base / upside)         |
| `/roadmap`     | 0–6 mo, 6–24 mo, 2–7 yr, 7–20 yr horizons with explicit decision gates  |
| `/pitch`       | One-page investor pitch (problem, why now, wedge, model, capital, risk, next 90 days) |
| `/sources`     | Source register from `src/data/sources.json` (placeholders, "to be verified") |

## Editing content

- **Research memos** — add a Markdown or MDX file under `src/content/reports/`. The frontmatter schema is defined in `src/content/config.ts`. Required fields: `title`, `summary`, `status`, `audience`, `lastUpdated`. Optional: `tags`, `author`, `order`, `sources`.
- **Numbers and assumptions** — edit `src/data/*.json`. The Financials, Roadmap, Strategy, Sources, and Home pages all read from these files.
- **Sources** — `src/data/sources.json`. URLs are intentionally placeholder (`"TBD"`, `"to be verified"`). Verify each source against the issuing organization before any external use.
- **Chinese sections** — content is structured so a `zh` variant of each report can be added later. Add files like `src/content/reports-zh/*.md` and a parallel route — out of scope for v1, but the schema supports it.

## Local development

Requires Node.js 20+ and npm.

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321` (default).

> Note: `astro.config.mjs` sets a non-empty `base` path so the production build matches the GitHub Pages project subpath. In dev, all internal links go through `withBase()` (in `src/lib/url.ts`) and Astro's `BASE_URL` env var, so they continue to resolve correctly.

## Build

```bash
npm run build
```

This runs `astro check` (type checking against the content schema) and produces a fully static site in `dist/`.

## Preview

```bash
npm run preview
```

Serves the `dist/` build locally for verification.

## Deploy to GitHub Pages

Deployment is automated via `.github/workflows/deploy.yml`:

1. Push to the `main` branch.
2. The workflow infers the GitHub Pages site URL and base path from `${{ github.repository }}`:
   - `SITE_URL = https://<owner>.github.io`
   - `BASE_PATH = /<repo>`
3. The site is built and uploaded as a Pages artifact, then deployed via `actions/deploy-pages`.

To enable Pages on a fresh repo:

1. **Settings → Pages** → set Source to **GitHub Actions**.
2. Push to `main` (or run the workflow manually via **Actions → Deploy site to GitHub Pages → Run workflow**).

If the site is hosted at a different path (custom domain, organization page, etc.), override the env vars in the workflow:

```yaml
env:
  SITE_URL: https://example.com
  BASE_PATH: ""
```

## Conventions

- All internal links use the `withBase()` helper (`src/lib/url.ts`) so the site works under both `/` and `/<repo>/` prefixes.
- Components are typed via inline `Props` interfaces in `.astro` files.
- The visual style aims at a serious consulting / investment-memo register: navy / white / muted green, serif display, sans body, generous spacing, no stock imagery.
- All numbers on the site are planning assumptions, not investment advice. The footer and the `/financials` page state this explicitly.

## License

Internal research artifact. Not for external distribution without review.
