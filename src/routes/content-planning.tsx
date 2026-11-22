import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Eyebrow } from "@/components/content";
import { pageHead } from "@/lib/seo";
import data from "@/content/briefs.json";
import { vibeResearch } from "@/content/question-research";

type Brief = {
  slug: string;
  workingTitle: string;
  audience: string;
  searchIntent: string;
  userQuestions: { question: string; sourceUrl: string }[];
  hubAngle: string;
  plannedGuides: { title: string; answers: string | string[] }[];
  claimsNeedingConfirmation: string[];
  sources: { title: string; url: string }[];
};
const briefs = data.briefs as unknown as Brief[];

export const Route = createFileRoute("/content-planning")({
  head: () => {
    const h = pageHead({
      title: "Content planning — Talva cluster briefs (internal)",
      description: "Internal draft briefs for upcoming Talva app-type content clusters, based on real user questions and sources.",
      path: "/content-planning",
    });
    return { ...h, meta: [...h.meta, { name: "robots", content: "noindex, nofollow" }] };
  },
  component: ContentPlanning,
});

function ContentPlanning() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Eyebrow>Internal · draft</Eyebrow>
        <h1 className="mb-4 text-4xl font-bold text-foreground">Content cluster briefs</h1>
        <p className="mb-12 text-muted-foreground">
          AI-drafted ({data.model}, {data.generatedAt}) from real user questions and credible sources. Review every claim before writing. Not indexed by search engines.
        </p>
        <section className="mb-16 border-y border-border py-8" aria-labelledby="question-research">
          <p className="mb-2 font-mono text-xs text-primary">Reviewed {vibeResearch.reviewed}</p>
          <h2 id="question-research" className="mb-4 text-2xl font-bold text-foreground">Real questions: {vibeResearch.scope}</h2>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{vibeResearch.evidence}</p>
          <div className="space-y-6">
            {vibeResearch.groups.map((group) => <div key={group.guide}>
              <h3 className="mb-2 font-semibold text-foreground">{group.intent}</h3>
              <a href={group.source} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{group.question}</a>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{group.coverage}</p>
              <Link to="/blog/$slug" params={{ slug: group.guide }} className="mt-2 inline-block text-sm text-primary hover:underline">Read the expanded guide →</Link>
            </div>)}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{vibeResearch.limitations}</p>
        </section>
        <div className="space-y-12">
          {briefs.map((b) => (
            <article key={b.slug} className="rounded-xl border border-border bg-card p-8">
              <p className="mb-2 font-mono text-xs uppercase text-primary">/apps/{b.slug}</p>
              <h2 className="mb-4 text-2xl font-bold text-foreground">{b.workingTitle}</h2>
              <dl className="mb-6 grid gap-3 text-sm">
                <div><dt className="font-semibold text-foreground">Audience</dt><dd className="text-muted-foreground">{b.audience}</dd></div>
                <div><dt className="font-semibold text-foreground">Search intent</dt><dd className="text-muted-foreground">{b.searchIntent}</dd></div>
                <div><dt className="font-semibold text-foreground">Hub angle</dt><dd className="text-muted-foreground">{b.hubAngle}</dd></div>
              </dl>
              <h3 className="mb-2 font-semibold text-foreground">Real user questions</h3>
              <ul className="mb-6 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {b.userQuestions.map((q) => (
                  <li key={q.question}>{q.question} <a href={q.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">source</a></li>
                ))}
              </ul>
              <h3 className="mb-2 font-semibold text-foreground">Planned guides</h3>
              <ul className="mb-6 space-y-2 text-sm">
                {b.plannedGuides.map((g) => (
                  <li key={g.title}><span className="font-medium text-foreground">{g.title}</span> — <span className="text-muted-foreground">{[g.answers].flat().join(" · ")}</span></li>
                ))}
              </ul>
              <h3 className="mb-2 font-semibold text-foreground">Claims to confirm with you</h3>
              <ul className="mb-6 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {b.claimsNeedingConfirmation.map((c) => <li key={c}>{c}</li>)}
              </ul>
              <h3 className="mb-2 font-semibold text-foreground">Sources</h3>
              <ul className="space-y-1 text-sm">
                {b.sources.map((s) => (
                  <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{s.title}</a></li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
