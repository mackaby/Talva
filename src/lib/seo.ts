import { SITE_URL } from "@/content/site";

type JsonLd = Record<string, unknown>;

interface PageHeadInput {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  jsonLd?: JsonLd[];
}

/** Builds the per-route head (title, description, canonical, social tags, JSON-LD). */
export function pageHead({ title, description, path, type = "website", jsonLd = [] }: PageHeadInput) {
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: jsonLd.map((ld) => ({
      type: "application/ld+json",
      children: JSON.stringify(ld),
    })),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqLd(faq: { q: string; a: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
