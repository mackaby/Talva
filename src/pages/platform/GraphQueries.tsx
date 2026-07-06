import { GitBranch } from "lucide-react";
import { PlatformPage } from "./PlatformPage";

export default function GraphQueries() {
  return (
    <PlatformPage
      icon={GitBranch}
      path="/platform/graph-queries"
      eyebrow="Platform"
      title="Knowledge Graph for AI Agents — Talva™"
      description="Native graph queries for AI agents. Model relationships, traverse entities and build enterprise knowledge graphs your autonomous agents can reason over."
      h1="A knowledge graph built for autonomous agents"
      intro="AI agents make better decisions when they can see how things connect. Talva™ ships with first-class graph primitives so your agents can traverse relationships, follow chains of reasoning and answer questions that flat tables can’t."
      sections={[
        {
          heading: "Why graphs matter for agents",
          body: "Most agent stacks store context in a vector database and hope similarity search finds the right chunk. That works until an agent needs to answer 'who owns this account, what contracts are tied to it, and which internal team responded to their last ticket?' Those questions are graph traversals — and Talva™ treats them as first-class.",
        },
        {
          heading: "Model your enterprise as a graph",
          body: "Nodes for people, accounts, documents, tools and events. Edges for ownership, mentions, dependencies and history. Agents query the same graph your dashboards and internal apps read from, so there is one source of truth — not one for humans and one for AI.",
        },
        {
          heading: "Query patterns Talva™ makes easy",
          body: "Multi-hop traversals ('all documents linked to this customer’s open incidents'), constrained expansion ('nearest 20 nodes reachable via approved edges'), and permission-aware queries ('only return nodes this agent is allowed to see'). Every result respects the same access control the rest of the platform enforces.",
        },
      ]}
      faq={[
        {
          q: "Is this a vector database?",
          a: "Talva™ is a graph-native datastore. It complements vector search — you can attach embeddings to nodes — but the primary access pattern is graph traversal, not similarity.",
        },
        {
          q: "How is this different from Neo4j?",
          a: "Talva™ isn’t just a graph database — it bundles graph queries with WASM functions, secrets management, object storage and agent-aware permissions, all through one API designed for autonomous agents.",
        },
      ]}
    />
  );
}
