import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArticleCard } from "@/components/ArticleCard";
import { AnswerBox, BetaCta, Breadcrumbs, Eyebrow } from "@/components/content";
import { articlesInCluster } from "@/content/articles";
import { getTopic } from "@/content/topics";
import { breadcrumbLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/topics/$slug")({
  loader: ({ params }) => {
    const topic = getTopic(params.slug);
    if (!topic) throw notFound();
    return { topic };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { topic } = loaderData;
    return pageHead({
      title: `${topic.name} — Talva guides`,
      description: topic.definition,
      path: `/topics/${topic.slug}`,
      jsonLd: [breadcrumbLd([{ name: "Home", path: "/" }, { name: "Guides", path: "/blog" }, { name: topic.name, path: `/topics/${topic.slug}` }])],
    });
  },
  component: TopicPage,
});

function TopicPage() {
  const { topic } = Route.useLoaderData();
  const guides = articlesInCluster(topic.slug);
  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Breadcrumbs items={[{ name: "Home", to: "/" }, { name: "Guides", to: "/blog" }, { name: topic.name }]} />
        <Eyebrow>Topic</Eyebrow>
        <h1 className="mb-8 text-4xl font-bold text-foreground sm:text-5xl">{topic.name}</h1>
        <AnswerBox label="Overview">{topic.definition}</AnswerBox>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">{topic.intro}</p>
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Questions this topic answers</h2>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
            {topic.questions.map((q) => <li key={q}>{q}</li>)}
          </ul>
        </section>
        <section className="mt-12">
          <h2 className="mb-5 text-2xl font-bold text-foreground">Guides</h2>
          <div className="space-y-4">{guides.map((g) => <ArticleCard key={g.slug} article={g} />)}</div>
        </section>
        <BetaCta />
      </div>
    </SiteLayout>
  );
}
