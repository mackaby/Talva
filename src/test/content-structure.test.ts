import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { apps } from "@/content/apps";
import { articles } from "@/content/articles";
import { topics } from "@/content/topics";

const sitemap = readFileSync(resolve(__dirname, "../../public/sitemap.xml"), "utf8");
const llms = readFileSync(resolve(__dirname, "../../public/llms.txt"), "utf8");

describe("content structure", () => {
  it("assigns every article to an existing app or topic cluster", () => {
    const clusters = new Set([...apps.map((a) => a.slug), ...topics.map((t) => t.slug)]);
    for (const a of articles) expect(clusters.has(a.cluster), a.slug).toBe(true);
  });

  it("lists every app, topic and article page in the sitemap", () => {
    const paths = [
      ...apps.map((a) => `/apps/${a.slug}`),
      ...topics.map((t) => `/topics/${t.slug}`),
      ...articles.map((a) => `/blog/${a.slug}`),
    ];
    for (const p of paths) expect(sitemap).toContain(`<loc>https://talva.dev${p}</loc>`);
  });

  it("lists every app and article page in llms.txt", () => {
    for (const a of apps) expect(llms).toContain(`https://talva.dev/apps/${a.slug}`);
    for (const a of articles) expect(llms).toContain(`https://talva.dev/blog/${a.slug}`);
  });

  it("never renders the old misindexed TM brand spelling in page copy", () => {
    const copy = JSON.stringify({ apps, articles, topics });
    expect(copy).not.toMatch(/Talva™|TalvaTM/);
  });
});
