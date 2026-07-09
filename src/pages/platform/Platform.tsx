import { Layers } from "lucide-react";
import { PlatformPage } from "./PlatformPage";

export default function DataLayer() {
  return (
    <PlatformPage
      icon={Layers}
      path="/platform/data-layer"
      eyebrow="Platform"
      title="Unified Data Layer for AI Agents — Talva Enterprise AI Agent Platform"
      description="Talva is the enterprise AI agent platform: a unified data layer you connect your existing data sources to, so every AI agent your company ships reads from one API."
      h1="A unified data layer for every AI agent your company ships"
      intro="Your data already lives somewhere — databases, warehouses, SaaS apps, internal APIs. Talva is the enterprise AI agent platform that sits in front of it: connect your sources once, and every AI agent in your company gets one consistent, permissioned API to work against."
      sections={[
        {
          heading: "Connect your sources, don't move your data",
          body: "Talva isn't a database — it's the layer above them. Point it at what you already run and it becomes the single API surface your agents talk to. Nothing to migrate, nothing to re-model.",
        },
        {
          heading: "One API for every agent",
          body: "Whichever framework or model a team ships on, they hit the same Talva endpoint with the same auth. That's how you get consistency across agents without dictating which stack teams use.",
        },
        {
          heading: "Permissions and audit in the layer, not the app",
          body: "Access rules and audit trails live in Talva, so every agent inherits them automatically. You don't reimplement authz in each agent, and compliance gets one place to look.",
        },
      ]}
      faq={[
        {
          q: "Is Talva a database?",
          a: "No. Talva is a data and API layer that connects to your existing data sources — it doesn't try to replace your databases or warehouses.",
        },
        {
          q: "What kinds of sources can I connect?",
          a: "Relational databases, warehouses, internal REST/GraphQL APIs and SaaS systems. If your team can reach it today, an agent on Talva can too — through one governed API.",
        },
      ]}
    />
  );
}
