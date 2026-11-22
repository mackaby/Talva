import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { AnswerBox, BetaCta, Breadcrumbs, Eyebrow } from "@/components/content";
import { appUseCases } from "@/content/apps";
import { SITE_URL } from "@/content/site";
import { breadcrumbLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/apps/")({
  head: () =>
    pageHead({
      title: "Talva use cases — company apps, legacy modernization and semantic access",
      description: "Build large-scale internal apps, refactor legacy systems, build company knowledge graphs or give agents controlled MCP access to existing databases with Talva.",
      path: "/apps",
      jsonLd: [
        breadcrumbLd([{ name: "Home", path: "/" }, { name: "Apps", path: "/apps" }]),
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: appUseCases.map((a, i) => ({ "@type": "ListItem", position: i + 1, name: a.name, url: `${SITE_URL}/apps/${a.slug}` })),
        },
      ],
    }),
  component: AppsIndex,
});

function AppsIndex() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Breadcrumbs items={[{ name: "Home", to: "/" }, { name: "Apps" }]} />
        <Eyebrow>Use cases</Eyebrow>
        <h1 className="mb-8 max-w-3xl text-4xl font-bold text-foreground sm:text-5xl">What you can build with Talva</h1>
        <div className="max-w-3xl">
          <AnswerBox label="In short">
            Build large-scale company apps, refactor entire legacy systems, connect company knowledge or give agents
            controlled access to existing databases. Talva provides a consistent foundation for people and AI agents.
          </AnswerBox>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {appUseCases.map((a) => (
            <Link key={a.slug} to="/apps/$slug" params={{ slug: a.slug }} className="group flex flex-col rounded-lg border border-border/60 bg-card/50 p-6 transition-all hover:border-primary/40 hover:shadow-glow">
              <h2 className="mb-2 text-xl font-semibold text-foreground">{a.label}</h2>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{a.definition}</p>
              <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                {a.name} <ArrowRight className="h-3.5 w-3.5" />
              </p>
            </Link>
          ))}
        </div>
        <BetaCta />
      </div>
    </SiteLayout>
  );
}
