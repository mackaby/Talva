import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArticleCard } from "@/components/ArticleCard";
import { AnswerBox, BetaCta, Breadcrumbs, FaqList, formatDate } from "@/components/content";
import { getApp } from "@/content/apps";
import { getArticle, relatedArticles } from "@/content/articles";
import { SITE_URL } from "@/content/site";
import { getTopic } from "@/content/topics";
import { breadcrumbLd, faqLd, pageHead } from "@/lib/seo";

function clusterOf(slug: string) {
  const topic = getTopic(slug);
  if (topic) return { name: topic.name, kind: "topic" as const, slug };
  const app = getApp(slug);
  if (app) return { name: `${app.label} apps`, kind: "app" as const, slug };
  return undefined;
}

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { article } = loaderData;
    const url = `${SITE_URL}/blog/${article.slug}`;
    return pageHead({
      title: `${article.title} — Talva`,
      description: article.description,
      path: `/blog/${article.slug}`,
      type: "article",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.description,
          datePublished: article.date,
          dateModified: article.updated,
          author: { "@id": `${SITE_URL}/#organization` },
          publisher: { "@id": `${SITE_URL}/#organization` },
          mainEntityOfPage: url,
          url,
        },
        breadcrumbLd([{ name: "Home", path: "/" }, { name: "Guides", path: "/blog" }, { name: article.title, path: `/blog/${article.slug}` }]),
        ...(article.faq.length > 0 ? [faqLd(article.faq)] : []),
      ],
    });
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const cluster = clusterOf(article.cluster);
  const related = relatedArticles(article);

  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Breadcrumbs items={[{ name: "Home", to: "/" }, { name: "Guides", to: "/blog" }, { name: article.title }]} />
        {cluster && (
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {cluster.kind === "topic" ? (
              <Link to="/topics/$slug" params={{ slug: cluster.slug }} className="hover:underline">{cluster.name}</Link>
            ) : (
              <Link to="/apps/$slug" params={{ slug: cluster.slug }} className="hover:underline">{cluster.name}</Link>
            )}
          </p>
        )}
        <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl">{article.title}</h1>
        <p className="mb-10 font-mono text-xs text-muted-foreground">
          By the Talva team · Published <time dateTime={article.date}>{formatDate(article.date)}</time> · Updated{" "}
          <time dateTime={article.updated}>{formatDate(article.updated)}</time> · {article.readingTime}
        </p>

        <AnswerBox>{article.answer}</AnswerBox>

        <section className="mt-8 rounded-xl border border-border/60 bg-card/50 p-6" aria-labelledby="takeaways">
          <h2 id="takeaways" className="mb-3 font-mono text-xs uppercase tracking-widest text-foreground">Key takeaways</h2>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
            {article.keyTakeaways.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </section>

        <div className="prose-talva mt-6">
          {article.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              {s.paragraphs.map((p) => <p key={p}>{p}</p>)}
              {s.bullets && <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
              {s.sources && <p className="text-sm">Sources: {s.sources.map((source, index) => <span key={source.url}>{index > 0 && " · "}<a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a></span>)}</p>}
            </section>
          ))}
        </div>

        <section className="prose-talva mt-12" aria-labelledby="talva-fit">
          <h2 id="talva-fit">Where Talva fits</h2>
          {article.talvaFit.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <h3>What your company still owns</h3>
          <p>{article.talvaFit.responsibility}</p>
          <ul>
            {article.talvaFit.appSlugs.map((slug) => {
              const app = getApp(slug);
              if (!app) return null;
              return <li key={slug}><Link to="/apps/$slug" params={{ slug }}>{app.name}</Link></li>;
            })}
          </ul>
          <p><Link to="/platform">Explore the Talva platform</Link></p>
        </section>

        <FaqList faq={article.faq} />

        {article.sources.length > 0 && (
          <section className="mt-12">
            <h2 className="mb-4 text-lg font-semibold text-foreground">Sources</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {article.sources.map((s) => (
                <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{s.label}</a></li>
              ))}
            </ul>
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-5 text-xl font-bold text-foreground">Related guides</h2>
            <div className="space-y-4">{related.map((r) => <ArticleCard key={r.slug} article={r} />)}</div>
          </section>
        )}
        <BetaCta />
      </article>
    </SiteLayout>
  );
}
