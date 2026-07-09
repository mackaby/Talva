import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/SiteLayout";
import { SeoHead } from "@/components/SeoHead";

export interface PlatformPageProps {
  title: string;
  description: string;
  path: string;
  eyebrow: string;
  h1: string;
  intro: string;
  icon: LucideIcon;
  sections: { heading: string; body: string }[];
  faq?: { q: string; a: string }[];
}

export function PlatformPage(p: PlatformPageProps) {
  const Icon = p.icon;
  const faqLd = p.faq && p.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : undefined;

  return (
    <SiteLayout>
      <SeoHead
        title={p.title}
        description={p.description}
        path={p.path}
        jsonLd={faqLd}
      />
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Badge variant="outline" className="mb-6 border-primary/30 bg-primary/10 text-primary">
          {p.eyebrow}
        </Badge>
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          {p.h1}
        </h1>
        <p className="mb-12 text-lg leading-relaxed text-muted-foreground">{p.intro}</p>

        <div className="space-y-10">
          {p.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">{s.heading}</h2>
              <p className="leading-relaxed text-muted-foreground whitespace-pre-line">{s.body}</p>
            </section>
          ))}
        </div>

        {p.faq && p.faq.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">FAQ</h2>
            <div className="space-y-6">
              {p.faq.map((f) => (
                <div key={f.q}>
                  <h3 className="mb-2 font-semibold text-foreground">{f.q}</h3>
                  <p className="text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="mt-16 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h3 className="mb-3 text-xl font-bold text-foreground">See Talva in action</h3>
          <p className="mb-6 text-muted-foreground">Join the private beta for early access.</p>
          <Button asChild size="lg" className="gap-2">
            <Link to="/#beta">Request Beta Access <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </article>
    </SiteLayout>
  );
}
