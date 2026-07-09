import { Link } from "react-router-dom";
import { Github, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold tracking-tight text-foreground">
              Talva<sup>™</sup>
            </span>
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            <Link to="/platform/data-layer" className="text-sm text-muted-foreground hover:text-foreground">Platform</Link>
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mackaby/Talva"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <Button size="sm" asChild>
              <Link to="/#beta">Join Beta</Link>
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-20">{children}</main>

      <footer className="border-t border-border/50 bg-card/30">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">
              Talva<sup>™</sup>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mackaby/Talva"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <p className="text-sm text-muted-foreground">
              © 2026 Talva™. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
