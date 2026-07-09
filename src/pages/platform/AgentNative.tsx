import { Bot } from "lucide-react";
import { PlatformPage } from "./PlatformPage";

export default function AgentNative() {
  return (
    <PlatformPage
      icon={Bot}
      path="/platform/agent-native"
      eyebrow="Platform"
      title="Client-Agnostic AI Agent Backend — Talva™ Enterprise AI Agent Platform"
      description="Talva™ is the client-agnostic enterprise AI agent platform. Bring any agentic client — Codex, Claude Code, OpenCode, Cursor — one backend for every AI agent your company ships."
      h1="Client-agnostic. Bring any agentic client."
      intro="Your teams already use different agentic clients — Codex, Claude Code, OpenCode, Cursor, in-house loops. Talva™ is the enterprise AI agent platform underneath: one backend they all connect to, with the same data, tools, permissions and audit trail no matter which client is driving."
      sections={[
        {
          heading: "The consistency problem",
          body: "Ten teams on ten different agentic clients means ten different answers to the same question. Data lives in ten places, permission models drift, and audit trails are impossible to assemble. Talva™ makes the backend a fixed point — the client can change, the platform doesn't.",
        },
        {
          heading: "Client-agnostic by design",
          body: "Talva™ exposes your connected data sources, functions and secrets through one API — reachable over standard protocols like MCP. Codex, Claude Code, OpenCode, Cursor, LangChain, LlamaIndex, custom stacks: whatever your team already ships in, it plugs in.",
        },
        {
          heading: "First-class agent identities",
          body: "Every agent is a principal with its own identity, permissions and audit log — regardless of which client it runs inside. When compliance asks 'what did the deals-desk agent do last quarter?' you have an answer, not a shrug.",
        },
      ]}
      faq={[
        {
          q: "Which agentic clients does Talva™ work with?",
          a: "Any client that can call a tool over standard protocols — Codex, Claude Code, OpenCode, Cursor, LangChain, LlamaIndex, AutoGen, and custom stacks. If it speaks MCP or HTTP, it works.",
        },
        {
          q: "What about MCP?",
          a: "Talva™ speaks the Model Context Protocol natively — your connected data and functions are exposed as MCP tools, so any MCP-compatible client picks them up without extra wiring.",
        },
      ]}
    />
  );
}
