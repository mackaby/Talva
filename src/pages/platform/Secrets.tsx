import { KeyRound } from "lucide-react";
import { PlatformPage } from "./PlatformPage";

export default function Secrets() {
  return (
    <PlatformPage
      icon={KeyRound}
      path="/platform/secrets"
      eyebrow="Platform"
      title="Secrets Management for AI Agents — Talva™"
      description="Give AI agents API keys and credentials without leaking them. Talva™ injects secrets into WASM functions at call time, scoped per-agent and fully audited."
      h1="Secrets management built for autonomous agents"
      intro="Every agent you ship needs API keys — for the LLM, for internal services, for third-party tools. Passing those keys through prompts or environment variables is how enterprises get breached. Talva™ keeps secrets in a vault and injects them at execution time, scoped to the calling agent."
      sections={[
        {
          heading: "The problem with agent credentials today",
          body: "Most teams stash API keys in .env files, hardcode them in tool definitions, or pipe them through prompts. Any of those means a jailbroken agent, a leaky log, or a curious employee can walk off with your production credentials.",
        },
        {
          heading: "How Talva™ handles it",
          body: "Store secrets once in the platform vault. When an agent calls a WASM function that needs them, Talva™ injects them at runtime inside the sandbox — the agent never sees the raw value, and the key never appears in prompts, logs or LLM context.",
        },
        {
          heading: "Per-agent scoping and full audit",
          body: "Every secret has an access policy: which agents can use it, in which functions, under what conditions. Every use is logged. Rotating a key means updating it once in Talva™, not chasing it through a dozen agent configs.",
        },
      ]}
      faq={[
        {
          q: "Is this the same as HashiCorp Vault?",
          a: "Similar idea, agent-native execution. Vault is a general secrets manager you wire yourself; Talva™ integrates the vault directly into function execution and agent permissions so there is no glue code to write.",
        },
        {
          q: "Can an agent leak a secret through its output?",
          a: "Secrets live inside the WASM sandbox — the calling agent gets the function’s return value, not the raw secret. As long as your function doesn’t echo the key back, the agent has nothing to leak.",
        },
      ]}
    />
  );
}
