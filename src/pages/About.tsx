import { Link } from "react-router-dom";
import { ArrowRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/SiteLayout";
import { SeoHead } from "@/components/SeoHead";

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Talva",
  alternateName: ["Talva Platform", "Talva.dev"],
  url: "https://talva.dev",
  description:
    "Talva is the platform for building, running, evolving and using AI-native software.",
  sameAs: ["https://github.com/mackaby/Talva"],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://talva.dev/" },
    { "@type": "ListItem", position: 2, name: "About Talva", item: "https://talva.dev/about" },
  ],
};

export default function About() {
  return (
    <SiteLayout>
      <SeoHead
        title="About Talva — the platform for AI-native software"
        description="Talva is the platform for building, running, evolving and using AI-native software. Learn what Talva is, who it's for, and how to join the beta."
        path="/about"
        jsonLd={[orgLd, breadcrumbLd]}
      />
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Badge variant="outline" className="mb-6 border-primary/30 bg-primary/10 text-primary">
          About
        </Badge>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          What is Talva?
        </h1>
        <p className="mb-12 text-lg leading-relaxed text-muted-foreground">
          Talva is the platform for building, running, evolving and using AI-native
          software. It gives teams one consistent foundation to build on, instead of
          reassembling a stack from scratch every time the models, clients and patterns
          around them change.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">
              Who Talva is for
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Talva is built for engineering and platform teams inside companies where
              AI-native software is being built in a lot of places at once — often by
              agents, often in different ways. Talva is the layer that keeps behaviour,
              control and security consistent across all of it.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">
              What Talva does
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Build on a platform designed for AI-native software from day one. Run it
              with predictable behaviour and boring operations. Evolve as the ecosystem
              moves, without a rewrite every quarter. And let any client — human or AI —
              use your product through the same platform, with the same controls.
              Read more on the{" "}
              <Link to="/platform" className="text-primary hover:underline">
                platform overview
              </Link>{" "}
              or on{" "}
              <Link to="/platform/agent-native" className="text-primary hover:underline">
                working with any agentic client
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">
              Where to find Talva
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Talva lives at{" "}
              <a href="https://talva.dev" className="text-primary hover:underline">
                talva.dev
              </a>
              . The public website source is on{" "}
              <a
                href="https://github.com/mackaby/Talva"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              . Talva is currently in private beta.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">
              Not to be confused with
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              "Talva" is also used by unrelated organisations in recruiting, accounting
              and energy. This site refers to Talva the software platform, at talva.dev.
            </p>
          </section>
        </div>

        <div className="mt-16 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h3 className="mb-3 text-xl font-bold text-foreground">Try Talva</h3>
          <p className="mb-6 text-muted-foreground">Join the private beta for early access.</p>
          <Button asChild size="lg" className="gap-2">
            <Link to="/#beta">
              Request Beta Access <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </article>
    </SiteLayout>
  );
}
