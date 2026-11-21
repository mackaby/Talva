export interface Term {
  id: string;
  term: string;
  definition: string;
  link?: { to: string; label: string };
}

export const glossary: Term[] = [
  {
    id: "ai-native-software",
    term: "AI-native software",
    definition:
      "Software designed from the start to be built with AI agents and used by both people and agents, rather than software where AI was added later.",
    link: { to: "/topics/ai-native-software", label: "Consistency in AI-built company software" },
  },
  {
    id: "agentic-client",
    term: "Agentic client",
    definition:
      "The tool a person uses to direct an AI agent, for example Codex, Claude Code, OpenCode or OpenClaw.",
    link: { to: "/topics/agentic-clients", label: "Agentic clients" },
  },
  {
    id: "client-agnostic",
    term: "Client-agnostic",
    definition:
      "Works the same no matter which agentic client is used. A client-agnostic platform does not tie your apps to one vendor's tool.",
    link: { to: "/platform/agent-native", label: "Any client, one platform" },
  },
  {
    id: "model-agnostic",
    term: "Model-agnostic",
    definition:
      "Works with more than one AI model. Model-agnostic is narrower than client-agnostic: an app can support many models and still depend on one client.",
  },
  {
    id: "agent-first-class-user",
    term: "Agents as first-class users",
    definition:
      "Treating AI agents as real users of an app, with their own permissions and their own record of actions, instead of as a side channel.",
  },
  {
    id: "vibe-coding",
    term: "Vibe coding",
    definition:
      "Building software by describing what you want to an AI and accepting what it produces, often without reading the code closely. The term was popularised by Andrej Karpathy in February 2025.",
  },
  {
    id: "vibe-engineering",
    term: "Vibe engineering",
    definition:
      "Using AI to build software quickly while still meeting the standards of software people depend on: clear ownership, access rules, review and a record of changes.",
  },
  {
    id: "shadow-it",
    term: "Shadow IT",
    definition:
      "Apps and systems that employees build or adopt without central oversight. AI makes this far easier, which raises the number of unmanaged internal apps.",
    link: { to: "/apps/internal-tools", label: "Internal tools on Talva" },
  },
  {
    id: "system-of-record",
    term: "System of record",
    definition:
      "The authoritative source for a type of data, such as customers in a CRM. Other apps should read from it rather than keep their own copy.",
    link: { to: "/apps/crm", label: "CRM on Talva" },
  },
  {
    id: "knowledge-graph",
    term: "Knowledge graph",
    definition:
      "A connected model of things and how they relate, such as people, projects and customers. A company knowledge graph is something you build on a platform, not a platform itself.",
    link: { to: "/apps/knowledge-graph", label: "Knowledge graph on Talva" },
  },
];
