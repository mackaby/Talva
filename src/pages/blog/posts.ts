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
    title: "AI-native software needs a backend built for it",
    description: "Every team stitching its own backend for AI-native software is how products end up inconsistent, hard to operate and impossible to evolve.",
    date: "2026-07-06",
    readingTime: "4 min read",
    body: `Most teams building AI-native software today are assembling a backend from scratch each time — a bit of storage here, a bit of auth there, a way to expose things to whichever agentic client is in fashion this quarter. It works long enough to demo, then starts to hurt.

It hurts because AI-native software has some traits normal software doesn't. The client changes more often. Non-human callers are part of the user base. Behaviour has to stay consistent even as the models and tools around it shift. A backend that wasn't designed for those traits has to be bent into shape every time one of them changes.

The way out isn't picking a model or a framework. It's treating the backend as the fixed point — the layer that stays coherent while everything above it moves. That's what Talva is: the platform for building, running, evolving and using AI-native software.`,
  },
  {
    slug: "agent-agnostic-vs-vendor-locked",
    title: "Any client, one backend: why the client is not the product",
    description: "The agentic client someone uses today isn't the one they'll use next year. If your product is tied to one, your product is on borrowed time.",
    date: "2026-07-03",
    readingTime: "4 min read",
    body: `A year ago, most teams didn't have a preferred agentic client. Now they do — and it's a different one for every team. Next year it will be different again. The client is not the product.

If your AI-native software is tied to a single client — one vendor's SDK, one framework's conventions — you are shipping something you'll have to rebuild the next time the landscape shifts. And it shifts often.

The alternative is to treat the backend as the product surface, and the client as swappable. Any client — human or AI — meets the product through the same backend, with the same behaviour and the same controls. That's the design Talva is built around: the platform for AI-native software, whatever's on the other end of it.`,
  },
];
