import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { SiteLayout } from "@/components/SiteLayout";
import { SeoHead } from "@/components/SeoHead";
import { posts } from "./posts";

export default function BlogIndex() {
  return (
    <SiteLayout>
      <SeoHead
        title="Talva™ Blog — Enterprise AI agent infrastructure"
        description="Perspectives on building consistent, controlled, enterprise-grade AI agent stacks. Written by the team behind Talva™."
        path="/blog"
      />
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Badge variant="outline" className="mb-6 border-primary/30 bg-primary/10 text-primary">
          Blog
        </Badge>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Notes on enterprise agent infrastructure
        </h1>
        <p className="mb-12 text-lg text-muted-foreground">
          The consistency, control and security challenges of shipping autonomous agents at scale — and how to solve them.
        </p>

        <div className="space-y-8">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="block rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.15)]"
            >
              <div className="mb-2 flex items-center gap-3 text-xs text-muted-foreground">
                <time dateTime={p.date}>{new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
                <span>·</span>
                <span>{p.readingTime}</span>
              </div>
              <h2 className="mb-2 text-xl font-bold text-foreground">{p.title}</h2>
              <p className="text-muted-foreground">{p.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
