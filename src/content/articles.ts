import type { FaqItem, Source } from "./site";

// Every article belongs to exactly one cluster: an app slug (apps.ts) or a topic slug (topics.ts).
export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  /** ISO date first published. */
  date: string;
  /** ISO date of the last meaningful content update. */
  updated: string;
  readingTime: string;
  cluster: string;
  /** Two or three sentences that answer the title question on their own. */
  answer: string;
  keyTakeaways: string[];
  sections: ArticleSection[];
  faq: FaqItem[];
  sources: Source[];
}

export const articles: Article[] = [
  {
    slug: "enterprise-agent-consistency",
    title: "AI-native software needs a platform built for it",
    description:
      "Why teams that assemble a new stack for every AI-native app end up with inconsistent, hard-to-run products, and what a shared platform changes.",
    date: "2026-07-06",
    updated: "2026-11-21",
    readingTime: "5 min read",
    cluster: "ai-native-software",
    answer:
      "AI-native software is used by people and agents, changes clients often, and has to behave the same while the tools around it shift. Assembling a fresh stack for each app makes that consistency very hard. A shared platform gives every app the same foundation, so data, access rules and history stay the same across the company.",
    keyTakeaways: [
      "AI-native apps have traits ordinary apps do not: non-human users and fast-changing clients.",
      "A new stack per app leads to duplicated data, different access rules and missing history.",
      "The fix is a shared platform as the fixed point, not a particular model or framework.",
    ],
    sections: [
      {
        heading: "What makes AI-native software different",
        paragraphs: [
          "Most teams building AI-native software today assemble a stack from scratch each time: some storage, some access control, and a way to connect whichever agentic client is popular that quarter. It works long enough for a demo.",
          "The trouble starts because AI-native software has traits ordinary software does not:",
        ],
        bullets: [
          "Agents are users, not just builders. They read and change data like people do.",
          "The client changes often. Teams switch agentic clients far more often than they switch databases.",
          "Behaviour has to stay the same while the models and tools around it keep shifting.",
        ],
      },
      {
        heading: "What goes wrong without a shared platform",
        paragraphs: [
          "When every app is built on its own stack, each one ends up with its own copy of company data, its own idea of who can do what, and its own way of recording changes, if it records them at all.",
          "Multiply that by every team and every agent building apps, and the company loses the ability to answer simple questions: which customer record is correct, who changed it, and was that allowed?",
        ],
      },
      {
        heading: "What a shared platform changes",
        paragraphs: [
          "The way out is not choosing the right model or framework. It is having one platform as the fixed point: the layer that stays the same while everything above it moves.",
          "That is what Talva is: the platform for building, running, evolving and using AI-native software. Apps built on it share the same data, the same controls and the same history, whichever person or agent built them.",
        ],
      },
    ],
    faq: [
      {
        q: "What is AI-native software?",
        a: "Software designed to be built with AI agents and used by both people and agents, rather than software where AI was added later.",
      },
      {
        q: "Why not just standardise on one AI model?",
        a: "Models and clients change too often to be the foundation. Consistency has to come from the platform the apps share.",
      },
    ],
    sources: [],
  },
  {
    slug: "agent-agnostic-vs-vendor-locked",
    title: "Any client, one platform: why the client is not the product",
    description:
      "The agentic client your team uses today is unlikely to be the one it uses next year. Here is why your apps should not depend on it.",
    date: "2026-07-03",
    updated: "2026-11-21",
    readingTime: "4 min read",
    cluster: "agentic-clients",
    answer:
      "An agentic client is the tool someone uses to direct an AI agent, such as Codex, Claude Code, OpenCode or OpenClaw. Teams change clients often, so apps tied to one client have to be rebuilt when the team moves on. Treating the platform as the fixed point, and the client as swappable, keeps apps working whichever client is used.",
    keyTakeaways: [
      "Different teams prefer different agentic clients, and those preferences change.",
      "Being client-agnostic is broader than being model-agnostic.",
      "Apps should meet every client, human or AI, through the same platform and the same controls.",
    ],
    sections: [
      {
        heading: "The client keeps changing",
        paragraphs: [
          "A year ago, most teams did not have a preferred agentic client. Now most do, and it is often a different one per team. Next year it will likely be different again.",
          "If your AI-native software is tied to one client, through one vendor's SDK or one framework's conventions, you are shipping something you will have to rebuild the next time your team switches.",
        ],
      },
      {
        heading: "Client-agnostic versus model-agnostic",
        paragraphs: [
          "Model-agnostic means an app can work with more than one AI model. Client-agnostic goes further: the app works the same no matter which tool is directing the agent.",
          "An app can support many models and still be locked to a single client. For companies with many teams, client independence is the one that matters day to day.",
        ],
      },
      {
        heading: "The platform is the fixed point",
        paragraphs: [
          "The alternative is to treat the platform as the product surface and the client as swappable. Any client, human or AI, meets the app through the same platform, with the same behaviour and the same controls.",
          "That is the design Talva is built around: the platform for AI-native software, whatever is on the other end of it.",
        ],
      },
    ],
    faq: [
      {
        q: "Which agentic clients work with Talva?",
        a: "Talva is client-agnostic. Teams can work through the client they prefer, such as Codex, Claude Code, OpenCode or OpenClaw.",
      },
      {
        q: "What is the difference between client-agnostic and model-agnostic?",
        a: "Model-agnostic means supporting several AI models. Client-agnostic means working the same whichever tool directs the agent, which is a broader kind of independence.",
      },
    ],
    sources: [],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const articlesInCluster = (cluster: string) =>
  articles.filter((a) => a.cluster === cluster);
