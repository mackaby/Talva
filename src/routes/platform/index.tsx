import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { AnswerBox, BetaCta, Breadcrumbs, Eyebrow, FaqList } from "@/components/content";
import { apps } from "@/content/apps";
import { talva } from "@/content/site";
import { breadcrumbLd, faqLd, pageHead } from "@/lib/seo";

const sections = [
  { id: "build", heading: "Build", body: "Start from a platform designed for AI-native software, so teams and agents spend their time on what each app does instead of stitching infrastructure together. Every app begins from the same foundation." },
  { id: "run", heading: "Run", body: "Operate every app on one consistent platform. There is one place for the things AI-native apps depend on, so behaviour is predictable and operations stay simple." },
  { id: "evolve", heading: "Evolve", body: "AI-native software changes fast: models, clients and patterns all move. Talva is built to absorb that change, so your apps can move with it without a rewrite every quarter." },
  { id: "use", heading: "Use", body: "Any client, human or AI, meets your apps through the same platform. People and agents are both first-class users, with the same data, the same controls and the same history." },
];

const faq = [
  { q: "What does Talva do?", a: talva.definition },
  { q: "How is Talva different from a framework or an AI model?", a: "Frameworks and models change often. Talva is the platform underneath that stays the same, so apps keep working when the tools above them change." },
  { q: "Does Talva work with my agentic client?", a: `Talva is client-agnostic. Teams can use ${talva.clients.join(", ")} or another client.` },
];

export const Route = createFileRoute("/platform/")({
  head: () =>
    pageHead({
      title: "Platform overview — how Talva works",
      description: "How Talva helps companies build, run, evolve and use AI-native software on one consistent platform, with any agentic client.",
      path: "/platform",
      jsonLd: [breadcrumbLd([{ name: "Home", path: "/" }, { name: "Platform", path: "/platform" }]), faqLd(faq)],
    }),
  component: PlatformPage,
});

function PlatformPage() {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Breadcrumbs items={[{ name: "Home", to: "/" }, { name: "Platform" }]} />
        <Eyebrow>Platform overview</Eyebrow>
        <h1 className="mb-8 text-4xl font-bold text-foreground sm:text-5xl">How Talva works</h1>
        <AnswerBox>
          {talva.definition} It is one shared foundation for every internal app your company builds with AI, so those apps stay
          consistent, controlled and secure.
        </AnswerBox>

        <nav aria-label="On this page" className="mt-10 flex flex-wrap gap-2">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="rounded-md border border-border/60 px-3 py-1 font-mono text-xs text-muted-foreground hover:text-foreground">
              {s.heading}
            </a>
          ))}
        </nav>

        <div className="prose-talva mt-6">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2>{s.heading}</h2>
              <p>{s.body}</p>
            </section>
          ))}
          <h2>Built for any client</h2>
          <p>
            Your teams can use the agentic client they prefer, and change it later. Read more about{" "}
            <Link to="/platform/agent-native">why the client should be swappable</Link>.
          </p>
          <h2>What teams build on Talva</h2>
          <ul>
            {apps.map((a) => (
              <li key={a.slug}>
                <Link to="/apps/$slug" params={{ slug: a.slug }}>{a.label}</Link>: {a.definition}
              </li>
            ))}
          </ul>
        </div>
        <FaqList faq={faq} />
        <BetaCta />
      </article>
    </SiteLayout>
  );
}
