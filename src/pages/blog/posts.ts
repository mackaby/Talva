export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  body: string;
}

export const posts: BlogPost[] = [
  {
    slug: "enterprise-agent-consistency",
    title: "Why every enterprise agent stack is inconsistent — and what to do about it",
    description: "Ten teams shipping ten agents on ten stacks is how enterprises end up with ten different answers to the same question. Here’s the fix.",
    date: "2026-07-06",
    readingTime: "5 min read",
    body: `Every large company we talk to has the same pattern: a handful of teams shipping autonomous agents, each built on a different stack, each talking to a different backend, each producing slightly different answers to what should be the same question.

The root cause isn’t the models. It’s the backend. When every team wires their own datastore, their own tool layer, their own secrets and their own audit trail, drift is guaranteed. Compliance is impossible. And the moment two agents need to collaborate — say, a sales agent handing context to a support agent — the whole thing falls apart.

The fix is not "pick one model" or "standardize on one framework." Teams will always want the best model for their job, and frameworks evolve faster than any procurement cycle. The fix is to fix the backend: one datastore, one tool runtime, one permission model, one audit trail. Let the models and frameworks change; keep the ground underneath them still.

That is what Talva™ is: the agent-agnostic backend that lets every team ship on their preferred stack while your data, tools and controls stay consistent.`,
  },
  {
    slug: "agent-agnostic-vs-vendor-locked",
    title: "Agent-agnostic vs vendor-locked: choosing a backend for AI agents",
    description: "Model-specific SDKs feel productive at first and painful at scale. Here’s why agent-agnostic infrastructure wins for enterprise AI.",
    date: "2026-07-03",
    readingTime: "4 min read",
    body: `Every model vendor wants to be your backend too. OpenAI has Assistants, Anthropic has skills and MCP, Google has Vertex. Each ships a slightly different way to store context, register tools and manage identity — and each locks your agents to the vendor’s roadmap.

That is fine for a prototype. It is not fine when the CFO asks why the same customer question got three different answers from three different agents, and it turns out one was on GPT with Assistants storage, one on Claude with skills, and one on an in-house Llama tied to yet another backend.

Agent-agnostic infrastructure means the data, the tools, the secrets and the audit trail live in one place — outside any model vendor. Models are hot-swappable. Frameworks are hot-swappable. The backend is the fixed point.

Talva™ is built on that principle. If you’re at the "we should probably think about this before it hurts" stage, you’re at the right stage.`,
  },
];
