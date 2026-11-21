import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { FaqItem } from "@/content/site";

export interface Crumb {
  name: string;
  to?: string;
}

/** Visible breadcrumb trail. Pair it with breadcrumbLd() in the route head. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 font-mono text-xs text-muted-foreground">
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="h-3 w-3" aria-hidden />}
            {item.to ? (
              <a href={item.to} className="hover:text-foreground">
                {item.name}
              </a>
            ) : (
              <span aria-current="page" className="text-foreground">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">{children}</p>
  );
}

/** The direct answer at the top of a page: readable on its own, quotable by search and AI answers. */
export function AnswerBox({ label = "Short answer", children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-primary/25 bg-primary/5 p-6">
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">{label}</p>
      <div className="text-lg leading-relaxed text-foreground">{children}</div>
    </div>
  );
}

export function FaqList({ faq, title = "Frequently asked questions" }: { faq: FaqItem[]; title?: string }) {
  if (faq.length === 0) return null;
  return (
    <section className="mt-16" aria-labelledby="faq">
      <h2 id="faq" className="mb-6 text-2xl font-bold text-foreground">
        {title}
      </h2>
      <dl className="divide-y divide-border/60 rounded-xl border border-border/60 bg-card/40">
        {faq.map((f) => (
          <div key={f.q} className="p-6">
            <dt className="mb-2 font-semibold text-foreground">{f.q}</dt>
            <dd className="leading-relaxed text-muted-foreground">{f.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function BetaCta({ title = "Build on Talva", body = "Talva is in private beta. Request access to be among the first teams on the platform." }: { title?: string; body?: string }) {
  return (
    <aside className="mt-20 rounded-2xl border border-primary/25 bg-card bg-grid p-10 text-center shadow-glow">
      <h2 className="mb-3 text-2xl font-bold text-foreground">{title}</h2>
      <p className="mx-auto mb-7 max-w-lg text-muted-foreground">{body}</p>
      <Button asChild size="lg" className="gap-2">
        <Link to="/" hash="beta">
          Request beta access <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </aside>
  );
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
