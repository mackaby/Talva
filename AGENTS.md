# Agent notes

- The site runs on TanStack Start with server rendering, so crawlers and AI fetchers get full page text and per-page metadata in the first HTML response.
- All site copy and facts live as typed data in `src/content/` (site facts, apps, topics, articles, glossary); routes only render it, so wording stays consistent across pages.
- Every article belongs to exactly one cluster: an app slug (app landing page = cluster hub) or a topic slug.
- Use `appUseCases` for primary app navigation and cards; retain example records in `apps` for existing URLs and article links so taxonomy changes do not break content clusters.
- Store each guide's product connection, remaining company responsibilities and app links in its typed article record so advice stays contextual and links can be validated.
- Keep sourced audience questions and research limitations in typed content for the planning page; section-level citations travel with article sections so claims keep their evidence.
- Related guides must come from the current article's cluster so supporting answers remain connected to their hub.
- Per-page head tags come from `pageHead()` in `src/lib/seo.ts`; sitewide Organization/WebSite JSON-LD lives in `src/routes/__root.tsx`.
- `public/sitemap.xml` and `public/llms.txt` are hand-maintained; `src/test/content-structure.test.ts` fails when a content page is missing from either.
