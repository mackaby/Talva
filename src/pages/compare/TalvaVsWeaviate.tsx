import { ComparePage } from "./ComparePage";

export default function TalvaVsWeaviate() {
  return (
    <ComparePage
      title="Talva™ vs Weaviate — Enterprise AI Agent Platform vs Vector Database"
      description="Compare Talva™ and Weaviate as AI agent backends. Weaviate is a vector database; Talva™ is the enterprise AI agent platform and AI agent backend. Here’s how to pick."
      path="/compare/talva-vs-weaviate"
      h1="Talva™ vs Weaviate — enterprise AI agent platform vs vector DB"
      intro="Weaviate is a strong vector database, and vector search is one piece of what AI agents need. Talva™ is the broader enterprise AI agent platform — the AI agent backend with graph queries, functions, secrets and storage — for agents that need to reason over relationships, not just find similar chunks."
      otherName="Weaviate"
      rows={[
        { feature: "Primary access pattern", talva: "Graph traversal", other: "Vector similarity" },
        { feature: "Vector search", talva: "Attached to graph nodes", other: true },
        { feature: "Graph queries", talva: true, other: "Limited" },
        { feature: "WASM function runtime", talva: true, other: false },
        { feature: "Built-in secrets vault", talva: true, other: false },
        { feature: "Object storage", talva: true, other: false },
        { feature: "Agent identity & permissions", talva: true, other: "Via app layer" },
        { feature: "One API for the full agent backend", talva: true, other: false },
      ]}
      sections={[
        {
          heading: "When Weaviate is the right pick",
          body: "Your workload is semantic search over documents — retrieval-augmented generation, similarity ranking, embedding-first lookups. Weaviate is purpose-built for that and does it well.",
        },
        {
          heading: "When Talva™ is the right pick",
          body: "Your agents need to answer questions vectors can’t: who owns what, which contract references which incident, what happened in what order. Those are graph problems. Talva™ gives you graph traversals as the default, with vectors attached where they help.",
        },
        {
          heading: "Using them together",
          body: "Keep Weaviate for pure semantic search; point Talva™ at it as an external retrieval source. Your agents call one Talva™ API; behind the scenes graph queries hit Talva™ and vector queries fan out to Weaviate.",
        },
      ]}
    />
  );
}
