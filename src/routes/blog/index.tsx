import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumbs, Eyebrow } from "@/components/content";
import { apps } from "@/content/apps";
import { articlesInCluster } from "@/content/articles";
import { topics } from "@/content/topics";
import { breadcrumbLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageHead({
      title: "Talva guides — building AI-native company software",
      description: "Guides on building consistent, controlled AI-native software that people and AI agents share, grouped by topic and app type.",
      path: "/blog",
      jsonLd: [breadcrumbLd([{ name: "Home", path: "/" }, { name: "Guides", path: "/blog" }])],
    }),
  component: BlogIndex,
});

function BlogIndex() {
  const groups = [
    ...topics.map((t) => ({ key: t.slug, name: t.name, kind: "topic" as const })),
    ...apps.map((a) => ({ key: a.slug, name: `${a.label} apps`, kind: "app" as const })),
  ]
    .map((g) => ({ ...g, articles: articlesInCluster(g.key) }))
    .filter((g) => g.articles.length > 0);

  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Breadcrumbs items={[{ name: "Home", to: "/" }, { name: "Guides" }]} />
        <Eyebrow>Guides</Eyebrow>
        <h1 className="mb-5 text-4xl font-bold text-foreground sm:text-5xl">Guides to AI-native company software</h1>
        <p className="mb-14 text-lg text-muted-foreground">
          Practical answers about building apps that people and AI agents share, grouped by topic.
        </p>
        <div className="space-y-14">
          {groups.map((g) => (
            <section key={g.key}>
              <div className="mb-5 flex items-baseline justify-between gap-4">
                <h2 className="text-xl font-bold text-foreground">{g.name}</h2>
                {g.kind === "topic" ? (
                  <Link to="/topics/$slug" params={{ slug: g.key }} className="shrink-0 text-sm text-primary hover:underline">Topic overview</Link>
                ) : (
                  <Link to="/apps/$slug" params={{ slug: g.key }} className="shrink-0 text-sm text-primary hover:underline">App overview</Link>
                )}
              </div>
              <div className="space-y-4">{g.articles.map((a) => <ArticleCard key={a.slug} article={a} />)}</div>
            </section>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
