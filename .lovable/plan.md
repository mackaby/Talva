## Source of truth

> **Talva is the backend layer that makes it easy to build, run, evolve and use AI-native software.**

Everything on the site should ladder up to this. I'll stop asserting specifics I can't verify (Hasura-DDN analogy, MCP-native, WASM sandbox, vault-injection model, "connect data sources", "agent as first-class user", etc.) unless you confirm them.

## Changes

### 1. Homepage (`src/pages/Index.tsx`)
- New H1 + subhead built on the build / run / evolve / use frame.
- Replace the current 3 pillars with four sections — one per verb — using neutral language (no claims about MCP, data connectors, or vault internals).
- Keep the beta signup and footer. Remove the "client-agnostic / Codex / Claude Code / OpenCode / Cursor" list from the hero (move to a single softer line, or drop until you confirm).
- Update meta title/description to match.

### 2. Data layer page → rename to **"Platform"** (`src/pages/platform/DataLayer.tsx` → `Platform.tsx`, route `/platform`)
- Drop the Hasura-DDN framing and "sits in front of your data sources" claim.
- Reframe as the overview of the backend layer: what it means to build / run / evolve / use AI-native software on Talva, at a high level, without inventing mechanics.
- Update `App.tsx` route, `SiteLayout` nav, `sitemap.xml`, `llms.txt`.

### 3. Agent-native page (`src/pages/platform/AgentNative.tsx`)
- Remove specific client name-drops presented as integrations (Codex, Claude Code, OpenCode, Cursor, LangChain, LlamaIndex) and the "MCP-native" assertion.
- Reframe around: AI-native software needs a backend built for it — Talva is that backend. Keep it principle-level.

### 4. WASM Functions + Secrets pages
Two options — pick one in your reply:
- **a) Delete both pages** (and remove from nav / sitemap / llms.txt). Cleanest — matches how we handled the Graph Queries page. Recommended until you're ready to describe these features precisely.
- **b) Keep as stubs** — one short paragraph each saying the capability exists as part of the backend layer, no mechanics, "details coming soon".

### 5. Blog posts (`src/pages/blog/posts.ts`)
- Light edit of the two posts that reference the old framing so they don't contradict the new positioning. No new posts.

### 6. Global copy
- Remove remaining "enterprise AI agent platform / AI agent backend" phrasings from meta tags and headings; replace with "backend layer for AI-native software".
- `index.html` `<title>`, description, OG tags, JSON-LD `description` all updated to the new line.

## Technical notes

- No design-system, routing, or dependency changes beyond the one file rename + route update.
- ™ handling stays as just-shipped: symbol only in the header logo.
- I won't reintroduce comparisons to Weaviate/LangChain/Hasura or invent product mechanics.

## One decision needed

**WASM Functions + Secrets pages: delete (recommended) or keep as stubs?**
