// Topic clusters that are not tied to a single app type.
export interface Topic {
  slug: string;
  name: string;
  definition: string;
  intro: string;
  questions: string[];
}

export const topics: Topic[] = [
  {
    slug: "ai-native-software",
    name: "Consistency in AI-built company software",
    definition:
      "AI-native software is software built with AI agents and used by both people and agents. The main challenge for companies is keeping it consistent as more of it gets built.",
    intro:
      "When many teams and agents build internal apps in different ways, companies end up with duplicated data, different access rules and no shared history. These guides cover what should stay the same across every app, and how to get there.",
    questions: [
      "What should stay consistent across apps built by AI?",
      "Why does a shared platform matter more than the choice of model?",
      "How do people and agents work in the same app safely?",
    ],
  },
  {
    slug: "agentic-clients",
    name: "Agentic clients and client independence",
    definition:
      "An agentic client is the tool someone uses to direct an AI agent, such as Codex, Claude Code, OpenCode or OpenClaw.",
    intro:
      "Teams pick different agentic clients and change them often. These guides explain why the client should be swappable, and why the platform underneath should not depend on any one of them.",
    questions: [
      "What is the difference between being client-agnostic and model-agnostic?",
      "What happens to your apps when your team changes agentic client?",
    ],
  },
  {"slug": "vibe-engineering", "name": "Vibe engineering: when everyone in the company builds apps", "definition": "Vibe engineering is building software with AI tools at vibe-coding speed while keeping review, ownership and shared rules for data and access.", "intro": "AI tools now let employees across a company build working internal apps in an afternoon. That solves real problems and creates new ones: unowned apps, inconsistent data handling and a new kind of shadow IT. These guides cover what changes, the risks security agencies and practitioners point to, and how companies can govern it without banning it.", "questions": ["What is the difference between vibe coding and vibe engineering?", "How should a company govern apps its employees build with AI?", "How does vibe coding change shadow IT?"]},
];

export const getTopic = (slug: string) => topics.find((t) => t.slug === slug);
