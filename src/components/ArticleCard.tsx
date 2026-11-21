import { Link } from "@tanstack/react-router";
import type { Article } from "@/content/articles";
import { formatDate } from "@/components/content";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: article.slug }}
      className="block rounded-xl border border-border/60 bg-card/50 p-6 transition-colors hover:border-primary/40"
    >
      <p className="mb-2 font-mono text-xs text-muted-foreground">
        Updated {formatDate(article.updated)} · {article.readingTime}
      </p>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{article.title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{article.description}</p>
    </Link>
  );
}
