import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Breadcrumbs, Eyebrow } from "@/components/content";
import { apps } from "@/content/apps";
import { articles } from "@/content/articles";
import { glossary } from "@/content/glossary";
import { topics } from "@/content/topics";
import { breadcrumbLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/content")({
  head: () =>
    pageHead({
      title: "Content index — every page on talva.dev",
      description:
        "A complete index of every page on talva.dev: platform pages, app types, topics, guides and glossary terms, each with a one-line summary.",
      path: "/content",
      jsonLd: [breadcrumbLd([{ name: "Home", path: "/" }, { name: "Content index", path: "/content" }])],
    }),
  component: ContentIndex,
});

function IndexLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="font-medium text-foreground hover:text-primary hover:underline">
      {children}
    </Link>
  );
}

function ContentIndex() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Breadcrumbs items={[{ name: "Home", to: "/" }, { name: "Content index" }]} />
        <Eyebrow>Content index</Eyebrow>
        <h1 className="mb-5 text-4xl font-bold text-foreground sm:text-5xl">Every page on talva.dev</h1>
        <p className="mb-14 text-lg text-muted-foreground">
          A complete index of the site, grouped by section. Each entry links to the page and summarises it in one line.
        </p>

        <div className="space-y-14">
          <section>
            <h2 className="mb-5 text-xl font-bold text-foreground">Platform</h2>
            <ul className="space-y-4">
              <li>
                <IndexLink to="/">Home</IndexLink>
                <p className="mt-1 text-sm text-muted-foreground">What Talva is, the problem it solves, and beta signup.</p>
              </li>
              <li>
                <IndexLink to="/about">About Talva</IndexLink>
                <p className="mt-1 text-sm text-muted-foreground">Definition, audience and disambiguation.</p>
              </li>
              <li>
                <IndexLink to="/platform">Platform overview</IndexLink>
                <p className="mt-1 text-sm text-muted-foreground">Build, run, evolve and use AI-native software on one platform.</p>
              </li>
              <li>
                <IndexLink to="/platform/agent-native">Any agentic client</IndexLink>
                <p className="mt-1 text-sm text-muted-foreground">Why the client is swappable and the platform is the fixed point.</p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-5 text-xl font-bold text-foreground">Use cases and app examples</h2>
            <ul className="space-y-4">
              <li>
                <IndexLink to="/apps">All use cases</IndexLink>
                <p className="mt-1 text-sm text-muted-foreground">Company apps, legacy modernization, knowledge graphs and semantic access to existing databases.</p>
              </li>
              {apps.map((a) => (
                <li key={a.slug}>
                  <Link to="/apps/$slug" params={{ slug: a.slug }} className="font-medium text-foreground hover:text-primary hover:underline">
                    {a.name}
                  </Link>
                  <p className="mt-1 text-sm text-muted-foreground">{a.definition}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-5 text-xl font-bold text-foreground">Topics</h2>
            <ul className="space-y-4">
              {topics.map((t) => (
                <li key={t.slug}>
                  <Link to="/topics/$slug" params={{ slug: t.slug }} className="font-medium text-foreground hover:text-primary hover:underline">
                    {t.name}
                  </Link>
                  <p className="mt-1 text-sm text-muted-foreground">{t.definition}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-5 text-xl font-bold text-foreground">Guides</h2>
            <ul className="space-y-4">
              <li>
                <IndexLink to="/blog">All guides</IndexLink>
                <p className="mt-1 text-sm text-muted-foreground">Guides grouped by topic and app type.</p>
              </li>
              {articles.map((a) => (
                <li key={a.slug}>
                  <Link to="/blog/$slug" params={{ slug: a.slug }} className="font-medium text-foreground hover:text-primary hover:underline">
                    {a.title}
                  </Link>
                  <p className="mt-1 text-sm text-muted-foreground">{a.description}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-5 text-xl font-bold text-foreground">Glossary</h2>
            <p className="mb-4 text-sm text-muted-foreground">
              <IndexLink to="/glossary">All terms</IndexLink> — plain definitions of AI-native software terms.
            </p>
            <ul className="space-y-3">
              {glossary.map((g) => (
                <li key={g.id} className="text-sm">
                  <span className="font-medium text-foreground">{g.term}:</span>{" "}
                  <span className="text-muted-foreground">{g.definition}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </SiteLayout>
  );
}
