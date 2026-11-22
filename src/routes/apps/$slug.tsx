import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { ArticleCard } from "@/components/ArticleCard";
import { AnswerBox, BetaCta, Breadcrumbs, Eyebrow, FaqList } from "@/components/content";
import { appUseCases, getApp } from "@/content/apps";
import { articlesInCluster } from "@/content/articles";
import { breadcrumbLd, faqLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/apps/$slug")({
  loader: ({ params }) => {
    const app = getApp(params.slug);
    if (!app) throw notFound();
    return { app };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { app } = loaderData;
    return pageHead({
      title: `${app.name} — for people and AI agents`,
      description: `${app.definition} ${app.pitch}`,
      path: `/apps/${app.slug}`,
      jsonLd: [
        breadcrumbLd([{ name: "Home", path: "/" }, { name: "Apps", path: "/apps" }, { name: app.label, path: `/apps/${app.slug}` }]),
        faqLd(app.faq),
      ],
    });
  },
  component: AppPage,
});

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-muted-foreground">
          <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function AppPage() {
  const { app } = Route.useLoaderData();
  const guides = articlesInCluster(app.slug);
  const others = appUseCases.filter((a) => a.slug !== app.slug);
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Breadcrumbs items={[{ name: "Home", to: "/" }, { name: "Apps", to: "/apps" }, { name: app.label }]} />
        <Eyebrow>{app.level === "example" ? "App example" : "Use case"} · {app.label}</Eyebrow>
        <h1 className="mb-8 text-4xl font-bold text-foreground sm:text-5xl">{app.name}</h1>
        <AnswerBox label={app.question}>{app.definition}</AnswerBox>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">{app.pitch}</p>

        <section className="mt-14">
          <h2 className="mb-5 text-2xl font-bold text-foreground">What teams build</h2>
          <List items={app.examples} />
          {app.slug === "internal-tools" && (
            <p className="mt-5 text-sm text-muted-foreground">
              Explore an example: <Link to="/apps/$slug" params={{ slug: "crm" }} className="text-primary hover:underline">CRM on Talva</Link>.
            </p>
          )}
          {app.level === "example" && (
            <p className="mt-5 text-sm text-muted-foreground">
              Part of <Link to="/apps/$slug" params={{ slug: "internal-tools" }} className="text-primary hover:underline">large-scale internal apps</Link>, alongside systems such as digital asset management (DAM).
            </p>
          )}
        </section>

        <section className="mt-14 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card/50 p-6">
            <h2 className="mb-4 text-lg font-semibold text-foreground">How people use it</h2>
            <List items={app.humans} />
          </div>
          <div className="rounded-xl border border-border/60 bg-card/50 p-6">
            <h2 className="mb-4 text-lg font-semibold text-foreground">How AI agents use it</h2>
            <List items={app.agents} />
          </div>
        </section>

        <section className="mt-14">
          <h2 className="mb-5 text-2xl font-bold text-foreground">What has to stay consistent</h2>
          <List items={app.consistency} />
        </section>

        <section className="mt-14">
          <h2 className="mb-5 text-2xl font-bold text-foreground">Questions to answer before you build</h2>
          <ol className="list-decimal space-y-3 pl-5 text-muted-foreground marker:font-mono marker:text-primary">
            {app.questions.map((q) => <li key={q} className="pl-2">{q}</li>)}
          </ol>
        </section>

        <section className="mt-14">
          <h2 className="mb-5 text-2xl font-bold text-foreground">Guides about {app.noun}</h2>
          {guides.length > 0 ? (
            <div className="space-y-4">{guides.map((g) => <ArticleCard key={g.slug} article={g} />)}</div>
          ) : (
            <p className="text-muted-foreground">
              Guides for this app type are on the way. Meanwhile, read <Link to="/topics/$slug" params={{ slug: "ai-native-software" }} className="text-primary hover:underline">consistency in AI-built company software</Link>.
            </p>
          )}
        </section>

        <FaqList faq={app.faq} />

        <section className="mt-16">
          <h2 className="mb-4 text-lg font-semibold text-foreground">Other Talva use cases</h2>
          <div className="flex flex-wrap gap-3">
            {others.map((o) => (
              <Link key={o.slug} to="/apps/$slug" params={{ slug: o.slug }} className="rounded-md border border-border/60 px-4 py-2 text-sm text-foreground hover:border-primary/40">
                {o.name}
              </Link>
            ))}
          </div>
        </section>
        <BetaCta title={`Build your ${app.noun} on Talva`} />
      </article>
    </SiteLayout>
  );
}
