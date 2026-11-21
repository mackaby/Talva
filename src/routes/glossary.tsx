import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Breadcrumbs, Eyebrow } from "@/components/content";
import { glossary } from "@/content/glossary";
import { SITE_URL } from "@/content/site";
import { breadcrumbLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/glossary")({
  head: () =>
    pageHead({
      title: "Glossary of AI-native software terms — Talva",
      description: "Plain definitions of AI-native software, agentic clients, client-agnostic platforms, vibe coding, vibe engineering and related terms.",
      path: "/glossary",
      jsonLd: [
        breadcrumbLd([{ name: "Home", path: "/" }, { name: "Glossary", path: "/glossary" }]),
        {
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: "Talva glossary",
          url: `${SITE_URL}/glossary`,
          hasDefinedTerm: glossary.map((t) => ({
            "@type": "DefinedTerm",
            name: t.term,
            description: t.definition,
            url: `${SITE_URL}/glossary#${t.id}`,
          })),
        },
      ],
    }),
  component: Glossary,
});

function Glossary() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Breadcrumbs items={[{ name: "Home", to: "/" }, { name: "Glossary" }]} />
        <Eyebrow>Glossary</Eyebrow>
        <h1 className="mb-5 text-4xl font-bold text-foreground sm:text-5xl">AI-native software, in plain words</h1>
        <p className="mb-12 text-lg text-muted-foreground">Short definitions of the terms used across this site.</p>
        <dl className="divide-y divide-border/60 rounded-xl border border-border/60 bg-card/40">
          {glossary.map((t) => (
            <div key={t.id} id={t.id} className="scroll-mt-24 p-6">
              <dt className="mb-2 text-lg font-semibold text-foreground">{t.term}</dt>
              <dd className="leading-relaxed text-muted-foreground">
                {t.definition}
                {t.link && (
                  <>
                    {" "}
                    <a href={t.link.to} className="text-primary hover:underline">{t.link.label}</a>
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </SiteLayout>
  );
}
