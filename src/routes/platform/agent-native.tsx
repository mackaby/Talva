import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { AnswerBox, BetaCta, Breadcrumbs, Eyebrow, FaqList } from "@/components/content";
import { talva } from "@/content/site";
import { breadcrumbLd, faqLd, pageHead } from "@/lib/seo";

const faq = [
  { q: "Which agentic clients can I use with Talva?", a: `Talva is client-agnostic. Teams can use ${talva.clients.join(", ")} or another client.` },
  { q: "What does client-agnostic mean?", a: "It means the platform works the same whichever tool directs the agent, so your apps do not depend on one vendor's client." },
  { q: "Are agents users or builders on Talva?", a: "Both. Agents can build apps, and they are also first-class users of those apps, alongside people." },
];

export const Route = createFileRoute("/platform/agent-native")({
  head: () =>
    pageHead({
      title: "Any agentic client, one platform — Talva",
      description: "Talva is client-agnostic: use Codex, Claude Code, OpenCode, OpenClaw or another agentic client, while your apps stay consistent on one platform.",
      path: "/platform/agent-native",
      jsonLd: [
        breadcrumbLd([{ name: "Home", path: "/" }, { name: "Platform", path: "/platform" }, { name: "Any client", path: "/platform/agent-native" }]),
        faqLd(faq),
      ],
    }),
  component: AgentNative,
});

function AgentNative() {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Breadcrumbs items={[{ name: "Home", to: "/" }, { name: "Platform", to: "/platform" }, { name: "Any client" }]} />
        <Eyebrow>Client-agnostic</Eyebrow>
        <h1 className="mb-8 text-4xl font-bold text-foreground sm:text-5xl">Any client. One platform.</h1>
        <AnswerBox>
          Talva works with whichever agentic client your teams prefer, such as {talva.clients.join(", ")}. The client can change;
          the platform and your apps stay the same.
        </AnswerBox>
        <div className="prose-talva mt-10">
          <h2>The client is not the product</h2>
          <p>
            The agentic client someone uses to build, run or extend your software is a tool, not the product. Treating the platform
            as the fixed point, and the client as swappable, is what makes AI-native software maintainable.
          </p>
          <h2>The same behaviour, whoever is on the other end</h2>
          <p>
            A person in a browser, an agent driven from a coding assistant, or an automated workflow should meet the same platform
            behaviour and the same controls. On Talva that is the default, not something you rebuild for each client.
          </p>
          <h2>Agents are first-class users</h2>
          <p>
            Agents do not only build apps on Talva. They use them too, with their own permissions and their own record of what
            they did, next to the people they work with.
          </p>
          <p>
            Related guide: <Link to="/blog/$slug" params={{ slug: "agent-agnostic-vs-vendor-locked" }}>Any client, one platform: why the client is not the product</Link>.
          </p>
        </div>
        <FaqList faq={faq} />
        <BetaCta />
      </article>
    </SiteLayout>
  );
}
