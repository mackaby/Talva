import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/SiteLayout";
import { SeoHead } from "@/components/SeoHead";
import { posts } from "./posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Talva" },
    publisher: { "@type": "Organization", name: "Talva" },
    mainEntityOfPage: `https://talva.dev/blog/${post.slug}`,
  };

  return (
    <SiteLayout>
      <SeoHead
        title={`${post.title} — Talva`}
        description={post.description}
        path={`/blog/${post.slug}`}
        type="article"
        jsonLd={articleLd}
      />
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Link to="/blog" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> All posts
        </Link>
        <div className="mb-4 flex items-center gap-3 text-xs text-muted-foreground">
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          {post.title}
        </h1>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
          {post.body}
        </div>

        <div className="mt-16 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h3 className="mb-3 text-xl font-bold text-foreground">Building on Talva</h3>
          <p className="mb-6 text-muted-foreground">Join the private beta.</p>
          <Button asChild size="lg" className="gap-2">
            <Link to="/#beta">Request Beta Access <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </article>
    </SiteLayout>
  );
}
