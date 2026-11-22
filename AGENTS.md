# Agent notes

- The site runs on TanStack Start with server rendering, so crawlers and AI fetchers get full page text and per-page metadata in the first HTML response.
- All site copy and facts live as typed data in `src/content/` (site facts, apps, topics, articles, glossary); routes only render it, so wording stays consistent across pages.
- Every article belongs to exactly one cluster: an app slug (app landing page = cluster hub) or a topic slug.
- Store each guide's product connection, remaining company responsibilities and app links in its typed article record so advice stays contextual and links can be validated.
- Per-page head tags come from `pageHead()` in `src/lib/seo.ts`; sitewide Organization/WebSite JSON-LD lives in `src/routes/__root.tsx`.
- `public/sitemap.xml` and `public/llms.txt` are hand-maintained; `src/test/content-structure.test.ts` fails when a content page is missing from either.
