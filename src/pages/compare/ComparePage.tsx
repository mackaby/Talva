import { Link } from "react-router-dom";
import { ArrowRight, Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/SiteLayout";
import { SeoHead } from "@/components/SeoHead";

export interface CompareRow {
  feature: string;
  talva: string | boolean;
  other: string | boolean;
}

export interface ComparePageProps {
  title: string;
  description: string;
  path: string;
  h1: string;
  intro: string;
  otherName: string;
  rows: CompareRow[];
  sections: { heading: string; body: string }[];
}

function Cell({ v }: { v: string | boolean }) {
  if (typeof v === "boolean") {
    return v ? <Check className="h-5 w-5 text-primary" /> : <X className="h-5 w-5 text-muted-foreground" />;
  }
  return <span className="text-sm text-foreground">{v}</span>;
}

export function ComparePage(p: ComparePageProps) {
  return (
    <SiteLayout>
      <SeoHead title={p.title} description={p.description} path={p.path} />
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Badge variant="outline" className="mb-6 border-primary/30 bg-primary/10 text-primary">
          Compare
        </Badge>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          {p.h1}
        </h1>
        <p className="mb-12 text-lg leading-relaxed text-muted-foreground">{p.intro}</p>

        <div className="mb-12 overflow-hidden rounded-xl border border-border/50">
          <table className="w-full">
            <thead className="bg-card/50">
              <tr>
                <th className="p-4 text-left text-sm font-semibold text-muted-foreground">Feature</th>
                <th className="p-4 text-left text-sm font-semibold text-primary">Talva™</th>
                <th className="p-4 text-left text-sm font-semibold text-muted-foreground">{p.otherName}</th>
              </tr>
            </thead>
            <tbody>
              {p.rows.map((r, i) => (
                <tr key={r.feature} className={i % 2 === 0 ? "bg-background" : "bg-card/20"}>
                  <td className="p-4 text-sm text-foreground">{r.feature}</td>
                  <td className="p-4"><Cell v={r.talva} /></td>
                  <td className="p-4"><Cell v={r.other} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-10">
          {p.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">{s.heading}</h2>
              <p className="leading-relaxed text-muted-foreground whitespace-pre-line">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h3 className="mb-3 text-xl font-bold text-foreground">Try Talva™ for your agent stack</h3>
          <p className="mb-6 text-muted-foreground">Join the private beta.</p>
          <Button asChild size="lg" className="gap-2">
            <Link to="/#beta">Request Beta Access <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </article>
    </SiteLayout>
  );
}
