import { Link } from "@tanstack/react-router";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { apps } from "@/content/apps";
import { topics } from "@/content/topics";
import { GITHUB_URL, talva } from "@/content/site";

const nav = [
  { to: "/platform", label: "Platform" },
  { to: "/apps", label: "Apps" },
  { to: "/blog", label: "Guides" },
  { to: "/glossary", label: "Glossary" },
  { to: "/about", label: "About" },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2" aria-label="Talva home">
      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary font-display text-sm font-bold text-primary-foreground">
        T
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-foreground">
        Talva<sup className="ml-0.5 text-[10px] font-medium text-muted-foreground">TM</sup>
      </span>
    </Link>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3.5">
          <Logo />
          <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Talva website source on GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <Button size="sm" asChild>
              <Link to="/" hash="beta">Join beta</Link>
            </Button>
          </div>
        </div>
        <nav aria-label="Main mobile" className="flex gap-5 overflow-x-auto border-t border-border/40 px-6 py-2 md:hidden">
          {nav.map((item) => (
            <Link key={item.to} to={item.to} className="whitespace-nowrap text-sm text-muted-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main id="content" className="pt-28 md:pt-16">{children}</main>

      <footer className="border-t border-border/60 bg-card/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{talva.definition}</p>
            <p className="mt-3 text-xs text-muted-foreground">{talva.status}</p>
          </div>
          <FooterColumn title="Platform">
            <FooterLink to="/platform">Platform overview</FooterLink>
            <FooterLink to="/platform/agent-native">Any agentic client</FooterLink>
            <FooterLink to="/about">About Talva</FooterLink>
          </FooterColumn>
          <FooterColumn title="Apps">
            <FooterLink to="/apps">All app types</FooterLink>
            {apps.map((a) => (
              <li key={a.slug}>
                <Link to="/apps/$slug" params={{ slug: a.slug }} className="text-sm text-muted-foreground hover:text-foreground">
                  {a.label}
                </Link>
              </li>
            ))}
          </FooterColumn>
          <FooterColumn title="Learn">
            <FooterLink to="/blog">All guides</FooterLink>
            {topics.map((t) => (
              <li key={t.slug}>
                <Link to="/topics/$slug" params={{ slug: t.slug }} className="text-sm text-muted-foreground hover:text-foreground">
                  {t.name}
                </Link>
              </li>
            ))}
            <FooterLink to="/glossary">Glossary</FooterLink>
          </FooterColumn>
        </div>
        <div className="border-t border-border/40">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
            <p>© 2026 Talva. All rights reserved.</p>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              Website source on GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-foreground">{title}</h2>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }: { to: "/platform" | "/platform/agent-native" | "/about" | "/apps" | "/blog" | "/glossary"; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-sm text-muted-foreground hover:text-foreground">
        {children}
      </Link>
    </li>
  );
}
