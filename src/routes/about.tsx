import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { AnswerBox, BetaCta, Breadcrumbs, Eyebrow, FaqList } from "@/components/content";
import { GITHUB_URL, SITE_URL, talva } from "@/content/site";
import { breadcrumbLd, faqLd, pageHead } from "@/lib/seo";

const faq = [
  { q: "What is Talva?", a: talva.definition },
  { q: "Is Talva related to other companies called Talva?", a: talva.disambiguation },
  { q: "Where can I find Talva?", a: "Talva's website is talva.dev. The website's source code is public on GitHub." },
];

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About Talva — what it is and who it's for",
      description: "Talva is the platform for building, running, evolving and using AI-native software. What Talva is, who it is for, and how to reach it.",
      path: "/about",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: `${SITE_URL}/about`,
          about: { "@id": `${SITE_URL}/#organization` },
        },
        breadcrumbLd([{ name: "Home", path: "/" }, { name: "About Talva", path: "/about" }]),
        faqLd(faq),
      ],
    }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Breadcrumbs items={[{ name: "Home", to: "/" }, { name: "About" }]} />
        <Eyebrow>About</Eyebrow>
        <h1 className="mb-8 text-4xl font-bold text-foreground sm:text-5xl">What is Talva?</h1>
        <AnswerBox label="Definition">{talva.definition}</AnswerBox>
        <div className="prose-talva mt-10">
          <h2>Who Talva is for</h2>
          <p>{talva.audience} Talva is the shared platform that keeps behaviour, control and security consistent across all of it.</p>
          <h2>What Talva does</h2>
          <p>
            Teams build on a platform designed for AI-native software, run it with predictable behaviour, evolve as models and clients
            change, and let any client, human or AI, use their apps with the same controls. See the{" "}
            <Link to="/platform">platform overview</Link> and <Link to="/apps">what teams build on Talva</Link>.
          </p>
          <h2>Where to find Talva</h2>
          <p>
            Talva lives at <a href={SITE_URL}>talva.dev</a>. The website source is on{" "}
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>. Talva is currently in private beta.
          </p>
          <h2>Not to be confused with</h2>
          <p>{talva.disambiguation}</p>
        </div>
        <FaqList faq={faq} />
        <BetaCta />
      </article>
    </SiteLayout>
  );
}
