import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { SeoHead } from "@/components/SeoHead";
import {
  GitBranch,
  Box,
  KeyRound,
  Bot,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
  Github,
} from "lucide-react";

const features = [
  {
    icon: GitBranch,
    title: "Graph Queries",
    description:
      "Query and traverse graph data natively. Model complex relationships between entities and build knowledge graphs on top of first-class graph primitives.",
    to: "/platform/graph-queries",
  },
  {
    icon: Box,
    title: "WASM Functions",
    description:
      "Deploy serverless functions as sandboxed WebAssembly modules. Write custom backend logic in any language that compiles to WASM.",
    to: "/platform/wasm-functions",
  },
  {
    icon: KeyRound,
    title: "Secrets Management",
    description:
      "Secure credential and API key storage built into the platform. Zero-config secret injection for your agents.",
    to: "/platform/secrets",
  },
  {
    icon: Bot,
    title: "Agent-Native",
    description:
      "Designed from the ground up for AI agents, not retrofitted. Native tool-calling, context windows, and memory.",
    to: "/platform/agent-native",
  },
  {
    icon: Layers,
    title: "Object Store",
    description:
      "Store and retrieve files, blobs, and unstructured data. Built-in object storage for agents that need to manage assets and artifacts.",
  },
  {
    icon: ShieldCheck,
    title: "Permission-Aware",
    description:
      "Fine-grained role-based access control at every layer. Define who — human or agent — can do what, and where.",
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
      description: "We'll reach out when Talva™ beta is ready.",
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
        title="Talva™ — Agent-First Datastore & BaaS Platform"
        description="Talva™ is an agent-first Backend-as-a-Service with knowledge graphs, WASM runtime, secrets management and multi-tenant isolation. Join the beta."
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
            <Link to="/platform/graph-queries" className="text-sm text-muted-foreground hover:text-foreground">Platform</Link>
            <Link to="/compare/talva-vs-langchain" className="text-sm text-muted-foreground hover:text-foreground">Compare</Link>
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
        {/* Glow effect */}
        <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

        <Badge
          variant="outline"
          className="mb-8 border-primary/30 bg-primary/10 text-primary"
        >
          Coming Soon
        </Badge>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          The datastore built
          <br />
          <span className="text-primary">for the agent era</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Every team is shipping autonomous agents — but each one builds
          differently. No consistency. No control. No visibility. Talva™ is
          the consistency platform: build apps across your company with
          enforced standards, full control, and enterprise security — at the
          speed of light.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" onClick={scrollToBeta} className="gap-2">
            Request Beta Access <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" onClick={scrollToBeta}>
            Learn More
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 bg-primary/10 text-primary"
          >
            Platform
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            One platform. Any agent. Full control.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Connect your favorite AI — Claude, OpenAI, or anything else.
            Talva™ is agent-agnostic by design.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card
              key={f.title}
              className="group border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.15)]"
            >
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
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Platform Highlights */}
      <section className="border-y border-border/50 bg-card/50">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 bg-primary/10 text-primary"
          >
            Why Talva™
          </Badge>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Hard tech. Lightweight touch.
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Every enterprise is deploying AI agents — but most are flying
              blind. Different agents make different decisions, data ends up
              scattered across services you don't control, and "consistent
              behavior" is wishful thinking. Talva™ changes that by giving you
              a single platform where every agent reads from, writes to, and
              operates on the same source of truth.
            </p>
            <p>
              Talva™ is native-first: any app built on it runs as a first-class
              citizen with your data fully under your control — no third-party
              lock-in, no hidden egress fees. Under the hood you get graph
              queries, an object store, serverless WASM functions, and a secrets
              vault. Agents store data, run logic, and manage credentials
              through a unified API. Fine-grained permissions mean you decide
              exactly what each agent and each person can see and do.
            </p>
            <p>
              The result: your company ships agentic apps with the consistency
              and control enterprises actually need. One API. One CLI. No
              config ceremonies.
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
          We're opening Talva™ to a limited group of builders. Drop your
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
};

export default Index;
