// Single source of truth for facts about Talva. Only add statements the team has confirmed.
export const SITE_URL = "https://talva.dev";
export const GITHUB_URL = "https://github.com/mackaby/Talva";

export const talva = {
  name: "Talva",
  definition:
    "Talva is the platform for building, running, evolving and using AI-native software.",
  shortDefinition: "The platform for AI-native software.",
  status: "Private beta",
  audience:
    "Engineering and platform teams at companies where many people and AI agents are building internal apps at the same time.",
  clients: ["Codex", "Claude Code", "OpenCode", "OpenClaw"],
  disambiguation:
    "Talva (talva.dev) is a software platform. It is not related to other organisations named Talva in recruiting, accounting or energy.",
} as const;

export interface FaqItem {
  q: string;
  a: string;
}

export interface Source {
  label: string;
  url: string;
}
