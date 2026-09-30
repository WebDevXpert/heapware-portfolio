# Heapware Website

Company website for [Heapware](https://heapware.com), built with Next.js 14 (App Router) and Tailwind CSS.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the SMTP settings
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact forms

All forms (home/contact page, service pages and the footer newsletter) post to
`/api/contact`, which emails the submission using the SMTP account configured in
`.env.local` (see `.env.example`). Without SMTP settings the form shows an error
asking visitors to email `harisali@heapware.com` directly.

## Project structure

- `src/app` – routes only (`page.jsx`, `layout.jsx`, `sitemap.js`, `robots.js`, `api/`)
- `src/components` – page sections and shared UI
- `src/data/services.js` – content for every `/services/[slug]` page
- `src/data/projects.js` – projects and case-study content for `/Projects`
- `src/lib/site.js` – company details (email, phone, address, social links)

To add a service or project, add an entry to the matching data file; pages,
metadata and the sitemap are generated from it.
