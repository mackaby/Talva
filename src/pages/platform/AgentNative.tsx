import { Bot } from "lucide-react";
import { PlatformPage } from "./PlatformPage";

export default function AgentNative() {
  return (
    <PlatformPage
      icon={Bot}
      path="/platform/agent-native"
      eyebrow="Platform"
      title="Client-agnostic platform for AI-native software — Talva"
      description="Talva is the platform for AI-native software. Any agentic client, any team, one platform — so the product stays consistent as the tools around it change."
      h1="Any client. One platform."
      intro="AI-native software isn't built by one client, or against one model. Teams pick the agentic client that suits them today and swap it tomorrow. Talva is the platform underneath — the fixed point that keeps the product coherent while everything above it changes."
      sections={[
        {
          heading: "The client is not the product",
          body: "The agentic client someone uses to build, drive or extend your software is a tool, not the product itself. Treating the platform as the product — and the client as swappable — is what makes AI-native software something you can actually maintain.",
        },
        {
          heading: "Consistent, whoever is on the other end",
          body: "A human in a UI, an AI agent driven from a coding assistant, or an automated workflow should meet the same platform behaviour and the same controls. Talva is designed so that's the default, not something you re-implement per client.",
        },

      ]}
    />
  );
}
