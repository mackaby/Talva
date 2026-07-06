import { ComparePage } from "./ComparePage";

export default function TalvaVsLangchain() {
  return (
    <ComparePage
      title="Talva™ vs LangChain — Which fits your agent stack?"
      description="Compare Talva™ and LangChain for building AI agents. Talva™ is an agent-agnostic backend platform; LangChain is an orchestration framework. Here’s when to pick which."
      path="/compare/talva-vs-langchain"
      h1="Talva™ vs LangChain"
      intro="LangChain and Talva™ solve different halves of the same problem. LangChain orchestrates what an agent does step-by-step; Talva™ is the backend that agent talks to. Most serious deployments end up needing both — this page explains why."
      otherName="LangChain"
      rows={[
        { feature: "Category", talva: "Agent backend / datastore", other: "Agent orchestration framework" },
        { feature: "Graph queries", talva: true, other: false },
        { feature: "WASM function runtime", talva: true, other: false },
        { feature: "Built-in secrets vault", talva: true, other: false },
        { feature: "Object storage", talva: true, other: false },
        { feature: "Model-agnostic", talva: true, other: true },
        { feature: "Runs your prompt chain", talva: false, other: true },
        { feature: "Fine-grained agent permissions", talva: true, other: false },
        { feature: "Enterprise audit trail", talva: true, other: "Via callbacks" },
      ]}
      sections={[
        {
          heading: "When LangChain is the right pick",
          body: "You need a prompt chain, retrieval pipeline or ReAct loop and want a well-worn framework to structure it. LangChain gives you components for that. It does not, on its own, give you a shared datastore, permissioned tools or enterprise-grade audit — those are still on you.",
        },
        {
          heading: "When Talva™ is the right pick",
          body: "You have multiple teams shipping multiple agents and you need them to reach the same data, call the same tools, respect the same permissions and produce one audit trail. Talva™ is the backend under those agents — whether they’re built on LangChain, LlamaIndex, MCP or a custom loop.",
        },
        {
          heading: "Using them together",
          body: "Point LangChain’s tools and memory at Talva™. Your orchestration stays where your team already writes it; your data plane and permissions get consolidated in Talva™. That is how most Talva™ pilots start.",
        },
      ]}
    />
  );
}
