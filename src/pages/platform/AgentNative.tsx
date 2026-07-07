import { Bot } from "lucide-react";
import { PlatformPage } from "./PlatformPage";

export default function AgentNative() {
  return (
    <PlatformPage
      icon={Bot}
      path="/platform/agent-native"
      eyebrow="Platform"
      title="Agent-Agnostic AI Agent Backend — Talva™ Enterprise AI Agent Platform"
      description="Talva™ is the enterprise AI agent platform and AI agent backend. Bring Claude, OpenAI or any model — one consistent backend for every AI agent your company ships."
      h1="The enterprise AI agent platform. Any model. One backend."
      intro="Your teams are shipping AI agents on Claude, OpenAI, Gemini and open-source models — each one talking to a different backend. Talva™ is the enterprise AI agent platform underneath: one AI agent backend with the same data, tools, permissions and audit trail, no matter which model is driving."
      sections={[
        {
          heading: "The consistency problem",
          body: "Ten teams building ten agents on ten stacks means ten different answers to the same question. Data lives in ten places, permission models drift, and audit trails are impossible to assemble. Talva™ makes the backend a fixed point — the model can change, the platform doesn’t.",
        },
        {
          heading: "Model-agnostic by design",
          body: "Talva™ exposes graph queries, functions, secrets and storage through one API. Any agent that can call a tool can use it — Claude, GPT, Llama, in-house models. Swap the model without rebuilding the backend.",
        },
        {
          heading: "First-class agent identities",
          body: "Every agent is a principal with its own identity, permissions and audit log. When compliance asks 'what did the deals-desk agent do last quarter?' you have an answer, not a shrug.",
        },
      ]}
      faq={[
        {
          q: "Do I have to give up my existing agent framework?",
          a: "No. Talva™ plugs in as the backend — LangChain, LlamaIndex, AutoGen, custom stacks all keep working. You just point their tools and memory at Talva™.",
        },
        {
          q: "What about MCP?",
          a: "Talva™ works with the Model Context Protocol — functions can be exposed as MCP tools so any MCP-compatible agent can use them without extra wiring.",
        },
      ]}
    />
  );
}
