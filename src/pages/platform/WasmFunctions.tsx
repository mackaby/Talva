import { Box } from "lucide-react";
import { PlatformPage } from "./PlatformPage";

export default function WasmFunctions() {
  return (
    <PlatformPage
      icon={Box}
      path="/platform/wasm-functions"
      eyebrow="Platform"
      title="WASM Functions for AI Agents — Talva™ Enterprise AI Agent Platform"
      description="Deploy WebAssembly functions your AI agents call as tools. Part of the Talva™ enterprise AI agent platform and AI agent backend — sandboxed, polyglot, permission-aware."
      h1="WASM functions for the enterprise AI agent platform"
      intro="AI agents need to do more than answer questions — they need to run code. Talva™, the enterprise AI agent platform, lets you deploy sandboxed WebAssembly functions that any AI agent on your backend can invoke as a tool, with the same auth and permission checks as the rest of your data."
      sections={[
        {
          heading: "Why WASM instead of containers",
          body: "WebAssembly starts in milliseconds, runs in a hard sandbox, and works in any language that compiles to it — Rust, Go, TypeScript, Python via Pyodide. That combination is exactly what agent tool-calling needs: fast, safe, and language-agnostic.",
        },
        {
          heading: "Every function is a tool",
          body: "Deploy a function once and it becomes available as a tool that any agent connected to Talva™ can discover and call. The function description is the tool spec — no separate MCP config, no per-agent wiring.",
        },
        {
          heading: "Enterprise controls, without the ceremony",
          body: "Functions run inside the same permission model as the rest of Talva™. You decide which agents can call which functions, log every invocation, and revoke access without redeploying.",
        },
      ]}
      faq={[
        {
          q: "Which languages can I use?",
          a: "Anything that compiles to WASM: Rust, Go, TypeScript/AssemblyScript, C/C++, Python (via Pyodide), and more. Bring the language your team already writes.",
        },
        {
          q: "How does this compare to AWS Lambda?",
          a: "Lambda is generic serverless — you still wire auth, storage, and agent tool-calling yourself. Talva™ functions are agent-native: they inherit permissions, are discoverable as tools, and share the platform’s data plane.",
        },
      ]}
    />
  );
}
