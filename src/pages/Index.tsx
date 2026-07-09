import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { SeoHead } from "@/components/SeoHead";
import {
  Hammer,
  Activity,
  GitBranch,
  Bot,
  Zap,
  ArrowRight,
  Github,
} from "lucide-react";

const pillars = [
  {
    icon: Hammer,
    title: "Build",
    description:
      "Start from a backend designed for AI-native software, so teams spend their time on what the product actually does — not on stitching infrastructure together.",
  },
  {
    icon: Activity,
    title: "Run",
    description:
      "One consistent foundation to operate on. Predictable behaviour, one place for the pieces AI-native apps depend on, boring operations.",
  },
  {
    icon: GitBranch,
    title: "Evolve",
    description:
      "AI-native software changes fast — models, clients, patterns. Talva is built to absorb that change so your product can move with it.",
  },
  {
    icon: Bot,
    title: "Use",
    description:
      "Any client — human or AI — meets your product through the same backend, with the same behaviour and the same controls.",
    to: "/platform/agent-native",
  },
];

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    toast({
      title: "You're on the list! 🎉",
      description: "We'll reach out when Talva beta is ready.",
    });
    setName("");
    setEmail("");
  };

  const scrollToBeta = () => {
    document.getElementById("beta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Talva — the platform for AI-native software"
        description="Talva is the platform for building, running, evolving and using AI-native software. Join the beta."
        path="/"
      />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold tracking-tight text-foreground">
              Talva<sup>™</sup>
            </span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <Link to="/platform" className="text-sm text-muted-foreground hover:text-foreground">Platform</Link>
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
            <Button size="sm" onClick={scrollToBeta}>
              Join Beta
            </Button>
          </div>
        </div>
      </nav>

      <main>
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
        <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

        <Badge
          variant="outline"
          className="mb-8 border-primary/30 bg-primary/10 text-primary"
        >
          Coming Soon
        </Badge>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          The backend layer for
          <br />
          <span className="text-primary">AI-native software</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Talva makes it easy to build, run, evolve and use AI-native software —
          one foundation your teams can stand on instead of assembling one from
          scratch every time.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" onClick={scrollToBeta} className="gap-2">
            Request Beta Access <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/platform">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 bg-primary/10 text-primary"
          >
            Platform
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Build. Run. Evolve. Use.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            One backend layer for the full life of an AI-native product — not a
            kit you reassemble every time the ground moves.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((f) => {
            const card = (
              <Card className="group h-full border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.15)]">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <f.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                  {f.to && (
                    <p className="mt-4 text-sm font-medium text-primary">Learn more →</p>
                  )}
                </CardContent>
              </Card>
            );
            return f.to ? (
              <Link key={f.title} to={f.to}>{card}</Link>
            ) : (
              <div key={f.title}>{card}</div>
            );
          })}
        </div>
      </section>

      {/* Positioning */}
      <section className="border-y border-border/50 bg-card/50">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 bg-primary/10 text-primary"
          >
            Why Talva
          </Badge>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Treat the backend as the product.
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              AI-native software has traits normal software doesn't. The clients
              change often. Non-human callers are part of the user base. Behaviour
              has to stay coherent while the models and tools around it shift.
            </p>
            <p>
              A backend that wasn't designed for those traits has to be bent into
              shape every time one of them changes. Talva is designed for them
              from the start — so the parts of your product that should stay
              constant, do.
            </p>
            <p>
              The client someone uses today isn't the client they'll use next
              year. Talva makes the backend the fixed point, so what's above it
              can move without a rewrite underneath.
            </p>
          </div>
        </div>
      </section>

      {/* Beta Signup */}
      <section id="beta" className="mx-auto max-w-2xl px-6 py-24 text-center">
        <Badge
          variant="outline"
          className="mb-4 border-primary/30 bg-primary/10 text-primary"
        >
          Beta
        </Badge>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Get early access
        </h2>
        <p className="mb-8 text-muted-foreground">
          We're opening Talva to a limited group of builders. Drop your
          email and we'll be in touch.
        </p>

        {submitted ? (
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-8">
            <p className="text-lg font-medium text-foreground">
              Thanks for signing up! 🤙
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              We'll reach out when your beta slot is ready.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-md flex-col gap-3"
          >
            <Input
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-card border-border/50"
            />
            <Input
              type="email"
              placeholder="you@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-card border-border/50"
            />
            <Button type="submit" size="lg" className="mt-2 w-full gap-2">
              Request Beta Access <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
        )}
      </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">
              Talva
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
              © 2026 Talva. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
