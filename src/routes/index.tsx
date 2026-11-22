import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, ArrowRight, Bot, Copy, GitBranch, Hammer, KeyRound, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/SiteLayout";
import { BetaForm } from "@/components/BetaForm";
import { Eyebrow, FaqList, formatDate } from "@/components/content";
import { appUseCases } from "@/content/apps";
import { articles } from "@/content/articles";
import { talva } from "@/content/site";
import { faqLd, pageHead } from "@/lib/seo";

const faq = [
  { q: "What is Talva?", a: `${talva.definition} It gives companies one consistent foundation for the internal apps that people and AI agents build and use.` },
  { q: "Who is Talva for?", a: talva.audience },
  { q: "Which AI agents and clients work with Talva?", a: `Talva is client-agnostic. Teams can use the agentic client they prefer, such as ${talva.clients.join(", ")}.` },
  { q: "Who owns the data in apps built on Talva?", a: "Your company does. Data in apps built on Talva stays fully owned by you." },
  { q: "Is Talva a CRM or a graph database?", a: "Neither. Talva is the platform underneath. A CRM or a company knowledge graph are examples of apps you can build on it." },
  { q: "Is Talva available?", a: "Talva is in private beta. You can request access on this page." },
];

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Talva — the platform for AI-native software",
      description:
        "Talva is the platform for building, running, evolving and using AI-native software: one consistent foundation for the internal apps people and AI agents build. Private beta.",
      path: "/",
      jsonLd: [faqLd(faq)],
    }),
  component: Home,
});

const pillars = [
  { icon: Hammer, title: "Build", body: "Start every app on the same foundation instead of assembling a new stack each time." },
  { icon: Activity, title: "Run", body: "Operate every app on one platform, with predictable behaviour and one place to look." },
  { icon: GitBranch, title: "Evolve", body: "Change models and agentic clients without rebuilding the apps underneath." },
  { icon: Bot, title: "Use", body: "People and AI agents use the same apps, with the same data and the same controls." },
];

const problems = [
  { icon: Copy, title: "Every app keeps its own copy", body: "Each new AI-built app stores company data its own way, so records drift apart." },
  { icon: KeyRound, title: "Every app has its own rules", body: "Who may see or change what depends on which app, and which agent, you ask." },
  { icon: ScrollText, title: "Nobody can see the full history", body: "Changes made by agents are hard to trace across dozens of separate apps." },
];

function Home() {
  const latest = [...articles].sort((a, b) => b.updated.localeCompare(a.updated)).slice(0, 3);
  return (
    <SiteLayout>
      {/* Hero: the definition comes first so people and search systems get the answer immediately. */}
      <section className="relative overflow-hidden border-b border-border/60 bg-grid">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" /> {talva.status}
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            The platform for <span className="text-primary">AI-native software</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            <strong className="font-medium text-foreground">Talva</strong> is the platform for building, running, evolving and
            using AI-native software. When people and agents across your company build apps, Talva keeps them consistent,
            controlled and secure, and your data stays yours.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild className="gap-2">
              <a href="#beta">Request beta access <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/platform">How the platform works</Link>
            </Button>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="font-mono text-xs uppercase tracking-widest">Use any agentic client</span>
            {talva.clients.map((c) => (
              <span key={c} className="rounded-md border border-border/60 bg-card/60 px-3 py-1 font-mono text-xs text-foreground">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow>The problem</Eyebrow>
        <h2 className="max-w-3xl text-3xl font-bold text-foreground sm:text-4xl">
          AI made building internal apps easy. Keeping them consistent got hard.
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
          Teams and agents now build apps in many different ways. Without a shared platform, the same company ends up with
          dozens of apps that disagree with each other.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {problems.map((p) => (
            <div key={p.title} className="rounded-xl border border-border/60 bg-card/50 p-6">
              <p.icon className="mb-4 h-5 w-5 text-primary" />
              <h3 className="mb-2 text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Eyebrow>What Talva does</Eyebrow>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Build. Run. Evolve. Use.</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <div key={p.title} className="bg-background p-7">
                <p className="mb-6 font-mono text-xs text-muted-foreground">0{i + 1}</p>
                <p.icon className="mb-4 h-5 w-5 text-primary" />
                <h3 className="mb-2 text-xl font-semibold text-foreground">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
          <Link to="/platform" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            Read the platform overview <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Apps */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow>What you can build</Eyebrow>
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Build, modernize and connect company systems</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {appUseCases.map((a) => (
            <Link
              key={a.slug}
              to="/apps/$slug"
              params={{ slug: a.slug }}
              className="group rounded-xl border border-border/60 bg-card/50 p-6 transition-all hover:border-primary/40 hover:shadow-glow"
            >
              <h3 className="mb-2 text-lg font-semibold text-foreground">{a.label}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{a.definition}</p>
              <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                {a.label} on Talva <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Facts: a compact, quotable summary. */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>Talva at a glance</Eyebrow>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">The facts, in one place</h2>
          </div>
          <dl className="divide-y divide-border/60 rounded-xl border border-border/60 bg-background">
            {[
              ["What it is", talva.definition],
              ["Who it's for", talva.audience],
              ["Works with", `Any agentic client, including ${talva.clients.join(", ")}`],
              ["Users", "People and AI agents, as first-class users of the same apps"],
              ["Data", "Fully owned by your company"],
              ["Status", talva.status],
            ].map(([k, v]) => (
              <div key={k} className="grid gap-1 p-5 sm:grid-cols-[140px_1fr] sm:gap-6">
                <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{k}</dt>
                <dd className="text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Latest guides */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Guides</Eyebrow>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Latest guides</h2>
          </div>
          <Link to="/blog" className="text-sm font-medium text-primary hover:underline">All guides</Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {latest.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="rounded-xl border border-border/60 bg-card/50 p-6 transition-colors hover:border-primary/40">
              <p className="mb-3 font-mono text-xs text-muted-foreground">Updated {formatDate(p.updated)}</p>
              <h3 className="mb-2 font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </Link>
          ))}
        </div>
        <div className="mx-auto max-w-3xl">
          <FaqList faq={faq} />
        </div>
      </section>

      {/* Beta */}
      <section id="beta" className="scroll-mt-24 border-t border-border/60 bg-grid">
        <div className="mx-auto max-w-2xl px-6 py-24 text-center">
          <Eyebrow>Private beta</Eyebrow>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Get early access</h2>
          <p className="mb-10 text-muted-foreground">
            We're opening Talva to a small group of teams. Leave your email and we'll be in touch.
          </p>
          <BetaForm />
        </div>
      </section>
    </SiteLayout>
  );
}
